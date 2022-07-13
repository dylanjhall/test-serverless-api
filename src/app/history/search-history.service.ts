import { Injectable } from '@angular/core'
import { BehaviorSubject, ReplaySubject, Subscription, tap } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SearchHistoryService {
  private maxHistoryLength = 3
  private history: Array<string> = []

  public historySubscription$ = new ReplaySubject<string>(3)

  constructor() {}

  public AddToHistory(searchText: string): void {
    this.historySubscription$.next(searchText)
  }

  public getHistory(): void {
    const sub = this.historySubscription$.subscribe(search => {
      // console.log(search)
      this.history.push(search)
      console.log(this.history.length)
      // if (this.history.length > this.maxHistoryLength) {
      //   this.history.shift()
      // }
    })
    console.log(this.history)
  }
}
