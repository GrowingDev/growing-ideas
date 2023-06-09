import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('helloModal') helloEl?: ElementRef;
  modal?: bootstrap.Modal;
  ngAfterViewInit() {
    this.modal = new bootstrap.Modal(this.helloEl?.nativeElement, {});
  }

  trigger() {
    this.modal?.toggle();
  }
}
