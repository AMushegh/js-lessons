const UNI_MEMBER_ROLES = {
  teacher: "teacher",
  student: "student",
};

class UniversityMember {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.energy = 24;
  }

  info() {
    console.log(`${this.name}, ${this.age}, ${this.role}, ${this.energy}`);
  }
}

class Teacher extends UniversityMember {
  constructor(name, age) {
    super(name, age, UNI_MEMBER_ROLES.teacher);
  }
}

class Student extends UniversityMember {
  constructor(name, age) {
    super(name, age, UNI_MEMBER_ROLES.student);
  }
}

/*
@Teachers
* */
const t1 = new Teacher("Mike", 37);
const t2 = new Teacher("Susan", 26);
const t3 = new Teacher("David", 39);
const t4 = new Teacher("John", 66);

/*
@Students
* */
const s1 = new Student("Michael", 17);
const s2 = new Student("Lana", 19);
const s3 = new Student("Hayk", 18);
const s4 = new Student("Tatev", 20);

class University {
  constructor() {
    this.teachers = [];
    this.students = [];
  }

  addMember(member) {
    if (member.role === UNI_MEMBER_ROLES.teacher) {
      this.teachers.push(member);
    }
    if (member.role === UNI_MEMBER_ROLES.student) {
      this.students.push(member);
    }
  }

  removeMember(member) {
    if (member.role === UNI_MEMBER_ROLES.teacher) {
      this.teachers = this.teachers.filter((teacher) => {
        return teacher !== member;
      });
    }
    if (member.role === UNI_MEMBER_ROLES.student) {
      this.students = this.students.filter((student) => {
        return student !== member;
      });
    }
  }

  startLesson() {
    console.log("Lesson started");
    [...this.students, ...this.teachers].forEach((member) => {
      if (member.role === UNI_MEMBER_ROLES.teacher) {
        member.energy -= 5;
      }
      if (member.role === UNI_MEMBER_ROLES.student) {
        member.energy -= 2;
      }
    });
  }

  //   startLessonMap() {
  //     this.teachers = this.teachers.map((el) => {
  //       return {
  //         ...el,
  //         energy: el.energy - 5,
  //       };
  //     });
  //   }
}

const ysu = new University();

// adding techers
ysu.addMember(t1);
ysu.addMember(t2);
ysu.addMember(t3);
ysu.addMember(t4);

// adding students
ysu.addMember(s1);
ysu.addMember(s2);
ysu.addMember(s3);
ysu.addMember(s4);

// some logic

console.log(ysu);
ysu.startLesson();
ysu.removeMember(t1);
console.log(ysu);
