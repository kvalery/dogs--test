import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './ui-elements/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from "@angular/router";
import { BreedService } from "./service/breed.service";
import { DogService } from "./service/dog.service";
import { DogViewComponent } from './components/dog-veiw/dog-view.component';
import { SliderComponent } from './ui-elements/slider/slider.component';
import { HomeComponent } from './components/home/home.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';

const RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'breed/:breedKey',
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
    SliderComponent,
    HomeComponent,
    CapitalizePipe
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
