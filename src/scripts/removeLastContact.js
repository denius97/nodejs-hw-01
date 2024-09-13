import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length) {
      contacts.pop();
      writeContacts(contacts);
    }
  } catch (error) {
    console.error('Error at remove last contact', error);
  }
};

removeLastContact();
