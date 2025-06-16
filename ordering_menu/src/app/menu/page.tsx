import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex flex-row justify-center gap-8 p-6">
      <div className="border rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center max-w-sm">
        <div className="w-60 h-60 relative overflow-hidden rounded-md">
    <Image
      src="/Nasi-Goreng_1-1.webp"
      alt="Picture of nasi goreng"
      fill
      className="grayscale blur-sm hover:grayscale-0 hover:blur-none transition-all duration-500 border border-gray-300 p-1 hover:scale-110"
      

    />
    </div>
    <p className="mt-4 max-w-md text-center text-gray-700">
        The picture above is &quot;Nasi Goreng&quot;, which means fried rice. It is a traditional food of many countries, in the picture is one from a South East Asian country named &quot;Brunei Darussalam&quot;
    </p>
    <p className="mt-2 text-lg font-semibold text-green-600">BND 14.50</p>
    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add to Order
    </button>
      </div>
      <div className="border rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center max-w-sm">
        <div className="w-60 h-60 relative overflow-hidden rounded-md">
            <Image
      src="/sup_ayam.jpg"
      alt="Picture of sup ayam"
      fill
      className="grayscale blur-sm hover:grayscale-0 hover:blur-none transition-all duration-500 border border-gray-300 p-1 hover:scale-110"
      

    />
    </div>
    <p className="mt-4 max-w-md text-center text-gray-700">
        The picture above is &quot;Sup Ayam&quot;, which means chicken soup. It is a traditional food of many countries, in the picture is one from a South East Asian country named &quot;Brunei Darussalam&quot;
    </p>
    <p className="mt-2 text-lg font-semibold text-green-600">BND 14.50</p>
    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add to Order
    </button>
      </div>
            <div className="border rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center max-w-sm">
        <div className="w-60 h-60 relative overflow-hidden rounded-md">
            <Image
      src="/Turmeric-Fried-Fish_1.jpg"
      alt="Picture of sup ayam"
      fill
      className="grayscale blur-sm hover:grayscale-0 hover:blur-none transition-all duration-500 border border-gray-300 p-1 hover:scale-110"
      

    />
    </div>
    <p className="mt-4 max-w-md text-center text-gray-700">
        The picture above is &quot;Ikan Goreng&quot;, which means fried fish. It is a fried food of many countries, in the picture is one from a South East Asian country named &quot;Brunei Darussalam&quot;
    </p>
    <p className="mt-2 text-lg font-semibold text-green-600">BND 10.50</p>
    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add to Order
    </button>
      </div>
    </div>
  )
  
}