import express from 'express';
import { prisma } from "../lib/prisma.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.get("/register", async (req, res) => {
    res.render("auth/register.njk")
});

router.post("/register", async (req, res) => {
    let user = await prisma.user.findUnique({
        where: { email: req.body.email },
    });
    if (!user && req.body.password === req.body.password_confirm) {
        const salt = bcrypt. genSaltSync(12);
        await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, salt),
            },
        });
        res.redirect("/login");
    } else {
        res.redirect("/register");
    }
});

router.get("/login", async (req, res) => {
    res.render("auth/login.njk")
});

router.post("/login", async (req, res) => {
    let user = await prisma.user.findUnique({
        where: { email: req.body.email },
    });
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
        req.session.userID = user.id;
        res.redirect("/cats");
    } else {
        res.redirect('/login');
    }
});

router.get("/logout", async (req, res) => {
    delete req.session.userID;
    res.redirect('/');
});

export default router;