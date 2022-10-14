import db from "../../../lib/dbConnect";
import User from "../../../models/user"
import bcrypt from "bcryptjs";

async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ message: "only POST method is allowed" })
        return;
    }

    const {firstName, lastName, email, password} = req.body;

    console.log(req.body)

    await db.connect();

    const emailExists = await User.findOne({ email });
    if (emailExists) {
        res.status(409).json({ message: "Email already in use"})
        await db.disconnect();
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    });

    res.status(201).json({ user });
}

export default handler;