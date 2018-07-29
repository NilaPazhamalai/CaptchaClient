import { HttpClientModule } from '@angular/common/http';
import { CaptchaService } from './service/captcha.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CaptchaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
