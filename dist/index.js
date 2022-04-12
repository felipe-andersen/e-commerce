import { createRxDatabase, getRxStoragePouch } from 'rxdb';
///////////////
const myDatabase = createRxDatabase({
    name: 'mydb',
    storage: getRxStoragePouch('memory')
});
const heroSchema = {
    title: 'human schema',
    description: 'describes a human being',
    version: 0,
    keyCompression: true,
    primaryKey: 'passportId',
    type: 'object',
    properties: {
        passportId: {
            type: 'string'
        },
        firstName: {
            type: 'string'
        },
        lastName: {
            type: 'string'
        },
        age: {
            type: 'integer'
        }
    },
    required: ['passportId', 'firstName', 'lastName']
};
const heroDocMethods = {
    scream: function (what) {
        return this.firstName + ' screams: ' + what.toUpperCase();
    }
};
const heroCollectionMethods = {
    countAllDocuments: async function () {
        const allDocs = await this.find().exec();
        return allDocs.length;
    }
};
myDatabase.addCollections({
    heroes: {
        schema: heroSchema,
        methods: heroDocMethods,
        statics: heroCollectionMethods
    }
});
// add a postInsert-hook
myDatabase.heroes.postInsert(function myPostInsertHook(// own collection is bound to the scope
docData, // documents data
doc // RxDocument
) {
    console.log('insert to ' + this.name + '-collection: ' + doc.firstName);
}, false // not async
);
/**
* use the database
*/
// insert a document
const hero = myDatabase.heroes.insert({
    passportId: 'myId',
    firstName: 'piotr',
    lastName: 'potter',
    age: 5
});
//hero.scream('AAH!');
const amount = myDatabase.heroes.countAllDocuments();
console.log(amount);
myDatabase.destroy();
