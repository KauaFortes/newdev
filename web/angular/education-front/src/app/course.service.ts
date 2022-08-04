import { Injectable } from '@angular/core';

export type LessonType = {
  id: number
  title: string
  videoId: string
  description: string
}

export type CourseResponseType = {
  title: string
  description: string
  lessons: LessonType[]
}

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  constructor() { }

  async getCourseById(id: number): Promise<CourseResponseType> {
    const response = await 
    fetch(`http://localhost:4000/courses/${id}`)

    const data = await response.json() as CourseResponseType

    return data
  }
  async getCourse(): Promise<CourseResponseType[]> {
    const response = await 
    fetch(`http://localhost:4000/courses`)

    const data = await response.json() as CourseResponseType[]

    return data
  }
}
