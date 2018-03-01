import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserPipe } from './pipes/user.pipe';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    UserPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserPipe, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
