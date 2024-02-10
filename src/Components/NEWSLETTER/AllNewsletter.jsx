import React from 'react'

function AllNewsletter() {
    return (
        <>
            <hr />
            <div className="text-center">
                <div className="  text-5xl font-mono  mt-10 tracking-widest " style={{fontSize:'35px'}} ><h2>NEWSLETTER</h2></div>
                <p className=' my-8 text-gray-700' style={{fontSize:'15px'}}>Sign up to our newsletter to receive exclusive offers.</p>
                <div className="">
                    <span><input type="text" placeholder='E-mail' className='border-solid border border-gray-300 border-inherit px-8 py-1' required/></span>
                    <span><a className='bg-black  text-white  hover:bg-transparent  hover:border-solid border-2 border-black hover:text-black m-2 ' style={{padding:"6px  35px"}}>SUBSCRIBE</a></span>
                </div>
            </div>
            <hr  className=' mt-10'/>
        </>
    )
}

export default AllNewsletter
