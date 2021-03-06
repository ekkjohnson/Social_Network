const { Schema, model, Types } = require("mongoose");
const reactionSchema = require("./Reaction");

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
  
  thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
  })
const thought = model("thought", thoughtSchema);

module.exports = thought;