import { Routes, Route } from 'react-router-dom'
import PokemonDetails from './pages/PokemonDetails/PokemonDetails'
import PokemonPage from './pages/PokemonPage/PokemonPage'

export default function Router() {

  return (
    <Routes>
      <Route path='/' element={<PokemonPage />}></Route>
      <Route path='/pokemon/:name' element={<PokemonDetails />}></Route>
    </Routes>
  )
}