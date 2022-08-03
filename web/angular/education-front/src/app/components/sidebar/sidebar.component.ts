import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LessonType } from 'src/app/course.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output () populateLessonEvent: EventEmitter<any> = new EventEmitter();
  @Input  () lessons: LessonType[] | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  populateLesson(lesson: any) {
    this.populateLessonEvent.emit(lesson)
  }
}
