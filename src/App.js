import DateBirthForm from './components/DateBirthForm'
import './App.css'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='App-title'>What's your fumo?</div>
        <img src='https://c.tenor.com/a_XIGQwRb9AAAAAd/touhou-fumo.gif' alt='fumo' width='50' height='50' />
      </header>

      <DateBirthForm />
    </div>
  )
}

export default App