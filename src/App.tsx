import './App.css'

import Footer from './components/footer'


import { ScrollArea, ScrollBar } from './components/ui/scroll-area'


import Header from "@/components/header";


function App() {
 
  return (
    <>
      <Header />
      

      <ScrollArea className='w-screen'>

      <div className="grid grid-cols-3 gap-5 m-8 gap-x-4">
  <div className=' h-16 bg-green-500 text-white w-72 flex justify-center items-center rounded-xl'>
    <a href="" className='hover:text-blue-600 hover:scale-125 transition-all duration-200'>Voter</a>
  </div>
  <div className='h-16 bg-green-500 w-72 flex text-white justify-center items-center rounded-xl'>
    <a href="" className='hover:text-blue-600 hover:scale-125 transition-all duration-200'>Candidate</a>
  </div>
  <div className='h-16 bg-green-500 w-72 text-white flex justify-center items-center rounded-xl'>
    <a href="" className='hover:text-blue-600 hover:scale-125 transition-all duration-200 font-normal'>Create election</a>
  </div>
  <div className='h-16 bg-green-500 w-72 text-white flex justify-center items-center rounded-xl'>
    <a href="" className='hover:text-blue-600 hover:scale-125 transition-all duration-200 font-normal'>Upcoming election</a>
  </div>
  <div className='h-16 bg-green-500 w-72 text-white flex justify-center items-center rounded-xl'>
    <a href="" className='hover:text-blue-600 hover:scale-125 transition-all duration-200 font-normal'>Ongoing election</a>
  </div>
  <div className='h-16 bg-green-500 w-72 text-white flex justify-center items-center rounded-xl'>
    <a href="" className='hover:text-blue-600 hover:scale-125 transition-all duration-200 font-normal'>Result</a>
  </div>
</div>

        <ScrollBar orientation="horizontal" />

      </ScrollArea>

      
      <Footer/>

    </>
  )
}

export default App
