import { useEffect, useState } from 'react'

import DailyLog from '@/components/Organisms/DailyLog'

import { api } from '@/services/api.service'
import ROUTES from '@/ROUTES'

const Home = () => {
    const [allFood, setAllFood] = useState(null)

    useEffect(() => {
        api(`${ROUTES.app.food}`)
        .then((res) => setAllFood(res.data))
    }, [])
    console.log(allFood)

    return (
        <div>
            <DailyLog />
        </div>
    )
}

export default Home