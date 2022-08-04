import { Component, OnInit, Input } from '@angular/core';
import { CourseResponseType, CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-courses-room',
  templateUrl: './courses-room.component.html',
  styleUrls: ['./courses-room.component.css']
})
export class CoursesRoomComponent implements OnInit {
  courseService: CourseService
  courses!: CourseResponseType[]
  

  constructor(courseService: CourseService) { 
    this.courseService = courseService

  }

  async ngOnInit(): Promise<void> {
    this.courses = await this.courseService.getCourse()

    console.log(' ?',this.courses)
  }

}
