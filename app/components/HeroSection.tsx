"use client";

const HeroSection = () => {
  return (
    <>
      <section className="text-white relative px-[30px] lg:px-[194px] pt-[158px] lg:pt-[230px] pb-[43px] lg:pb-[80px] hero-bg text-center md:flex">
        <div className="md:text-left md:w-[60%] lg:w-[50%]">
          <h1 className=" font-neue font-bold text-[35px] leading-[42px] lg:text-[60px] lg:leading-[72px]">
            Nextjs
            <br />
            Boilerplate
            <br />
            Starter
          </h1>
          <p className="text-[17px] mt-[20px] leading-[25.5px] lg:text-[20px] lg:leading-[30px] font-normal">
            A Nextjs Project boilerplate for all Frontend Developers
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
