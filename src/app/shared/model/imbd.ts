export interface Imbd {
  data: {
          movies: [
            {
              title: string,
              year: string,
              releaseDate: string,
              directors: [
                {
                  name: string,
                  id: string
                }
              ],
              writers: [
                {
                  name: string,
                  id: string
                }
              ],
              runtime: string,
              urlPoster: string,
              countries: [],
              languages: [],
              genres: [],
              plot: string,
              simplePlot: string,
              idIMDB: string,
              urlIMDB: string,
              rating: string,
              metascore: string,
              rated: string,
              votes: string,
              type: string,
            }
          ]
        },
        about: {
          version: string,
          serverTime: string,
        }
}
