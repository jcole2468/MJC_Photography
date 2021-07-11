import Head from 'next/head'
import Image from 'next/image'
import wedding_1 from '../public/wedding-1.jpeg'
import wedding_2 from '../public/wedding-2.jpeg'
import wedding_3 from '../public/wedding-3.jpeg'
import portrait_1 from '../public/Portrait-1.jpeg'
import portrait_2 from '../public/Portrait-2.jpeg'
import portrait_3 from '../public/Portrait-3.jpeg'
import ghost from '../public/Ghost.jpeg'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>MJC Photography</title>
        <meta name="description" content="MJC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-primary w-full">
        <div className="bg-hero-pattern bg-cover bg-center py-56 ">
        <div className="flex-col items-center max-w-3xl">
          <h1 className="text-center font-bold text-5xl text-white my-4">Life keeps moving; We press pause.</h1>
          <p className="text-right text-xl">A photograph allow us to rememver the joy of a singular moment. It tells a story, holding in one still shot of a lifetime of emotions and love. Our hope is to capture the perfect moment for you to cherish forever.</p>
        </div>
        </div>
        <section className="md:grid grid-cols-6 gap-4 w-11/12 mx-auto pt-32 pb-32">
          <div className="col-span-3 ">
            <Image src={wedding_1} alt="Wedding day photo" layout="responsive" objectFit="contain" />
          </div>
          <div className="col-span-3">
            <Image src={portrait_1} alt="Woman Smiling" layout="responsive" objectFit="contain"  />
          </div>
          <div className="row-span-3 col-span-3">
            <Image src={portrait_2} alt="Couple laughing" layout="responsive" objectFit="contain" />
          </div>
          <div className="col-span-3">
            <Image src={wedding_2} alt="Newlyweds" layout="responsive" objectFit="contain"/>
          </div>
          <div className="col-span-3">
            <Image src={wedding_3} alt="Baby Smiling" layout="responsive" objectFit="contain"/>
          </div>
          {/* <div className="">
            <Image src={portrait_3} alt="Loving hold" layout="responsive" objectFit="contain"/>
          </div> */}
        </section>
      </main>
    </div>
  )
}

          // <div className="border flex justify-center ">
          //   <Image src={wedding_1} alt="Wedding day photo" />
          // </div>
          // <div className="border flex justify-center relative ">
          //   <Image src={portrait_1} alt="Woman Smiling"   />
          // </div>
          // // <div className="border flex row-span-2 justify-center relative">
          // //   <Image src={portrait_2} alt="Couple laughing" layout="fill" objectFit="cover" />
          // // </div>
          // // <div className="border flex justify-center ">
          // //   <Image src={wedding_2} alt="Newlyweds" />
          // // </div>
          // <div className="border flex max-h-50 justify-center">
          //   <Image src={ghost} alt="Dog posign for photo" />
          // </div>
          // <div className="border flex justify-center">
          //   <Image src={portrait_3} alt="Couple" />
          // </div>
          // <div className="border flex justify-center">
          //   <Image src={wedding_3} alt="Wedding day baby" />
          // </div> 

        //   <div className="-mx-4 flex flex-wrap">
        //   <div className="">
        //     {/* <!-- Column contents --> */}
        //     <div className="">
        //       {/* <!-- Card contents --> */}
        //       <div className="relative">
        //       <Image src={wedding_1} alt="Wedding day photo" />
        //       </div>
        //     </div>
        //   </div>
        //   <div className="">
        //     {/* <!-- Column contents --> */}
        //     <div className="">
        //       {/* <!-- Card contents --> */}
        //       <Image src={portrait_1} alt="Woman Smiling"   />
        //     </div>
        //   </div>
        //   <div className="">
        //     {/* <!-- Column contents --> */}
        //     <div className="">
        //       {/* <!-- Card contents --> */}
        //       <Image src={portrait_2} alt="Couple laughing" />
        //     </div>
        //   </div>
        //   <div className="">
        //     {/* <!-- Column contents --> */}
        //     <div className="">
        //       {/* <!-- Card contents --> */}
        //       <Image src={wedding_2} alt="Newlyweds" />
        //     </div>
        //   </div>
        //   <div className="">
        //     {/* <!-- Column contents --> */}
        //     <div className="">
        //       {/* <!-- Card contents --> */}
        //       <Image src={ghost} alt="Dog posign for photo" />
        //     </div>
        //   </div>
          
        // </div>