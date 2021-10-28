module.exports = (app) => {
    const templates = require('../controllers/template.controller.js');

    // Create a new Template
    app.post('/templates', templates.create);

    // Retrieve all Templates
    app.get('/templates', templates.findAll);

    // Retrieve a single Template with templateId
    app.get('/templates/:templateId', templates.findOne);

    // Delete a Template with templateId
    app.delete('/templates/:templateId', templates.delete);

    // Update a Template with templateId
    app.put('/templates/:templateId', templates.update);

}