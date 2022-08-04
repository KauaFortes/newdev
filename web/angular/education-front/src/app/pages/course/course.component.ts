import { Component, OnInit, Input } from '@angular/core';
import { CourseResponseType, CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseService: CourseService
  course: CourseResponseType
  lessonToShow: any


  constructor(courseService: CourseService) { 
    this.courseService = courseService
    this.course = {} as CourseResponseType
  }

  async ngOnInit(): Promise<void> {
    this.course = await this.courseService.getCourseById(3)
  }

  async setLessonToShow(lesson: any) {
    this.lessonToShow = lesson
  }
}
