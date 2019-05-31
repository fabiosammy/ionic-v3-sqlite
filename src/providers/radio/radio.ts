import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database'
import { SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the RadioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RadioProvider {
  radios: any;

  constructor(public http: HttpClient, private dbProvider: DatabaseProvider) {
    console.log('Hello RadioProvider Provider');
  }

  public insert(radio: Radio){
    console.log(radio.name);
  }

  public all(){
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select name, url, thumb from radios';
        return db.executeSql(sql, [])
          .then((data: any) => {
            this.radios = [];
            for(let i = 0; i < data.rows.length; i++){
              this.radios.push({
                id: data.rows.item(i).id,
                name: data.rows.item(i).name,
                url: data.rows.item(i).url,
                thumb: data.rows.item(i).thumb,
              })
            }

            return this.radios;
          })
          .catch((e) => console.error(e));
      })
  }

}

export class Radio {
  name: string;
  url: string;
  thumb: string;
}
