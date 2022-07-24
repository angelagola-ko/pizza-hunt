const { Pizza, Comment } = require('../models');

const commentController = {
    //add comment to pizza
    addComment({ params, body }, res) {
        console.log(body);
        Comment.create(body)
        .then(({ _id }) => {
            console.log(_id)
            return Pizza.findOneAndUpdate (
                { _id: params.pizzaId },
                { $push: {comments: _id } },
                { new: true }
            );
        })
        .then(dbpizzaData => {
            if (!dbpizzaData) {
                res.status(404).json({ message: 'No pizza found with this id!'});
                return;
            }
            res.json(dbpizzaData);
        })
        .catch(err => res.json(err));

    },

    //remove comment
    removeComment() {

    }
};

module.exports = commentController;