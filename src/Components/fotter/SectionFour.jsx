import React from 'react'

const SectionFour = () => {
    return (
        <div>
            <div className='container ps-14'>
                <h6 className='mb-6 text-sm text-gray-800 header-font'>NEWSLETTER</h6 >
                <div className="text-sm text-gray-500">
                    <p className='my-3 '>Keep in touch</p>
                    <p>We don't spam. We are nice people.</p>
                    <div className="">
                            <div><input type="text" placeholder='E-mail' className='border-solid border border-gray-300 border-inherit px-8 py-3  my-8' required /></div>
                            <div><a className='bg-black  px-12 py-3 text-base tracking-wide text-white  hover:bg-transparent  hover:border-solid border-2 border-black hover:text-black  '>SUBSCRIBE</a></div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFour
