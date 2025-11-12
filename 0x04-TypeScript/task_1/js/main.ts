interface Teacher {
  readonly firstName: string;   // cannot be changed after creation
  readonly lastName: string;    // cannot be changed after creation
  fullTimeEmployee: boolean;    // must always be defined
  yearsOfExperience?: number;   // optional
  location: string;             // must always be defined
  [key: string]: any;           // allows extra attributes like contract
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

// Extending the Teacher interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
