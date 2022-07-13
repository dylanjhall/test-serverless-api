import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Images } from './images'

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  constructor(private http: HttpClient) {}

  headers: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  })
  options = {
    headers: this.headers,
  }

  sendPostRequest(url: string, body: string): Observable<Images[]> {
    return this.http.post<Images[]>(url, body, this.options)
  }
}
