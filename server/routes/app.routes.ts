import { Router } from 'express'
import BaseRouter from './baseRoute'
import { ENDPOINTS } from './endpoints'
import Blog from '../models/example.model'
import Food from '../models/food.model'

const router = Router()
const ROUTES = ENDPOINTS.app

router.get(ROUTES.example, async (req, res) => {
    try {
        const blogs = await Blog.find()
        if (!blogs) {
            res.status(400).json({ message: 'Unable to find blogs' })
            return
        }
        res.status(200).json(blogs)
    } catch (e) {
        res.status(500).json({ error: e })
    }
})

// Daily Log Routes
BaseRouter(router, {
    model: Food,
    route: ROUTES.dailyLog,
    excludedRoutes: []
})

// Food Routes
BaseRouter(router, {
    model: Food,
    route: ROUTES.food,
    excludedRoutes: []
})

export default router