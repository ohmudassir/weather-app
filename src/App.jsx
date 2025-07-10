import React from 'react'

const App = () => {
  return (
    <>
    <main>
      <h1>Weather App</h1>
      <p>Welcome to the Weather App! Here you can find the latest weather updates.</p>
      <p>Stay tuned for more features coming soon!</p>

      <form>
        <input type="text" placeholder="Enter location" />
        <button type="submit">Get Weather</button>
      </form>
      <div>
        <h2>City Name</h2>
        <p>Temperature</p>
        <p>Description</p>
        <img src="" alt="Weather Icon" />
      </div>
      <p>error message here</p>
    </main>
    </>
  )
}

export default App