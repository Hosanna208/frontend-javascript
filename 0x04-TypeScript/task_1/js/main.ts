interface Teacher {
  readonly firstName: string;   // cannot be changed after creation
  readonly lastName: string;    // cannot be changed after creation
  fullTimeEmployee: boolean;    // must always be defined
  yearsOfExperience?: number;   // optional
  location: string;             // must always be defined
  [key: string]: any;           // allows extra attributes like contract
}

// Example
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);
