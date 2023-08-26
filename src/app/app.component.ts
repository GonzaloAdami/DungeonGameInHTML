import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inventario = false; // Inicialmente, el div se mostrará
  title = 'DungeonHTML';
  hp = 255;
  mp = 300;
  tp = 100;
  enemyHP = 2255;
  personaje: {hpPerson: number, mpPerson: number, tpPerson: number, dmgPerson: number, armPerson: number};
enemy: {enemyHP: number, enemyDMG: number, enemyARM: number};
  constructor() {
    this.personaje = {
      hpPerson: 255,
      mpPerson: 300,
      tpPerson: 100,
      dmgPerson: 100,
      armPerson: 100,
    };
    this.enemy = {
      enemyHP: 2255,
      enemyDMG: 300,
      enemyARM: 100,
    }
}


  abrirInventario() {
    this.inventario = !this.inventario; // Alternar entre mostrar y ocultar
  }
}
