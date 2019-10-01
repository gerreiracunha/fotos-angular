import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { CardModule } from '../shared/components/card/card.module';



@NgModule({
  imports: [
      HttpClientModule
    , CommonModule
    , PhotoListModule
    , PhotoFormModule
    , PhotoModule
    , DarkenOnHoverModule
    , CardModule]
})
export class PhotosModule { }
