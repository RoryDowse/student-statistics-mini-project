import { Schema, Types, model } from 'mongoose';
const assignmentSchema = new Schema({
    assignmentId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    name: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 4,
        default: 'Unnamed assignment',
    },
    score: {
        type: Number,
        required: true,
        default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
    },
}, {
    timestamps: true,
    _id: false
});
const studentSchema = new Schema({
    first: {
        type: String,
        required: true,
        max_length: 50,
    },
    last: {
        type: String,
        required: true,
        max_length: 50,
    },
    github: {
        type: String,
        required: true,
        max_length: 50,
    },
    assignments: [assignmentSchema],
}, {
    toJSON: {
        getters: true,
    },
    timestamps: true
});
const Student = model('Student', studentSchema);
export default Student;
