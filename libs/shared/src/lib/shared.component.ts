import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'shared',
    templateUrl: './shared.component.html',
    styleUrls: ['./shared.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedComponent {
}
