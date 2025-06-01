import MealSection from './MealSection'

const DailyLog = () => {
    return (
        <div className="flex bg-white min-h-64">
            <MealSection mealName="Breakfast"/>
            <MealSection mealName="Lunch"/>
            <MealSection mealName="Dinner"/>
            <MealSection mealName="Snacks"/>
        </div>
    )
}

export default DailyLog