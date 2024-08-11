import { useEffect, useState } from "react"
import CardWrapper from "./Components/CardWrapper/CardWrapper";

function App() {
  const [cards, setCards] = useState([{
    "id": 1,
    "front": "edited",
    "back": "Edited as well"
  },{
    "id": 2,
    "front": "edited2",
    "back": "Edited as well"
  },{
    "id": 3,
    "front": "edited3",
    "back": "Edited as well"
  }]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch("/api/cards");
        const data = await res.json(); // Parse the JSON data
        console.log("DATA in App.jsx ", data);
        setCards(data);
      } catch (error) {
        console.error("Error fetching cards: ", error);
      }
    };

    fetchCards();
  }, []);
  
  return (
    <div className="w-full min-h-screen m-0 p-0">
      <CardWrapper cards = {cards} />
    </div>
  )
}

export default App
