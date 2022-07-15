var Minio = require('minio')

var minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: '2ZzQptFVVYFONjgf',
    secretKey: 'cpcpOT8zq813wumygPD4q5nVZEDcMUkt'
});


var file = 'image/raze.jpg'
minioClient.fPutObject('minifb', 'firstStory', file, function(err, objInfo) {
    if(err) {
        return console.log(err)
    }
    console.log("Success", objInfo.etag, objInfo.versionId)
})