import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import 'rxjs';

@Injectable()
export class DogService {

  private url = 'https://dog.ceo/api/breed/bulldog/images';

  private _dogs: BehaviorSubject<any> = new BehaviorSubject([]);
  public _dogs$ = this._dogs.asObservable();

  public set dogs(dogs: any ){
    this._dogs.next(dogs);
  };

  public get dogs() {
    return this._dogs.getValue();
  };

  public getdogs = () => {

    this.http
      .get(this.url)
      .map(res => {
        return res.json();
      }).subscribe(
      (data) => {
        this.dogs = data.message;
      }
    );
  }

  constructor(
    private http: Http,
  ){}

}
