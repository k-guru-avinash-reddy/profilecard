import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { AddProfileComponent } from './components/add-profile/add-profile.component';
import { TruncatePipe } from './components/pipes/truncate.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    AddProfileComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
