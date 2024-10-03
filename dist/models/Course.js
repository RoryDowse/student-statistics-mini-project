import { Schema, model } from 'mongoose';
const courseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    inPerson: {
        type: Boolean,
        default: true,
    },
    start: {
        type: Date,
        default: Date.now(),
    },
    end: {
        type: Date,
        // Sets a default value of 12 weeks from now
        default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    },
    students: [
        {
            type: Schema.Types.ObjectId,
            ref: 'student',
        },
    ],
}, {
    toJSON: {
        virtuals: true,
    },
    timestamps: true
});
const Course = model('Course', courseSchema);
export default Course;
