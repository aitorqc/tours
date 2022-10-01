import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

import './App.css';

const url = "http://127.0.0.1:3000/data.json";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <section>
          <div className="title">
            <h2>No Tours Left</h2>
          </div>
          <button className='delete-btn' onClick={fetchTours}>Refresh</button>
        </section>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} callback={removeTour}></Tours>
    </main>
  );
}

export default App;
