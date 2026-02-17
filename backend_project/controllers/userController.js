const User = require('../models/userModel.js'); 

exports.home = (req, res) => {
    res.send("Hello World");
}

// create user controller function, which will be called when we hit the /create-user endpoint. It will take the name and email from the request body and create a new user in the database.

exports.createUser = async (req, res) => {
    try {
        const {name, email} = req.body;
    

        if(!name || !email) {
           throw new Error("Name and email are required");  
        }

        const userExist = await User.findOne({email}) 

        if(userExist) {
            throw new Error("User already exists");

        }
       const user = await User.create({
            name,
            email
        })
        res.status(200).json({
            success: true,
            message: "User created successfully",
            user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

// insert many user at a time

exports.createUser = async (req, res) => {
    try {
        if (Array.isArray(req.body)) {
            const users = await User.insertMany(req.body);
            return res.status(201).json({
                success: true,
                message: "Users created successfully",
                users
            });
        }

        const { name, email } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const user = await User.create({ name, email });

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



// get all users controller function, which will be called when we hit the /get-users endpoint. It will fetch all the users from the database and return them in the response.

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        if(users.length === 0) {
            throw new Error("No users found");
        }
        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            users
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
} 

exports.editUser = async (req, res) => {
    try {
        const {id} = req.params; // get the id from the request parameters
        const {name, email} = req.body;
        const user = await User.findByIdAndUpdate(id, {name, email}, {new: true}); // find the user by id and update it with the new name and email
        if(!user) {
            throw new Error("User not found");
        }
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            user
        })
    }
    catch (error) {
        res.status(400).json({
            success: false, 
            message: error.message
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const {id} = req.params;// get the id from the request parameters
        const user = await User.findByIdAndDelete(id); // find the user by id and delete it from the database
        if(!user) {
            throw new Error("User not found");
        }
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            user

        })
            
    } catch (error) {
        res.status(400).json({
            success: false, 
            message: error.message
        })
    }
}


