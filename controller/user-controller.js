import User from '../model/user-schema.js';


export const userSignup = async(request, response)=>{
    try{
        const exist = await User.findOne({'username': request.body.username})

        if(exist){
           return response.status(201).json("User Already exists.")  
        }
        const user = new User(request.body);
        await user.save();
        return response.status(200).json("User Created Successfuly.")
    } catch(error){
        return response.status(500).json('ERROR: ',error.message)
    }
}

export const userLogin = async(request, response)=>{
    try{
        const username = request.body.username
        const password = request.body.password

        const user = await User.findOne({'username': username, 'password': password})

        if(user){
           return response.status(200).json({data: user })  
        }

        else{
            return response.status(401).json('Invalid Login')            
        }
    } catch(error){
        return response.status(500).json('ERROR: ',error.message)
    }
}