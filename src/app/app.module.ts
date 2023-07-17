import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { MetadataLayoutComponent } from './metadata-layout/metadata-layout.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CardComponentComponent,
    MetadataLayoutComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
