const Program = () => {

    const exProg = [
        {
            img: "/prog-1.webp"
        },
        {
            img: "/prog-2.webp"
        },
        {
            img: "/prog-3.webp"
        },
        {
            img: "/prog-4.webp"
        },
        {
            img: "/prog-5.webp"
        },
    ];
    return ( 
        <>
        <section className="bg-gray-200 w-full h-[500px] justify-center gap-6 items-center ">  
        <div className="flex font-bold text-4xl text-black items-center justify-center p-10">
            <h1>Our Programs</h1>
        </div>
        <div className="flex justify-center items-center gap-4 pt-10">
            <div style={{backgroundImage: `url(${exProg[0].img})`, backgroundSize: 'cover'}} className=" relative w-[250px] h-[200px]  flex justify-center items-center bg-blue-400 z-[30] rounded-md">
                <div className="absolute bg-white w-full bottom-0 flex items-center justify-center h-10 rounded-md text-center">
                    <h1 className="hover:text-red-600 font-bold text-2xl">BIT</h1>
                </div>
            </div>

            <div style={{backgroundImage: `url(${exProg[1].img})`, backgroundSize: 'cover'}} className=" relative w-[250px] h-[200px]  flex justify-center items-center bg-blue-400 z-[30] rounded-md">
                <div className="absolute bg-white w-full bottom-0 flex items-center justify-center h-10 rounded-md text-center">
                    <h1 className="hover:text-red-600 font-bold text-2xl">BBA</h1>
                </div>
            </div>

            <div style={{backgroundImage: `url(${exProg[2].img})`, backgroundSize: 'cover'}} className=" relative w-[250px] h-[200px]  flex justify-center items-center bg-blue-400 z-[30] rounded-md">
                <div className="absolute bg-white w-full bottom-0 flex items-center justify-center h-10 rounded-md text-center">
                    <h1 className="hover:text-red-600 font-bold text-2xl">BCA</h1>
                </div>
            </div>

            <div style={{backgroundImage: `url(${exProg[3].img})`, backgroundSize: 'cover'}} className=" relative w-[250px] h-[200px]  flex justify-center items-center bg-blue-400 z-[30] rounded-md">
                <div className="absolute bg-white w-full bottom-0 flex items-center justify-center h-10 rounded-md text-center">
                    <h1 className="hover:text-red-600 font-bold text-2xl">B.Tech(Food)</h1>
                </div>
            </div>

            <div style={{backgroundImage: `url(${exProg[4].img})`, backgroundSize: 'cover'}} className=" relative w-[250px] h-[200px]  flex justify-center items-center bg-blue-400 z-[30] rounded-md">
                <div className="absolute bg-white w-full bottom-0 flex items-center justify-center h-10 rounded-md text-center">
                    <h1 className="hover:text-red-600 font-bold text-2xl">BHM</h1>
                </div>
            </div>
        </div>
        </section>
        </>
    );
}

export default Program;