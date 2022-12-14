import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {

  constructor() { }

  getBooks(){
      return [
        {
          name: 'clean code',
          author: 'Robert C Martin',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiCLaXo-haziow4z37tTCzYgsOZ2Bc2kJfRoedHtDO5l93LMo',
          amount: 600,
        },

        {
          name: 'clean code',
          author: 'Robert C Martin',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiCLaXo-haziow4z37tTCzYgsOZ2Bc2kJfRoedHtDO5l93LMo',
          amount: 700
        },
    ];
  }
}
