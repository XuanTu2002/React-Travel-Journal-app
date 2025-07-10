import './App.css';
import Header from './components/Header';
import journalData from './data.js';
import Entry from './components/Entry.js';
function App() {
  const journalElement = journalData.map(journal => {
    return (
      < Entry
        key={journal.id}
        entry={journal}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      {journalElement}
    </div>
  );
}

export default App;
