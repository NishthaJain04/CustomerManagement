import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { AboutModule } from './about/about.module';
import { CustomersComponent } from './customers/customers.component';
// import { CustomersModule } from './customers/customers.module';
import { OrdersComponent } from './orders/orders.component';
import { CustomersGridComponent } from './customers/customers-grid.component';
import { CustomersCardComponent} from './customers/customers-card.component';
import { MapComponent } from './shared/map/map.component';
// import { SharedModule } from './shared/shared.module';
import { MapPointComponent } from './shared/map/mapPoint.component';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  imports: [
    BrowserModule,
    LoginModule,          // Eager loaded since we may need to go here right away as browser loads based on route user enters
    AppRoutingModule,     // Main routes for application
    CoreModule,
    AboutModule,
    // CustomersModule         // Singleton objects (services, components that are loaded only once, etc.)
    // SharedModule          // Shared (multi-instance) objects
  ],
  declarations: [AppComponent, CustomersComponent, OrdersComponent, CustomersGridComponent, CustomersCardComponent, MapComponent, MapPointComponent, CustomerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
