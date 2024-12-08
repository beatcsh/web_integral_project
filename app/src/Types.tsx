export interface IEvent {
    name: string;
    max_round: number;
    metrics: Array<{ description: string; max_points: number }>;
}

export interface IUser {
    name: string,
    email: string,
    curp: string,
    password: string,
    role: string
}

export interface IScore {
    score: number,
    id_metric: string,
    id_judge: string
}

export interface IScores {
    id_team: string,
    round: number,
    id_event: string,
    scores: IScore[]
}

export interface ITeams {
    name: string,
    id_members: string[],
    leader: string,
    round: number,
    id_scores: IScores[]
}