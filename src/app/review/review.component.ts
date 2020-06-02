import { Component, OnInit } from '@angular/core';
import { Reviewmodel } from './reviewmodel';



@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {


   anime: Reviewmodel ;
   counter : number ;
  constructor() {
this.anime = new Reviewmodel();
this.anime.title =['One Piece', 'Naruto', 'Hunter X Hunter', 'My Hero Academia', 'One Punch Man'];
this.anime.description =[
    'One Piece is a Japanese anime television.',
    'Nais a Japanese anime television.',
    'HxH is a Japanese anime television.',
    'My Hero Academia is a Japanese anime television.',
    'One Punch Man is a Japanese anime television.' ];
this.anime.author = [
          'Echiro oda', 'Kakashi', 'Leorio', 'All Might', 'Saithama Sensei'
    ];


   }

  ngOnInit(): void {
  }

//   nextAnime() {
// this.anime.title = this.title[0];
// this.anime.description = this.description[0];
// this.anime.author = this.author[0];
// this.counter ++;
//}
  


}
