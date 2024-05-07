import User from "../models/users.model.js"


const userService = {
    createUser: async function(user){
        return await User.create(user)
    },
    getUsers: async function(){
        return await User.find()
    }
}

export default userService