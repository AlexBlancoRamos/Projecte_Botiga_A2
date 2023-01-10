import { Component } from '@angular/core';

@Component({
  selector: 'app-periferics',
  templateUrl: './periferics.component.html',
  styleUrls: ['./periferics.component.css']
})
export class PerifericsComponent {
  toggle(event: Event): void {
    let elementId: string = (event.target as Element).id;

    if (elementId=='pe1') {
      localStorage.setItem("periferico1", document.getElementById('periferico1')!.innerHTML)
    }else if (elementId=='pe2') {
      localStorage.setItem("periferico2", document.getElementById('periferico2')!.innerHTML)
    }else if (elementId=='pe3') {
      localStorage.setItem("periferico3", document.getElementById('periferico3')!.innerHTML)
    }else if (elementId=='pe4') {
      localStorage.setItem("periferico4", document.getElementById('periferico4')!.innerHTML)
    }else if (elementId=='pe5') {
      localStorage.setItem("periferico5", document.getElementById('periferico5')!.innerHTML)
    }else if (elementId=='pe6') {
      localStorage.setItem("periferico6", document.getElementById('periferico6')!.innerHTML)
    }
  }
}
