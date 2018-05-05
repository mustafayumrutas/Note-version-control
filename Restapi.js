var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var http = require('http');
port = process.env.PORT || 4000;


var app = express();

module.exports=function () {

    app.get()
    app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
    app.use(bodyParser.json());

    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });

    app.listen(port, function()  {
        console.log(" RESTful API server started on: " + port );
    });
}