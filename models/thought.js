const { Schema, model, Types } = require("mongoose");


const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  

const thought = model("thought", thoughtSchema);

module.exports = thought;