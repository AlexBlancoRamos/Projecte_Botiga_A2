import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css']
})
export class CistellaComponent implements OnInit{
constructor() {

}
ngOnInit() {
  const subject = document.querySelector('#subject')!;
  if (localStorage.getItem("producte1")! == null) {
  } else {
    subject.insertAdjacentHTML('afterend', localStorage.getItem("producte1")!);
  }
  if (localStorage.getItem("producte2")! == null) {
  } else {
    subject.insertAdjacentHTML('afterend', localStorage.getItem("producte2")!);
  }
  if (localStorage.getItem("producte3")! == null) {
  } else {
  subject.insertAdjacentHTML('afterend', localStorage.getItem("producte3")!);
}
  if (localStorage.getItem("producte4")! == null) {
  } else {
  subject.insertAdjacentHTML('afterend', localStorage.getItem("producte4")!);
}
  if (localStorage.getItem("producte5")! == null) {
  } else {
    subject.insertAdjacentHTML('afterend', localStorage.getItem("producte5")!);
  }
  if (localStorage.getItem("producte6")! == null) {
  } else {
    subject.insertAdjacentHTML('afterend', localStorage.getItem("producte6")!);
  }
  if (localStorage.getItem("torre1")! == null) {
  } else {
    subject.insertAdjacentHTML('afterend', localStorage.getItem("torre1")!);
  }
  if (localStorage.getItem("torre2")! == null) {
  } else {
    subject.insertAdjacentHTML('afterend', localStorage.getItem("torre2")!);
  }
  if (localStorage.getItem("torre3")! == null) {
  } else {
    subject.insertAdjacentHTML('afterend', localStorage.getItem("torre3")!);
  }
  if (localStorage.getItem("torre4")! == null) {
  } else {
    subject.insertAdjacentHTML('afterend', localStorage.getItem("torre4")!);
  }
  if (localStorage.getItem("torre5")! == null) {
  } else {
    subject.insertAdjacentHTML('afterend', localStorage.getItem("torre5")!);
  }
  if (localStorage.getItem("torre6")! == null) {
  } else {
    subject.insertAdjacentHTML('afterend', localStorage.getItem("torre6")!);
  }
  if (localStorage.getItem("periferico1")! == null) {
  } else {
    subject.insertAdjacentHTML('afterend', localStorage.getItem("periferico1")!);
  }
  if (localStorage.getItem("periferico2")! == null) {
  } else {
    subject.insertAdjacentHTML('afterend', localStorage.getItem("periferico2")!);
  }
  if (localStorage.getItem("periferico3")! == null) {
  } else {
    subject.insertAdjacentHTML('afterend', localStorage.getItem("periferico3")!);
  }
  if (localStorage.getItem("periferico4")! == null) {
  } else {
    subject.insertAdjacentHTML('afterend', localStorage.getItem("periferico4")!);
  }
  if (localStorage.getItem("periferico5")! == null) {
  } else {
    subject.insertAdjacentHTML('afterend', localStorage.getItem("periferico5")!);
  }
  if (localStorage.getItem("periferico6")! == null) {
  } else {
    subject.insertAdjacentHTML('afterend', localStorage.getItem("periferico6")!);
  }

}
borrar(){
  window.localStorage.clear()
}
}
