import { CollectionConfig } from "payload/types";

const Chats: CollectionConfig = {
  slug: "chats",
  auth: false,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "sender",
      type: "text",
      label: "Sender",
      required: true,
    },
    {
      name: "receiver",
      type: "text",
      label: "Receiver",
      required: true,
    },
    {
      name: "chats",
      type: "text",
      label: "Chats",
      required: true,
    },
  ],
};

export default Chats;
