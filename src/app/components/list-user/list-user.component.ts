import { User } from './../../models/user.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  @Input() users: User[];
  @Output() sendId = new EventEmitter();
  @Output() edit = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
