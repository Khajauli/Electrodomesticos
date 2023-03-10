export class Electrodomestico{
    constructor(
        public _id:string,
        public nombre:string,
        public estado:string,
        public precio:number,
        public descripcion:string,
        public imagen:string,
    ){}
}