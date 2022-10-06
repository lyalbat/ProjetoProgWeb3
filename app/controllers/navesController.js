const NaveModel = require("../models/naveModel");
const { ulid } = require("ulid");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

class NavesController {
  createNave(req, res) {
    const { ulid } = require("ulid");
    const data = { id: ulid(), ...req.body };

    NaveModel.create(data)
      .then(() => res.status(201).json(data))
      .catch((error) => res.status(500).json({ error: error }));
  }

  getAllNaves(req, res) {
    if (req.url === "/") {
      NaveModel.findAll()
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((error) => {
          res.status(500).json({ error: error });
        });
    } else {
      const { name } = req.query;
      NaveModel.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      })
        .then((result) => res.status(200).json(result))
        .catch();
    }
  }

  getNaveById(req, res) {
    NaveModel.findOne({ where: { id: req.params.id } })
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).json({ Resultado: "Cadastro não encontrado" });
        }
      })
      .catch((error) => res.status(500).json({ error: error }));
  }

  updateNave(req, res) {
    NaveModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  }

  deleteNave(req, res) {
    NaveModel.destroy({
      where: { id: req.params.id },
    })
      .then((result) => {
        res.status(204).end();
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  }
}

module.exports = new NavesController();
