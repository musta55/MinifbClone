import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { story } from '../shared/story';

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

  allStatus: any;
  allStory: any;
  updatedDate: any;


  question = "?";

  fileName = '';

  uploadedImage: any;


  file: File | null = null;

  newStory: story = {
    name: '',
    story: '',
    time: new Date()
  }
  fetchedStories: any;
  minioHost: string="127.0.0.1";
  port: string="9000";
  bucket: string="minifb";


  constructor(private postService: PostService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    //Fetch userDetails from UserService
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        this.userName = this.userDetails.fullName;
        this.fetchPosts();
        this.fetchStory();
      },
      err => {
        console.log(err);

      }

    );

    //Fetch Post
   
  }

  addPost() {
    const newPost = {
      first_name: this.userDetails.fullName,
      post_name: this.Posts.post_name
    }
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
      this.Posts = slicedArray;
    //  console.log(this.Posts)
    })
  }

  fetchStory() {
 this.postService.getStories().subscribe((data) =>{
      this.allStory = data.body;
      this.fetchedStories = this.allStory;


      const filtered = this.fetchedStories.filter((story) => {
        return story.name != this.userDetails.fullName;
      });
      this.fetchedStories = filtered;
      const slicedArray = this.fetchedStories.slice(0, 10);
      this.fetchedStories = slicedArray;


      for(let i=0;i<this.fetchedStories.length;i++){
        this.fetchedStories[i].storyUUID = "http://"+this.minioHost+":"+this.port+"/"+this.bucket+"/"+this.fetchedStories[i].storyUUID;
        console.log(this.fetchedStories[i].name);
      }
    });
  
  }

  onFileSelected(event: any) {

    this.file = event.target.files[0];
    if (this.file) {

      const formData = new FormData();
      formData.append('files', this.file, this.file.name);
      formData.append('name', this.userName);


      this.postService.postStory(formData).subscribe((res) => {
        if (res) {
          console.log('Story Done');
        }
          this.fetchStory();
      })
    }
  
  }


  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }


}
