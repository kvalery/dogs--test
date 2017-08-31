import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnChanges {

  public viewIndex = 0;

  @Input()
  public pictures: string[];

  public actionNext = function(action: boolean){

    if (action) {
      this.viewIndex ++ ;
      if (this.viewIndex > this.pictures.length - 1 ) {
        this.viewIndex = 0;
      };
    }else {
      this.viewIndex -- ;
      if ( this.viewIndex < 0  ) {
        this.viewIndex = this.pictures.length - 1;
      };
    }

  };

  constructor(
  ) { }

  ngOnChanges( changes: SimpleChanges ) {
    if ( changes.pictures ) {
      this.viewIndex = 0;
    }
  }

}
