import Navbar from "@components/navbar/navbar";
import Seccion1 from "@views/seccion1";
import Seccion2 from "@views/seccion2";
import Seccion3 from "@views/seccion3";
import Seccion4 from "@views/seccion4";
import Seccion5 from "@views/seccion5";
import Seccion6 from "@views/seccion6";
import Seccion9 from "@views/seccion9/inedx";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className='relative w-full h-full grid grid-cols-3 md:grid-cols-12'>
        <Seccion1 className='col-span-3 md:col-start-2 md:col-span-10 py-6 px-4' />
        <Seccion2 className='col-span-3 md:col-start-2 md:col-span-10 py-6 px-4' />
        <Seccion3 className='col-span-3 md:col-start-2 md:col-span-10 py-6 px-4' />
        <Seccion4 className='col-span-3 md:col-start-0 md:col-span-12 py-6' />
        <Seccion5 className='col-span-3 md:col-start-2 md:col-span-10 py-6 px-4' />
        <Seccion6 className='col-span-3 md:col-start-2 md:col-span-10 py-6 px-4' />
        <Seccion9 className='col-span-3 md:col-start-2 md:col-span-10 py-6 px-4' />
      </main>
    </>
  )
}
