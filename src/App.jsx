import './App.css';
import elephant from "./images/elephant.jpeg";

function App(props) {
  // code here
  // let images = imageData();

  return (
    <>
      <div>
        <h1>Kalvium gallery</h1>
        <div className="image-container">
          {
            props.data.map((el) => {
              return (
                <div key={el.id}>
                  <img src={el.img} alt="" />
                </div>
              );
            })
          }
        </div>Using function Components
      </div>
    </>
  )

 

}
export default App;
