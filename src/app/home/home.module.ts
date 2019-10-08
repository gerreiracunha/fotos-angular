import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent } from './singin/singin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';



@NgModule({
  declarations: [SinginComponent],
  imports: [
    CommonModule,VmessageModule,
    ReactiveFormsModule
  ]
})

export class HomeModule { }
