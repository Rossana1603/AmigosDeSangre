import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'

})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}

