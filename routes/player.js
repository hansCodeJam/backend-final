const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

router.post('/player', (req, res) => {
    const newPlayer = new Player();
    newPlayer.name = req.body.name;
    newPlayer.nickname = req.body.nickname;
    newPlayer.team = req.body.team;
    newPlayer.stats = req.body.stats;
    newPlayer.save().then((Player) => {
      return res.status(200).json({ message: 'Success', Player})
    }).catch(err => res.status(500).json(err))
  });
  
  router.get('/players', (req, res) => {
    Player.find({}).then((Players) => {
      Players.reverse();
      return res.json(200).json({ Players })
    }).catch(err => res.status(500).json(err));
  });
  
  router.get('/player/:id', (req, res) => {
    Player.findById({ _id: req.params.id }).then((Player) => {
      return res.json(200).json({ Players })
    }).catch((err) => res.status(500).json({message : 'Error', err}))
  });
  
  router.put('/player/:id', (req, res) => {
    Player.findById({ _id: req.params.id }).then((Player) => {
      Player.name = req.body.name ? req.body.name : Player.name;
      Player.nickname = req.body.nickname ? req.body.nickname : Player.nickname;
      Player.team = req.body.team ? req.body.team : Player.team;
      Player.stats = req.body.stats ? req.body.stats : Player.stats;
      Player.save().then((Player) => {
        return res.status(200).json({ message: 'Player is updated', Player });
      }).catch(err=>res.status(500).json({message: ' Error', err}));
    });
  });
  
  router.delete('/player/:id', (req, res) => {
    Player.findByIdAndDelete({ _id: req.params.id }).then(
      res.json({ message: 'Player is deleted' })
    );
  });
  
  module.exports = router;
