import app from './server.js';
import './config/database.js';


app.listen(app.get('port'), ()=> {
    console.log(`• Server listening on port ${app.get('port')} 🚀`);
});