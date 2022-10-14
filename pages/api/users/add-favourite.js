import User from "../../../models/user"

export async function handler(req, res) {
    if (req.method === "POST") {
        const {userId, word} = req.body

        let user = await User.findById(userId)
        if (!user) {
            res.status(404).json({message: "User Not Found"})
            return;
        }

        if (user.favouriteWords.includes(word)) {
        user = await User.findOneAndUpdate(userId, {
            $pull: {
                favouriteWords: {word}
            }
        },
    {
        new: true
    }
        )
        } else {
user = await User.findOneAndUpdate(userId, {
            $push: {
                favouriteWords: {word}
            }
        },
    {
        new: true
    }
        )
        }

    } else {
        res.status(405).json({message: "Method not allowed. Only POST method is allowed."})
    }
}