import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Button from "./Button";

// component가 호출되며 생성이 되었다면 반대로 호출이 사라진 경우에는 html을 숨기는 게 아니고 파괴를 한다
function Hello(){
  // cleanup function을 이용한 코드로 주석처리 된 아래 부분과 역할은 똑같다
  // function effectFn() {
  //   console.log("create function Hello!");
  //   return destryoedFn;
  // }
  // function destryoedFn() {
  //   console.log("destroyed function Hello!");
  // }

  useEffect(function() {
    console.log("hello!");
    return function() {
      console.log("bye!");
    }
  }, []);
  
  /*
  useEffect(() => {
    console.log("destroyed function Hello!");
    // component가 사라질 때 호출되는 걸 cleanup function이라고 한다
    return () => console.log("destroyed function Hello!");
  }, []);
  */
  return <h1>HELLO!</h1>;
}

// 실제 css의 클래스 이름이 겹쳐도 아무런 문제가 없다
// app.module.css와 button.module.css의 클래스가 동일하게 title이라고 해도 구분한다
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setValue((prev) => prev + 1);
  const onClick_show = () => setShowing(prev => !prev);
  const onChange = (event) => setKeyword(event.target.value); 

  // 해당 출력문은 App이 변경되어 호출될 때마다 재출력된다
  console.log("i run all the time");
  // useEffect의 []는 코드가 단 한 번만 실행되도록 한다
  useEffect(() => {
    console.log("this one is write only once");
  }, []);
  // useEffect에 keyword가 바뀔 때 console.log를 실행하도록 했다
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search For", keyword);
    }
  }, [keyword]);
  // useEffect에 counter가 바뀔 때 console.log를 실행하도록 했다
  useEffect(() => {
      console.log("this run when 'counter' is changed");
  }, [counter]);
  // keyword 혹은 counter가 바뀔 때 console.log를 실행하도록 했다
  useEffect(() => {
    console.log("this run when 'keyword' or 'counter' is changed");
  }, [keyword, counter]);

  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here...">
      </input>
      <h1 className={styles.title}>
        {counter}
      </h1>
      <Button text={"button needs a text"}></Button>
      <button onClick={onClick}>click me</button>
      <div>
        {showing ? <Hello /> : null}
        <button onClick={onClick_show}>{showing ? "Hide" : "Show"}</button>
      </div>
    </div>
  );
}

export default App;
