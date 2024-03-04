import { useEffect, useState } from "react";
import Movie from "../components/Movie";

// 이젠 App이 아니라 여기에서 페이지를 만들어서 return하게 한다
// 여기가 최상위 '/'의 호출 페이지가 된다

function Home() {
    // api loading 전과 후를 정의하기 위한 상태를 정의
    const [loading, setLoading] = useState(true);
    // 영화 정보를 저장하기 위한 상태를 정의
    const [movies, setMovies] = useState([]);
    // api를 통해 json파일을 받아 영화 정보와 loading 정보를 수정하는 함수
    const getMovies = async() => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    // 단 한 번만 api를 불러와서 완료되면 loading창을 고쳐준다
    useEffect(() => {
        getMovies();
    }, []);

    console.log(movies); // api를 받아오는지 확인용으로 해놓음
    // 영화 정보를 map을 통해서 분리하고 Movie.js로 넘긴다
    return (
    <div>
        {loading ? (
        <h1>Loading...</h1>
        ) : (
            <div>{movies.map((movie) => (
            <Movie 
                key={movie.id}
                id={movie.id}
                cover_img={movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.summary} 
                genres={movie.genres}/>  
            ))}
        </div>
        )}
        </div>
    );
}

export default Home;