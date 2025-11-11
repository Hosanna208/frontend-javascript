interface Student {
  firstName: string;
  lastName: string;
  age: string;
  location: string;
}

const studentsList: Student[] = [
  {
    firstName: "John",
    lastName: "Doe",
    age: "20",
    location: "New York"
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: "22",
    location: "London"
  }
];

const table = document.createElement("table");

const headerRow = document.createElement("tr");
const headers = ["First Name", "Last Name", "Age", "Location"];
headers.forEach(headerText => {
  const th = document.createElement("th");
  th.textContent = headerText;
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

studentsList.forEach(student => {
  const row = document.createElement("tr");
  Object.values(student).forEach(value => {
    const td = document.createElement("td");
    td.textContent = value;
    row.appendChild(td);
  });
  table.appendChild(row);
});

document.body.appendChild(table);
