import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  currentHero: Hero = null;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        console.log(heroes);
        this.heroes = heroes;
      });
  }

  ngOnInit() {
    this.getHeroes();
  }

}
