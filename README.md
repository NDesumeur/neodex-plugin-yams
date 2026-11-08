# Yams

Le jeu de dés classique en solo : cinq dés, trois lancers par tour et treize cases à remplir sur la feuille de marque. Vise le plus gros total, avec le bonus de 35 points si le haut de la feuille atteint 63.

*English version: [README.en.md](README.en.md)*

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
