// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID  } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Cannot connect to DB');
    } 

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    //deleteMany
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' })
    //     .then((result) => {
    //         console.log(result);
    //     });

    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat Lunch' })
    //     .then((result) => {
    //         console.log(result)
    //     });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false })
    //     .then((result) => {
    //         console.log(result)
    //     });

    // db.collection('Users').deleteMany({ name: 'Neil' })
    //     .then((result) => {
    //         console.log(result)
    //     });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID("5c4b51656a4ead5f098fdcc3") })
        .then((result) => {
            console.log(result)
        });

    client.close();
});