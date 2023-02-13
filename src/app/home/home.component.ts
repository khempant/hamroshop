import { Component } from '@angular/core';
import { SuggestedProduct } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
suggestedProducts: SuggestedProduct[] = [
  {
    banerimage:'Baner/artandcraftcloth1.jpg',
    category: {
      id: 0,
      category: 'art-designs',
      subCategory: 'artandcraft',
    },
    },
  {
    banerimage:'Baner/g333.jpg',
  category: {
    id: 1,
    category: 'food-items',
    subCategory: 'grocery',
    
  },
},
{
  banerimage:'Baner/clothing111.jpg',
  category: {
    id: 1,
    category: 'clothes',
    subCategory: 'lady-clothes',
  },
  },
];
constructor(){}

}
