export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const update = { ...student };
      const newGrade = newGrades.find(
        (newGrade) => newGrade.studentId === student.id,
      );
      if (newGrade) {
        update.grade = newGrade.grade;
      } else {
        update.grade = 'N/A';
      }
      return update;
    });
}
