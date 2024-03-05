import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// 해당 함수는 api의 정보를 받아 div로 포장해 return 한다
function Movie({ id, cover_img, title, summary, genres }) {
    return (
    <div>
        <img src={cover_img} alt={title}></img>
        <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary.length > 235 ? `${summary.slice(0, 235 )}...` : summary}</p>
        <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>))}
        </ul>
    </div>
    );
}

// 받아야 하는 property의 종류와 필수성 등을 지정했다
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    cover_img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;