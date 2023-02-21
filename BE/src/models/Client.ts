export class Client {
    constructor(
        private id: string,
        private name: string
    ) { }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }
}

export class ClientCreateInputDTO {
    constructor(
        private name: string
    ) { }

    getName() {
        return this.name
    }
}