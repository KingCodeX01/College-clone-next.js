"use client"
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Corrected import statement

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isStudent, setIsStudent] = useState(false);
    const [isProgram, setIsProgram] = useState(false);

    const toggleAbout = () => {
        setIsOpen(!isOpen);
        setIsProgram(false);
        setIsStudent(false);
    };
    
    const toggleStudent = () => {
        setIsStudent(!isStudent);
        setIsOpen(false);
        setIsProgram(false);
    };

    const toggleProgram = () => {
        setIsProgram(!isProgram);
        setIsOpen(false);
        setIsStudent(false);
    }
    return (
        <>
        <header className="bg-red-900 text-white hidden w-full h-10 lg:flex">
            <div className="flex justify-between items-center flex-1">
                <div className="flex text-center ml-3">
                    <a className="flex items-center gap-2">Tinkune, Kathmandu, Nepal</a>
                    <a className="flex items-center gap-2 hover:text-blue-600"> <BsFillTelephoneFill className="m-2" /> 411 2252, 411 2403</a>
                </div>
                <div className="flex ">
                    <ul className="flex justify-center items-center gap-4 mr-3">
                        <li><Link href="/" className="hover:text-blue-600">News & update</Link></li>
                        <li><Link href="/" className="hover:text-blue-600">Downloads</Link></li>
                        <li><Link href="/" className="hover:text-blue-600">Blogs</Link></li>
                        <li><Link href="/" className="hover:text-blue-600">Careers</Link></li>
                        <li><Link href="/" className="hover:text-blue-600"><FaFacebookF /></Link></li>
                        <li><Link href="/" className="hover:text-blue-600"><FaInstagram /></Link></li>
                        <li><Link href="/" className="hover:text-blue-600"><FaTwitter /></Link></li>
                        <li><Link href="/" className="hover:text-blue-600"><FaLinkedin/></Link></li>
                        <li><Link href="/" className="hover:text-blue-600"><FaYoutube/></Link></li>
                        <li><Link href="/" className="hover:text-blue-600"><FaTiktok/></Link></li>
                    </ul>
                </div>
            </div>
        </header>
        <nav className="border-2 border-red-400 flex justify-between p-6 items-center z-30 w-full h-100">
            <div>
                <Image src="/logo.png" alt="logo" width={200} height={60} />
            </div>

            <div className="hidden h-full gap-12 lg:flex">
                <ul className="flex gap-12 justify-center items-center cursor-pointe flex-row">
                    <li><Link href="/" className="hover:text-red-400">Home</Link></li>
                    <li className="relative "><button onClick={toggleAbout} className="flex item-center justify-center gap-2 hover:text-red-400 text-center pt-0.5">About Us<RiArrowDropDownLine size={30}/></button>
                        <div className={`absolute ${isOpen ? "block" : "hidden"} bg-white py-2 mt-2 z-30 w-80 px-4`}>
                            <ul className="max-container ">
                                <li><Link href="/" className="hover:text-blue-600">Introduction</Link></li>
                                <li><Link href="/" className="hover:text-blue-600">Message from the Chairperson</Link></li>
                                <li><Link href="/" className="hover:text-blue-600">Message from the Managing Director</Link></li>
                                <li><Link href="/" className="hover:text-blue-600">Board of Advisors</Link></li>
                                <li><Link href="/" className="hover:text-blue-600">Padmashree Features</Link></li>
                                <li><Link href="/" className="hover:text-blue-600">Mission, Vision & Objectives</Link></li>
                            </ul>
                        </div></li>
                    <li className="relative">
                        <button onClick={toggleProgram} className="flex item-center justify-center hover:text-red-400 pt-0.5">Our Programs<RiArrowDropDownLine size={30}/></button>
                        <div className={`absolute ${isProgram ? "block" : "hidden"} bg-white py-2 mt-2 w-60 z-30`}>
                            <ul>
                                <li><Link href="/" className="p-5 m-auto border-1 border-black hover:text-blue-600">BIT</Link></li>
                                <li><Link href="/" className="p-5 m-auto border-1 border-black hover:text-blue-600">BHM</Link></li>
                                <li><Link href="/" className="p-5 m-auto border-1 border-black hover:text-blue-600">BBA</Link></li>
                                <li><Link href="/" className="p-5 m-auto border-1 border-black hover:text-blue-600">BBS</Link></li>
                                <li><Link href="/" className="p-5 m-auto border-1 border-black hover:text-blue-600">B.Tech(Food)</Link></li>
                            </ul>
                        </div>
                    </li> 
                    <li className="relative">
                        <button onClick={toggleStudent} className="flex item-center justify-center hover:text-red-400 pt-0.5">Students Life <RiArrowDropDownLine size={30}/></button>
                        <div className={`absolute ${isStudent ? "block" : "hidden"} bg-white py-2 mt-2 w-80 z-30`}>
                            <ul>
                                <li><Link href="/">Student's Events</Link></li>
                                <li><Link href="/">Learning Club Activities</Link></li>
                                <li><Link href="/">Leadership and voluntering</Link></li>
                                <li><Link href="/">Learing in Action</Link></li>
                                <li><Link href="/">Recreation</Link></li>
                            </ul>
                        </div></li>
                    <li><Link href="/" className="hover:text-red-400">Gallery</Link></li>
                    <li><Link href="/" className="hover:text-red-400">Contact Us</Link></li>
                    <button className="bg-red-900 text-white p-3 rounded-md flex items-center gap-2 hover:bg-blue-800">Apply Now<FaArrowRightLong /></button>
                </ul>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
