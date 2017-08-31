import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import 'rxjs';

@Injectable()
export class BreedService {

  private _breeds: BehaviorSubject<any> = new BehaviorSubject([]);
  public _breeds$ = this._breeds.asObservable();

  public set breeds( breeds: string[] ){
    this._breeds.next( breeds );
  };

  public get breeds() {
    return this._breeds.getValue();
  };

  public getBreeds = () => {
    this.http
      .get('https://dog.ceo/api/breeds/list/all' )
      .map( res => {
        return res.json();
      }).subscribe(
      ( data:  { status: string; message: string[]; } ) => {
        this.breeds = data.message;
      }
    );
  }

  constructor(
    private http: Http,
  ) { }

}
