import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';

@Component({
  selector: 'app-print-movies',
  templateUrl: './print-movies.component.html',
  styleUrls: ['./print-movies.component.css']
})
export class PrintMoviesComponent implements OnInit {

    @Input() movie: IMovie;
    @Output() showMovie = new EventEmitter<number>();

    openMovieId() {
        this.showMovie.emit(this.movie.id);
        console.log('movie id child is: ' + this.movie.id);
    }


  constructor() { }

  ngOnInit() {
  }

}
