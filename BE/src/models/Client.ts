export class ClientCreateInputDTO{
    constructor(
        private name:string
    ){}

    getName(){
        return this.name
    }
}

export class Client{
    constructor(
        private name:string,
        private id:string
    ){}

    getName(){
        return this.name
    }
    
    getId(){
        return this.id
    }
}