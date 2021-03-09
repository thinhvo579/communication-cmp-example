import { User } from './../../models/user.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-interact-user',
  templateUrl: './interact-user.component.html',
  styleUrls: ['./interact-user.component.scss'],
})
export class InteractUserComponent implements OnInit {
  @Input() user: User;
  @Output() sendId = new EventEmitter();
  @Output() sendUser = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  deleteUser(id) {
    if (confirm('Do you want to delete')) {
      this.sendId.emit(this.user.id);
    }
  }
  submitUser(user) {
    if (confirm('Do you want to submit')) {
      this.sendUser.emit(user);
    }
  }
}
