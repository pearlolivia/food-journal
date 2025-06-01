import { model, Schema } from 'mongoose'

import { IFood } from './food.model'

export interface IDailyLog {
    _id: string
    breakfast?: IFood[]
    lunch?: IFood[]
    dinner?: IFood[]
    snacks?: IFood[]
    createdAt: Date
    updatedAt: Date
}

const dailyLogSchema = new Schema<IDailyLog>(
    {
        breakfast: [{ type: Schema.Types.ObjectId, ref: 'Food' }],
        lunch: [{ type: Schema.Types.ObjectId, ref: 'Food' }],
        dinner: [{ type: Schema.Types.ObjectId, ref: 'Food' }],
        snacks: [{ type: Schema.Types.ObjectId, ref: 'Food' }],
    },
    {
        timestamps: true,
    }
)

const DailyLog = model<IDailyLog>('DailyLog', dailyLogSchema)

export default DailyLog