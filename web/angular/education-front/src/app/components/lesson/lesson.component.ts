import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LessonResponseType, LessonService } from 'src/app/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  @Output () getLessonEvent: EventEmitter<any> = new EventEmitter()
  @Input  () lessonId?: number;
  @Input  () title?: string;

  lessonService: LessonService;
  lesson: LessonResponseType

  constructor(lessonService: LessonService) {
    this.lessonService = lessonService;
    this.lesson = {} as LessonResponseType;
  }

  ngOnInit(): void {
  }

  async onClickLesson (id: any) {
    this.lesson = await this.lessonService.getLessonById(id);
    this.getLessonEvent.emit(this.lesson)
  }

}
