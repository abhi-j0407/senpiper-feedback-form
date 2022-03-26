import './App.css';
import Tabs from './components/Tabs';

function App() {

  // const clean = () => {
  //   var feedbacks = JSON.parse(localStorage.getItem("feedbacks"))
  //   console.log(feedbacks)
  //   var cleaned = feedbacks.filter(value => Object.keys(value).length !== 0);
  //   console.log(cleaned)
  //   localStorage.setItem("feedbacks",JSON.stringify(cleaned))
  // }

  return (
    <div className="App">
      <Tabs />
      {/* <button onClick={clean}>Clean</button> */}
    </div>
  );
}

export default App;
