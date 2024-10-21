import { Schema, model } from "mongoose";

// no se si si teniamos que crear este modelo la verdad, creo que no pero ya ni modo

const ScoreSchema = new Schema([
    {
        id_team: {type: String, required: true}
    },
    {
        round: {type: Number, required: true}
    }
])

export const ScoreModel = model("scores", ScoreSchema)