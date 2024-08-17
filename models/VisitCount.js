import mongoose from 'mongoose';

const visitCountSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

const VisitCount = mongoose.model('VisitCount', visitCountSchema);

export default VisitCount;
