import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
private personListSubs: Subscription;
 personList: string[];
//  private prsService: PersonsService;

 constructor(private prsService: PersonsService) {
  //  this.personList = prsService.persons;
  // this.prsService = prsService;
 }

 ngOnInit(): void {
  this.personList = this.prsService.persons;
  this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
    this.personList = persons;
  });
}

ngOnDestroy(): void {
  this.personListSubs.unsubscribe();
}

 onRemovePerson(personName: string) {
   this.prsService.removePerson(personName);
 }
}
