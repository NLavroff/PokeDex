import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})

export class PokemonItemComponent {
  @Input() name:string | undefined;
  @Output() removeClick = new EventEmitter();


  /*constructor(private pokemonService: PokemonsService, private router: Router) {}

  @HostListener('click') click() {
    this.goToPokemon();
  }

  goToPokemon(index:number){
    this.router.navigate(['/pokemon', this.name]);
  }
*/
  remove() {
    console.log('remove item');
    this.removeClick.emit();
  }

}

