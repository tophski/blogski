let fs = require("fs");
let path = require("path");
module.exports = function(app) {
    let postPaths = fs.readdirSync(path.join(__dirname, "../public/posts"));
    let posts = [];
    for(let i = 0; i < postPaths.length; i++){
        let file = fs.readFileSync(path.join(__dirname, '../public/posts', postPaths[i]), 'utf8');
        posts[i] = file;
        console.log(file);
    }


    app.get('/', function (req, res, next) {
        res.render('index', {title: 'Express', posts: posts});
    });
};
