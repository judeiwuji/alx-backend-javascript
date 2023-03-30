interface DirectorInterface {
  workFromHome(): string;
  getToWork(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }

  getToWork() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Teacher | Director) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
  return `Teaching ${todayClass}`;
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
