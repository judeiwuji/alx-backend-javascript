const express = require('express');
const fs = require('fs');

const database = process.argv[2];
function getStudentsCount(filename = '') {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, { encoding: 'utf-8' }, (err, rawData) => {
      if (err) {
        reject(new Error('Cannot load the database'));
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
      let message = `Number of students: ${rows.length - 1}\n`;
      for (const stat of Object.values(stats)) {
        message += `Number of students in ${stat.field}: ${
          stat.count
        }. List: ${stat.students.join(', ')}\n`;
      }
      resolve(message);
    });
  });
}
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  getStudentsCount(database)
    .then((message) => {
      const title = 'This is the list of our students';
      res.send(`${title}\n${message}`);
    })
    .catch((error) => {
      console.log(error);
      res.send(error.message);
    });
});
app.listen(1245);
module.exports = app;
