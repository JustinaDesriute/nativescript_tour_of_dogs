import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../services/data.service";

@Component({
    selector: "ns-dog",
    templateUrl: "./dog.component.html",
    moduleId: module.id,
})
export class DogComponent implements OnInit {

    public dog: any;

    public constructor(private location: Location, private route: ActivatedRoute, private data: DataService) {
        this.dog = {};
    }

    public ngOnInit() {
        this.route.params.subscribe(params => {
            this.dog = this.data.getDog(params["id"]);
        });
    }

    public cancel() {
        this.location.back();
    }

    public save(id: number, name: string) {
        if(name != "") {
            this.data.edit(id, name);
            this.location.back();
        }
    }

}