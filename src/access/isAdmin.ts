import { Access, FieldAccess } from 'payload/types'
import { User } from '@/payload-types'

// Fields to use on collections
export const isAdmin: Access<any, User> = ({ req: { user } }) => {
  // Returns true or false based on if the user has an Admin role
  return Boolean(user?.role?.includes('admin'))
}

// Function to use inside FIELDS on collections
export const isAdminFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({
  req: { user },
}) => {
  // Return true or false on if the user has tan admin role
  return Boolean(user?.role?.includes('admin'))
}
