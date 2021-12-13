
export class Todo{
    public id:number;
    public texto:string;
    public completado:boolean;

    constructor(texto:string){
        this.texto=texto.charAt(0).toUpperCase() + texto.slice(1); //pone la primera en mayusculas
        this.completado= false;
        this.id=Math.random();

        
    }
}