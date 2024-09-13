import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    for (let i = 0; i < number; i += 1) {
      contacts.push(createFakeContact());
    }
    writeContacts(contacts);
  } catch (error) {
    console.error('Error at generate contacts', error);
  }
};

generateContacts(5);
