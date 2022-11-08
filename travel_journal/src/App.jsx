import './App.css'
import Card from './components/Card';
import Header from './components/Header';
import tripsData from './data';

function App() {

  const cards = tripsData.map(trip => {
    return (
      <Card 
        key={trip.id}
        trip={trip}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <section>
        {cards}
      </section>
    </div>
  )
}

export default App
