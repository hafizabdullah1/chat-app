import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        receiver: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        text: {
            type: String,
        },
        attachment: {
            type: String,
            default: "",
        },
        attachmentType: {
            type: String,
            enum: ["image", "video", "audio", "file", "none"],
            default: "none",
        },
        readStatus: {
            type: String,
            default: "sent",
            enum: ["sent", "delivered", "seen"]
        },
    },
    { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
