import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import NotFound from './page/NotFound'
import "./assets/style/styleIndex.css"
import About from './page/About'
import Contact from './page/Contact'
import Amf from './page/Amf'
import PageProchainEvent from './page/PageProchainEvent'
import PagePastEvents from './page/PagePasseEvenement'
import MentionLegal from './page/Mention-legal'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actualite" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/historique" element={<PagePastEvents />} />
        <Route path="/petit-plus" element={<PageProchainEvent />} />
        <Route path="/mention-legal" element={<MentionLegal />} />
        <Route path="/photo" element={<Amf />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
