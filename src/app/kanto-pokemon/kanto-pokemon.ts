import { Component } from '@angular/core';
import { PokemonInfo } from '../pokemon-info/pokemon-info';
import { Pokemon } from '../model/model';


@Component({
  imports: [PokemonInfo],
  selector: 'app-kanto-pokemon',
  styleUrl: './kanto-pokemon.css',
  templateUrl: './kanto-pokemon.html',
})
export class KantoPokemon {

  myPokemon: Pokemon[] = [
    {
      photo : 'venusaur.png',
      name : 'Venusaur, the Seed Pokemon',
      region : 'Kanto',
      type : 'Grass Type Pokemon',
      item : 'miracleseed.png',
      itemName : 'Miracle Seed',
      description : 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.'
    },
    {
      photo : 'nidoking.png',
      name : 'Nidoking, the Drill Pokemon',
      region : 'Kanto',
      type : 'Poison/Ground Type Pokemon',
      item : 'machobrace.png',
      itemName : 'Macho Brace',
      description : 'It is recognized by its rock-hard hide and its extended horn. Be careful with the horn as it contains venom.'
    },
    {
      photo : 'gyarados.png',
      name : 'Gyarados, the Atrocious Pokemon',
      region : 'Kanto',
      type : 'Water/Flying Type Pokemon',
      item : 'mysticwater.png',
      itemName : 'Mystic Water',
      description : 'Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.'
    },
    {
      photo : 'snorlax.png',
      name : 'Snorlax, the Sleeping Pokemon',
      region : 'Kanto',
      type : 'Normal Type Pokemon',
      item : 'leftovers.png',
      itemName : 'Leftovers',
      description : 'It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.'
    },
    {
      photo : 'magneton.png',
      name : 'Magneton, the Magnet Pokemon',
      region : 'Kanto',
      type : 'Electric/Steel Type Pokemon',
      item : 'magnet.png',
      itemName : 'Magnet',
      description : 'Formed by several MAGNEMITE linked together. They frequently appear when sunspots flare up.'
    },
    {
      photo : 'haunter.png',
      name : 'Haunter, the Gas Pokemon',
      region : 'Kanto',
      type : 'Ghost/Poison Type Pokemon',
      item : 'poisonbarb.png',
      itemName : 'Poison Barb',
      description : 'If you get the feeling of being watched in darkness when nobody is around, HAUNTER is there.'
    }
];

}
