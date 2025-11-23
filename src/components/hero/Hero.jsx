import { motion } from "framer-motion";

export const Hero = ({ info }) => {
  return (
    <section className="py-20 w-full text-xs">
      <div className="md:grid md:grid-cols-2 flex flex-col">
        {/*left hero section*/}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className=" h-screen w-full flex flex-col justify-center "
        >
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
        </motion.div>
        {/*right hero section*/}
        <motion.div
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.3,
          }}
          className="md:grid md:grid-cols-2 gap-4 flex flex-col h-screen p-5"
        >
          {info.map((item, index) => (
            <motion.div
              key={item.id}
              className={`
                relative cursor-pointer overflow-hidden rounded-2xl 
                ${index === 0 ? "row-span-2" : ""} 
            `}
            >
              <img
                src={item.image}
                alt={item.nombre}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
