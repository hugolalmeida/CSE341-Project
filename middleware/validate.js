const validator = require('../helpers/validate');

const saveCharacter = (req, res, next) => {
  const validationRule = {
    firstName: 'required|string',
    lastName: 'required|string',
    fruit: 'required|string',
    birthday: 'string',
    nickName: 'required|string',
    crew: 'required|string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveFruit = (req, res, next) => {
  const validationRule = {
    fruitName: 'required|string',
    description: 'required|string',
    type: 'required|string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveUser = (req, res, next) => {
  const validationRule = {
    username: 'required|email',
    password: 'required|string|min:8|max:26 '
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};


module.exports = {
  saveCharacter,
  saveFruit,
  saveUser
};
