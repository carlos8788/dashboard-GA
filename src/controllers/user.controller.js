import userService from "../services/user.service.js"

export const createUserController = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body)
        const user = {
            username: newUser.username,
            createdAt: newUser.createdAt
        }
        return res.status(201).json({
            status: 201,
            message: 'Usuario creado',
            payload: user
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        })
    }
}

export const getUsersController = async (req, res) => {
    try {
        
        const users = await userService.getUsers()

        const usersMap = users.map(user => {
            return {
                username: user.username,
                email: user.email,
                createdAt: user.createdAt
            }
        })

        return res.status(200).json({
            status: 200,
            message: 'Usuarios obtenidos',
            quantity: usersMap.length,
            payload: usersMap
        })

    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        })
    }
}