import {Component} from '@angular/core';

import {ListUserDataSource} from './list.datasource';

import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListUserComponent {

  public displayedColumns = ['firstname', 'suffix', 'lastname', 'zipcode', 'street', 'email', 'actions'];
  public dataSource = null;

  constructor(private userService: UserService) {
    this.getUsersList();
  }

  private getUsersList() {
    this.userService.getAll().subscribe(
        users => {
          this.dataSource = new ListUserDataSource(users);
        }
    );
  }

  public hasData() {
    return this.dataSource !== null;
  }

  onDelete(element: User) {
    this.userService.delete(element, () => {
      this.getUsersList();
    });
  }

  onUpdate(element: User) {
    this.userService.update(element);
  }
}
