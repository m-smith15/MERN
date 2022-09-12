const PersonContoller = require('../controllers/person.controller');

module.exports = function(app){
    app.get('/api', PersonContoller.index);
    app.post('/api/people', PersonContoller.createPerson);
}