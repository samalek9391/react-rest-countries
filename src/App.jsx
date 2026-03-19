import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

const promiseCountries =  fetch("https://openapi.programming-hero.com/api/all")
.then (res => res.json())

function App() {


  return (
    <>
        <Suspense fallback = {<p>Nadir on the go is loading...</p>}>
          <Countries promiseCountries = {promiseCountries}></Countries>
        </Suspense>
    </>
  )
}

export default App
