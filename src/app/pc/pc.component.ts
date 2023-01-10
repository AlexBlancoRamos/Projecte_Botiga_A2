import { Component } from '@angular/core';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent {
  toggle(event: Event): void {
    let elementId: string = (event.target as Element).id;

    if (elementId=='t1') {
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
    }
  }
}
