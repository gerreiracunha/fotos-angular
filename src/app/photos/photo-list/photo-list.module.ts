import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from '../photo-list/photos/photos.component';
import { PhotoListComponent } from './photo-list.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
  declarations: [
      LoadButtonComponent
    , PhotosComponent
    , PhotoListComponent
    , FilterByDescription
    , SearchComponent],
  imports: [
    CommonModule
    , PhotoModule
    , CardModule
    , DarkenOnHoverModule
  ]
})
export class PhotoListModule { }
