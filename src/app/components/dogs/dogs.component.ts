import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../../services/data.service";

@Component({
    selector: "ns-dogs",
    templateUrl: "./dogs.component.html",
    moduleId: module.id,

})
export class DogsComponent {

    public dogs: Array<any>;

    public constructor(private router: Router, private data: DataService) {
        this.dogs = this.data.getDogs();
    }

    public add(value: string) {
        if(value != "") {
            this.data.add(value);
        }
    }

    public remove(id: number) {
        this.data.delete(id);
    }

    public edit(id: number) {
        this.router.navigate(["/dog", id]);
    }

}