import { INote } from '@/interfaces/note.interface';
import { create } from 'zustand';

interface IBearStore {
  notes: INote[];
  setNotes: (notes: INote[]) => void;
  addNote: (note: INote) => void;
}

export const useNoteStore = create<IBearStore>((set) => ({
  notes: [
    {
      note_id: 1,
      author_id: 1,
      author: 'Joe Baden',
      point_id: 1,
      created_at: new Date().toString(),
      // eslint-disable-next-line max-len
      citation: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eveniet quia illum modi nemo quam, officiis incidunt repudiandae ab suscipit ipsa quasi! Quaerat minima eveniet doloribus voluptas quis reprehenderit repellendus.',
      citation_source: 'Book 1984',
    },
    {
      note_id: 2,
      author_id: 1,
      author: 'Joe Baden',
      point_id: 1,
      created_at: new Date().toString(),
      // eslint-disable-next-line max-len
      citation: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eveniet quia illum modi nemo quam, officiis incidunt repudiandae ab suscipit ipsa quasi! Quaerat minima eveniet doloribus voluptas quis reprehenderit repellendus.',
      citation_source: 'Book 1984',
    },
  ],
  addNote: (note: INote) => {
    set((state) => ({ notes: [...state.notes, note] }));
  },
  setNotes: (notes: INote[]) => {
    set({ notes });
  },
}));
