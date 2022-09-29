var express = require('express'),
    app = express();

app.use(express.static('./dist/capacitacion'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/capacitacion/' });
});

app.listen(process.env.PORT || 8080);