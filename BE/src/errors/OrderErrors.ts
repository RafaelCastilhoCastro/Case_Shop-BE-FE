import { CustomError } from "./CustomError"

export class DeliveryDateNotProvided extends CustomError {
    constructor() {
        super(400, "Please inform the delivery date.")
    }
}

export class ProductListNotProvided extends CustomError {
    constructor() {
        super(400, "Please provide the list of products.")
    }
}

export class UserIdNotProvided extends CustomError {
    constructor() {
        super(400, "Please inform the user ID.")
    }
}

export class OutOfStock extends CustomError {
    constructor() {
        super(400, "Insuficient stock.")
    }
}