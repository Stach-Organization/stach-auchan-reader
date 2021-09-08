import React, { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Table from './Table';

function App() {
  const [valueTextarea, setValueTextarea] = useState('');
  const [isJSONOk, setIsJSONOk] = useState(false);

  const handleChange = (event) => {
    setValueTextarea(event.target.value);
  };

  const IsJsonString = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    if (IsJsonString(valueTextarea)) { setIsJSONOk(true); }
    event.preventDefault();
  };

  return (
    <div className="App">
      <Header />
      <div>
        {!isJSONOk && (
        <form onSubmit={handleSubmit}>
          <label>Code JSON :</label>
          <textarea value={valueTextarea} onChange={handleChange} className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4" />
          <input className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none" type="submit" value="Submit" />
        </form>
        )}
        {isJSONOk && <Table data={JSON.parse(valueTextarea)} />}
      </div>
    </div>
  );
}

export default App;

/* {"data": [
{
"name":"test",
"prix": 10
}
]} */
