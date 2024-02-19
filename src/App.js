import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies= [
  {
    title:"Exmple1",
    url:'https://media.istockphoto.com/id/1566653954/photo/hands-holding-clapper-board-making-video-cinema-in-the-studio-movie-production-clapper-board.jpg?s=1024x1024&w=is&k=20&c=A6VodWvVPOMB2sZ6luvW0w1-dEjEkGdyBurLS54iNjQ=',
    describistion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    title:"Exmple 2",
    url:'https://media.istockphoto.com/id/1566653954/photo/hands-holding-clapper-board-making-video-cinema-in-the-studio-movie-production-clapper-board.jpg?s=1024x1024&w=is&k=20&c=A6VodWvVPOMB2sZ6luvW0w1-dEjEkGdyBurLS54iNjQ=',
    describistion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    title:"Exmple 3",
    url:'https://media.istockphoto.com/id/1566653954/photo/hands-holding-clapper-board-making-video-cinema-in-the-studio-movie-production-clapper-board.jpg?s=1024x1024&w=is&k=20&c=A6VodWvVPOMB2sZ6luvW0w1-dEjEkGdyBurLS54iNjQ=',
    describistion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
];


function App() {

  return ( // all things in return will appear to screen
    <div className="App">
      <Movie movies={movies[0]}></Movie>
      <Movie movies={movies[1]}></Movie>
      <Movie movies={movies[2]}></Movie>
    </div>
  );
}

export default App;
