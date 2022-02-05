import { useState } from 'react';
import { data } from './data';
import './App.css';
import pic from './flag.jpg';

function App() {

   const [island, setIsland]  = useState(data); 
   const [pictures, setPictures]  = useState(0); 
   const {imageTwo} = data[pictures]

   const previosPhoto = () => {
    setPictures(pictures => {
      pictures--;
      if (pictures < 0) {
        return data.length - 1;
      }
      return pictures;
    })
   }

   const nextPhoto = () => {
    setPictures(pictures => {
      pictures++;
      if (pictures > data.length - 1) {
        pictures = 0;
      }
      return pictures;
    })
  }

   const removeIsland = (id) => {
    let newIsland = island.filter((elem) => elem.id !==id);
    setIsland(newIsland);
   }

   const setShowMore = (id) => {
     const newIsland = [];
     island.forEach(element => {
       if (element.id === id){
        const changeWords = {...element, showMore: !element.showMore};
        newIsland.push(changeWords);
       } else {
        newIsland.push(element);
       }
     });
     setIsland(newIsland);
   }


  return (
    <div className='mainContainer'>

    <div className="container">
      <img className='flag' src={pic} width='100px' alt='Grees flag'/>
    </div>

    <div className="container">
      <h1>Куда лететь в Греции отдохнуть?</h1>
    </div>
      
    {island.map(item =>{
        const {id, name, image, description, showMore} = item;

          return(
            <div key={id}>
            <div className="container">
              <h2>Это остров {name}</h2>
            </div>

            <div className="container">
              <img src={image} width='400px' alt='Island'/>
            </div>

            <div className="container">
              <p>{showMore ? description.substring(0, 200) + '...' : description} 
                <button onClick={() => setShowMore(id)}>{showMore ? "Показать больше" : "Показать меньше"}</button>
              </p>
            </div>

            <div className="container">
              <button onClick={() => removeIsland(id)}>Убрать</button>
            </div>
            </div>
          )
      })}
      <div className="container">
        <button className='delete' onClick={() => setIsland([])}>Удалить всё</button>
      </div>

    <div className='footer'>
      <div className="container">
       <h3>Фото Греции</h3>
      </div>
      <div className="container">
        <img src={imageTwo} width='300px' alt='Island'/>
      </div>
      <div className="container btn" >
        <button onClick={previosPhoto}>Туда</button>
        <button onClick={nextPhoto}>Сюда</button>
      </div>
      <div className="container">
        <p>Узнать больше о Греции можно на <a href='https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%BE%D0%B2_%D0%93%D1%80%D0%B5%D1%86%D0%B8%D0%B8'>Википедия</a></p>
      </div>
    </div>
    </div>
  );
}

export default App;
