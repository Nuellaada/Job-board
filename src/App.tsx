import JobList from './JobList';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Find the perfect job for you</h1>
        <p>Browse through our curated list of top engineering roles across Nigeria</p>
      </div>
      <JobList />
    </div>
  );
}

export default App;