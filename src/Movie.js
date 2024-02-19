import React from 'react';

const MovieImage = {
    imageSize: 90
  };
  

const Movie = ({movies}) => {
    return (
        <div>
            <img src={movies.url} 
            style={{
                width: 90,
                height: 90
            }}/>
            <h1>{movies.title}</h1>
            <p>{movies.describistion}</p>
        </div>
    );
}

export default Movie;
