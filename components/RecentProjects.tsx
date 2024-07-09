import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow, FaGithub } from "react-icons/fa";
import BrutalButton from "./ui/BrutalButton";
import ShimmerButton from "./ui/ShimmerButton";
import { SiPolywork } from "react-icons/si";
import { SiSaltproject } from "react-icons/si";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Selection of some {' '}
        <span className="text-purple">Featured Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link, liveLink }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[570px]  w-[80vw] sm:h-[41rem]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:h-[40vh] sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D] ">
                    <img src="/bg.png" alt="bg-img" />
                </div>

                <img 
                src={img}
                alt={title}
                className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{transform :`translateX(-${5 * index * 2}px)`}}>
                      <img src={icon} alt="icon" className="p-2" />

                    </div>
                  ))}

                </div>

                <div className="flex justify-center items-center">

                  <a className="flex lg:text-xl md:text-xs text-sm text-slate-300 border-slate-500" href={liveLink}>
                    View Project
                
                  <SiSaltproject className="ms-3 text-purple "/>
                  </a>
                  {/* <ShimmerButton title="View Project"  icon={<FaLocationArrow />} position={"right"} otherClasses="flex lg:text-xl md:text-xs text-sm text-purple line-clamp-1 "/> */}
                </div>





                {/* //todo: adding the button */}

                {/* <div className="flex justify-between items-center mt-7 mb-3">
                  <div className="flex items-center justify-between">

                  <ShimmerButton title="Show my Work"  icon={<SiPolywork />} position={"right"} />

                  <ShimmerButton title="Show my Work" icon={<SiPolywork />} position={"right"} />


                  </div>

                </div> */}

              </div>


            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
