import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import {
  fromEvent,
  Observable,
  of,
  ReplaySubject,
  tap,
  takeUntil,
  Subscription,
} from 'rxjs'
import { SearchHistoryService } from '../history/search-history.service'

import { HttpServiceService } from '../http-service.service'
import { Images } from '../images'

@Component({
  selector: 'app-serverless-tester',
  templateUrl: './serverless-tester.component.html',
  styleUrls: ['./serverless-tester.component.css'],
})
export class ServerlessTesterComponent implements OnInit {
  //apiUrl = 'http://127.0.0.1:8787'
  apiUrl = 'https://serverless-api.dylanjhall.workers.dev/'
  searchInput = ''
  requestBody: string = ''

  @ViewChild('searchBox') searchBox!: ElementRef<HTMLInputElement>

  imagesResp: Images[] = []
  public displayHistory = ''

  serviceResponse$ = new Observable<Images[]>()

  constructor(
    private httpService: HttpServiceService,
    private historyService: SearchHistoryService,
  ) {}

  ngOnInit(): void {}

  ngOnDestroy() {}

  testApi(): void {
    this.requestBody = `{"query": "${this.searchInput}"}`
    const images$ = this.httpService.sendPostRequest(
      this.apiUrl,
      this.requestBody,
    )
    images$.subscribe(resp => {
      this.imagesResp = resp
    })

    this.historyService.AddToHistory(this.searchInput)
  }

  getHistoryFromService(): void {
    this.historyService.getHistory()
    //this.displayHistory = history.join(',')
  }
}
