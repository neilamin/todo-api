// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID  } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Cannot connect to DB');
    } 

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({ 
    //     text: 'Eat Lunch' 
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //         console.log(result)
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Mike'
    }, {
        $inc: {
            age: 1
        } 
    }, {
        returnOriginal: false
    }).then(result => console.log(result));

    client.close();
});