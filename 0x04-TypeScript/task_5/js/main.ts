// Define MajorCredits and MinorCredits with brand properties
export interface MajorCredits {
  credits: number;
  _majorBrand: 'major';
}

export interface MinorCredits {
  credits: number;
  _minorBrand: 'minor';
}

// Function to sum two MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: 'major',
  };
}

// Function to sum two MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: 'minor',
  };
}

