import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratorComponent } from './generator/generator.component';
import { ReactiveFormsModule } from '@angular/forms';
import {GeneratorService} from "./services/generator.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [GeneratorComponent],
  exports: [GeneratorComponent],
  providers: [GeneratorService]
})
export class SharedModule { }
