let name1 = '2135';

console.log(name);

for (let i=0; i < 4; i++) {
  console.log(name1[i]);
}

let names = ['Kari', 'Ola'];
names.push('Knut');
names.pop();
names.sort();
names.splice(1, 1, 'Knut');

for (let i=0; i < names.length; i++) {
  console.log(names[i]);
}

for (let name of names) {
  console.log(name);
}

console.log('2' + '3');
console.log(2 + 3);

let personName = 'Kari';
let personCity = 'Trondheim';

let person = { name: 'Kari', city: 'Trondheim' };
person.name = 'Karianne';
person.age = 30;

console.log(person['name'], 'from', person['city']);

console.log(person.name, 'from', person.city, 'is', person.age);

let persons = [];
persons.push({name: 'Kari', city: 'Trondheim'});
persons.push({name: 'Ola', city: 'Bergen'});

for (let person of persons) {
  console.log(person.name, 'from', person.city);
}
