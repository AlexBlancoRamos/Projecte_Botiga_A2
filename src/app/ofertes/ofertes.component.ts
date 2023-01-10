import { Component } from '@angular/core';

@Component({
  selector: 'app-ofertes',
  templateUrl: './ofertes.component.html',
  styleUrls: ['./ofertes.component.css']
})
export class OfertesComponent {
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
    }
  }
}
