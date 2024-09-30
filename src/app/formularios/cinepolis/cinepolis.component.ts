import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent implements OnInit{
  costBoleto:number = 12;
  subtotal:number=0;
  advertencia:string=""
  formulario!:FormGroup;
  resultado!:string;

  constructor(){
   }
  ngOnInit(): void {
    this.formulario=new FormGroup({
      nombre: new FormControl('', Validators.required),
      compradores: new FormControl('', Validators.required),
      cineco: new FormControl('', Validators.required),
      boletos: new FormControl('', Validators.required)
    })
  }
  procesar():void{
    const nombre=this.formulario.get('nombre')?.value;
    const cantCompra=this.formulario.get('compradores')?.value;
    const cineco=this.formulario.get('cineco')?.value;
    const cantBoletos=this.formulario.get('boletos')?.value;

    if (cantCompra*7 < cantBoletos){
      this.advertencia=this.maxCompra(cantCompra, cantBoletos);
      this.subtotal=0
    }else{
      this.subtotal=this.calcular(cantBoletos, cineco);
      this.advertencia=""
    }
    this.resultado=nombre;
  }

  calcular(cantboletos:number, cineco:number):number{
    let desc, desc2 =0;
    let sb;
    if(cantboletos >= 5){
      desc=0.15
    }else if (cantboletos > 2 && cantboletos < 5){
      desc=0.1
    }else{
      desc=0
    }
    if(cineco == 0){
      desc2 = 1;
    }else{
      desc2 = 0;
    }
    sb=cantboletos*this.costBoleto;
    return ((sb)-(sb*desc))-((sb-(sb*desc))*desc2/10)
  }

  maxCompra(cantCompra:number, cantBoletos:number):string{
    cantBoletos = cantCompra*7
    return `Atención: Solo puedes comprar ${cantBoletos} boletos por ${cantCompra} de comprador(es)`;
  }

}
