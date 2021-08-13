import { Component } from '@angular/core';
import { RootService } from './root.service';
import { StaticService } from './static.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [RootService]
})
export class AppComponent {
    title = 'di';

    constructor(private rootService: RootService) {}
    // constructor(private staticService: StaticService) {
    //     console.log(`[AppComponent] Inject StaticService succuss, StaticService's logger: ${staticService.logger.name}`);
    // }
}
