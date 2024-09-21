import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  //*ngIf=true o false validar si la lista tiene objetos
  productos:any[]=[
    {
      "productoID": 1,
      "Modelo": "Sentra",
      "Descripcion": "4 puertas",
      "Precio": 20000,
      "Year": 2022,
      "Marca": "NISSAN",
      "Color": "Azul",
      "ImagenUrl": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_0c7166c16ff74073b65851f7f0b360ed.jpg"
    },
    {
      "productoID": 2,
      "Modelo": "A4",
      "Descripcion": "4 puertas",
      "Precio": 30000,
      "Year": 2022,
      "Marca": "AUDI",
      "Color": "Blanco",
      "ImagenUrl": "https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Large/audi/a4/mx/RT_PU_4f813f5a5f4142d89f2244758c587ca0.webp"
    },
    {
      "productoID": 3,
      "Modelo": "Rio",
      "Descripcion": "4 puertas",
      "Precio": 150000,
      "Year": 2020,
      "Marca": "KIA",
      "Color": "Azul",
      "ImagenUrl": "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMzE2MzM5L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzE1NjMwMTcxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjU0MCwiaGVpZ2h0IjozMTB9fX0="
    }
  ]
}
