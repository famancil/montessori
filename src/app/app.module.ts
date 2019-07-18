import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { ProgressDetailComponent } from './progress-detail/progress-detail.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'progress', component: ProgressComponent},
  {path: 'studentDetail/1', component: ProgressDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgressComponent,
    ProgressDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
