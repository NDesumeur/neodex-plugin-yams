# Yams

Le jeu de dés classique, seul, contre l’ordinateur ou jusqu’à 4 sur le même PC : cinq dés, trois lancers par tour et treize cases à remplir sur la feuille de marque. Vise le plus gros total, avec le bonus de 35 points si le haut de la feuille atteint 63.

*English version: [README.en.md](README.en.md)*

## Yams à distance (nouveau en 1.2.0)

Joue au Yams contre un ami sur un autre PC avec un code de 6 lettres : chacun lance ses dés chez lui, tu vois ses dés et ses cases en direct. Aussi : un trait doré sous les dés gardés, et plus de jeu bloqué en revenant d’un autre onglet.

## À plusieurs (nouveau en 1.1.0)

Le menu **Joueurs** propose : seul (le record compte), contre l'ordinateur, ou 2 à 4 joueurs sur le même PC. Chacun a sa colonne sur la feuille, celle du joueur en cours est éclairée et la main passe après chaque case marquée. En haut, le bonus montre ce qu'il manque pour atteindre 63. À la fin, le gagnant est annoncé. L'ordinateur garde les suites presque faites ou ses dés les plus nombreux, et marque la case qui rapporte le plus par rapport à d'habitude. Victoires et défaites contre lui sont comptées à part.

## Commandes

- **Lancer** (ou **Espace** ou **Entrée**) : lance les dés ; deux relances possibles ensuite.
- **Clic sur un dé** (ou touches **1** à **5**) : le garder pour le prochain lancer ; un nouveau clic le relâche.
- **Clic sur une case** de la feuille : y inscrire le résultat.
- Partie finie : un clic ou **Entrée** pour recommencer.

## Un tour

Lance les dés jusqu'à trois fois en gardant ceux qui t'intéressent, puis choisis une case libre. La feuille montre en vert ce que chaque case rapporterait avec les dés du moment. Si rien ne va, une case peut être barrée à 0 : choisis bien laquelle sacrifier. La partie dure 13 tours, un par case.

## La feuille de marque

**Le haut**

| Case | Points |
|---|---|
| As, Deux, Trois, Quatre, Cinq, Six | le total des dés de ce chiffre |
| Bonus | 35 si le haut fait au moins 63 |

**Le bas**

| Case | Il faut | Points |
|---|---|---|
| Brelan | 3 dés pareils | le total des 5 dés |
| Carré | 4 dés pareils | le total des 5 dés |
| Full | 3 pareils + 2 pareils | 25 |
| Petite suite | 4 dés qui se suivent | 30 |
| Grande suite | 5 dés qui se suivent | 40 |
| Yams | 5 dés pareils | 50 |
| Chance | rien | le total des 5 dés |

## Records

Meilleur total, nombre de parties et nombre de Yams réussis s'affichent à côté du jeu.

## Données et synchronisation

Record et statistiques sont enregistrés par NeoDex, sauvegardés et synchronisés entre tes PC si la synchro est activée.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Yams → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).

## À distance (1.2.0)

Dans **Joueurs**, choisis **À distance (par un code)** :

- **CRÉER UNE PARTIE** donne un code de 6 lettres. Ton ami le tape et clique sur **REJOINDRE**.
- Chacun a sa colonne sur la feuille. Celui qui a créé la partie commence la première, puis on alterne à chaque revanche.
- Pendant le tour de ton ami, tu vois ses dés, ceux qu’il garde et la case qu’il marque.
- Seuls les dés et les cases passent par le serveur NeoDex, rien d’autre de ton PC. Les records à distance sont comptés à part.

Aussi : un trait doré sous les dés gardés (le mot « gardé » se chevauchait) et le jeu ne reste plus bloqué quand on revient d’un autre onglet.
