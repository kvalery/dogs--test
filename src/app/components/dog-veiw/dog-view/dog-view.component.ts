import { Component, OnInit } from '@angular/core';
import {DogService} from "../../../service/dog.service";

@Component({
  selector: 'app-dog-view',
  templateUrl: './dog-view.component.html',
  styleUrls: ['./dog-view.component.scss']
})
export class DogViewComponent implements OnInit {

  public dogs: any;


  constructor(
    public dogService: DogService
  ) { }

  ngOnInit() {
    this.dogService.getdogs();

    this.dogService._dogs$.subscribe(
      (data: any ) => {
        console.log(data)
        this.dogs = data;
      },
      error => {
        console.log('error');
      }
    );

  }

}
