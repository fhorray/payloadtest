import { Access } from 'payload/types'

export const isAdminOrSelf: Access = ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    // If the user is an admin, allow them to proceed
    if (user.role?.includes('admin')) {
      return true
    }

    // If anu other type of user, only provide acces to themselves
    return {
      id: {
        equals: user.id,
      },
    }
  }

  // Reject everyone else
  return false
}
