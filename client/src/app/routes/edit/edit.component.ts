import {Component, OnInit} from '@angular/core';
import {Person} from "../../modules/person";
import {AddFriendService} from "./add-friend.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
  export class EditComponent implements OnInit {
  private addFriendService: AddFriendService;
  allPersons: Person[] = []

  title: string = 'Angular Friends';
  person: Person = new Person("", "", "", "", "", "", "", "", 0);

  constructor(addFriendService: AddFriendService) {
    this.addFriendService = addFriendService;
  }

  ngOnInit() {

  }

  onClick() {
    this.addFriendService.addFriend(this.person).subscribe((data => JSON.stringify(data)))
  }


}
