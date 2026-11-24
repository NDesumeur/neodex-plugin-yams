// lancé par le test « local » de NeoDex : la vérification interne (l'ordinateur garde et marque bien), une partie entière à deux sur le même PC
// jouée à la souris (chacun sa colonne, la main passe, le gagnant annoncé), puis un tour contre l'ordinateur qui joue tout seul (avec NEO_SHOTS : des images)
module.exports = async ({ pj, js, sleep }) => {
  const C = code => pj(`(() => { const c = document.getElementById('gc'), T = c.__ya, ya = T.st(); ${code} })()`);
  const shot = async n => { if (!process.env.NEO_SHOTS) return; const d = await pj(`document.getElementById('gc').toDataURL()`); require('fs').writeFileSync(require('path').join(process.env.NEO_SHOTS, 'yams-' + n + '.png'), Buffer.from(d.split(',')[1], 'base64')); };
  const tap = (x, y) => pj(`(() => { const c = document.getElementById('gc'), r = c.getBoundingClientRect(); c.dispatchEvent(new PointerEvent('pointerdown', {bubbles: true, clientX: r.left + ${x} / 288 * r.width, clientY: r.top + ${y} / 216 * r.height})); return 0; })()`);
  const pick = v => pj(`(() => { const s = document.getElementById('yaMode'); s.value = '${v}'; s.dispatchEvent(new Event('change')); return 0; })()`);
  await pj(`window.__e = []; addEventListener('error', e => __e.push(e.message)); 0`);
  const chk = await pj(`document.getElementById('gc').dataset.selfcheck`); if (chk !== 'ok') throw new Error('vérification : ' + chk);
  const keep = await C('return T.yas().mode;'), multi0 = await C('return T.yas().multi;');
  await pick('2'); await sleep(200);
  if (await C('return ya.players.length + "|" + ya.cur;') !== '2|0') throw new Error('deux joueurs');
  // 26 tours : on lance, puis on marque la première case libre du joueur en cours
  for (let turn = 0; turn < 26; turn++) {
    const who = await C('return ya.cur;'); if (who !== turn % 2) throw new Error('la main ne passe pas : tour ' + turn);
    await tap(70, 150); await sleep(320);
    const cat = await C('return ya.sheet.indexOf(null);'), row = cat < 6 ? cat : cat + 2;
    await tap(170, 6 + row * 12 + 6); await sleep(60);
    if (turn === 3) await shot('1-deux-joueurs');
  }
  if (await C('return ya.mode + "|" + ya.players.every(p => p.sheet.every(v => v !== null));') !== 'over|true') throw new Error('partie à deux pas finie : ' + await C('return ya.mode;'));
  if (await C('return T.yas().multi;') !== multi0 + 1) throw new Error('partie à plusieurs pas comptée');
  await sleep(700); await shot('2-fin-a-deux');
  // contre l'ordinateur : mon tour, puis il lance, garde et marque tout seul
  await pick('ia'); await sleep(200);
  await tap(70, 150); await sleep(320); await tap(170, 12);
  if (await C('return ya.cur;') !== 1) throw new Error("la main ne passe pas à l'ordinateur");
  await tap(70, 150); await sleep(100); if (await C('return ya.rolls;') !== 0) throw new Error("on joue à la place de l'ordinateur");
  for (let i = 0; i < 50 && await C('return ya.cur;') === 1; i++) await sleep(150);
  if (await C('return ya.cur + "|" + ya.players[1].sheet.filter(v => v !== null).length;') !== '0|1') throw new Error("l'ordinateur n'a pas joué");
  await shot('3-contre-ordi');
  // à distance : un faux serveur de parties dans la page de NeoDex (WebSocket remplacé) ; l'hôte, le plugin et ctx.room sont les vrais
  await js(`(() => { window.__RealWS ??= WebSocket; window.WebSocket = class { constructor(u) { this.url = u; this.sent = []; this.readyState = 1; window.__fakeWs = this;
    setTimeout(() => this.onmessage?.({data: JSON.stringify({t: 'bienvenue', id: 'moi', host: true, joueurs: []})}), 50); }
    send(d) { this.sent.push(d); } close() { this.readyState = 3; } }; return 0; })()`);
  await pick('net'); await pj(`document.getElementById('yaHost').click(), 0`); await sleep(600);
  const n0 = await pj(`[document.getElementById('gc').__ya.net().code, document.getElementById('yaNetInfo').textContent, document.getElementById('yaNet').style.display]`);
  if (!/^[A-Z0-9]{6}$/.test(n0[0]) || !/Code de la partie/.test(n0[1]) || n0[2] === 'none') throw new Error('création de partie : ' + JSON.stringify(n0));
  if (await C('return ya.mode;') !== 'wait') throw new Error("pas d'attente de l'ami");
  await js(`__fakeWs.onmessage({data: JSON.stringify({t: 'arrive', id: 'ami', name: 'invité'})}), 0`); await sleep(300);
  const sent = () => js(`__fakeWs.sent.map(s => JSON.parse(s).data).filter(Boolean)`);
  if (!(await sent()).some(m => m.t === 'start' && m.first === 0) || await C('return ya.mode + "|" + ya.cur + "|" + ya.players.map(p => p.name).join();') !== 'play|0|Toi,Ami') throw new Error('début de partie : ' + JSON.stringify(await sent()));
  await tap(70, 150); await sleep(320); await tap(20, 95); await sleep(60);
  const r1 = (await sent()).filter(m => m.t === 'roll'), k1 = (await sent()).filter(m => m.t === 'keep');
  if (r1.length !== 1 || r1[0].dice.length !== 5 || k1.length !== 1 || k1[0].keep[0] !== 1) throw new Error('mon lancer envoyé : ' + JSON.stringify(await sent()));
  await tap(170, 12); await sleep(60);
  const p1 = (await sent()).filter(m => m.t === 'pick');
  if (p1.length !== 1 || p1[0].cat !== 0 || await C('return ya.cur;') !== 1) throw new Error('ma case envoyée : ' + JSON.stringify(p1));
  await tap(70, 150); await sleep(320); await tap(170, 24); await sleep(60);
  if ((await sent()).filter(m => m.t === 'roll' || m.t === 'pick').length !== 2) throw new Error("j'ai joué pendant le tour de mon ami");
  await js(`__fakeWs.onmessage({data: JSON.stringify({t: 'msg', from: 'ami', data: {t: 'roll', dice: [6, 6, 6, 6, 9], keep: [0, 0, 0, 0, 0]}})}), 0`); await sleep(100);
  if (await C('return ya.rolls;') !== 0) throw new Error('un lancer faux (dé à 9) accepté');
  await js(`(() => { for (const d of [{t: 'roll', dice: [6, 6, 2, 6, 1], keep: [0, 0, 0, 0, 0]}, {t: 'keep', keep: [1, 1, 0, 1, 0]}, {t: 'roll', dice: [6, 6, 6, 6, 6], keep: [1, 1, 0, 1, 0]}]) __fakeWs.onmessage({data: JSON.stringify({t: 'msg', from: 'ami', data: d})}); return 0; })()`); await sleep(400);
  await shot('4-a-distance');
  await js(`__fakeWs.onmessage({data: JSON.stringify({t: 'msg', from: 'ami', data: {t: 'pick', cat: 11}})}), 0`); await sleep(150);
  const st = await C('return ya.players[1].sheet[11] + "|" + ya.cur + "|" + ya.rolls + "|" + T.yas().yams;');
  if (st.split('|').slice(0, 3).join('|') !== '50|0|0') throw new Error("le Yams de l'ami : " + st);
  await js(`__fakeWs.onmessage({data: JSON.stringify({t: 'part', id: 'ami'})}), 0`); await sleep(200);
  if (!/a quitté/.test(await pj(`document.getElementById('yaNetInfo').textContent`)) || await C('return ya.mode;') !== 'wait') throw new Error("départ de l'ami");
  await js(`window.WebSocket = window.__RealWS, 0`);
  await pick(keep); await sleep(150);
  const errs = await pj(`window.__e.join(' | ')`); if (errs) throw new Error('erreur : ' + errs);
  return 'vérification ok · partie à deux finie · la main passe · tour de l’ordinateur joué seul · à distance : partie créée, lancers, dés gardés et cases envoyés, rien hors de mon tour, dé faux refusé, Yams de l’ami marqué, départ vu';
};
