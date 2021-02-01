import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  declarations: [SharedComponent]
})
export class SharedModule {}
