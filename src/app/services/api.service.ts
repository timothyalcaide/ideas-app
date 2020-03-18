import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idea, IdeaDTO } from '@app/models/idea.model';
import { User } from '@app/models/user.model';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: string = `${environment.api_server}/api`

  constructor(private http: HttpClient, private auth: AuthService) { }

  private request(
    method: string,
    endpoint: string,
    body?: any
  ): Observable<any> {
    const url = `${this.api}/${endpoint}`
    return this.http.request(method, url, {
      body,
      headers: { authorization: `Bearer ${this.auth.token}` }
    })
  }

  getUsers(page?: string): Observable<User[]> {
    const endpoint = page ? `users?page=${page}` : 'users'
    return this.request('GET', endpoint)
  }

  getUser(username: string): Observable<User> {
    return this.request('GET', `users/${username}`)
  }

  getIdeas(page?: string): Observable<Idea[]> {
    const endpoint = page ? `ideas?page=${page}` : 'ideas'
    return this.request('GET', endpoint)
  }

  getNewestIdeas(page?: string): Observable<Idea[]> {
    const endpoint = page ? `ideas/newest?page=${page}` : 'ideas/newest'
    return this.request('GET', endpoint)
  }

  getIdea(id: string): Observable<Idea> {
    return this.request('GET', `idea/${id}`)
  }

  createIdea(id: string, data: IdeaDTO): Observable<Idea> {
    return this.request('POST', `ideas/${id}`, DataTransfer)
  }

  updateIdea(id: string, data: Partial<IdeaDTO>): Observable<Idea> {
    return this.request('PUT', `ideas/${id}`, data)
  }

  deleteIdea(id: string): Observable<Idea> {
    return this.request('DELETE', `ideas/${id}`)
  }

  upvoteIdea(id: string): Observable<Idea> {
    return this.request('POST', `ideas/${id}/upvote`)
  }

  downvoteIdea(id: string): Observable<Idea> {
    return this.request('POST', `ideas/${id}/downvote`)
  }

  bookmarkIdea(id: string): Observable<Idea> {
    return this.request('POST', `ideas/${id}/bookmark`)
  }

  unbookmarkIdea(id: string): Observable<Idea> {
    return this.request('DELETE', `ideas/${id}/bookmark`)
  }

  getCommentByIdea(idea: string, page?: string): Observable<Comment[]> {
    const endpoint = page
      ? `comments/idea/${idea}?page=${page}`
      : `comments/idea/${idea}`
    return this.request('GET', endpoint)
  }

  getCommentByUser(user: string, page?: string): Observable<Comment[]> {
    const endpoint = page
      ? `comments/user/${user}?page=${page}`
      : `comments/user/${user}`
    return this.request('GET', endpoint)
  }

  getComment(id: string): Observable<Comment> {
    return this.request('GET', `idea/${id}`)
  }

  createComment(idea: string, data): Observable<Comment> {
    return this.request('POST', `comment/idea/${idea}`, data)
  }

  deleteComment(id: string): Observable<Comment> {
    return this.request('DELETE', `comment/${id}`)
  }

}
