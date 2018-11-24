import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [CommonModule, MatSelectModule],
  exports: [MatSelectModule],
  declarations: []
})
export class SharedModule {}
