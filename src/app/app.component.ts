import { Component } from '@angular/core';
import { Student } from './models/student.model';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
    constructor(private asd: CounterService) {
        
    }

    students: Student[] = [
        {
            name: 'Student 1',
            age: 23
        },
        {
            name: 'Student 2',
            age: 43
        }, {
            name: 'Student 1',
            age: 23
        },
        {
            name: 'Student 2',
            age: 43
        }, {
            name: 'Student 1',
            age: 23
        },
        {
            name: 'Student 2',
            age: 43
        }
    ]

}
