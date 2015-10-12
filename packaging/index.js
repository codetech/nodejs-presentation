var glob = require('glob');
 
glob('**/*.js', function (error, files) {
    console.log(files);
});
