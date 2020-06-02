import { Component, OnInit, Input } from '@angular/core';
import { Reviewmodel } from '../../reviewmodel';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author : any;
  @Input ('animeauthor') authorobjt : Reviewmodel ;
  constructor() {

   }

  ngOnInit(): void {
    this.author = this.authorobjt;
  }

}
