const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

const id = "5c4e11f552b342b389ad7355";

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove("5c4fb1d0a82ec92898be0b6f").then((todo) => {
    console.log(todo);
});





































