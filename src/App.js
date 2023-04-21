import React, {useState} from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Card from './components/Card'

export default function App() {
  return (
    <div>
      {/* header */}
      <Header />
      <div>
        <Form />
      </div>
      {/* card */}
      <Card />
    </div>
  )
}