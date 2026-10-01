import { Component, input, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-pokemon-info',
  styleUrl: './pokemon-info.css',
  templateUrl: './pokemon-info.html',
})
export class PokemonInfo {

  photo = input<string>();
  name = input.required<string>();
  region = input.required<string>();
  type = input.required<string>();
  itemName = input<string>();
  item = input<string>();
  description = input.required<string>();



}
