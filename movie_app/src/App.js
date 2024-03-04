import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
// App은 이제 route만 담당하게 된다
// Router를 선언하고 하위에 Routes를 만들고 그 아래 Route를 하나하나 정의한다
// Route로 path를 만들어 정의하고 js 파일을 만들어 놓으면 해당 위치 이동 시 해당 js 파일을 return 받는다
// route 시에 :를 통하여 dynamic route를 실행해줄 수 있다
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<h1>Hello</h1>} ></Route>
        <Route path="/movie/:id" element={<Detail></Detail>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </Router>
  );
}
export default App;

// useEffect(() => {
  //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
  //   .then((response) => response.json())
  //   .then((json) => {
    //     setMovies(json.data.movies);
    //     setLoading(false);
    // });
    // }, [])



    // <div>
    // {loading ? (
    //   <h1>Loading...</h1>
    //   ) : (
    //   <div>{movies.map((movie) => (
      //   <div key={movie.id}> // map을 통한 방식으로 div를 만들 때 key 값을 무조건 주어야 한다
      //   <img src={movie.medium_cover_image}></img>
      //   <h2>{movie.title}</h2>
      //   <p>{movie.summary}</p>
      //   <ul>
      //     {movie.genres.map((g) => (
      //       <li key={g}>{g}</li>))}
      //   </ul>
    //     </div>
    //   ))}
    //   </div>
    // )}
    // </div>
    