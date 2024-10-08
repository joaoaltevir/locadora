import Movie from "../models/movie-model.js"

const store = async (req,res) => {
    try {
        const content = await Movie.create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(400).send(error);
    }
}

const index = async (req,res) => {
    try {
        const content = Movie.find({
            rentedBy: undefined
        }).exec();
        res.json(content)
    } catch (error) {
        res.status(400).json(error)
    }
}

export default {
    store,
    index
}