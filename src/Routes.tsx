import { Routes, Route } from 'react-router-dom'
import PokemonPage from './pages/PokemonPage/PokemonPage'

export default function Router() {

  return (
    <Routes>
      <Route path='/' element={<PokemonPage />}></Route>
    </Routes>
  )
}