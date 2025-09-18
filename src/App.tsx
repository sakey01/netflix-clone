
import Navbar from "./components/navbar";
import Trailer from "./components/trailer";
import Footer from "./components/footer";
import MovieList from "./components/rows/movieList";



function App() {
  return (
    <div className="bg-neutral-950 min-w-screen min-h-screen hideScroll">
      <Navbar />
      <Trailer />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
