
import './App.css';

import { Input } from './input';
import { Card } from './card';

function App() {
  const citiesList =  ['New York', 'Moscow', 'Kaliningrad'];
  return (
    <div className="main">
      <Input/>
      <div className="CardWrapper">
        {citiesList.map(city => <Card key={city} city={city}/>)}
    </div>
    </div>
  );
}

export default App;
