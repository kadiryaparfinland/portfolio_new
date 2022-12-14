import { Injectable } from '@angular/core';
import { Book } from '../types-interface/Book';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  card: Book[] = [];

  constructor() { }

  add(book: Book){

    this.card.push(book);

  }

  get(){
    return this.card;
  }

  remove(book: Book){
    this.card = this.card.filter((b) => b != book);
  }

}
