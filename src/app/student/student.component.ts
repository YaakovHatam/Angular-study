import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../models/student.model';
import { CounterService } from '../services/counter.service';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.less']
})
export class StudentComponent implements OnInit {
    @Input() student: Student;

    constructor(private counterService: CounterService) { }

    ngOnInit() {
        console.log(this.counterService.getCount());

    }

}
