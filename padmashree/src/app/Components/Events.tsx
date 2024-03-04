const Program = () => {

    const exEvent = [
        {
            img: "/ex-Event1.webp"
        },
        {
            img: "/ex-Event2.webp"
        },
        {
            img: "/ex-Event3.webp"
        },
        {
            img: "/ex-Event4.webp"
        },
        {
            img: "/ex-Event5.webp"
        },
    ];
    
    return ( 
        <>
        <section className="bg-blue-200 w-full h-[500px] justify-center gap-6 items-center ">  
        <div className="flex font-bold text-4xl text-black items-center justify-center p-10">
            <h1>Events</h1>
        </div>
        <div className="flex justify-center items-center gap-4 pt-10">
            <div style={{backgroundImage: `url(${exEvent[0].img})`, backgroundSize: 'cover'}} className=" relative w-[250px] h-[200px]  flex justify-center items-center bg-blue-400 z-[30] rounded-md">
                <div className="absolute bg-white w-[200px] bottom-[-15%] flex items-center justify-center h-10 rounded-md text-center">
                    <h1 className="hover:text-red-600 p-0.5">Educational Visit To Esewa</h1>
                </div>
            </div>

            <div style={{backgroundImage: `url(${exEvent[1].img})`, backgroundSize: 'cover'}} className=" relative w-[250px] h-[200px]  flex justify-center items-center bg-blue-400 z-[30] rounded-md">
                <div className="absolute bg-white w-[200px] bottom-[-15%] flex items-center justify-center h-10 rounded-md text-center">
                    <h1 className="hover:text-red-600 p-0.5">Go-Program with BETN and esewa</h1>
                </div>
            </div>

            <div style={{backgroundImage: `url(${exEvent[2].img})`, backgroundSize: 'cover'}} className=" relative w-[250px] h-[200px]  flex justify-center items-center bg-blue-400 z-[30] rounded-md">
                <div className="absolute bg-white w-[200px] bottom-[-15%] flex items-center justify-center h-10 rounded-md text-center">
                    <h1 className="hover:text-red-600 p-0.5">Food safety and food labelling Program</h1>
                </div>
            </div>

            <div style={{backgroundImage: `url(${exEvent[3].img})`, backgroundSize: 'cover'}} className=" relative w-[250px] h-[200px]  flex justify-center items-center bg-blue-400 z-[30] rounded-md">
                <div className="absolute bg-white w-[200px] bottom-[-15%] flex items-center justify-center h-10 rounded-md text-center">
                    <h1 className="hover:text-red-600 p-0.5">Women Empowerment</h1>
                </div>
            </div>

            <div style={{backgroundImage: `url(${exEvent[4].img})`, backgroundSize: 'cover'}} className=" relative w-[250px] h-[200px]  flex justify-center items-center bg-blue-400 z-[30] rounded-md">
                <div className="absolute bg-white w-[200px] bottom-[-15%] flex items-center justify-center h-10 rounded-md text-center">
                    <h1 className="hover:text-red-600 p-0.5">Mental Health Workshop</h1>
                </div>
            </div>
        </div>
        </section>
        </>
    );
}

export default Program;