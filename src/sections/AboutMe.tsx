
import ProfileCard from '../components/about-me/ProfileCard'
import ScrollText from '../components/about-me/ScrollText'

function AboutMe() {
  return (
    <div className="bg-white">

    
    <div className="h-[300vh] relative  ">
      <div className="top-0 sticky w-screen h-screen grid place-items-center">
        <ScrollText text="ABOUT ME!" />
      </div>
    </div>

    <div className="h-[300vh] relative  ">
      <div className="top-0 sticky w-screen h-screen grid place-items-center">
        <ProfileCard />
      </div>
    </div>

    </div>

  )
}

export default AboutMe
