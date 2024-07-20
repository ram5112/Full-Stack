console.log('Hello from seperate file');

var name = 'Ram Maruthy';
console.log(name);

var schoolTeam = 'Basketball';
var schoolNumber = 20;

console.log(schoolNumber);

var isRegistered = true;
console.log(isRegistered);

var job;
console.log(job);

job = 'student';
console.log(job);

console.log(name+' '+schoolNumber);

var schoolName, hasCourse;

schoolName = 'Nalalnda';
hasCourse = true;

console.log(schoolName+'has 35 courses.Does it really have?'+hasCourse);

schoolNumber = 'tewnty two';
console.log(schoolNumber)

schoolTeam = 'Tennis';
console.log(schoolTeam);

// alert(schoolTeam)

// var age = prompt('How old is he?');
// console.log('Alex is ' + age + ' Years old!')

var totalDistance, distanceAlex, distanceSam;
totalDistance =20;

distanceAlex = totalDistance-12;
distanceSam = totalDistance-7;
console.log(distanceSam);
console.log(distanceSam*2);
console.log(distanceSam/2);

var distanceToSchool, distanceToHome;
distanceToHome = 14;
distanceToSchool = 6;

var isCloser = distanceToHome<distanceToSchool;
console.log(isCloser);

// grade = 50;
// console.log(grade);

var grade = 42;
console.log(grade);

if(grade<40){
  console.log('You can not go to next class');
}else if(grade>=40 &&grade<45){
  console.log('retake for 10 questions');
}else{
  console.log('Tou are promoted');
}

var age;
age = 17;

age<18
  ? console.log('You cannot Vote!')
  : console.log('You can Vote!');

if(grade<45){
  result = 'failure'
}else{
  result = 'Success'
}

console.log(result);

var day;
day = 'monday';

switch (day){
  case 'saturday':
    console.log('I like saturday');
    break;
  case 'monday':
    console.log('i hate monday');
    break;
  case 'friday':
    console.log('Friyay');
    break;
  default:
    console.log('shall pass');
    break;
}

var number = 1;

while (number<11){
  console.log(number);
  number+=2;
}

number = 135;

while(number<146){
  if(number%2===0){
    console.log(number)
  }
  number++
}

var name = 'Sara';

function sayHello() {
  console.log('Hello India');
}

sayHello();

function doSomething(){
  console.log('Hello world');
  console.log('How are you?');
}

doSomething();
doSomething();

function enterCafe(Age) {
  if (Age < 18) {
    return 'You can not enter cafe';
  } 
  return 'You can enter cafe';
}

var cafe = enterCafe(20);

console.log(cafe);

var calculateAge = function(birthDay){
  return 2020-birthDay;
}

var age = calculateAge(20);
console.log(age);

calculateAge = 10;
console.log(calculateAge);

var student1 = 'Sheldon';
var student2 = 'Penny';
var student3 = 'ram';
var student4 = 'maruthy';

var student = ['Sheldon','Penny','ram','maruthy'];

console.log(student[1]);

student.push('JD');
student.pop();




for(var i =0; i<student.length;i++){
  console.log(student[i]);
}

student.forEach(function (names){
  console.log(names);
})
// var i =0;

// while(i<students.length){
//   console.log(student[i]);
// }
// i++;

////////////  OBJECTS /////////////

// var student1 = ['Sheldon', 36 , 'calTech'];
// var student2 = [35 , 'MIT' , 'Ram'];

// student1[2];
// student2[1];

// var student = new Object();
// student.school

var student = {
  name : 'Sheldon',
  age : 36,
  school : 'calTech'
};

console.log(student['name']);

console.log(student.school);

var schoolName = 'school';

console.log(student[schoolName]);

student.age +=1;
console.log(student.age);

student['school'] = 'MIT';
console.log(student.school);

