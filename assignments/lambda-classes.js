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
        return `${student.name} receives a perfect score on ${this.subject}`;
    }
}

class Student extends Person {
    constructor(StudentAttr) {
        super(StudentAttr);
        this.previousBackground = StudentAttr.previousBackground;
        this.className = StudentAttr.className;
        this.favSubjects = StudentAttr.favSubjects;
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
}

class TeamLead extends Instructor {
    constructor(TeamLeadAttr) {
        super(TeamLeadAttr);
        this.gradeClassName = TeamLeadAttr.gradeClassName;
        this.favInstructor = TeamLeadAttr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
}