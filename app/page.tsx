import React from 'react';

export default function Home() {
  return (
    <div className='bg-image'>  
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center h-screen '>
          <h2 className="text-6xl font-bold text-white bg-black mb-5">NexMind</h2>
          <p className="text-3xl text-white mb-8 font-bold bg-black">
            Your go to option for a fast and reliable AI assistant.
          </p>  
        </div>
      </div>
    </div>
  );
}