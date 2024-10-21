import { Schema, model } from "mongoose";

const TeamSchema = new Schema([
    {
        name: {type: String, required: true}
    },
    {
        members: []
    },
    {
        leader: {type: String, required: true}
    },
    {
        round: {type: Number, required: true}
    },
    {
        score: {type: Number, required: true}
    }
])

export const TeamModel = model("teams", TeamSchema)