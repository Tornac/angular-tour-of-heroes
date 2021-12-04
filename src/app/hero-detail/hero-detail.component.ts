import { Location } from "@angular/common"
import { Component, Input, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Hero } from "../hero"
import { HeroService } from "../hero.service"

@Component({
    selector: "app-hero-detail",
    templateUrl: "./hero-detail.component.html",
    styleUrls: ["./hero-detail.component.css"],
})
export class HeroDetailComponent implements OnInit {
    @Input() hero?: Hero

    constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) {}

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get("id"))
        this.heroService.getHeroById(id).subscribe((hero) => {
            this.hero = hero
        })
    }

    goBack(): void {
        this.location.back()
    }
}
