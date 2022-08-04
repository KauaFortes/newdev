import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input () videoId!: string;

  urlVideo!: string;

  constructor() { }

  ngOnInit(): void {
    this.urlVideo = 'https://www.youtube.com/embed/${this.videoId}';
  }

}
