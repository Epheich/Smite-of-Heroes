import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [];

    constructor(private heroService: HeroService, private messageService: MessageService) {
      console.log('Estoy en el constructor de HeroesComponent');
      
    }
    
    ngOnInit(): void {
      this.getHeroes();
      console.log('Estoy en el metodo ngOnInit de HeroesComponent');

    }

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
      this.messageService.add(`You'r Hero: Hero ${hero.name}, id=${hero.id}`);
    }
    getHeroes(): void {
      this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes);
    }

  }
  
