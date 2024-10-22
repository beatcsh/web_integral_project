import { Schema, model } from "mongoose";

// no se si si teniamos que crear este modelo la verdad, creo que no pero ya ni modo

const ScoreSchema = new Schema([
    {
        id_group: { type: Schema.Types.ObjectId, required: true }
    },
    {
        round: { type: Number, required: true }
    },
    {
        id_event: { type: Schema.Types.ObjectId, required: true }
    },
    {
        grades: [{
            id_metric: { type: Schema.Types.ObjectId, required: true }
        },
        {
            grade: { type: Number, required: true }
        },
        {
            id_judge: {type: Schema.Types.ObjectId, required: true }
        }]
    }
])

export const ScoreModel = model("scores", ScoreSchema)