import { readDatabase } from '../utils';

/* eslint class-methods-use-this: ["error",
{ "exceptMethods": ["getAllStudents", "getAllStudentsByMajor"] }] */
export default class StudentsController {
  getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((fields) => {
        let content = 'This is the list of our students\n';
        for (const field of fields) {
          content += `Number of students in ${field.field}: ${
            field.students.length
          }. List: ${field.students.join(', ')}\n`;
        }
        response.send(content);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!major || (major !== 'CS' && major !== 'SWE')) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(process.argv[2])
      .then((fields) => {
        const field = fields.find((d) => d.field === major);
        response.send(field.students.join(', '));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
