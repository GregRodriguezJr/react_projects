import React from 'react'
import MainNav from '../components/MainNav';

const Error = () => {
  return (
    <>
        <MainNav />
        <main>
            <h1>Yikes an error occurred!</h1>
            <p>Page cant be found</p>
        </main>
    </>
  )
}

export default Error