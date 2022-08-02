import { Component, OnInit, Input } from '@angular/core';
import { LessonResponseType, LessonService } from 'src/app/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  @Input () lessonId?: number
  @Input () title?: string

  LessonService: LessonService
  lesson?: LessonResponseType
  
  constructor(LessonService: LessonService) {
    this.LessonService = LessonService
    this.lesson = {} as LessonResponseType
  }

  ngOnInit(): void {
  }

  onClickLesson(id: any) {
    this.lesson = this.LessonService.getLessonById(id)
    console.log('cliquei na aula', id)
  }

}
