import { Component } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  enterPersonName = '';

  constructor(private prsService: PersonsService) {}

  onCreatePerson() {
    console.log('Button clicked ' + this.enterPersonName);
    this.prsService.addPerson(this.enterPersonName);
    this.enterPersonName = '';
  }
}
