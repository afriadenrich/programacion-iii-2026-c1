const { buscarAutoPorIdDB } = require("./auto.service");

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const buscarAutoEJS = async (req, res) => {
  const auto = await buscarAutoPorIdDB(req.params.id);

  console.log(auto);

  res.render("auto-card", { auto: auto });
};

module.exports = { buscarAutoEJS };
