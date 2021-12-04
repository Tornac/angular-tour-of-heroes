import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs"
import { Hero } from "./hero"
import { MessageService } from "./message.service"
import { HEROES } from "./mock-heroes"

@Injectable({
    providedIn: "root",
})
export class HeroService {
    constructor(private messageService: MessageService) {}

    getHeroes(): Observable<Hero[]> {
        this.messageService.add("HeroService: fetching heroes")
        return of(HEROES)
    }

    getHeroById(id: number): Observable<Hero | undefined> {
        this.messageService.add(`HeroService: fetching hero by id=${id}`)
        return of(HEROES.find((it) => it.id == id))
    }
}
