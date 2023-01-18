import app from './server.js';
import './database/database.js';


app.listen(app.get('port'), ()=> {
    console.log(`Server listening on port ${app.get('port')} 🚀`);
});