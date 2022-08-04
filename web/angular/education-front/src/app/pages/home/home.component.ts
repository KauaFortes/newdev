import { Component, OnInit } from '@angular/core';
import { CourseResponseType, CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
