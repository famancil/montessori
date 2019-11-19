import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import {RouterModule, Route} from '@angular/router';

import { BackgroundImageResolver } from './resolvers/background-image.resolver';

import { AppComponent } from './app.component';
import { ProgressComponent } from './progress/progress.component';
import { ProgressDetailComponent } from './progress-detail/progress-detail.component';
import { HomeComponent } from './home/home.component';
import { ProgressService } from './progress.service';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  //{path: '', component: HomeComponent, resolve: {background: BackgroundImageResolver}},
  {path: 'progress', component: ProgressComponent},
  {path: 'progress/students/:id', component: ProgressDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    ProgressDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [ProgressService,BackgroundImageResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
