const fs = require('fs');

fs.readFile('intro/read-in-data/data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  const jsonArray = JSON.parse(data);

  console.log(jsonArray);

  const peopleCount = jsonArray.length;

  console.log(peopleCount);

  const [firstPerson, secondPerson, thirdPerson] = jsonArray;

  console.log(firstPerson.name);
  console.log(secondPerson.name);
  console.log(thirdPerson.name);
});