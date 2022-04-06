// import mongoose, { Schema } from 'mongoose';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const crawledPageSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  //todo: add here the missing fields
  creationDate: {
    type: Date,
    default: Date.now
  },
  updateDate: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('CrawledPage', crawledPageSchema);
