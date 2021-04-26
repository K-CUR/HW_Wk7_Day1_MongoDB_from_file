use zoo;

const id = ObjectId('608717650e75278af52c03b6');

db.animals.findOne({_id: id});

db.animals.updateOne(
    { _id: ObjectId('608717650e75278af52c03b6')}, 
    { $set: {name: "Pip"}}
);

db.animals.deleteOne({ _id: ObjectId('608717650e75278af52c03b7')});