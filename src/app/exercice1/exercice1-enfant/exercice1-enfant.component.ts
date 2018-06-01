import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() public compteur: number;
  @Output() public changementCompteur: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementer(): void {
    this.compteur++;
    this.changementCompteur.emit(this.compteur);
  }

  decrementer(): void {
    this.compteur--;
    this.changementCompteur.emit(this.compteur);
  }

}
