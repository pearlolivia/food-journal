import { useEffect, useState } from 'react'

import { api } from '@/services/api.service'
import ROUTES from '@/ROUTES'

import MealSection from './MealSection'
import { IFood } from '../../../../../server/models/food.model'

const DailyLog = () => {
    const [allFood, setAllFood] = useState<IFood[]>([])

    useEffect(() => {
        api(`${ROUTES.app.food}`)
        .then((res) => setAllFood(res.data))
    }, [])
    console.log(allFood)

    return (
        <div className="flex min-h-64 text-xl rounded-b-xl shadow-md">
            <MealSection mealName="Breakfast" foodList={allFood} />
            <MealSection mealName="Lunch" foodList={allFood}/>
            <MealSection mealName="Dinner" foodList={allFood}/>
            <MealSection mealName="Snacks" foodList={allFood}/>
        </div>
    )
}

export default DailyLog