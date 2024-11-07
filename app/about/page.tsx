import React from 'react';

export default function About() {
  return (
    <div className='about-image'>
      <div className='mx-auto container'>
        <div className="flex flex-col justify-center items-center text-start w-[500px] mx-auto  ">
          <h2 className="text-7xl font- text-black mb-4 font-sans text-shadow mt-8">ABOUT US</h2>
          <p className="text-2xl text-white leading-relaxed mt-8">
            We are a team dedicated to providing high-quality content and services to our audience. Our mission is to
            deliver value and build meaningful connections with our clients and community.
          </p>
        </div>
      </div>
    </div>
  );
}