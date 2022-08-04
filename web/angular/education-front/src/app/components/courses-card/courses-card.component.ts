import { Component, OnInit, Input } from '@angular/core';
import { CourseResponseType, CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.css']
})
export class CoursesCardComponent implements OnInit {
  @Input() course: any

  constructor() { }

  ngOnInit(): void {
  }

}
