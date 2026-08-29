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

## Com afegir els missatges definitius

Edita `src/data/messages.js` i afegeix una entrada per cada dia amb la clau
en format `'YYYY-MM-DD'`:

```js
export const messages = {
  '2026-09-02': 'El teu missatge aquí',
  '2026-09-04': 'Un altre missatge',
};
```

Els dies que no tinguin missatge propi mostraran `defaultMessage`.

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
