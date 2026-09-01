# Calendari 2026-2027

Aplicació feta amb [Vite](https://vitejs.dev/) (vanilla JS) que mostra el calendari
de setembre 2026 a juny 2027:

- Els **dilluns, dimecres i divendres** es marquen en **verd**.
- Els **dies festius** (extrets del calendari original) es marquen en **vermell**.
- En clicar un dia verd s'obre una finestra amb un missatge.

## Estructura

```
src/
  main.js            -> arrenca l'app, navegació entre mesos, modal
  calendar.js         -> lògica de generació del calendari
  style.css           -> estils
  data/
    holidays.js        -> llista de dies festius (clau 'YYYY-MM-DD')
    messages.js         -> missatges que es mostren en clicar un dia verd
```



## Desenvolupament

```bash
npm install
npm run dev
```

## Build de producció

```bash
npm run build
npm run preview
```
