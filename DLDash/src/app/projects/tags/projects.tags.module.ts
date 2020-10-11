import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TagComponent } from './projects.tags.component';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  imports: [
    BrowserAnimationsModule, FormsModule, ReactiveFormsModule, TagInputModule, HttpClientModule
  ],
  declarations: [TagComponent],
  bootstrap: [TagComponent]
})
export class TagsModule { }
