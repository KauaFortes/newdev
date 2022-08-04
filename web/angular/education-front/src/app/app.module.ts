import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './pages/course/course.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { RoomComponent } from './components/room/room.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { VimeModule } from '@vime/angular';
import { HomeComponent } from './pages/home/home.component';
import { CoursesRoomComponent } from './components/courses-room/courses-room.component';
import { CoursesCardComponent } from './components/courses-card/courses-card.component';
import { PlayerComponent } from './components/player/player.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HeaderComponent,
    LogoComponent,
    LessonComponent,
    RoomComponent,
    SidebarComponent,
    HomeComponent,
    CoursesRoomComponent,
    CoursesCardComponent,
    PlayerComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
