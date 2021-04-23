import { Component, OnInit } from '@angular/core';
import { LoaderService } from "../loader.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  show = false;

  private subscription: Subscription;

  constructor(private loaderService: LoaderService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription = this.loaderService.loaderState
      .subscribe({
        next: (result: any) => {

        },
        error: (err: any) => {

        }
      });
  }

}
