import JobList from "./Joblist";
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-header">
      <h1>Find the Perfect Job for You</h1>
      <p>Browse through our curated list of top engineering roles</p>
      </div>
      <JobList />
    </div>
  );
}

export default App;
