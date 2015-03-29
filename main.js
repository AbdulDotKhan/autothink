var http = require('http'),
    express = require('express'),
    path = require('path'),
    request = require("request"),
    tough = require('tough-cookie');

var app = express();
app.set('port', process.env.PORT || 3001);
app.use(express.static(path.join(__dirname, 'public')));


var blink = 0;
var user = "";
var password = "";
var id = "";
var cookieHolder;

var user_cred = "4d414cd082a615faa58a81e535d9ae0a6ff716a408afc2442665ac01e9793974b3bfc8b4b5ebdc39bbad5831398665cfe579a5f46859f61103badee5cedf2589%3A%3A15303%3A%3A2015-06-29T02%3A36%3A16Z";
var tempportal5 = "";



app.get('/api', function (req, res) {
    console.log('/API hit');
    res.send('Ecomm API is running');
});


var request = require("request");
request({
    url: "https://portal.vn.teslamotors.com/login",
    method: "GET"
}, function (error, response, body) {
    console.log("Status", response.statusCode);
    console.log("Headers", JSON.stringify(response.headers));
    console.log("Response received", body);
    var tempportal = response.headers;
    //console.log(tempportal["set-cookie"]);
    var tempportal1 = tempportal["set-cookie"][0].split("=");
    var tempportal3 = tempportal1[1];
    var tempportal4 = tempportal3.split(";");
    tempportal5 = tempportal4[0];
    //console.log(tempportal5);
    //var tempportal2 = portal.split(";");
    // console.log(portal);
    //portal.substring(1);
});

app.post('/login', function (req, res) {
    var request = require("request");
    request({
        url: "https://portal.vn.teslamotors.com/login",
        body: "user_session%5Bemail%5D=spikeleephd@gmail.com\u0026user_session%5Bpassword%5D=hackwestern1",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded" //, "Cookies": "user_credentials:" + user_cred
        },
        method: "POST"
    }, function (error, response, body) {
        console.log("Status", response.statusCode);
        console.log("Headers", JSON.stringify(response.headers));
        console.log("Response received", body);

        //        function parseCookies(request) {
        //            var list = {},
        //                rc = request.headers.cookie;
        //
        //            rc && rc.split(';').forEach(function (cookie) {
        //                var parts = cookie.split('=');
        //                list[parts.shift().trim()] = decodeURI(parts.join('='));
        //            });
        //
        //            return list;
        //        }

        //cookieHolder = parseCookies(response.headers);
        //console.log(cookieHolder);
        //console.log(response.headers);

    });
    res.end();
});

app.post('/blink', function (req, res) {
    var request = require("request");
    console.log("Test1");
    request({
        url: "https://portal.vn.teslamotors.com/vehicles/5YJSA1DN9DFP17313/command/honk_horn",
        method: "GET",
        headers: {
            "Cookies": ["user_credentials=" + user_cred, "_s_portal_session=" + tempportal5]
        }
    }, function (error, response, body) {
        console.log("Test");
        console.log("Status", response.statusCode);
        console.log("Headers", JSON.stringify(response.headers));
        console.log("Response received", body);
    });
});


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});