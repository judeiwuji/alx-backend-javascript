interface MajorCredits {
  credits: number;
  brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  brand: 'MinorCredits';
}

function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
  return { credits: subject1 + subject2, brand: 'MajorCredits' };
}

function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
  return { credits: subject1 + subject2, brand: 'MinorCredits' };
}

console.log(sumMajorCredits(12, 14));
console.log(sumMinorCredits(12, 14));
