import { Schema, model } from "mongoose";

const ScoreSchema = new Schema([
    {
        id_team: {type: String, required: true}
    },
    {
        round: {type: Number, required: true}
    }
])

export const ScoreModel = model("scores", ScoreSchema)