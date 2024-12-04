
class Teacher{
    constructor(name, skills){
        this.skills = skills;
        this.name = name;
    }
    teach(student, skill_index){
        student.learn(this.skills[skill_index]);
    }
}

class Student{
    constructor(name, skills){
        this.skills = skills;
        this.name = name;
    }
    learn(skill){
        this.skills.push(skill);
    }
}

class School{
    constructor(teachers, students){
        this.teachers = teachers;
        this.students = students;
    }
}

let s = new School(
    [
    new Teacher("Bob", ["code", "draw"]),
    new Teacher("Carol", ["accounting", "finance"]),
    ],[
        new Student("Ted", ["health"]),
        new Student("Alice", ["cooking"]),
    ]
);

let alice = s.students[1];
let bob = s.teachers[0];
bob.teach(alice, 0);
