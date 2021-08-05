import { Component, OnInit } from '@angular/core';
import {Person} from "../../modules/person";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  allPersons:Person[] = []

  person: Person = new Person("", "", "", "", "", "", "");


  constructor() { }

  ngOnInit(): void {
    console.log(this.person);
  }

}
