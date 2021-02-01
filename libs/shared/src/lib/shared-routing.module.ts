import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedComponent } from './shared.component';

const routes: Route[] = [
    {
        path: '',
        component: SharedComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(
            routes
        ),
    ],
    exports: [
        RouterModule
    ]
})
export class SharedRoutingModule {}
