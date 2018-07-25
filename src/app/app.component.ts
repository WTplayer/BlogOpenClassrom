import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Blog';
  /*Creating post*/
  p = new Post('First Post', 'Here is the first post, Hi !', 0);
  p1 = new Post('Second Post', 'Here is the second post, Hi !', 1);
  p2 = new Post('Another Post', 'Here is another post, Hi !', -1);
  posts = [
     this.p,
     this.p1,
     this.p2
   ];

  /* Adding post with button */
    onAddPost(){
      let nouveauPost = new Post('Another Post', 'Here is another post, Hi !', 0);
      console.log(nouveauPost);
     this.posts.push(nouveauPost);
    }
  }

// Class Post with date, title, contents and likes => How to did it in another file ?
  class Post {
  created_at;
    date;
  constructor(public title: string, public content: string, public loveIts: number) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.created_at = this.createDate();
  }

  createDate() {
      return new Promise(
  (resolve, reject) => {
   this.date = new Date();
    setTimeout(
    () => {
      resolve(this.date);
    }, 1000
    );
  });
    }
}
