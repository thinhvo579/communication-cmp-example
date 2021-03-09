import { User } from './../../models/user.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  @Input() user: User;
  @Output() sendBuffer = new EventEmitter<User>();
  buffer: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buffer = this.fb.group({
      id: this.user.id,
      name: this.user.name,
      username: this.user.username,
      email: this.user.email,
      street: this.user.address.street,
      city: this.user.address.city,
    });
    this.buffer.valueChanges.subscribe((buffer) =>
      this.sendBuffer.emit(buffer)
    );
  }
}
