import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
  
    const emptyContactsArray = [];
    
    await fs.writeFile(PATH_DB, JSON.stringify(emptyContactsArray, null, 2));
    
    console.log('All contacts have been removed.');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

await removeAllContacts();