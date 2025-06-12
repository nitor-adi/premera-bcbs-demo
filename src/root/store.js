// store/appliedChangesStore.ts
import { create } from 'zustand';

export const useAppliedChangesStore = create((set) => ({
    appliedChanges: [],
    applyChange: (record) =>
        set((state) => ({
            appliedChanges: [...state.appliedChanges, record],
        })),
    resetChanges: () => set({ appliedChanges: [] }),
}));
