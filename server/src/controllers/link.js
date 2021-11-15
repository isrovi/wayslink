const { Brand, Link, User } = require("../../models");

const Joi = require("joi");

exports.addLink = async (req, res) => {
  function randomString(length) {
    var randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }
  const genUnique = randomString(7);

  const data = req.body;

  try {
    const newLink = await Brand.create({
      ...data,
      uniqueLink: genUnique,
      image: req.files[0].filename,
      viewCount: 0,
      userId: req.User.id,
    });

    await Promise.all(
      data.titleLink.map(async (item, index) => {
        await Link.create({
          titleLink: item,
          urlLink: data.urlLink[index],
          imageLink: req.files[index + 1].filename,
          brandId: newLink.id,
        });
      })
    );

    let link = await Brand.findOne({
      where: {
        id: newLink.id,
      },
      include: {
        model: Link,
        as: "links",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId", "brandId"],
      },
    });

    res.send({
      status: "success",
      data: link,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

exports.getLinks = async (req, res) => {
  try {
    let data = await Brand.findAll({
      where: {
        userId: req.User.id,
      },
      include: {
        model: Link,
        as: "links",
        attributes: {
          exclude: ["brandId", "id", "createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["brandId", "createdAt", "updatedAt", "userId"],
      },
    });

    data = JSON.parse(JSON.stringify(data));

    data = data.map((item) => {
      return {
        ...item,
        image: process.env.FILE_PATH + item.image,
      };
    });
    res.send({
      status: "success",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

exports.deleteLink = async (req, res) => {
  try {
    const { id } = req.params;
    await Brand.destroy({
      where: { id },
    });

    res.send({
      status: "success",
      data: { id: `${id}` },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

exports.updateViewCount = async (req, res) => {
  const { id } = req.params;

  try {
    let data = await Brand.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    await Brand.update(
      {
        viewCount: data.viewCount + 1,
      },
      { where: { id } }
    );

    let brand = await Brand.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      message: `Update brand success`,
      data: {
        viewCount: brand.viewCount,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

exports.getLink = async (req, res) => {
  const { id } = req.params;
  try {
    let link = await Brand.findOne({
      where: {
        id,
      },
      include: {
        model: Link,
        as: "links",
        attributes: {
          exclude: ["createdAt", "updatedAt", "id", "brandId"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    console.log(id);
    // link = JSON.parse(JSON.stringify(link));

    // link = {
    //   ...link,
    //   image: process.env.FILE_PATH + link.image,
    // };

    res.send({
      status: "Success",
      data: link,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
