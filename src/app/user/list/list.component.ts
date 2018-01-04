import {Component} from '@angular/core';

import {ListDataSource} from './list.datasource';

import {UserService} from '../user.service';

@Component({
  selector: 'user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  public displayedColumns = ['firstname', 'zipcode', 'street', 'email'];
  public dataSource = null;

  constructor(private userService: UserService) {
    this.getUsersList();
  }

  private getUsersList() {
    this.userService.getAll().subscribe(
        users => {
          users.forEach(function(entry) {
            console.log(entry.firstname);
          });
          this.dataSource = new ListDataSource(users);
        }
    );
  }

  public hasData() {
    return this.dataSource !== null;
  }
}
