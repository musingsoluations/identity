import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LoaderService {

  private loaderStatus = new Subject<boolean>();
  public loaderState = this.loaderStatus.asObservable();

  public ShowLoader()
  {
    this.loaderStatus.next(true);
  }

  public  HideLoader()
  {
    this.loaderStatus.next(false);
  }
  constructor() { }
}
