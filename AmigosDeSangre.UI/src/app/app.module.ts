import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

// Services
import { AlertComponent } from './_directives/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';

// Components for module A
import { HomeComponent} from './home/home.component';
import { LoginComponent } from './login/index';

// Directives

// Shared

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing,
        InfiniteScrollModule
    ],
    providers: [ 
        AlertService,
        AuthenticationService,
        UserService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
