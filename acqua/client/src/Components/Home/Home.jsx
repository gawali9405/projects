import React from 'react'


const Home = ({joke}) => {
  return (
    <div className='pt-50'>
      {joke.map((joke)=>(
        <div key={joke.id} className='bg-gray-200 p-5 m-5 rounded-lg'>
          <h1>{joke.title}</h1>
          <p>{joke.punchline}</p>
        </div>
      ))}
    </div>
  )
}

export default Home