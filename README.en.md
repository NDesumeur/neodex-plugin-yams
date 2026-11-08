# Yams

The classic dice game, solo: five dice, three rolls per turn and thirteen boxes to fill on the score sheet. Aim for the highest total, with a 35-point bonus if the upper section reaches 63.

*Version française : [README.md](README.md)*

## Controls

- **Roll** (or **Space** or **Enter**): roll the dice; two rerolls are allowed after that.
- **Click a die** (or keys **1** to **5**): keep it for the next roll; click again to release it.
- **Click a box** on the sheet: score the result there.
- Game over: a click or **Enter** to start again.

## A turn

Roll the dice up to three times, keeping the ones you want, then pick a free box. The sheet shows in green what each box would score with the current dice. If nothing fits, a box can be crossed out for 0: choose carefully which one to sacrifice. The game lasts 13 turns, one per box.

## The score sheet

**Upper section**

| Box | Points |
|---|---|
| Ones, Twos, Threes, Fours, Fives, Sixes | the total of the dice showing that number |
| Bonus | 35 if the upper section is at least 63 |

**Lower section**

| Box | You need | Points |
|---|---|---|
| Three of a kind | 3 matching dice | the total of all 5 dice |
| Four of a kind | 4 matching dice | the total of all 5 dice |
| Full house | 3 matching + 2 matching | 25 |
| Small straight | 4 dice in a row | 30 |
| Large straight | 5 dice in a row | 40 |
| Yams | 5 matching dice | 50 |
| Chance | nothing | the total of all 5 dice |

## Records

Best total, number of games and number of Yams scored are shown next to the game.

## Data and sync

Your record and statistics are stored by NeoDex, backed up and synced between your PCs when sync is on.

## Install

In NeoDex: **NeoStore → Discover → Yams → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
