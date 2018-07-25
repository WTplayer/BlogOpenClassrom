import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postLoveIts: number;
  @Input() postContent: string;
  @Input() postCreatedAt: Date;
  @Input() posts = [];
  @Input() post;
  constructor() { }

  ngOnInit() {
  }

  /* Attention à l'ordre ! */
  onRemove() {
   console.log(this.posts.indexOf(this.post));
   let indice = this.posts.indexOf(this.post);
   this.arrayUnsetByIndex(this.posts , indice);
  }

  arrayUnsetByIndex(array, index) {
    array.splice(index, 1);
  }

  // button like and dislike
  onLoveIt() {
    this.postLoveIts++;
  }

  onDontLoveIt() {
    this.postLoveIts--;
  }
}

