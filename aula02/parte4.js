
var Carro = function () {
    this.marca ="";
    this.cor ="";
}

Carro.prototype.ligarMotor = function () {
    console.log ("Marca: " + this.marca + " está ligado");
    console.log ("Cor: " + this.cor + " está ligado");
}



var carro1 = new Carro();
carro1.marca ="opel";
carro1.cor= "branco";

var carro2 = new Carro();
carro2.marca ="ferrari";
carro2.cor= "vermelho";

carro1.ligarMotor();
carro2.ligarMotor();


























/*
import "./modulo.js"
import { somatorio } from "./modulo.js"

console.log(
    somatorio(4,6)
);

"use strict"
//-----

let Car = {
    brand:"",
    color:"",
    drive: function () {
        console.log("A Car branded as " + this.brand + " with color " + this.color + " just started. Vrummmmm!");
    }
}

let car1 = Object.create(Car);
car1.brand = "Opel";
car1.color = "White";
car1.drive();

let car2 = Object.create(Car);
car2.brand = "bmw";
car2.color = "red";
car2.drive();

function Bike(color="white") {
    this.color=color;
}
Bike.prototype.bell = function () {console.log("triimmm: " + this.color)}

var myBike = new Bike("red");
myBike.bell()
*/