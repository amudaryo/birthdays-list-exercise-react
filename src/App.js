import './App.css';
import data from './data';
import {useState} from 'react';
import List from './List';

function App() {
const [people, setPeople] = useState(data)

const deleteOne = (id) => {
  const filterBdays = people.filter(person=>person.id !== id);
  setPeople(filterBdays);
}

  return (
    <main>
      <section className='container'>

      <h3>{people.length} birthdays today</h3>

       {/* here we're passing the state */}
      <List 
      people={people} 
      setPeople={setPeople} 
      data={data} 
      deleteOne={deleteOne}
      />
      </section>
    </main>
  );
}

export default App;
