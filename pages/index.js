import Head from 'next/head'
import Link from 'next/link'

import { BiConversation, BiBookReader } from "react-icons/bi"

import Banner from '../components/banner'
import Tabs from '../components/Tabs'
import Trendingnews from '../components/trendingnews'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Banner/>
        <div className="container">
          <div className="grids">
            <div className="grid xl-70 md-100 sm-100">
              <section className="section-padding">
                <h6 className="fw-600">LASTEST WORLD NEWS</h6>
                <p className="sm">Don't miss daily news</p>
                {[
                  {bgImage: '/img/content/content-02.jpg'}, 
                  {bgImage: '/img/content/content-03.jpg'}, 
                  {bgImage: '/img/content/content-04.jpg'}
                ].map((d, i) => (
                  <div key={`card_${i}`} className="ss-card ss-card-01 mt-2">
                    <div className="card-line"></div>
                    <div className="image-container">
                      <div className="ss-img"> 
                        <div className="img-bg" style={{backgroundImage:`url('${d.bgImage}')`}}></div>
                      </div>
                    </div>
                    <div className="text-container">
                      <Link href="#">
                        <div className="ss-tags">
                          <div href="#" className="tag">
                            Polotics
                          </div>
                        </div>
                      </Link>
                      <p className="lg mt-2 fw-600">
                        Here’s the proof that momentum strategies work
                      </p>
                      <p className="xxxs">
                        JUNE 8,2022
                      </p>
                      <p className="xxs mt-4">
                        Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet,
                        consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan.
                      </p>
                      <div className="card-footer mt-2">
                        <div className="profile">
                          <div className="image-container">
                            <img src="/img/avatars/01.jpg" alt="Personal"></img>
                          </div>
                          <div className="text">
                            <p className="xxxs ml-2 fw-600">BY MANOP AEMSIRI</p>
                          </div>
                        </div>
                        <div className="comment-view">
                          <div className="item mr-2">
                            <BiConversation className="icon"/> 
                            <span className="color-black p xxs fw-600 ml-1">3</span>
                          </div>
                          <div className="item">
                            <BiBookReader/> 
                            <span className="color-black p xxs fw-600 ml-1">127 view</span>
                          </div>
                        </div>
                      </div>
                    </div>                      
                  </div>
                ))}
              </section>
            </div>
            <div className="grid xl-30 md-100 sm-100">
              <div className="section-padding">
                <Tabs/>
              </div>
            </div>
          </div>
        </div>
        <Trendingnews/>
      </main>
    </div>
  )
}
