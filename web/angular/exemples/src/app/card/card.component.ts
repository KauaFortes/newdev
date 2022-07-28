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

  color: string = '#000'

  showFruit: boolean = true
  author: string = 'filipe'

  count = 0

  addNameOnList: any
  remove: any

  list: string[] = []

  constructor() { 
    this.remove = (index: number) => {
      console.log('->', index)
      this.list.splice(index, 1)
    }
    

    this.addNameOnList = () => {
      this.list.push('Kauã')
      console.log('adicionou na lista', this.list)
    }
  }

  ngOnInit(): void {
  }

}
