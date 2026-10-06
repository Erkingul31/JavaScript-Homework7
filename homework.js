const student = {
    name: "Ivan",
    age: 21,
    skills: ["js", "css"]
};

const { name, age } = student;

const [js, css] = student.skills;

function printStudent({ name, age }) {
    console.log("Student " + name + ", age " + age);
}

printStudent(student);

console.log(name);
console.log(age);
console.log(js);
console.log(css);


function sumAndMultiply(first, ...numbers) {
    let sum = 0;

    for (const number of numbers) {
        sum += number;
    }

    return first * sum;
}

console.log(sumAndMultiply(2, 3, 4, 5));


const arrayFirst = [4, 5, 6];
const arraySecond = [1, 2];
const arrayThird = [9, 10];
const arrayFourth = [3];
const arrayFiveth = [7, 8];

const newArray = [
    ...arraySecond,
    ...arrayFourth,
    ...arrayFirst,
    ...arrayFiveth,
    ...arrayThird
];

console.log(newArray);