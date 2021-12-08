import { Injectable } from '@nestjs/common';
import { sleep } from 'utils/sleep';
import * as movies from 'db/movies.json';

@Injectable()
export class MovieService {
  async getMovies() {
    await sleep(1000);
    return movies;
  }
}
