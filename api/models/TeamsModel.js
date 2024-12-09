import { Schema, model } from "mongoose";

const TeamSchema = new Schema([
    {
        name: { type: String, required: true }
    },
    {
        id_members: []
    },
    {
        id_leader: { type: String, required: true }
    },
    {
        round: { type: Number, default: 0 }
    },
    {
        id_scores: []
    }
])

export const TeamModel = model("teams", TeamSchema)