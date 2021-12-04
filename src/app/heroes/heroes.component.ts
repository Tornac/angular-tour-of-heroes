import { Component, OnInit } from "@angular/core"
import { Hero } from "../hero"
import { HeroService } from "../hero.service"
import { MessageService } from "../message.service"

@Component({
    selector: "app-heroes",
    templateUrl: "./heroes.component.html",
    styleUrls: ["./heroes.component.css"],
})
export class HeroesComponent implements OnInit {
    heroes: Hero[] = []

    constructor(private heroService: HeroService, private messageService: MessageService) {}

    ngOnInit(): void {
        this.heroService.getHeroes().subscribe((hs) => {
            this.heroes = hs
        })
    }

    add(name: string): void {
        name = name.trim()
        if (!name) return
        this.heroService.addHero({ name: name } as Hero).subscribe((hero) => {
            this.heroes = [...this.heroes, hero]
        })
    }

    delete(hero: Hero): void {
        this.heroService.deleteHero(hero.id).subscribe((deletedHero) => {
            this.heroes = this.heroes.filter((h) => h.id !== hero.id)
        })
    }
}
