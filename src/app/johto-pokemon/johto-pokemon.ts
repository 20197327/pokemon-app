import { Component } from '@angular/core';
import { PokemonInfo } from '../pokemon-info/pokemon-info';
import { Pokemon } from '../model/model';


@Component({
  imports: [PokemonInfo],
  selector: 'app-johto-pokemon',
  styleUrl: './johto-pokemon.css',
  templateUrl: './johto-pokemon.html',
})
export class JohtoPokemon {

  myPokemon: Pokemon[] = [
    {
      photo : 'typhlosion.png',
      name : 'Typhlosion, the Volcano Pokemon',
      region : 'Johto',
      type : 'Fire Type Pokemon',
      item : 'flameplate.png',
      itemName : 'Flame Plate',
      description : 'If its rage peaks, it becomes so hot that anything that touches it will instantly go up in flames.'
    },
    {
      photo : 'lugia.png',
      name : 'Lugia, the Diving Pokemon',
      region : 'Johto',
      type : 'Psychic/Flying Type Pokemon',
      item : 'sharpbeak.png',
      itemName : 'Sharp Beak',
      description : 'It is said to be the guardian of the seas. It is rumored to have been seen on the night of a storm.'
    },
    {
      photo : 'espeon.png',
      name : 'Espeon, the Sun Pokemon',
      region : 'Johto',
      type : 'Psychic Type Pokemon',
      item : 'oddincense.png',
      itemName : 'Odd Incense',
      description : 'It uses the fine hair that covers its body to sense air currents and predict its enemy’s actions.'
    },
    {
      photo : 'ampharos.png',
      name : 'Ampharos, the Light Pokemon',
      region : 'Johto',
      type : 'Electric Type Pokemon',
      item : 'scopelens.png',
      itemName : 'Scope Lens',
      description : 'The tail’s tip shines brightly and can be seen from far away. It acts as a beacon for lost people.'
    },
    {
      photo : 'houndoom.png',
      name : 'Houndoom, the Dark Pokemon',
      region : 'Johto',
      type : 'Dark/Fire Type Pokemon',
      item : 'blackglasses.png',
      itemName : 'Black Glasses',
      description : 'If you are burned by the flames it shoots from its mouth, the pain will never go away.'
    },
    {
      photo : 'raikou.png',
      name : 'Raikou, the Thunder Pokemon',
      region : 'Johto',
      type : 'Electric Type Pokemon',
      item : 'choicescarf.png',
      itemName : 'Choice Scarf',
      description : 'The rain clouds it carries let it fire thunderbolts at will. They say that it descended with lightning.'
    }
];

}
