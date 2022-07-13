import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HttpServiceService } from './http-service.service'
import { ServerlessTesterComponent } from './serverless-tester/serverless-tester.component'

@NgModule({
  declarations: [AppComponent, ServerlessTesterComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
