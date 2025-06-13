import Image from 'next/image'
 
export default function Page() {
  return (
    <div className="flex flex-row justify-center gap-8 p-6">
      <div className="flex flex-col items-center">
    <Image
      src="/Nasi-Goreng_1-1.webp"
      alt="Picture of nasi goreng"
      width={500}
      height={500}
      className="grayscale-80 blur-xs shadow-xl/50 hover:grayscale-0 hover:blur-none transition-all box-border size-32 border-1 p-1 hover:box-none hover:size-60"
      

    />
    <p className="mt-4 max-w-md text-center text-gray-700">
        The picture above is "Nasi Goreng", which means fried rice. It is a traditional food of many countries, in the picture is one from a South East Asian country named "Brunei Darussalam"
    </p>
      </div>
      <div className="flex flex-col items-center">
            <Image
      src="/sup_ayam.jpg"
      alt="Picture of sup ayam"
      width={500}
      height={500}
      className="grayscale-80 blur-xs shadow-xl/50 hover:grayscale-0 hover:blur-none transition-all box-border size-32 border-1 p-1 hover:box-none hover:size-60"
      

    />
    <p className="mt-4 max-w-md text-center text-gray-700">
        The picture above is "Sup Ayam", which means chicken soup. It is a traditional food of many countries, in the picture is one from a South East Asian country named "Brunei Darussalam"
    </p>
      </div>
    </div>
  )
  
}