import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    componentTitle = 'i am component title from .ts file';

    clickHandler() {
        console.log('this is event binding part ');
    }

}


