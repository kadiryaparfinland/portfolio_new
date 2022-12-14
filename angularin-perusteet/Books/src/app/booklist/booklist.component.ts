import { Component, OnInit } from '@angular/core';
import { Book } from '../types-interface/Book';
import { BooklistService } from './booklist.service';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {


  constructor(private booklistService: BooklistService) {  } 

  

  name: string = 'clean code';
  author: string = 'Robert C Martin';
  src: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiCLaXo-haziow4z37tTCzYgsOZ2Bc2kJfRoedHtDO5l93LMo'

  name2: string = 'Pragmatic Programmer';
  author2: string = 'David Thomas';
  src2: string = 'https://m.media-amazon.com/images/I/51IA4hT6jrL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'

  isDisable: Boolean = false;

  isShowing : Boolean = true;

  // let's create an array that has the book information

  books: Book[] = [];

  ngOnInit(): void {
    this.books = this.booklistService.getBooks();
  }

  handleClick(){
    this.isDisable = true; 
  }

  activateButton(){
    this.isDisable = false;
  }

  

  

  toogleBooks(){
    this.isShowing = !this.isShowing;
  }

  addToCard(event: Book){
    alert(event);
  }



}
