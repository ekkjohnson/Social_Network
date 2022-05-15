// const reactionController={
// add Reaction
// addReaction({ params, body }, res) {
//     Thought.findOneAndUpdate(
//       { _id: params.thoughtId },
//       { $addToSet: { reactions: body } },
//       { new: true }
//     )
//       .then((dbThoughtData) => {
//         if (!dbThoughtData) {
//           res.status(404).json({ message: "No thought with this id" });
//           return;
//         }
//         res.json(dbThoughtData);
//       })
//       .catch((err) => res.json(err));
//   },

//   //delete Reaction
//   deleteReaction({ params }, res) {
//     Thought.findOneAndUpdate(
//       { _id: params.thoughtId },
//       { $pull: { reactions: { reactionId: params.reactionId } } },
//       { new: true }
//     )
//       .then((dbThoughtData) => res.json(dbThoughtData))
//       .catch((err) => res.json(err));
//   }
// };

// module.exports=reactionController;