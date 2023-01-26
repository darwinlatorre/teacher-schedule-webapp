import allowedOrigins from '../config/allowedOrigins.js';

const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if(allowedOrigins.includes(origin)){
        res.headers('Access-Control-Allow-Credentials', true)
    }
    next();
}

export default credentials;