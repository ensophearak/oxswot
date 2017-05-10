import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { IStore } from '../../interfaces';
import { AuthService } from '../../auth/auth.service';
import { ValidatorService } from '../../providers/validator.service';
import { MdSnackBar } from '@angular/material';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.scss']
})
export class CreateStoreComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;
  id: AbstractControl;
  width: AbstractControl;
  height: AbstractControl;
  note: AbstractControl;
  uid: string;
  constructor(private fb: FormBuilder
    , private auth: AuthService
    , private valid: ValidatorService
    , private snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      id: ['', Validators.compose([Validators.required, this.isEqualKey.bind(this)])],
      width: ['', Validators.required],
      height: ['', Validators.required],
      note: ['']
    });
    this.id = this.form.controls['id'];
    this.width = this.form.controls['width'];
    this.height = this.form.controls['height'];
    this.note = this.form.controls['note'];
  }

  isEqualKey(control: AbstractControl): { [s: string]: boolean } {
    if (!this.form) {
      return { exist: true };
    }
    var ishas = this.valid.existsStoreId(control.value);
    if (ishas) {
      return { exist: true };
    }
  }

  onCreate() {
    var self = this;
    if (this.form.valid) {
      this.auth.currentUser().subscribe(user => {
        if (user) {
          let s: IStore = {
            name:self.id.value,
            width: self.width.value,
            height: self.height.value,
            note: self.note.value,
            dateCreate: new Date().toString(),
            uid: user.uid
          };
          const itemRef = firebase.database().ref('/store');
          itemRef.child(this.valid.setNameKey(this.id.value)).set(s).then(function () {
            self.snackBar.open('Store has been created.', 'Done', {
              duration: 2000,
            });
            self.form.reset();
            self.form.clearValidators();
          }).catch(function (error) {
            self.errorMessage = error.message;
          });
        }
      });
    }
  }
}
