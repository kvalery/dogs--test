import {Component, OnInit} from '@angular/core';
import { BreedService } from "../../service/breed.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public breedList: {};
  public sortingBreedList: {};
  public objectKeys = Object.keys;

  public getSearchString(event: KeyboardEvent) {

    let searchString = ( ( event.target as HTMLInputElement ).value ).toLowerCase();

    if ( !searchString.length ) {
      this.sortingBreedList = this.breedList;
      return;
    }

    this.sortingBreedList = {};
    for ( let breed in this.breedList ) {

       if ( ( breed.toLowerCase() ).indexOf( searchString ) >= 0 ) {
         this.sortingBreedList[ breed ] = this.breedList[ breed ];
       }
    }
  }

  constructor(
    public breedService: BreedService,
  ) { }

  ngOnInit() {
    this.breedService.getBreeds();

    this.breedService._breeds$.subscribe(
      ( data: string[] ) => {
        this.breedList = data;
        this.sortingBreedList = data;
      },
      error => {
        console.log('error');
      }
    );

  }

}

