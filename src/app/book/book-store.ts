import { computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

const books = [
  {
    id: 1,
    title: 'Very interesting book',
  },
];

type State = {
  selectedBook: { id: number; title: string } | null;
};

const initialState: State = {
  selectedBook: null,
};

export const BookStore = signalStore(
  withState(initialState),

  withComputed((store) => ({
    selectedBook: computed(() => store.selectedBook()),
  })),

  withMethods((store) => ({
    selectBook(id: number) {
      const book = books.find((b) => b.id === id);

      patchState(store, {
        selectedBook: book ?? null,
      });
    },
  })),

  withHooks({
    onInit(store) {
      const route = inject(ActivatedRoute);

      const param = route.snapshot.paramMap.get('id');

      if (param) {
        store.selectBook(Number(param));
      }
    },
  }),
);
