import { Injectable } from "@angular/core";

@Injectable()
export class DataService {

    private dogs: Array<any>;

    public constructor() {
        this.dogs = [
            {
                "id": 1,
                "name": "Cherry",
                "breed": "Rottweiler"
            },
            {
                "id": 2,
                "name": "Dark",
                "breed": "Caucasian Mountain Dog"
            },
            {
                "id": 3,
                "name": "Mini",
                "breed": "Puddle"
            },
            {
                "id": 4,
                "name": "Sparky",
                "breed": "Doberman"
            },
            {
                "id": 5,
                "name": "Kirk",
                "breed": "Retriever"
            }
        ];
    }

    public getDogs(): Array<any> {
        return this.dogs;
    }

    public getDog(id: number): any {
        for (let i = 0; i < this.dogs.length; i++) {
            if (this.dogs[i].id == id) {
                return this.dogs[i];
            }
        }
        return -1;
    }

    public delete(id: number) {
        for (let i = 0; i < this.dogs.length; i++) {
            if (this.dogs[i].id == id) {
                this.dogs.splice(i, 1);
                break;
            }
        }
    }

    public add(value: string) {
        this.dogs.push(
            {
                "id": Math.floor(Math.random() * (100 - 1)) + 1,
                "name": value
            }
        );
    }

    public edit(id: number, name: string) {
        for (let i = 0; i < this.dogs.length; i++) {
            if (this.dogs[i].id == id) {
                this.dogs[i].name = name;
                break;
            }
        }
    }

}