import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
@Injectable()
export class ValidatorService {
item: FirebaseObjectObservable<any>;
  constructor(private db: AngularFireDatabase) { }

  setNameKey(val: string) {
        if(val==null) return val;
        return val.replace(/([~!@#$%^&*()_+=`{}\[\]\|\\:;'<>,.\/? ])+/g, '-').replace(/^(-)+|(-)+$/g, '').toLowerCase();
    }

  existsStoreId(key: string) {
        var ishas: boolean = false;
        this.db.object('/store/' + this.setNameKey(key)).subscribe(snapshot => {
                if (snapshot.dateCreate) ishas = true;
            });
        return ishas;
  }

}
