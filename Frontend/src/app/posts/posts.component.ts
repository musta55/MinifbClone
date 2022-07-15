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

  allStatus:any;

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



  onFileSelected(event:any) {

    this.file = event.target.files[0];
    
    let reader = new FileReader();

    if(this.file){
      reader.readAsDataURL(this.file);
      reader.onload = (_event) => {
			let storyData = reader.result;
      
      if(storyData){
        this.newStory.story = storyData;
        this.uploadedImage = storyData;
        console.log('frontend')
        //this.toBase64(storyData);
      }
      
		}
    }
    this.newStory.name = this.userName;
    this.newStory.time = new Date();

    console.log( this.userName)
    this.postService.postStory(this.newStory).subscribe((res)=>{
      if(res){
        console.log('Story Done in frontend');
      }
    })
  }

}
