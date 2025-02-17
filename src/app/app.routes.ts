import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '',
    loadComponent: () => import('./../notes-list/notes-list.component').then((c) => c.NotesListComponent),
  },
  { path: 'new',
    loadComponent: () => import('./../add-note/add-note.component').then((c) => c.AddNoteComponent),
  },
  { path: 'note/:id',
    loadComponent: () => import('./../note-detail/note-detail.component').then((c) => c.NoteDetailComponent),
  },
];


