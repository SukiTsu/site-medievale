import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import NotFound from './page/NotFound'
import "./assets/style/styleIndex.css"
import About from './page/About'
import Contact from './page/Contact'
import PageProchainEvent from './page/PageProchainEvent'
import MentionLegal from './page/Mention-legal'
import PagePhoto from './page/PagePhotos'
import PageHistory from './page/PageHistory'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actualite" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/historique" element={<PageHistory />} />
        <Route path="/petit-plus" element={<PageProchainEvent />} />
        <Route path="/mention-legal" element={<MentionLegal />} />
        <Route path="/photo" element={<PagePhoto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
