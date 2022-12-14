import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardService } from '../services/card.service';
import { Book } from '../types-interface/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  isInCart: Boolean = false;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  addToCard(event: any){
    this.isInCart = true;
    this.cardService.add(this.book);
    this.bookEmitter.emit(this.book);
  }

  removeFromCart(){
    this.isInCart = false;
    this.cardService.remove(this.book);
  }

}
