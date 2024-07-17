const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    desc: {
        type: String,
        trim: true,
        default: ''
    },
    listId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'List'
    },
    dueDate: {
        type: Date,
        default: null
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model('Task', TaskSchema);
module.exports = {Task};