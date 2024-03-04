import Program from "./Components/Program";
import Events from "./Components/Events";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const exSlide = [
    {
      id: 1,
      img: "/ex-slide1.webp",
    },
    {
      id: 2,
      img: "/ex-slide2.webp",
    },
    {
      id: 3,
      img: "/ex-slide3.webp",
    },
    {
      id: 4,
      img: "/ex-slide4.webp",
    },
    {
      id: 5,
      img: "/ex-slide5.webp",
    },
  ];

  return (
    <>
      <main>
        <section className="bg-white w-full h-[350px] flex justify-center flex-1 flex-wrap gap-6 items-center ">
          <div
            style={{
              backgroundImage: `url(${exSlide[0].img})`,
              backgroundSize: "cover",
            }}
            className=" relative w-[250px] h-[200px]  flex justify-center items-center bg-blue-400 z-[30] rounded-md"
          >
            <div className="absolute bg-white w-[200px] bottom-[-10%] flex items-center justify-center h-10 rounded-md text-center">
              <h1 className="hover:text-red-600">Excellent Amneities</h1>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${exSlide[1].img})`,
              backgroundSize: "cover",
            }}
            className=" relative w-[250px] h-[200px] flex justify-center items-center bg-blue-400 z-[30] rounded-md"
          >
            <div className="absolute bg-white w-[200px] bottom-[-10%] flex items-center justify-center h-10 rounded-md text-center">
              <h1 className="hover:text-red-600 p-0.5">
                Individual-curated learning
              </h1>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${exSlide[2].img})`,
              backgroundSize: "cover",
            }}
            className=" relative w-[250px] h-[200px] flex justify-center items-center bg-blue-400 z-[30] rounded-md"
          >
            <div className="absolute bg-white w-[200px] bottom-[-10%] flex items-center justify-center h-10 rounded-md text-center">
              <h1 className="hover:text-red-600">Counselling and Guidance</h1>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${exSlide[3].img})`,
              backgroundSize: "cover",
            }}
            className=" relative w-[250px] h-[200px] flex justify-center items-center bg-blue-400 z-[30] rounded-md"
          >
            <div className="absolute bg-white w-[200px] bottom-[-10%] flex items-center justify-center h-10 rounded-md text-center">
              <h1 className="hover:text-red-600">
                International Recongnition and Certification
              </h1>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${exSlide[4].img})`,
              backgroundSize: "cover",
            }}
            className=" relative w-[250px] h-[200px] flex justify-center items-center bg-blue-400 z-[30] rounded-md"
          >
            <div className="absolute bg-white w-[200px] bottom-[-10%] flex items-center justify-center h-10 rounded-md text-center">
              <h1 className="hover:text-red-600 p-3">Co-curricula Activites</h1>
            </div>
          </div>
        </section>
      </main>
      <Program />

      <section className="bg-white w-full h-[500px] gap-10 flex items-center justify-around m-auto p-20">
        <div>
        <div className="font-bold text-2xl">
          <h1>About us</h1>
          <h1>We Provide Quality Education</h1>
        </div>

        <div className="gap-4">
          <div>
            <h2>Who We are</h2>
            <h3><Link href="/">Welcome to padmashree college</Link></h3>

            <p>
              Established in 2007 AD, Padmashree College is dedicated to shaping
              the future of Nepal by cultivating academically sound individuals
              and implementing world-class practices in Information Technology,
              Hospitality Management, Food Science, and Business Administration.
              Founded by a passionate group of professionals and education
              enthusiasts, our institution thrives on collaboration with highly
              qualified and knowledgeable faculty members.
            </p>
          </div>

          {/* <div>
            <h2>Our Mission & Objectives</h2>
          </div> */}
        </div>
        </div>
        <div>
        <div>
          <Image src="/about1.webp"  alt="about1"  width={1400} height={400}/>
          {/* <Image src="/about2.webp"  alt="about2"   width={400} height={200} className=" overflow-auto z-[30]"/> */}
          
        </div>
        </div>
      </section>
      <Events />
    </>
  );
}
