import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  @Output() personCreate = new EventEmitter<string>();
  enterPersonName = '';
  onCreatePerson() {
    console.log('Button clicked ' + this.enterPersonName);
    this.personCreate.emit(this.enterPersonName);
    this.enterPersonName = '';
  }
}
