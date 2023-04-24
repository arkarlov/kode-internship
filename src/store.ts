import { create } from "zustand";

import { IUser } from "./api/users";

interface UsersStore {
  users: IUser[];
  setUsers: (v: IUser[]) => void;
}

export const useUsersStore = create<UsersStore>((set) => ({
  users: [],
  setUsers: (v) => set({ users: v }),
}));
