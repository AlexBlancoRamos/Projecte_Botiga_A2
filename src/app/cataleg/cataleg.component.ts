import { Component } from '@angular/core';

@Component({
  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css']
})
export class CatalegComponent {
  toggle(event: Event): void {
    let elementId: string = (event.target as Element).id;

    if (elementId=='p1') {
      localStorage.setItem("producte1", document.getElementById('producte1')!.innerHTML)
    }else if (elementId=='p2'){
      localStorage.setItem("producte2", document.getElementById('producte2')!.innerHTML)
    }else if (elementId=='p3') {
      localStorage.setItem("producte3", document.getElementById('producte3')!.innerHTML)
    }else if (elementId=='p4') {
      localStorage.setItem("producte4", document.getElementById('producte4')!.innerHTML)
    }else if (elementId=='p5') {
      localStorage.setItem("producte5", document.getElementById('producte5')!.innerHTML)
    }else if (elementId=='p6') {
      localStorage.setItem("producte6", document.getElementById('producte6')!.innerHTML)
    }else if (elementId=='t1') {
      localStorage.setItem("torre1", document.getElementById('torre1')!.innerHTML)
    }else if (elementId=='t2') {
      localStorage.setItem("torre2", document.getElementById('torre2')!.innerHTML)
    }else if (elementId=='t3') {
      localStorage.setItem("torre3", document.getElementById('torre3')!.innerHTML)
    }else if (elementId=='t4') {
      localStorage.setItem("torre4", document.getElementById('torre4')!.innerHTML)
    }else if (elementId=='t5') {
      localStorage.setItem("torre5", document.getElementById('torre5')!.innerHTML)
    }else if (elementId=='t6') {
      localStorage.setItem("torre6", document.getElementById('torre6')!.innerHTML)
    }else if (elementId=='pe1') {
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
