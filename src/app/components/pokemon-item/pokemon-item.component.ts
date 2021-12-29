import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})

export class PokemonItemComponent {
  //@Input() name:string | undefined;
  //@Output() removeClick = new EventEmitter();
  @Input('pokemonName') name = '';


  constructor(private loggingService: LoggingService, private pokemonService: PokemonService, private router: Router) {}

  @HostListener('click') click(event:Event) {
    this.goToPokemon();
  }

  goToPokemon() {
    this.router.navigate(['/pokemon', this.name]);
  }

  /*remove($event: MouseEvent) {
    $event.stopPropagation;
    this.pokemonService.removePokemonByName(this.name);
  }*/

  onRemoveClick() {
    this.pokemonService.removePokemon(this.name);
    this.loggingService.logItemRemoved(this.name);
  }

}

