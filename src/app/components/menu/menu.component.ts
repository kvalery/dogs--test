import { Component, OnInit } from '@angular/core';
import { BreedService } from "../../service/breed.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public breedList: any;
  public objectKeys = Object.keys;

  constructor(
    public breedService: BreedService,
  ) { }

  ngOnInit() {
    this.breedService.getBreeds();

    this.breedService._breeds$.subscribe(
      (data: any ) => {
        this.breedList = data;
      },
      error => {
        console.log('error');
      }
    );

  }

}
