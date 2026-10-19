import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { TierId } from "@/data/scene";

type ClubState = {
  entered: boolean;
  tier: TierId | null;
  enter: () => void;
  leave: () => void;
  join: (tier: TierId) => void;
};

export const useClub = create<ClubState>()(
  persist(
    (set) => ({
      entered: false,
      tier: null,
      enter: () => set({ entered: true }),
      leave: () => set({ entered: false }),
      join: (tier) => set({ tier, entered: true }),
    }),
    { name: "x-rsa-club" },
  ),
);
