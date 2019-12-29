import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.less']
})
export class StudentComponent implements OnInit {
    @Output() hobbieUpdate: EventEmitter<any> = new EventEmitter<any>();
    @Input() student;
    hobbiesStartCount = 5;
    // hobbies = [];
  constructor() { }
//'Music', 'Tennis', 'Football'
  ngOnInit() {

    
  }

  addHobbie() {
      const hobbie = prompt('What is your hobbie?');
      this.hobbieUpdate.emit({
          id: this.student.id,
          hobbie: hobbie
      });
  }

}
