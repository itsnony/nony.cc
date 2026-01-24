import mongoose from 'mongoose';

const GuestbookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    default: 'Anonymous',
    maxlength: 50,
  },
  message: {
    type: String,
    required: true,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Guestbook || mongoose.model('Guestbook', GuestbookSchema);
