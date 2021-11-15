const { User } = require("../../models");

const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(6).required(),
    fullName: Joi.string().min(6).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send({
      status: "Error",
      message: error.details[0].message,
    });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const userExist = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userExist) {
      return res.status(400).send({
        status: "failed",
        message: "Email already exist",
      });
    }

    const newUser = await User.create({
      email: req.body.email,
      password: hashedPassword,
      fullName: req.body.fullName,
    });

    const token = jwt.sign({ id: newUser.id }, process.env.SECRET_KEY);

    res.status(200).send({
      status: "Success",
      data: {
        user: {
          email: req.body.email,
          fullName: req.body.fullName,
          token,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.login = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(6).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send({
      status: "Error",
      message: error.details[0].message,
    });
  }

  try {
    const userExist = await User.findOne({
      where: {
        email: req.body.email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    const isValid = await bcrypt.compare(req.body.password, userExist.password);

    if (!isValid) {
      return res.send({
        status: "failed",
        message: "Email and password did not match",
      });
    }

    const token = jwt.sign({ id: userExist.id }, process.env.SECRET_KEY);

    res.send({
      status: "success",
      data: {
        user: {
          email: userExist.email,
          fullName: userExist.fullName,
          token,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.checkAuth = async (req, res) => {
  try {
    const dataUser = await User.findOne({
      where: {
        id: req.User.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    if (!dataUser) {
      return res.status(404).send({
        status: "failed",
      });
    }

    res.send({
      status: "Success...",
      data: {
        user: {
          id: dataUser.id,
          fullName: dataUser.fullName,
          email: dataUser.email,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: "failed",
      message: "Server Error",
    });
  }
};
