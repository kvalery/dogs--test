import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from "@angular/router";
import { BreedService } from "./service/breed.service";
import { DogService } from "./service/dog.service";
import { DogViewComponent } from './components/dog-veiw/dog-view/dog-view.component';
import { SliderComponent } from './components/slider/slider/slider.component';

const RouterConfig = [
  { path: 'breed/:key',
    component: DogViewComponent
  },
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageNotFoundComponent,
    DogViewComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(RouterConfig)
  ],
  providers: [BreedService, DogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
