export default function createIteratorObject(report) {
  const noOfDepts = report.getNumberOfDepartments(report.allEmployees);
  let deptIdx = 0;
  let empIdx = 0;
  const allEmployees = Object.values(report.allEmployees);
  let employees = allEmployees[deptIdx];
  let iterCount = 0;

  const reportIter = {
    [Symbol.iterator]() {
      return {
        next() {
          if (deptIdx < noOfDepts) {
	  const empLen = employees.length;
	  if (empIdx >= empLen && deptIdx + 1 < noOfDepts) {
              employees = allEmployees[++deptIdx];
              empIdx = 0;
	  }

	  if (empIdx < empLen) {
	    iterCount += 1;
              return {
	      value: employees[empIdx++],
	      done: false,
	    };
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
