import Image from 'next/image'
 
export default function Page() {
  return (
    <div>
    <Image
      src="/Nasi-Goreng_1-1.webp"
      alt="Picture of nasi goreng"
      width={500}
      height={500}
      

    />
    <p>
        The picture above is "Nasi Goreng", which means fried rice. It is a traditional food of many countries, in the picture is one from a South East Asian country named "Brunei Darussalam"
    </p>
    </div>
  )
  
}