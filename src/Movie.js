import React from 'react';

const MovieImage = {
    name: 'Movie photo',
    imageUrl: 'https://media.istockphoto.com/id/1566653954/photo/hands-holding-clapper-board-making-video-cinema-in-the-studio-movie-production-clapper-board.jpg?s=1024x1024&w=is&k=20&c=A6VodWvVPOMB2sZ6luvW0w1-dEjEkGdyBurLS54iNjQ=',
    imageSize: 90,
  };
  

const Movie = ({movies}) => {
    return (
        <div>
            <img src={MovieImage.imageUrl} 
            style={{
                width: MovieImage.imageSize,
                height: MovieImage.imageSize
            }}/>
            <h1>Upgrade Your Experience</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
    );
}

export default Movie;
