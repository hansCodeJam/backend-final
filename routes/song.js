const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

router.post('/song', (req, res) => {
    const newSong = new Song();
    newSong.title = req.body.title;
    newSong.artist = req.body.artist;
    newSong.genre = req.body.genre;
    newSong.albumCover = req.body.albumCover;
    newSong.save().then((song) => {
      return res.json(song);
    });
  });
  
  router.get('/songs', (req, res) => {
    Song.find({}).then((songs) => {
      // songs.reverse();
      return res.json(songs);
    });
  });
  
  router.get('/song/:id', (req, res) => {
    Song.findById({ _id: req.params.id }).then((song) => {
      return res.json(song);
    });
  });
  
  router.put('/song/:id', (req, res) => {
    Song.findById({ _id: req.params.id }).then((song) => {
      song.artist = req.body.artist ? req.body.artist : song.artist;
      song.title = req.body.title ? req.body.title : song.title;
      song.genre = req.body.genre ? req.body.genre : song.genre;
      song.albumCover = req.body.albumCover ? req.body.albumCover : song.albumCover;
      song.save().then((song) => res.json(song));
    });
  });
  
  router.delete('/song/:id', (req, res) => {
    Song.findByIdAndDelete({ _id: req.params.id }).then(
      res.json({ message: 'deleted' })
    );
  });
  
  module.exports = router;
