import { model, Schema } from 'mongoose'

export interface IFood {
    _id: string
    name: string
    calories: number
    portion?: string
    recipe?: boolean
}

const foodSchema = new Schema<IFood>(
    {
        name: { type: String, required: true },
        calories: { type: Number, required: true },
        portion: { type: String },
        recipe: { type: Boolean, default: false }
    },
)

const Food = model<IFood>('Food', foodSchema)

export default Food