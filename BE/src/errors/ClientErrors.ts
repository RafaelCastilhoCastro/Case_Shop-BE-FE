import { CustomError } from "./CustomError"

export class InvalidName extends CustomError {
    constructor() {
        super(400, "Invalid user name.")
    }
}