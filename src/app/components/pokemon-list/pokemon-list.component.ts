import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @ViewChild('name input') nameInputElementRef: ElementRef | undefined;


  ngOnInit(): void {
  }

  buttonClicked = false;
  buttonRemoved = false;
  pokemonName = '';
  pokemons: string[] = [];
  removedPokemon: string | undefined;


  pokemonNameChanged($event: Event) {
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

  generateBackgroundColor() {
    return this.pokemons.length > 5 ? '#06d6a0' : '#ffd166';
  }
}
