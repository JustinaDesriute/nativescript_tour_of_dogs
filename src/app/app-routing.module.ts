import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ParentComponent } from "./components/parent/parent.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DogsComponent } from "./components/dogs/dogs.component";
import { DogComponent } from "./components/dog/dog.component";

const routes: Routes = [
    {
        path: "", component: ParentComponent, children: [
            { path: "", component: DashboardComponent },
            { path: "dogs", component: DogsComponent },
            { path: "dog/:id", component: DogComponent },
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }