import { User } from './models/user.model';
import { DataService } from './services/data.service';
import { Component } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users: User[];
  user: User;
  editForm: boolean = true;
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.getUsers().subscribe((users) => (this.users = users));
  }
  getId(id) {
    [this.user] = this.users.filter((user) => user.id === id);
  }
  recId(id) {
    this.users.forEach((user) => {
      user.id === id ? (this.user = null) : '';
    });
    this.users = this.users.filter((user) => user.id !== id);
    this.editForm = !this.editForm;
  }
  edit(user: User) {
    this.editForm = !this.editForm;
    this.user = user;
  }
  getBuffer(buffer) {
    if (this.user.id === buffer.id) {
      this.user = {
        id: buffer.id,
        name: buffer.name,
        username: buffer.username,
        email: buffer.email,
        address: {
          street: buffer.street,
          city: buffer.city,
        },
      };
    }
  }
  getUser(user: User) {
    this.editForm = !this.editForm;
    return (this.users = this.users.map((u) =>
      u.id === user.id ? (u = user) : u
    ));
  }
}
