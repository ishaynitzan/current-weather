import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent implements OnInit {

  constructor() { }

  board: object = [
    [{ _id: "n001", title: "ishay", body: "my first note" }, { _id: "n002", title: "nitzan", body: "my second note" }],
    [{ _id: "n003", title: "ishay", body: "my first note" }, { _id: "n004", title: "nitzan", body: "my second note" }],
    [{ _id: "n004", title: "ishay", body: "my first note" }, { _id: "n005", title: "nitzan", body: "my second note" }],
    [{ _id: "n007", title: "ishay", body: "my first note" }, { _id: "n006", title: "nitzan", body: "my second note" }],
  ]

  ngOnInit(): void {
  }

}
