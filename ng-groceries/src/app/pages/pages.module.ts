import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PaginationDjComponent } from './pagination-dj/pagination-dj.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [SharedModule, PagesRoutingModule],
  declarations: [PaginationDjComponent, IndexComponent]
})
export class PagesModule {}
