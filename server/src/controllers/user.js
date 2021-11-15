const { User } = require("../../models");

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await User.findOne({
      where: { id },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    data = JSON.parse(JSON.stringify(data));

    const user = {
      ...data,
    };

    res.send({
      status: "success",
      data: { user },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateData = {
      ...data,
    };

    await User.update(updateData, {
      where: { id },
    });

    res.send({
      status: "success",
      message: `Update user id: ${id} finished`,
      data: { user: updateData },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({
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
