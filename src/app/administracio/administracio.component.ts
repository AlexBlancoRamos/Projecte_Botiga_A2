import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';
import {Router} from "@angular/router";

interface Datos {
  id: number;
  email:string;
  producte: number;
  oferta: boolean;
  data_compra: string;
}

@Component({
  selector: 'app-administracio',
  templateUrl: './administracio.component.html',
  styleUrls: ['./administracio.component.css']
})
export class AdministracioComponent {

  dades: any[] = [];

  constructor(private http: HttpClient,public router:Router) {

    this.http.get<Datos[]>('http://localhost:3080/dadescompres').subscribe((data: Datos[]) => {
      this.dades = data;
      this.renderChart();
    });
  }

  renderChart() {
    // Agrupar los datos por fecha y producto
    const groupedData = this.dades.reduce((result, d) => {
      const key = `${d.data_compra}-${d.producte_comprat}`;
      if (!result[key]) {
        result[key] = {
          label: d.producte_comprat,
          data: [],
          backgroundColor: this.getRandomColor(),
        };
      }
      result[key].data.push(d.id);
      return result;
    }, {});

    // Crear conjunt de dades per crear cada grup de dades
    const datasets = Object.keys(groupedData).map(key => groupedData[key]);

    // Configurar el grafic de barras
    new Chart('grafic-ventes', {
      type: 'bar',
      data: {
        labels: this.getUniqueDates(),
        datasets: datasets,
      },
      options: {
        responsive: true,
        scales: {
          y: {
            stacked: false,
          },
          x: {
            beginAtZero: true,
            stacked: false,
          },
        },
      },
    });
    const groupedDataOferta = this.dades.reduce((result, d) => {
      const key = `${d.data_compra}-${d.oferta}`;
      if (!result[key]) {
        result[key] = {
          label: d.oferta ? 'En Oferta' : 'En Callao',
          data: [],
          borderColor: d.oferta ? 'green' : 'red',
          fill: false,
        };
      }
      result[key].data.push(d.id);
      return result;
    }, {});

    // Crear un conjunto de datos para cada grupo de datos
    const datasetsOferta = Object.keys(groupedDataOferta).map(key => groupedDataOferta[key]);

    // Configurar la gráfica de líneas
    new Chart('grafic-oferta', {
      type: 'line',
      data: {
        labels: this.getUniqueDates(),
        datasets: datasetsOferta,
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

// Obtener una lista de todas las fechas únicas en los datos
  private getUniqueDates(): string[] {
    return [...new Set(this.dades.map(d => d.data_compra))];
  }

// Generar un color aleatorio para cada conjunto de datos
  nomAutenticat: any;
  root: any;
  private getRandomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }


}
