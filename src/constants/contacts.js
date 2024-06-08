import path from 'node:path';


const PATH_DB = path.resolve(process.cwd(), 'src', 'db', 'db.json');
export { PATH_DB };






/* 
import path from 'node:path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PATH_DB = path.join(__dirname, '..', 'db', 'db.json');
console.log(PATH_DB); 
export { PATH_DB };



import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PATH_DB = path.resolve(__dirname, '..', 'db', 'db.json');
export { PATH_DB }; */