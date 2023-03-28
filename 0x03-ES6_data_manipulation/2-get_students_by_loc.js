export default function getStudentsByLocation(students, city) {
  return students.filter((d) => d.location === city);
}
