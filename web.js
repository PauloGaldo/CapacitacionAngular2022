var express = require('express'),
    app = express();

app.use(express.static('./dist/portal-galdo'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/portal-galdo/' });
});

app.listen(process.env.PORT || 8080);