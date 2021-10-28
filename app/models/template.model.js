const mongoose = require('mongoose');

const TemplateSchema = mongoose.Schema({
    message: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Template', TemplateSchema);