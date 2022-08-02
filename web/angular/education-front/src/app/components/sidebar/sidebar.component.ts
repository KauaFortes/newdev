import { Component, OnInit, Input } from '@angular/core';
import { LessonType } from 'src/app/course.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input () lessons: LessonType[] | null = null;

  constructor() { }

  ngOnInit(): void {
    console.log('log no componente room', this.lessons)
  }

}
