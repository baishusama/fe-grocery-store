import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* 3rd Part */
// import { NgZorroAntdModule } from 'ng-zorro-antd';

/* Custom */
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, PaginationComponent],
  declarations: [PaginationComponent]
})
export class SharedModule {}
