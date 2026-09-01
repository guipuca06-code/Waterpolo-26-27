// Missatge que es mostra en clicar un dia verd (dilluns, dimecres o divendres).
//
// Pots definir un missatge concret per a un dia específic afegint una entrada
// amb la clau en format 'YYYY-MM-DD', per exemple:
//   '2026-09-02': 'El teu missatge personalitzat aquí',
//
// Si un dia no té entrada pròpia, es fa servir defaultMessage.
const DillunsFisicFora =
  "Físic + Aigua.\n" +
  "Cal portar:\n" +
  "- Roba d'esport\n" +
  '- Aigua\n' +
  '- Calçat còmode\n' +
  '- Equipament de natació (gorro, ulleres i banyador)';

const DillunsFisicDins =
  "Físic a l'aigua.\n" +
  "Cal portar:\n" +
  "- Equipament de natació (gorro, ulleres i banyador)";

const Dimecres =
  "Enfocat més a la natació.\n" +
  "Cal portar:\n" +
  "- Equipament de natació (gorro, ulleres i banyador)";

const Divendres =
  "Enfocat més a waterpolo. \n" +
  "Cal portar:\n" +
  "- Equipament de natació (gorro, ulleres i banyador)";

export const messages = {
  
'2026-09-07': DillunsFisicFora,
'2026-09-14': DillunsFisicFora, // Festiu local, no es veurà
'2026-09-21': DillunsFisicFora,
'2026-09-28': DillunsFisicFora,
'2026-10-05': DillunsFisicFora,
'2026-10-12': DillunsFisicFora, // Festa, no es veurà
'2026-10-19': DillunsFisicFora,
'2026-10-26': DillunsFisicFora,
'2026-11-02': DillunsFisicDins,
'2026-11-09': DillunsFisicFora,
'2026-11-16': DillunsFisicDins,
'2026-11-23': DillunsFisicFora,
'2026-11-30': DillunsFisicDins,
'2026-12-07': DillunsFisicFora,
'2026-12-14': DillunsFisicDins,
'2026-12-21': DillunsFisicFora,
'2026-12-28': DillunsFisicDins,
'2027-01-04': DillunsFisicFora,
'2027-01-11': DillunsFisicDins,
'2027-01-18': DillunsFisicFora,
'2027-01-25': DillunsFisicDins,
'2027-02-01': DillunsFisicFora,
'2027-02-08': DillunsFisicDins,
'2027-02-15': DillunsFisicFora,
'2027-02-22': DillunsFisicDins,
'2027-03-01': DillunsFisicFora,
'2027-03-08': DillunsFisicDins,
'2027-03-15': DillunsFisicFora,
'2027-03-22': DillunsFisicDins,
'2027-03-29': DillunsFisicFora, // Festa, no es veurà
'2027-04-05': DillunsFisicDins,
'2027-04-12': DillunsFisicFora,
'2027-04-19': DillunsFisicDins,
'2027-04-26': DillunsFisicFora,
'2027-05-03': DillunsFisicDins,
'2027-05-10': DillunsFisicFora,
'2027-05-17': DillunsFisicDins,
'2027-05-24': DillunsFisicFora,
'2027-05-31': DillunsFisicDins,
'2027-06-07': DillunsFisicFora,
'2027-06-14': DillunsFisicDins,
'2027-06-21': DillunsFisicFora,
'2027-06-28': DillunsFisicDins,
'2026-09-02': Dimecres,
'2026-09-09': Dimecres,
'2026-09-16': Dimecres,
'2026-09-23': Dimecres,
'2026-09-30': Dimecres,
'2026-10-07': Dimecres,
'2026-10-14': Dimecres,
'2026-10-21': Dimecres,
'2026-10-28': Dimecres,
'2026-11-04': Dimecres,
'2026-11-11': Dimecres,
'2026-11-18': Dimecres,
'2026-11-25': Dimecres,
'2026-12-02': Dimecres,
'2026-12-09': Dimecres,
'2026-12-16': Dimecres,
'2026-12-23': Dimecres,
'2026-12-30': Dimecres,
'2027-01-06': Dimecres,
'2027-01-13': Dimecres,
'2027-01-20': Dimecres,
'2027-01-27': Dimecres,
'2027-02-03': Dimecres,
'2027-02-10': Dimecres,
'2027-02-17': Dimecres,
'2027-02-24': Dimecres,
'2027-03-03': Dimecres,
'2027-03-10': Dimecres,
'2027-03-17': Dimecres,
'2027-03-24': Dimecres,
'2027-03-31': Dimecres,
'2027-04-07': Dimecres,
'2027-04-14': Dimecres,
'2027-04-21': Dimecres,
'2027-04-28': Dimecres,
'2027-05-05': Dimecres,
'2027-05-12': Dimecres,
'2027-05-19': Dimecres,
'2027-05-26': Dimecres,
'2027-06-02': Dimecres,
'2027-06-09': Dimecres,
'2027-06-16': Dimecres,
'2027-06-23': Dimecres,
'2027-06-30': Dimecres,
'2026-09-04': Divendres,
'2026-09-11': Divendres, // Festa, no es veurà
'2026-09-18': Divendres,
'2026-09-25': Divendres,
'2026-10-02': Divendres,
'2026-10-09': Divendres,
'2026-10-16': Divendres,
'2026-10-23': Divendres,
'2026-10-30': Divendres,
'2026-11-06': Divendres,
'2026-11-13': Divendres,
'2026-11-20': Divendres,
'2026-11-27': Divendres,
'2026-12-04': Divendres,
'2026-12-11': Divendres,
'2026-12-18': Divendres,
'2026-12-25': Divendres, // Festa, no es veurà
'2027-01-01': Divendres, // Festa, no es veurà
'2027-01-08': Divendres,
'2027-01-15': Divendres,
'2027-01-22': Divendres,
'2027-01-29': Divendres,
'2027-02-05': Divendres,
'2027-02-12': Divendres,
'2027-02-19': Divendres,
'2027-02-26': Divendres,
'2027-03-05': Divendres,
'2027-03-12': Divendres,
'2027-03-19': Divendres,
'2027-03-26': Divendres, // Festa, no es veurà
'2027-04-02': Divendres,
'2027-04-09': Divendres,
'2027-04-16': Divendres,
'2027-04-23': Divendres,
'2027-04-30': Divendres,
'2027-05-07': Divendres,
'2027-05-14': Divendres,
'2027-05-21': Divendres,
'2027-05-28': Divendres,
'2027-06-04': Divendres,
'2027-06-11': Divendres,
'2027-06-18': Divendres,
'2027-06-25': Divendres,
};

export const defaultMessage = 'Missatge pendent de definir per aquest dia.';

export function getMessageForDate(dateKey) {
  return messages[dateKey] ?? defaultMessage;
}
