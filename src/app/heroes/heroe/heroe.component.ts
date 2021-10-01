import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number = 45;
    // nombreReal: string = 'Tony Stark';
    // tipo: string = 'Humano';

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre } - ${this.edad}`;
    }

    cambiarHeroe():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        this.edad = 20;
    }
}