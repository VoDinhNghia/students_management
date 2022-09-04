const UserService = require("../services/UserService");

exports.getAllUsers = async(req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.json({ data: users, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createUser = async(req, res) => {
    try {
        const user = await UserService.createUsers(req.body);
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUserById = async(req, res) => {
    try {
        const user = await UserService.getUserById(req.params.id);
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateUser = async(req, res) => {
    try {
        const user = await UserService.updateUser(req.params.id, req.body);
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteUser = async(req, res) => {
    try {
        const user = await UserService.deleteUser(req.params.id);
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};