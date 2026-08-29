// Missatge que es mostra en clicar un dia verd (dilluns, dimecres o divendres).
//
// Pots definir un missatge concret per a un dia específic afegint una entrada
// amb la clau en format 'YYYY-MM-DD', per exemple:
//   '2026-09-02': 'El teu missatge personalitzat aquí',
//
// Si un dia no té entrada pròpia, es fa servir defaultMessage.
export const messages = {
  // '2026-09-02': 'Missatge d\'exemple',
};

export const defaultMessage = 'Missatge pendent de definir per aquest dia.';

export function getMessageForDate(dateKey) {
  return messages[dateKey] ?? defaultMessage;
}
