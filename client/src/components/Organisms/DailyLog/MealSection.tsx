import { useMemo, useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

import {
    SelectDropdown,
    TextInput
} from '@/components/Molecules'

import { IFood } from '../../../../../server/models/food.model'
import { api } from '@/services/api.service'
import ROUTES from '@/ROUTES'
import { toast } from 'react-toastify'

const MealSection = ({ mealName, foodList }: {
    mealName: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snacks'
    foodList: IFood[]
}) => {
    const [items, setItems] = useState<string[]>([])
    const [foodInput, setFoodInput] = useState<string>('')
    const [calorieInput, setCalorieInput] = useState<string>('')
    const [portionInput, setPortionInput] = useState<string>('')
    
    // get all food API
    const options = useMemo(() => {
        if (!foodList) return []
        return foodList.map((item) => ({
            text: `${item.name} ${item?.portion ? `(${item.portion})` : ''}`,
            value: item._id
        }))
    }, [foodList])

    const handleItemChange = (index: number, value: string) => {
        let newItems = [...items]
        newItems[index] = value
        setItems(newItems)
    }

    const addNewFoodItem = async () => {
        if (foodInput === '' || calorieInput === '') return
        await api(ROUTES.app.food, {
            name: foodInput,
            calories: calorieInput,
            portion: portionInput
        }).then(() => {
            toast('New food item successfully added')
            setTimeout(() => window.location.reload(), 2000)
        })
    }

    return (
        <div className='bg-[#fff7ed]'>
            <div className={`bg-indigo-500 font-title p-2 text-2xl ${mealName === 'Breakfast' && 'rounded-tl-xl'} ${mealName === 'Snacks' && 'rounded-tr-xl'}`}>
                {mealName}
            </div>
            <div className='flex flex-col p-3 space-y-2'>
                {items.map((item, index) => (
                    <SelectDropdown
                        options={options}
                        inputValue={item}
                        handleChange={(v) => handleItemChange(index, v)}
                    />
                ))}
                <>
                    <SelectDropdown
                        options={options}
                        inputValue={''}
                        handleChange={(v) => handleItemChange(items.length, v)}
                    />
                    <div className='flex p-1 gap-2'>
                        <TextInput
                            label='Food'
                            inputValue={foodInput}
                            handleChange={(v) => setFoodInput(v)}
                            inputClass='w-24'
                            required
                        />
                        <TextInput
                            label='Calories'
                            inputValue={calorieInput}
                            handleChange={(v) => setCalorieInput(v)}
                            inputClass='w-16'
                            type='number'
                            required
                        />
                        <TextInput
                            label='Portion?'
                            inputValue={portionInput}
                            handleChange={(v) => setPortionInput(v)}
                            inputClass='w-16'
                        />
                        <CheckCircleIcon
                            className='w-7 cursor-pointer hover:text-green-500'
                            onClick={addNewFoodItem}
                        />
                    </div>
                </>
            </div>
        </div>
    )
}

export default MealSection