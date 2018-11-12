import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AreaComponent } from './area/area.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UsersComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        { path: 'users', component: UsersComponent }
  ]
    
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
