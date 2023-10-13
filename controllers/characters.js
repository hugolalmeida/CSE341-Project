const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  try{
  const result = await mongodb.getDb().db().collection('characters').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
} catch(err){
  res.status(500).json({message: err.message});
}
};

const getSingle = async (req, res) => {
  try{
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('characters').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
} catch(err){
  res.status(500).json(err);
}
};

const createContact = async (req, res) => {
  try{
  const character = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    fruit: req.body.fruit,
    birthday: req.body.birthday,
    nickName: req.body.nickName,
    crew: req.body.crew
  };
  const response = await mongodb.getDb().db().collection('characters').insertOne(character);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the character.');
  }
} catch(err){
  res.status(500).json(err);
}
};

const updateContact = async (req, res) => {
  try{
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const character = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    fruit: req.body.fruit,
    birthday: req.body.birthday,
    nickName: req.body.nickName,
    crew: req.body.crew
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('characters')
    .replaceOne({ _id: userId }, character);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }
} catch(err){
  res.status(500).json(err);
}
};

const deleteContact = async (req, res) => {
  try{
  const userId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db()
    .collection('characters')
    .deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
} catch(err){
  res.status(500).json(err);
}
};

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact
};
