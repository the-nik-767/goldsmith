import React from 'react'

function AllNewsletter() {
    return (
        <>
            <hr />
            <div className="text-center">
                <div className="  text-5xl font-mono font-thin mt-8 tracking-widest "  ><h2>NEWSLETTER</h2></div>
                <p className='font-mono my-5'>Sign up to our newsletter to receive exclusive offers.</p>
                <div className="">
                    <span><input type="text" placeholder='E-mail' className='border-solid border border-gray-300 border-inherit px-8 py-1' required/></span>
                    <span><a className='bg-black  px-12 py-1 text-white  hover:bg-transparent  hover:border-solid border-2 border-black hover:text-black p-0 m-2'>SUBSCRIBE</a></span>
                </div>
            </div>
            <hr  className=' mt-8'/>
        </>
    )
}

export default AllNewsletter
