import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService]
})
export class PostsComponent implements OnInit {
  userDetails;

  Posts: any = [];
  userName: string = "";
  constructor(private postService: PostService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    //Fetch userDetails from UserService
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        this.userName = this.userDetails.fullName;
      },
      err => {
        console.log(err);

      }
    );

    //Fetch Post
    this.fetchPosts()
  }

  addPost() {
    const newPost = {
      first_name: this.userDetails.fullName,
      post_name: this.Posts.post_name
    }
    console.log("Add post er moddhe user details: "+this.userDetails);
    this.postService.addPost(newPost)
      .subscribe(post => {
        this.Posts.push(post);
        this.fetchPosts();
       
      })
  }
  fetchPosts() {
    return this.postService.getPosts().subscribe((data: {}) => {
     
      this.Posts = data;
      const filtered = this.Posts.filter((post) => {
        return post.first_name != this.userDetails.fullName;
      });
      this.Posts = filtered;
      const slicedArray = this.Posts.slice(0, 10);
      this.Posts=slicedArray;
      console.log(this.Posts)
    })
  }
  

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
  // remove(_id: any) {
  //   this.postService.deletePost(_id).subscribe(res => {
  //     this.fetchUsers();
  //   })
  // }

}
