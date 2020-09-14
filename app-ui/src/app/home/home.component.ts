import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../api/omdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieTitle: string;

  constructor(
    private omdbService: OmdbService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('Reached Search Page')
    console.log(this.omdbService.movieTitle)
  }

  onSearch() {
    this.omdbService.movieTitle = this.movieTitle;
    this.router.navigate(['/search']);
  }


}
