import { Component, OnInit } from '@angular/core';
import { CourseService, CourseType } from 'src/app/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courseService: CourseService;
  courses!: CourseType[];

  constructor(courseService: CourseService, private route: ActivatedRoute) {
    this.courseService = courseService;
  }

  async ngOnInit(): Promise<void> {
    this.courses = await this.courseService.getCourses();
  }

}
