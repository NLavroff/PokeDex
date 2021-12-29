import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  pokemons: string [] = [];

  constructor() {
    /*const storagePokemons = localStorage.getItem('pokemons');
    if (!storagePokemons) return;
    this.pokemons = JSON.parse(storagePokemons);*/
  }

  /*storePokemonList() {
    localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
  }*/

  addPokemon(name: string) {
    this.pokemons.push(name);
    //this.storePokemonList
  }

  removePokemon(name : string) {
    //this.pokemons.splice(index, 1);
    //this.storePokemonList();
    this.pokemons.splice(this.pokemons.indexOf(name), 1);
  }

  removePokemonByName(name: string | undefined) {
    if (!name) {
      throw new Error('Pokemon Name should be set');
    }
    this.pokemons.splice(this.pokemons.indexOf(name), 1);
  }

  getNextPokemonName(currentPokemonName: string) {
    const pokemonIndex = this.pokemons.indexOf(currentPokemonName);
    return this.pokemons[pokemonIndex + 1];
  }
}

