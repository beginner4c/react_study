import { useEffect } from "react";
import { useParams } from "react-router-dom";

// 해당 함수는 페이지 확인을 위해 간단히 return하게 만들었다
function Detail() {
    // useParams를 통해서 해당 페이지로 넘어온 /movie/:id의 :id 값을 받을 수 있다
    const { id } = useParams();
    // async await를 통해서 id값에 대한 영화 정보를 json 파일로 받아온다
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    };

    useEffect(() => {
        getMovie();
    }, []);
    
    return <h1>Detail</h1>;
}

export default Detail;