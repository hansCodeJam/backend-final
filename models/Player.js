const mongoose = requireI('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: { type: String, default: ''},
    nickname: { type: String, default: ''},
    team: { type: String, default: ''},
    stats: { type: String, default: ''}
})

module.exports = mongoose.model('Song', PlayerSchema);