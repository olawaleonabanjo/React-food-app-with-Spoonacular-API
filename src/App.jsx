import { useState } from 'react'
import Search from './Components/Search';
import FoodList from './Components/FoodList';
import NavBar from './Components/NavBar';
import './App.css';
import Container from './Components/Container';
import InnerContainer from './Components/InnerContainer';
import FoodDetails from './Components/FoodDetails';
function App() {
    const [foodData, setFoodData ] = useState([])
    const [foodId, setFoodId] = useState('')
  return (
      <div className='App'>
         <NavBar />
       <Search foodData={foodData} setFoodData={setFoodData} />
       <Container>
          <InnerContainer>
            <FoodList setFoodId={setFoodId} foodData={foodData} />
          </InnerContainer>

          <InnerContainer>
            <FoodDetails foodId={foodId}/>
          </InnerContainer>

       </Container>
      </div>
  )
}

export default App
