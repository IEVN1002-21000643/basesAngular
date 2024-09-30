import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})
export class ResistenciasComponent implements OnInit{
  formulario!:FormGroup;
  max:number=0;
  min:number=0;
  bg1:string="#fff";
  c1:string="#000";
  bg2:string="#fff";
  c2:string="#000";
  bg3:string="#fff";
  c3:string="#000";
  bgt:string="#fff";
  ct:string="#000";
  color1:string=""
  color2:string=""
  color3:string=""
  colorT:string=""
  valor:number=0;

  constructor(){
  }
 ngOnInit(): void {
    this.formulario=new FormGroup({
    color1: new FormControl('', Validators.required),
    color2: new FormControl('', Validators.required),
    color3: new FormControl('', Validators.required),
    tolerancia: new FormControl('', Validators.required)
   })
 }
 registrar():void{
  const color1=this.formulario.get('color1')?.value;
  const color2=this.formulario.get('color2')?.value;
  const color3=this.formulario.get('color3')?.value;
  const tolerancia=this.formulario.get('tolerancia')?.value;

  this.calcular((color1+color2), color3, tolerancia);
  this.colorBackgorund(color1, color2, color3, tolerancia);
 }
 calcular(numeros:number, potenciador:number, tolerancia:number){
  let sum:number = numeros*potenciador
  let diferencia:number=0;
  this.valor=sum;
  
  if(tolerancia == 0){
    diferencia=(sum*0.05)
  }else if(tolerancia==1){
    diferencia=(sum*0.1)
  }
  this.max = sum+diferencia
  this.min =  sum-diferencia
 }

 colorBackgorund(color1:number, color2:number, color3:string, tolerancia:number){
  const colorArray=["#000000", "#816b52", "#ff0000", "#ff6600", "#fffb00", "#00ff0c", "#0095ff", "#8900ff", "#bdc3c7", "#ffffff", "#efb810","#e5e7e9"]
  const stringArray=["Negro", "Cáfe", "Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Violeta", "Gris", "Blanco", "Dorado 5%", "Plata 10%"]
  this.bg1=colorArray[color1]
  this.color1=stringArray[color1]
  if(color1!=9){
    this.c1="#fff"
  }else{
    this.c1="#000"
  }
  this.bg2=colorArray[color2]
  this.color2=stringArray[color2]
  if(color2!=9){
    this.c2="#fff"
  }else{
    this.c2="#000"
  }
  this.bg3=colorArray[color3.length-1]
  this.color3=stringArray[color3.length-1]
  if((color3.length-1)!=9){
    this.c3="#fff"
  }else{
    this.c3="#000"
  }
  if(tolerancia==0){
    this.bgt=colorArray[10]
    this.colorT=stringArray[10]
    this.ct="#fff"
  }else{
    this.bgt=colorArray[11]
    this.colorT=stringArray[11]
    this.ct="#000"
  }
  
 }
}
