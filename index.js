const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


// replace the uri string with your connection string.
const PASSWORD = encodeURI('AC1190!');
const uri = `mongodb+srv://AdventureConditions:${PASSWORD}@adventureconditionscluster0-7honr.mongodb.net/test?retryWrites=true`;

const findAllDocuments = function(collection, callback) {
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
};

const findDocuments = function(collection, callback) {
  // Find some documents
  collection.find({'groupId': 'fire-perimeters'}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
}

MongoClient.connect(uri, function(err, client) {
  if(err) {
    console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
  }
  console.log('Connected...');
  const db = client.db("adventureConditions");
  const collection = db.collection("aggregationSources");
  // perform actions on the collection object

  findDocuments(collection, function() {
    client.close();
  });
});