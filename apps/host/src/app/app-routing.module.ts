import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from '../environments/environment';

const routes = [
    {
        path: '',
        loadChildren: () =>
            loadRemoteModule({
                // Skipped - already loaded upfront:
                remoteEntry: `${environment.mfHost}/shared.js`,
                remoteName: 'shared',
                exposedModule: 'shared'
            })
            .then(m => m.SharedModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            { initialNavigation: 'enabled' },
        ),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
