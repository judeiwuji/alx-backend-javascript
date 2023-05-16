const fs = require('fs');

function countStudents(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, { encoding: 'utf-8' }, (err, rawData) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
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
      console.log(`Number of students: ${rows.length - 1}`);
      for (const stat of Object.values(stats)) {
        console.log(
          `Number of students in ${stat.field}: ${
            stat.count
          }. List: ${stat.students.join(', ')}`,
        );
      }
      resolve();
    });
  });
}
module.exports = countStudents;
