const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = new Schema({ name: String, active: { type: Boolean, default: true }, order: { type: Number, default: 0 } });
const BannerSchema = new Schema({ active: { type: Boolean, default: true }, endDate: Date, order: { type: Number, default: 0 } });
const AnnouncementSchema = new Schema({ active: { type: Boolean, default: true }, expiresAt: Date });

module.exports = {
  Category: mongoose.models.Category || mongoose.model('Category', CategorySchema),
  Banner: mongoose.models.Banner || mongoose.model('Banner', BannerSchema),
  Announcement: mongoose.models.Announcement || mongoose.model('Announcement', AnnouncementSchema)
};
