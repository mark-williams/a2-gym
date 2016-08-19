interface ISession {
    time: string,
    client: string
}

export class Instructor {
    constructor(public id: number, public name: string, public sessionCost: number, public sessions: ISession[]) {
    }
}



