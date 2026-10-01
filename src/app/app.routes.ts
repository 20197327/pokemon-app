import { Routes } from '@angular/router';
import { Home } from './home/home';
import { KantoPokemon } from './kanto-pokemon/kanto-pokemon';
import { JohtoPokemon } from './johto-pokemon/johto-pokemon';

export const routes: Routes = [
    
{ path: 'home', component: Home },

{ path: 'kanto', component: KantoPokemon },

{ path: 'johto', component: JohtoPokemon },

{ path: '', redirectTo: 'home', pathMatch: 'full' },
];
