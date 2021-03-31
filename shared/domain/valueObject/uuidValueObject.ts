import {validate as uuidValidate} from 'uuid'
import {v4 as uuid4 } from 'uuid'
import { InvalidArgumentError } from './invalidaArgumentError'

export class UUID {
    readonly value: string

    constructor(value:string) {
        this.ensureValidUuid(value)
        this.value = value
    }

    static random(): UUID {
        return new UUID(uuid4())
    }

    private ensureValidUuid(value: string): void {
        if(!uuidValidate(value)) {
            throw new InvalidArgumentError(`${value}`)
        }
    }

    toString(): string {
        return this.value
    }
}