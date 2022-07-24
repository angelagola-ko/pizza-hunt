const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema ({
    pizzaName: {
        type: String    
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: [],
    comments: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }
]
},
{
    toJSON: {
        virtuals:true,
    },
    id: false
}
);

//Create the Pizza model using the Pizza Schema
const Pizza = model('Pizza', PizzaSchema);

//get toal count of comments and replies on retrieval
PizzaSchema.virtual('commentCount'.get(function() {
    return this.comments.length;
}));

//export the Pizza model
module.exports = Pizza;