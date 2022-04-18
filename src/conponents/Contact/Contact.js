import React from 'react';

const Contact = () => {
    return (
        <section id='contact'>
            <div className='container mx-auto py-16'>
                <h3 className="my-5 text-center text-3xl uppercase">Contact</h3>

                <div className='shadow shadow-blue-500/40 hover:shadow-indigo-500/40 mx-auto md:w-1/2 py-8  rounded-lg bg-slate-50'>
                    <form className='p-5 w-full'>
                        <input type="text" name="fullName" placeholder='Full name' className='shadow p-5 block w-full mb-5 rounded-lg' />
                        <input type="text" name="Subject" placeholder='Subject' className='shadow p-5 block w-full mb-5 rounded-lg' />
                        <input type="email" name="email" id="email" placeholder='Write email' required className='shadow p-5 block w-full mb-5 rounded-lg' />
                        <textarea name="massage" placeholder='Write massage here' required className='shadow p-5 block w-full mb-5 rounded-lg h-48' />
                        <input type="submit" value="Send massage" className='bg-cyan-500 hover:bg-cyan-800 px-9 py-3 mt-3 mx-auto text-white  rounded block' />
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;