import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent implements OnInit {
  public pageTitle = 'Sorry, but this page does not exist!';
  public underConstruction = this._router.routerState.snapshot.url === '/under-construction';
  public guidance = 'Please try starting again by visiting the';
  public bobaFett = '../../assets/img/boba_fett.svg';
  public banner = '../../assets/img/construction_banner.svg'
  constructor(private _router: Router) {}

  public ngOnInit(): void {
    if(this.underConstruction) {
      this.pageTitle = 'Sorry, but this page in under Construction!'
      this.guidance = 'Whilst this being built,take a look around via the'
    }
  }
}
