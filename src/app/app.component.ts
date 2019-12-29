import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
    onlyHobbies = [];
    constructor() {
        console.log('app cmpnnt init')
    }
    students = []


    add() {
        this.students.push({
            id: Math.floor(Math.random() * 1000),
            name:'student name 11111',
                age: 23,
                hobbies:[]
            });
    }

    onStudentAddHobbie(data) {
        console.log(data);
        const student = this.students.find(s => data.id === s.id);
        student.hobbies.push(data.hobbie);
        this.onlyHobbies.push(data.hobbie);
    }
}
