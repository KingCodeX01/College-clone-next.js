import Image from 'next/image';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
        <section className="bg-blue-300 w-full md:p-8 h-full grid grid-cols-1 md:grid-cols-3 gap-20 p-4 flex-wrap">
            <div className="grid grid-row-5 m-5">
                <div className='pt-[-10%]'>
                    <Image src="/logo.png" alt="logo" width={200} height={200}></Image>
                </div>

                <div>
                    <h1>Tinkune, Kathmandu, Nepal</h1>
                    <h1 className='flex gap-3 hover:text-red-600'> <BsFillTelephoneFill className='pt-1' size={20}/> 411 2252, 411 2403</h1>
                    <h1 className='flex gap-3 hover:text-red-600'><MdEmail className='pt-1' size={20}/>info@padmashreecollege.edu.np</h1>
                </div>
                
                <div className='bg-white w-[200px] h-10 flex items-center justify-center rounded-lg'>
                    <ul className='flex gap-3 items-center justify-center'>
                        <li><Link href="/" className="hover:text-blue-600"><FaFacebookF /></Link></li>
                        <li><Link href="/" className="hover:text-red-600"><FaInstagram /></Link></li>
                        <li><Link href="/" className="hover:text-blue-600"><FaTwitter /></Link></li>
                        <li><Link href="/" className="hover:text-blue-600"><FaLinkedin/></Link></li>
                        <li><Link href="/" className="hover:text-red-600"><FaYoutube/></Link></li>
                        <li><Link href="/" className="hover:text-black"><FaTiktok/></Link></li>
                    </ul>
                </div>

                <div>
                    <h1 className='font-bold text-white text-4xl'>Newsletter Subscription</h1>
                    <h1 className=' text-gray-200'>Subscribe to us and Don't miss any notifications</h1>
                    <div className='flex gap-4'>
                    <input type='text' placeholder='Your mail' className='rounded-md w-60 h-15'></input>
                    <button type='submit' className="bg-blue-800 text-white p-3 rounded-md flex jjustify-center  items-center gap-2 hover:bg-blue-500"> Subscribe <FaArrowRightLong /></button>
                    </div>
                </div>
            </div>

            <div className='gap-3'>
                <div>
                    <h1 className='text-3xl font-bold text-white'>News & Events</h1>
                </div>

                <div className="grid grid-row-2 pb-3">
                    <ul>
                        <li className="pt-4 hover:text-red-600"><Link href="/" className=''>Notice for B.tech food fourth year students regarding thesis proposal defense and class seminar presentation</Link></li>
                        <hr/>
                        <li className="pt-4 hover:text-red-600"><Link href="/">Notice of Filing of Examination Form for Regular and Back Year Students</Link></li>
                        <hr/>
                        <li className="pt-4 hover:text-red-600"><Link href="/">Academic Calender for Academic Session January-June 2024</Link></li>
                        <hr/>
                        <li className="pt-4 hover:text-red-600"><Link href="/">Final Exam Timetable of BIT and BABHM (January, 2024)</Link></li>
                        <hr/>
                        <li className="pt-4 hover:text-red-600"><Link href="/">Class Resumption</Link></li>
                        <hr/>
                        <li>View all</li>
                    </ul>
                </div>
            </div>


            <div className='grid grid-rows-0'>
                <div>
                    <h1 className='text-3xl font-bold text-white'>Find us on Facebook</h1>
                </div>

                <div className="w-[300px] h-[300px]">
                    <Image src="/Footer.jpg" alt="logo"  height={300} width={300}  />
                </div>
            </div>
        </section>

        <section className="bg-purple-700 font-bold text-1xl w-full h-10 text-white flex items-center justify-around"> 
            <h1>Privacy Policy, Terms & Condition, Disclaimer</h1>
            <h1>Copyright Paribesh Shrestha, All Rights Reserved.</h1>
            <h1>Powered by Paribesh Shrestha</h1>
        </section>
        </>
    );
}
export default Footer;