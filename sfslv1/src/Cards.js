import React from "react" ;


function Cards(props){
  return(<>
    <div className="cards">
      <div className="card">
        <img src={props.image} alt="image" className="card__img"/>
        <div className="card__info">
          <h2 className="card__title">{props.name}</h2>
          <p className="card__category">{props.Composer}</p>
          <a href={props.link} >
          <button> Click </ button> </a>
        </div>
      </div>
    </div>
    </>
  );
}
export default Cards ;