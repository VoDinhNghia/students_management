const UserService = require("../services/UserService");

exports.getAllUsers = async(req, res) => {
    try {
        const blogs = await UserService.getAllBlogs();
        res.json({ data: blogs, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createUser = async(req, res) => {
    try {
        const blog = await UserService.createBlog(req.body);
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUserById = async(req, res) => {
    try {
        const blog = await UserService.getBlogById(req.params.id);
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateUser = async(req, res) => {
    try {
        const blog = await UserService.updateBlog(req.params.id, req.body);
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteUser = async(req, res) => {
    try {
        const blog = await UserService.deleteBlog(req.params.id);
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};