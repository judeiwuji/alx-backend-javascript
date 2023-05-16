const fs = require('fs');

const countStudents = function (filename) {
  try {
    const rawData = fs.readFileSync(filename, { encoding: 'utf-8' });
    const rows = rawData.split('\n').filter((d) => d != '');
    const columns = rows[0].split(',');
    const stats = {};
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const data = row.split(',');
      const student = {};
      data.forEach((d, i) => (student[columns[i]] = d));
      if (stats[student.field]) {
        stats[student.field].students.push(student.firstname);
        ++stats[student.field].count;
      } else {
        stats[student.field] = {
          students: [student.firstname],
          count: 1,
          field: student.field,
        };
      }
    }
    for (const stat of Object.values(stats)) {
      console.log(
        `Number of students in ${stat.field}: ${
          stat.count
        }. List: ${stat.students.join(', ')}`,
      );
    }
  } catch (error) {
    console.log(error);
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
