import React from 'react'

export default function Contact() {
  return (
    <div className='contact-image'>
      <div className="flex flex-col justify-center items-center mx-auto text-center">
        <h2 className="text-5xl font-bold text-black mb-12 my-[600px] text-shadow">Contact Us</h2>
        <p className="text-3xl text-black mb-12 font-semibold w-[600px]">
          Feel free to reach out to us via email or social media. We’d love to hear from you!
        </p>
        <div className="">
          <p className="text-black text-2xl font-semibold bg-teal-500 rounded-full p-3">Email: zohairm344@gmail.com</p>
        </div>
      </div>
    </div>
  );
}