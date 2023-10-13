import { TUser } from "../types/User";

export function isUserDataValid(userData: Omit<TUser, 'id'>) {
  if (!userData.name) {
    return false;
  }

  if (!userData.email) {
    return false;
  }

  return true;
}