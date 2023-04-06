import User from "../schema/userSchema.js";

export const addUser = async (req, res) => {
    const user = req.body;
    // console.log(user);

    const newUser = new User(user);

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getUsers = async (req, res) => {

    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUser = async (req, res) => {

    try {
        const users = await User.findById(req.params.id);
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// export const editUser = async (req, res) => {
//     let user = req.body;
//     const editUser = new User(user);
//     console.log(req);
//     try {
//         await User.updateOne({ _id: req.params.id }, editUser);
//         res.status(201).json(editUser);
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// }

export const editUser = async (req, res) => {
    const user = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, user, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    // const user = req.body;
    try {
        await User.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'User Deleted Successfully.' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
