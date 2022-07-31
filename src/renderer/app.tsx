import ReactDOM from 'react-dom'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import MainPage from './pages/MainPage'
import SearchPage from './pages/SearchPage'
import SignInPage from './pages/SignInPage'
import useIpc from './useIpc'

function App() {
  useIpc()
  return (
    <RecoilRoot>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </HashRouter>
    </RecoilRoot>
  )
}

function render() {
  ReactDOM.render(<App />, document.body)
}

render()
