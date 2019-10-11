// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(InstructorAttr) {
    super(InstructorAttr);
    this.specialty = InstructorAttr.specialty;
    this.favLanguage = InstructorAttr.favLanguage;
    this.catchPhrase = InstructorAttr.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}`;
  }
  scoreCard(obj) {
    let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    let numGrade = Math.floor(Math.random() * 25) * plusOrMinus;
    let finalNum = obj + numGrade;
    return finalNum;


  }
}

class Student extends Person {
  constructor(StudentAttr) {
    super(StudentAttr);
    this.previousBackground = StudentAttr.previousBackground;
    this.className = StudentAttr.className;
    this.favSubjects = StudentAttr.favSubjects;
    this.grade = StudentAttr.grade;
  }

  listSubjects(favSubjects) {
    return this.favSubjects;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR Assignment for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun the sprint challenge on ${subject}!`;
  }
  graduate() {
    if (this.grade >= 70) {
      return `Your final grade is ${student_one.grade} you passed`;

    } else {
      return `Your final grade is ${student_one.grade} you will need to flex`;
    }
  }
}

class TeamLead extends Instructor {
  constructor(TeamLeadAttr) {
    super(TeamLeadAttr);
    this.gradeClassName = TeamLeadAttr.gradeClassName;
    this.favInstructor = TeamLeadAttr.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student_one.name}'s code on ${student_one.className}`;
  }

}

const student_one = new Student({
  name: 'Ben',
  age: 36,
  location: 'Mesa',
  previousBackground: 'Customer Service',
  className: 'Javascript IV',
  favSubjects: ['HTML', 'CSS', 'Javascript']
});

const instructor_one = new Instructor({
  name: 'Pace',
  age: 26,
  location: 'Mesa',
  specialty: 'Javascript',
  favLanguage: 'Spanish',
  catchPhrase: 'Logitech is awesome'
});

const teamLead_one = new TeamLead({
  name: 'Julie',
  age: 25,
  location: 'New York',
  favLanguage: 'React',
  catchPhrase: 'Wubba lubba dub dub',
  gradeClassName: 'WEBFT8',
  favInstructor: 'Pace Ellsworth'
});

console.log(student_one.PRAssignment('HTML'));
console.log(instructor_one.demo('Classes and Constructors'));
console.log(`${instructor_one.name} thinks ${instructor_one.catchPhrase}`);
console.log(teamLead_one.standUp('WebPT11'));
console.log(instructor_one.grade('Ben', 'Javascript IV'));
console.log(`${teamLead_one.name} says ${teamLead_one.catchPhrase}`);
console.log(student_one.graduate(instructor_one.scoreCard(instructor_one, 90)));