module.exports = (app) => {
    const templates = require('../controllers/template.controller.js');

    // Create a new Resume
    app.post('/templates', templates.create);

    // Retrieve all Resumes
    app.get('/templates', templates.findAll);

    // Retrieve a single Resume with resumeId
    app.get('/templates/:templateId', templates.findOne);

}