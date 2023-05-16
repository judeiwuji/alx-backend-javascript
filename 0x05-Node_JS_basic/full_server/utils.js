import fs from 'fs';

export default function readDatabase(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, { encoding: 'utf-8' }, (err, rawData) => {
      if (err) {
        reject(err);
        return;
      }

      const rows = rawData.split('\n').filter((d) => d !== '');
      const columns = rows[0].split(',');
      const stats = {};
      for (let i = 1; i < rows.length; i += 1) {
        const row = rows[i];
        const data = row.split(',');
        const student = {};
        data.forEach((d, i) => {
          student[columns[i]] = d;
        });
        if (stats[student.field]) {
          stats[student.field].students.push(student.firstname);
          stats[student.field].count += 1;
        } else {
          stats[student.field] = {
            students: [student.firstname],
            count: 1,
            field: student.field,
          };
        }
      }
      const entries = Object.values(stats).map((d) => {
        const temp = d;
        temp.students = d.students.sort();
        return temp;
      });
      resolve(entries);
    });
  });
}
