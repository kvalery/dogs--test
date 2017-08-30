import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import 'rxjs';

@Injectable()
export class BreedService {

  private url = 'https://dog.ceo/api/breeds/list/all';

  private _breeds: BehaviorSubject<any> = new BehaviorSubject([]);
  public _breeds$ = this._breeds.asObservable();

  public set breeds(breeds: any ){
    this._breeds.next(breeds);
  };

  public get breeds() {
    return this._breeds.getValue();
  };

  public getBreeds = () => {
    this.http
      .get(this.url)
      .map(res => {
        return res.json();
      }).subscribe(
      (data) => {
        this.breeds = data.message;
      }
    );
  }

  constructor(
    private http: Http,
  ){}

}
