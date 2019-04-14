import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ParentComponent } from "./components/parent/parent.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DogsComponent } from "./components/dogs/dogs.component";
import { DogComponent } from "./components/dog/dog.component";

import { DataService } from "./services/data.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        ParentComponent,
        DashboardComponent,
        DogsComponent,
        DogComponent,
    ],
    providers: [DataService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }