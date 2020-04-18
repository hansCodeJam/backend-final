const fetch = require('node-fetch');  
const router = express.Router();

router.get('/deezer', function(req, res, next) {
    let url = "https://api.deezer.com/user/2529/playlists";
  
    let settings = { method: "Get" };
    
    fetch(url, settings)
        .then(res => res.json())
        .then((data) => {
          res.render('index', {data})
        })
    })
    
module.exports = router;