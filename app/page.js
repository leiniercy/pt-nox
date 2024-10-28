import Seccion1 from "@views/seccion1";
import Seccion2 from "@views/seccion2";

export default function Home () {
  return <main className='relative w-full h-full px-4 grid grid-cols-3 md:grid-cols-12'>
    <Seccion1 className='col-span-3 md:col-start-2 md:col-span-10' />
    <Seccion2 className='col-span-3 md:col-start-2 md:col-span-10' />
  </main>
}
