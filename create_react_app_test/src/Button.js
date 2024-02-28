// proptype 지정을 위한 import 방법
import PropTypes from "prop-types";
// css를 import
import styles from "./Button.module.css";

// className을 통해 css를 모듈화하여 사용할 수 있다
// 따로 클래스를 지정하지 않아도 되며 브라우저에서는 랜덤한 이름이 정해진다
function Button({ text }) {
    return <button className={styles.btn}>{text}</button>;
}

// 해당 방식을 통하여 propType을 지정할 수 있다
Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;