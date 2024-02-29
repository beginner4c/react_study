import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  // input에 옵션으로 넣어 toDo를 바꿀 함수
  const onChange = (event) => setToDo(event.target.value);
  // form에 옵션으로 button으로 submit이 발생하면 toDo를 초기화하고 toDos에 값을 넣는 함수
  const onSubmit = (event) => {
    event.preventDefault(); // form에 submit 진행 시 초기 화면으로 돌아가는 걸 막는다
    if(toDo === "") {
      return;
    }
    setToDo(""); // toDo 초기화
    // 배열의 값들을 배열에 다시 집어넣고 싶다면 '...'을 값을 꺼낼 배열 앞에 적으면 된다
    setToDos(currentArray => [toDo, ...currentArray]); // toDos 에 새 값과 이전 값을 넣는다
  };
  // console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange} 
          type="text" 
          placeholder="Write your to do...">
        </input>
        <button>Add To Do</button>
      </form>
      <hr></hr>
      <ul>
        {toDos.map((item, index) => <li key={index} >{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
