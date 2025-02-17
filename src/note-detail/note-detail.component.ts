import {Component, inject, OnInit} from '@angular/core';
import {Note, NOTES} from '../notes';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css',
  imports: [RouterModule],
})
export class NoteDetailComponent implements OnInit {
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  note?: Note;
  id?: number;
  ngOnInit(): void {
    this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.note = NOTES.find((i) => i.id === this.id);
  }

  deleteNote() {
    const index = NOTES.findIndex((note) => note.id == this.id)
    if (index !== -1) {
      NOTES.splice(index, 1);
      this.router.navigateByUrl('/')
    }
  }
}
