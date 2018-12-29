import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Movies extends Component {

	componentWillMount() {
		this.props.moviesList();
	}

	renderMovies = (movies) => {
		if (movies) {
			return movies.map((movie) => {
				return (
					<div key={movie.id}>{movie.name}</div>
				)
			})
		}

	}

	render() {
		return (
			<div>
				{this.renderMovies(this.props.movies)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		movies: state.films
	}
}

export default connect(mapStateToProps, actions) (Movies);
