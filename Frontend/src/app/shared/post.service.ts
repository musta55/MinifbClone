import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { story } from './story';

export class Post {
  _id: string = "";
  first_name: string = "";
  post_name: string = "";
}

@Injectable({
  providedIn: 'root'
})

export class PostService {

  endPointPost = 'http://localhost:9001/post';
  endPointStory = 'http://localhost:9001/story';
  allStatus: any;

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  });

  storyHeader = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  });


  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getPosts(): Observable<Post> {
    // return this.httpClient.get<Post>(this.endPoint + '/api/posts')
    //   .pipe(
    //     retry(1),
    //     catchError(this.httpError)
    //   )
    return this.httpClient.get<Post>(this.endPointPost + '')
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
  }

  addPost(post: any): Observable<Post> {
    return this.httpClient.post<Post>(this.endPointPost + '', JSON.stringify(post), this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
  }


  postStory(story: any): Observable<any> {
    return this.httpClient.post(this.endPointStory + '', story, { headers: this.storyHeader });
  }



  getStories() {
    return this.httpClient.get<story>(this.endPointStory + '', { headers: this.headers, observe: "response" });
  }

  httpError(error: { error: { message: string; }; status: any; message: any; }) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }



}