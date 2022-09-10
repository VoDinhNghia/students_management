exports.whiteList = ['http://localhost:3000', 'http://localhost:8000']; // add url of frontend to avoid error cors

exports.corsOptionsDelegate = (req, callback) => {
    let corsOptions;
    if (this.whiteList.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}