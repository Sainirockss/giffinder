import Random from "./components/Random";
import Tags from "./components/Tags";

function App() {
  return (
    <div className='w-full h-full flex flex-col background relative items-center'>
      <h1 className='bg-white rounded-lg absolute  text-center mt-[40px]  py-2 text-4xl font-bold   w-11/12   overflow-x-hidden '>Random Gifs</h1>
      
      <div className='flex flex-col w-full h-full items-center  mt-[120px]'>
        <Random/>
        <Tags/>
      </div>
    </div>
  );
}

export default App;
