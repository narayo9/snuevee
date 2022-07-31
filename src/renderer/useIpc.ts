import { useSetRecoilState } from 'recoil'
import { useEffect } from 'react'
import { crawlerAtom } from './atoms/crawler'

const useIpc = () => {
  const setCrawlerState = useSetRecoilState(crawlerAtom)

  useEffect(() => {
    window.crawlerAPI.pingEverytime()
    window.crawlerAPI.pingSnulife()
    window.crawlerAPI.onEverytimePong((event, value) => {
      console.log('everytime pong~', value)
      setCrawlerState((state) => ({
        ...state,
        everytime: { status: 'LOGIN_PAGE' },
      }))
    })
    window.crawlerAPI.onSnulifePong((event, value) => {
      console.log('snulife pong~', value)
      setCrawlerState((state) => ({
        ...state,
        snulife: { status: 'LOGIN_PAGE' },
      }))
    })
  }, [])
}

export default useIpc
