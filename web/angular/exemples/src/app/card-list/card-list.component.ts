import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input () listParam: string[] = []
  @Input () removeParam: any;

  count = 0

  remove: any

  constructor() { 
  }

  ngOnInit(): void {
  }

}
