var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({
    student_name: {type: String, required: true},
    assignment_name: String,
    assignment_number: {type: Number, required: true},
    score: {type: Number, required: true},
    date_completed: {type: Number, required: true}
});







var Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;