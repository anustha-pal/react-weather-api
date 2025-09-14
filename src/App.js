import React, { useEffect, useState } from "react";

function App() {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mydotbackendservice-d5b9ghb6f5e4hddf.canadacentral-01.azurewebsites.net/weatherforecast")
      .then((res) => res.json())
      .then((data) => {
        setForecast(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weather data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Weather Forecast</h1>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th>Date</th>
            <th>Temperature (°C)</th>
            <th>Temperature (°F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecast.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.temperatureC}</td>
              <td>{item.temperatureF}</td>
              <td>{item.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
