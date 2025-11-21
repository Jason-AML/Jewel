import { motion } from "framer-motion";
import image from "../assets/hero/girl.webp";
import image2 from "../assets/hero/joya.jpg";

export const Hero = () => {
  return (
    <section className="h-screen w-full">
      <div className="grid grid-cols-2">
        {/*left hero section*/}
        <div className=" h-screen w-full flex flex-col justify-center ">
          <div className="px-10 flex flex-col gap-10">
            <h2 className="text-5xl">Elevate Your Style With Us</h2>
            <p className="text-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil id
              libero praesentium quasi architecto autem, quisquam at explicabo?
              Dolores possimus molestiae ut quibusdam fugit molestias impedit
              repellendus sunt pariatur voluptatum.
            </p>
            <div className="flex gap-5">
              <button className="btn bg-[#F1E2D0]">Explore Now</button>
              <button className="btn">Discover More</button>
            </div>
            <div className="rounded-2xl border-gray-800 border-2">
              <div className="flex">
                <div className="flex flex-col justify-center p-5">
                  <span>500+</span>
                  <span>collection</span>
                </div>
                <div className="flex justify-center items-center">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint alias accusantium tenetur libero minima odio, atque
                    sequi fugit numquam ipsam ipsa praesentium a impedit, fuga
                    autem deleniti sunt tempore qui.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*right hero section*/}
        <div className="grid grid-cols-2 p-5">
          <motion.div className="relative cursor-pointer">
            <img src={image2} alt="" className="rounded-2xl h-full" />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="flex justify-between px-5 items-center absolute bottom-0 bg-amber-50/55 w-full h-1/5  "
            >
              <div className="">
                <p className="text-2xl">Pendant</p>
                <p>Clemond</p>
              </div>
              <span>$1500</span>
            </motion.div>
          </motion.div>
          <div className="grid grid-rows-2 items-center p-5">
            <div className="relative cursor-pointer">
              <img src={image} alt="" className="rounded-2xl" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="flex justify-between px-5 items-center absolute bottom-0 bg-amber-50/55 w-full h-1/3"
              >
                <div>
                  <p className="text-2xl">Pendant</p>
                  <p>Clemond</p>
                </div>
                <span>$1500</span>
              </motion.div>
            </div>
            <div className="relative cursor-pointer">
              <img src={image} alt="" className="rounded-2xl" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="flex justify-between px-5 items-center absolute bottom-0 bg-amber-50/55 w-full h-1/3"
              >
                <div>
                  <p className="text-2xl">Pendant</p>
                  <p>Clemond</p>
                </div>
                <span>$1500</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
