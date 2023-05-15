import Cards from "./Cards" ;
import arr from "./Data" ;
import './styles.css';
 
function App() {
  return (
    <>
    <h1 className="heading_style">List Of Most Viewed songs of 2023</h1>
      {arr.map((val) => (
        <Cards
          image={val.image}
          name={val.name}
          Composer={val.Composer}
          link={val.link}
        />
      ))}
    </>
  );
}
export default App ;