import Link from 'next/link'

export default function Popularnew(){
  return(
    <>
     {[
      {bgImage: '/img/content/content-05.jpg'}, 
      {bgImage: '/img/content/content-06.jpg'}, 
      {bgImage: '/img/content/content-07.jpg'}
    ].map((d, i) => (
      <div key={`card_${i}`} className="ss-card ss-card-01 mt-2">
        <div className="card-line"></div>
        <div className="image-container">
          <div className="ss-img"> 
            <div className="img-bg" style={{backgroundImage:`url('${d.bgImage}')`}}></div>
          </div>
        </div>
        <div className="text-container">
          <p className="xxxs mt-2 fw-600">
            <Link href="#">Here’s the proof that momentum strategies work</Link>
          </p>
          <p className="xxxs">
            JUNE 8,2022
          </p>
        </div>                      
      </div>
      ))}
    </>
  )
}