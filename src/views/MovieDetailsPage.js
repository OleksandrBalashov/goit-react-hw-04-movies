import axios from 'axios';
import React, { Component } from 'react';
import MoviesGenresList from '../components/MovieDatails/MovieGenresList';
import AudditionInformation from '../components/MovieDatails/AudditionInformation';
import Layout from '../components/Layout/Layout';
import '../components/MovieDatails/MovieDetailsPage.scss';

class MovieDetailsPage extends Component {
  state = {
    // title: null,
    // base_url: null,
    // logo_sizes: null,
    // poster_path: null,
    // release_date: null,
    // vote_average: null,
    // overview: null,
    // genres: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const { data } = await axios.get(`/movie/${movieId}`);
    const {
      poster_path,
      release_date,
      title,
      vote_average,
      overview,
      genres,
      backdrop_path,
    } = data;

    const {
      data: { images },
    } = await axios.get('/configuration');
    console.log(data);
    console.log(images);

    const { logo_sizes, base_url, backdrop_sizes } = images;

    this.setState({
      poster_path,
      release_date,
      title,
      vote_average,
      overview,
      genres,
      base_url,
      backdrop_path,
      backdrop_sizes: backdrop_sizes[3],
      logo_sizes: logo_sizes[5],
    });
  }

  editMovieRealise = () => {
    const { release_date } = this.state;
    return release_date.slice(0, 4);
  };

  editMovieAverage = () => {
    const { vote_average } = this.state;
    return +vote_average * 10;
  };

  render() {
    const {
      title,
      base_url,
      logo_sizes,
      poster_path,
      overview,
      genres,
      backdrop_path,
      backdrop_sizes,
    } = this.state;

    const imageSrc = `${base_url}${logo_sizes}${poster_path}`;
    const bgImage = `${base_url}${backdrop_sizes}${backdrop_path}`;

    console.log(bgImage);

    return (
      <>
        {title && (
          <>
            <div
              style={{
                backgroundImage: `linear-gradient(to right, rgba(3, 37, 65, 0.7), rgba(3, 37, 65, 0.7)), url(${bgImage})`,
              }}
              className="Background"
            >
              <Layout>
                <div className="ContainerMovie">
                  <div className="WrapMovie">
                    <img src={imageSrc} alt="title" className="MovieImg" />
                  </div>

                  <div className="WrapMovieFields">
                    <h2 className="MovieTitle MarginPadding">{`${title} (${this.editMovieRealise()})`}</h2>
                    <div className="MovieScore MarginPadding">
                      <span className="MovieScoreText">User Score: </span>
                      <span className="MovieScorePoint">{`${this.editMovieAverage()}%`}</span>
                    </div>
                    <h4 className="MovieDescr MarginPadding">Genres:</h4>
                    <MoviesGenresList genres={genres} />
                    <div>
                      <h4 className="MarginPadding MovieDescr">Overview: </h4>
                      <p className="MarginPadding MovieOverview">{overview}</p>
                    </div>
                  </div>
                </div>
              </Layout>
            </div>
            <AudditionInformation options={{ base_url, logo_sizes }} />
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
