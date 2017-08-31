import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import 'rxjs';
import {Router} from "@angular/router";

@Injectable()
export class DogService {

  private _dogs: BehaviorSubject<any> = new BehaviorSubject({});
  public _dogs$ = this._dogs.asObservable();

  public set dogs( dogs: string[] ){
    this._dogs.next( dogs );
  };

  public get dogs() {
    return this._dogs.getValue();
  };

  public getdogs = ( breed: string, sub: string ) => {

    let dogsCollection = this.dogs;
    let queryStr = breed + ( ( sub ) ? '/' + sub : '' );
    let breedKey = breed + ( ( sub ) ? '-' + sub : '' );

    this.http
      .get(`https://dog.ceo/api/breed/${queryStr}/images`)
      .map( res => {

        if ( res.text() === '{"status":"error","code":"404","message":"Breed not found"}' ) {
          this.router.navigate(['/mistake']);
        }

        return res.json();
      }).subscribe(( data: { status: string; message: string[]; } )  => {

        dogsCollection[breedKey] = data.message;
        this.dogs = dogsCollection;

      },
      error => {
        this.router.navigate(['/mistake']);
      }
    );

  }

  constructor(
    private http: Http,
    private router: Router,
  ) {}

}
