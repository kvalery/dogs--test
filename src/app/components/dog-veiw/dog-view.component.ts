import { Component, OnInit } from '@angular/core';
import { DogService } from "../../service/dog.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dog-view',
  templateUrl: './dog-view.component.html',
  styleUrls: ['./dog-view.component.scss']
})
export class DogViewComponent implements OnInit {

  private _routerState: any;
  private _breedKey: string;

  public breedName: string;
  public subBreedName: string;
  public dogsCollection: {};
  public dogPhotos: string[];

  private cleanView = function(){
    this.dogPhotos = [];
    this.breedName = '';
    this.subBreedName = '';
  };

  constructor(
    public dogService: DogService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    this.dogService._dogs$.subscribe(
      (data: any ) => {
        this.dogsCollection = data;

        if ( this._breedKey ) {
          this.dogPhotos = this.dogsCollection[ this._breedKey ];
        }

      }
    );

    this._routerState = this.route.queryParams.subscribe(params => {

      this.cleanView();

      this.breedName = this.route.snapshot.params.breedKey;

      if ( !this.route.snapshot.queryParams.sub ) {
        this.router.navigate(['/mistake']);
      }

      if ( this.route.snapshot.queryParams.sub !== this.route.snapshot.params.breedKey ) {
        this.subBreedName = this.route.snapshot.queryParams.sub;
      }

      this._breedKey = this.breedName + ( (this.subBreedName) ? '-' + this.subBreedName : '');

      if ( this.dogsCollection[ this._breedKey ] ) {
        this.dogPhotos = this.dogsCollection[ this._breedKey ];
      }  else {
        this.dogService.getdogs( this.breedName, this.subBreedName );

      }

    });

  }

}
