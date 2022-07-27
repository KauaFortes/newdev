import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input () nameParam: string[] = []
  @Input () bioParam: string = ''
  @Input () subtitleParam: string = ''
  @Input () link1Param: string = ''
  @Input () link2Param: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
