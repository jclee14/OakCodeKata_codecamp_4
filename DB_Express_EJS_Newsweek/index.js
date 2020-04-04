const express = require('express');
const db = require('./models');
const bodyParser = require('body-parser');
const newsRoute = require('./routes/newsRoute');
const engine = require('ejs-mate');

const tagService = require('./services/tag');
const authorService = require('./services/author');
const newsService = require('./services/news');
const imageService = require('./services/image');
const newsTagService = require('./services/newsTag');

const app = express();

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    exteneded: false
}));
app.use(bodyParser.json());

app.use('/', newsRoute);

db.sequelize.sync({ force: false }).then(() => {
    tagService(app, db);
    authorService(app, db);
    newsService(app, db);
    imageService(app, db);
    newsTagService(app, db);

    app.listen(8080, () =>
        console.log('Server is running'));
});