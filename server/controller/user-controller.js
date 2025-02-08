import User from '../model/user-schema.js'

//this is for login and signup

export const userSignUp = async (request, response) => {
    try {
        const exist = await User.findOne({ username: request.body.username });
        if(exist) {
            return response.status(401).json({ message: 'User already exist'});
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json({ message: user });
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
    console.log(request.body);
}

// export const userLogIn = async (request, response) => {
//     try {
//         let user = await User.findOne({ username: request.body.username, password: request.body.password });
//         if(user) {
//             return response.status(200).json(`${request.body.username} login successfull`);
//         } else {
//             return response.status(401).json('Invalid Login');
//         }

//     } catch (error) {
//         response.json('Error: ', error.message);        
//     }
// }
export const userLogIn = async (request, response) => {
    try {
        const username = request.body.username;
        const password = request.body.password;
        let user = await User.findOne({ username: username, password: password });
        if(user) {
            return response.status(200).json({data : user});
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}
