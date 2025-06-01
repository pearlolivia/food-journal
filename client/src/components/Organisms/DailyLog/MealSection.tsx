import { useState } from 'react'
import { SelectDropdown } from '@/components/Molecules'

const MealSection = ({mealName}: {mealName: string}) => {
    const [items, setItems] = useState<string[]>([])
    const options = [
        { text: 'avocado', value: 'avocado'},
        { text: 'scrambled eggs', value: 'scrambled eggs'}
    ]

    const handleItemChange = (index: number, value: string) => {
        let newItems = [...items]
        newItems[index] = value
        setItems(newItems)
    }

    return (
        <div>
            <div className='bg-indigo-500'>{mealName}</div>
            <div className='flex flex-col'>
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
                </>
            </div>
        </div>
    )
}

export default MealSection