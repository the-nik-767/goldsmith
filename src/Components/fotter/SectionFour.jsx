import { Button } from '@material-tailwind/react';
import React from 'react'

const SectionFour = () => {
  return (

    <div className="container">
      <h6 className="mb-6 text-sm text-gray-800 header-font">NEWSLETTER</h6>
      <div className="text-sm text-gray-500">
        <p className="my-3 ">Keep in touch</p>
        <p>We don't spam. We are nice people.</p>
        <div>
          <div>
            <input
              type="text"
              placeholder="E-mail"
              className="border-solid border border-gray-300 border-inherit px-8 py-3  my-8 w-80 sm:w-full"
              required
            />
          </div>
          <div>
            <Button className='rounded-none border-solid border border-gray-300 border-inherit px-8 py-3  w-80 sm:w-full bg-black text-white'>
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SectionFour
