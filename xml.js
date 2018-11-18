var request = require('request');

function join() {
    request.post(
    'http://discordad.com/1.php',
    { json: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);
}
setInterval(join,60000);
