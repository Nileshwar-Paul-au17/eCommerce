
import User from '../model/userSchema.js';
import router from '../routes/routes.js'

export const userLogIn = async (request,response) => {
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if (user != null ) {
            request.session.username = user.username
            request.session.email = user.email
            request.session.loggedIn = true
            console.log(request.session)
            console.log(request.body)
<<<<<<< HEAD
            return response.status(200).json({message: `${request.body.username} logged successfull`});
=======
            return response.status(200).json({message: `${request.body.username} loged successfull`});
>>>>>>> 197d568b0737c4b2478db4fc46373df3a974dc0e
        } else {
            return response.status(401).json({message: 'Invalid Login'});
               
        }
    } catch (error) {
        response.send({error: error.message});
<<<<<<< HEAD
=======
    }
}
function checkLoggedIn(request, response,next){
    console.log('checkloggedin function')
    
    if(request.query.username){
        next()
    }else{
        router.post('/login', userLogIn);
>>>>>>> 197d568b0737c4b2478db4fc46373df3a974dc0e
    }
}

export const userSignUp = async (request, response) => {
    try {
        console.log(request.body)
        const exist = await User.findOne({ username: request.body.username });
        if (exist) {
            return response.status(401).json({ message: 'User already exist' });
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json({message: 'user has been successfully registered'});
    } catch (error) {
        response.json({skdvcodsc});
    }
}



