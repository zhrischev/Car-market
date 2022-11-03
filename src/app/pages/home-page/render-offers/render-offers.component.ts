import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/models/offer.model';

@Component({
  selector: 'app-render-offers',
  templateUrl: './render-offers.component.html',
  styleUrls: ['./render-offers.component.css'],
})
export class RenderOffersComponent implements OnInit {
  @Input() offers: Offer[];
  page = 1;
  pageSize = 2;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  changePageSize(size: number) {
    this.pageSize = size;
    console.log(this.pageSize);
    this.router.navigate(['home']);
  }
}
