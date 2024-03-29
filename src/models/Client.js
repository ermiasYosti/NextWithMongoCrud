import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  name: String,
  email: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Client = mongoose.models.Client || mongoose.model("Client", ClientSchema);

export default Client;
