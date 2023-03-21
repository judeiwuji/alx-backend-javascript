export default function createIteratorObject(report) {
  const noOfDepts = report.getNumberOfDepartments(report.allEmployees);
  const allEmployees = Object.values(report.allEmployees);
  let deptIdx = 0;
  let empIdx = 0;
  let employees = allEmployees[deptIdx];
  let iterCount = 0;

  const reportIter = {
    [Symbol.iterator]() {
      return {
        next() {
          if (deptIdx < noOfDepts) {
            const empLen = employees.length;
            let result;

            if (empIdx >= empLen && deptIdx + 1 < noOfDepts) {
              deptIdx += 1;
              employees = allEmployees[deptIdx];
              empIdx = 0;
            }

            if (empIdx < empLen) {
              iterCount += 1;
              result = {
                value: employees[empIdx],
                done: false,
              };
              empIdx += 1;
              return result;
            }
          }
          return {
            value: iterCount,
            done: true,
          };
        },
      };
    },
  };
  return reportIter;
}
