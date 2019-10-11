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
    let grade = Math.ceil(Math.random() * 15);
    console.log(`\n ${this.name} gives ${obj.name} a score of: ${grade}`);

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
      console.log(`i can graduate with a score of: ${this.grade}`);
      return true;
    } else {
      return false;
    }
  }
}

class TeamLead extends Instructor {
  constructor(TeamLeadAttr) {
    super(TeamLeadAttr);
    this.gradeClassName = TeamLeadAttr.gradeClassName;
    this.favInstructor = TeamLeadAttr.favInstructor;
  }
  standUp(channel) {
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