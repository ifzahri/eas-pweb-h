import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: "username",
      type: "text",
      label: "Username",
      required: false,
    },
  ],
}

export default Users
