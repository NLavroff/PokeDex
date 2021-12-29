import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @ViewChild("name input") nameInputElementRef: ElementRef | undefined;
  pokemonName = '';
  pokemons: string[] = [];

  constructor(private loggingService: LoggingService, private pokemonService: PokemonService) {
    this.pokemons = this.pokemonService.pokemons;
  }
  ngOnInit(): void {
  }

  buttonClicked = false;
  buttonRemoved = false;
  removedPokemon: string | undefined;

  onAddPokemon(pokemonName:string) {
    
    this.loggingService.logItemCreated(this.pokemonName);
    this.pokemonService.addPokemon(this.pokemonName);
    if(this.pokemonName) {
      this.buttonClicked = true;
      this.buttonRemoved = false;
  }
}

  /*pokemonNameChanged($event: Event) {
    console.log($event);
    const inputElement = $event.target as HTMLInputElement;
    this.pokemonName = inputElement.value;
  }

  addPokemon() {
    if(this.pokemonName) {
    this.buttonClicked = true;
    this.buttonRemoved = false;

    setTimeout(() => {
      this.buttonClicked = false;
    }, 2000);

    this.pokemons.push(this.pokemonName);
    console.log(this.pokemons);
    }
    this.pokemonName ='';
  }

  removePokemon(index: number) {
    this.buttonRemoved = true;
    this.buttonClicked = false;

    console.log('remove list' + index);
    this.removedPokemon = this.pokemons[index];
    this.pokemons.splice(index, 1);

    setTimeout(() => {
      this.buttonRemoved = false;
    }, 2000);
  }
*/
  generateBackgroundColor() {
    return this.pokemons.length > 5 ? '#06d6a0' : '#ffd166';
  }
}
