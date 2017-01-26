import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),

})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}

