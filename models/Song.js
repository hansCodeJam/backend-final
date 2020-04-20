const mongoose = requireI('mongoose');

const SongSchema = new mongoose.Schema({
    title: { type: String, default: ''},
    artist: { type: String, default: ''},
    genre: { type: String, default: ''},
    albumCover: {type: Image}
})

module.exports = mongoose.model('Song', SongSchema);