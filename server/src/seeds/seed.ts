import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";

import pythonQuestions from './pythonQuestions.json' assert { type: "json" };

db.once('open', async () => {
  await cleanDB('Question', 'questions');

  await Question.insertMany(pythonQuestions);

  console.log('Questions seeded!');
  process.exit(0);
});

// import fs from 'fs';
// import path from 'path';
// import db from '../config/connection.js';
// import Question from '../models/Question.js';
// import cleanDB from './cleanDb.js';

// // Resolve __dirname for ES Modules
// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// // Read JSON file using fs
// const pythonQuestions = JSON.parse(
//   fs.readFileSync(path.join(__dirname, './pythonQuestions.json'), 'utf-8')
// );

// db.once('open', async () => {
//   await cleanDB('Question', 'questions');
//   await Question.insertMany(pythonQuestions);

//   console.log('Questions seeded!');
//   process.exit(0);
// });