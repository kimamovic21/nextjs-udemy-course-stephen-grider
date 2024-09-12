import Image from "next/image"
import homeImg from '/public/home.jpg'
console.log(homeImg)

export default function Home() {
  return (
      <div>
        Home Page
        <div className="absolute -z-10 inset-0">
          {/* <Image 
            src={homeImg} 
            alt='car factory'
            fill
            style={{ objectFit: 'cover' }}
          /> */}
          <Image 
            width={600}
            height={800}
            src={homeImg} 
            alt='car factory'
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
  )
}