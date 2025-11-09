import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import garbageIssue from "../../assets/garbage-issue.jpg";
import cleaning from "../../assets/community-cleaning.jpg";
import actions from "../../assets/sustainability-actions.jpg";
import { useLoaderData } from "react-router";
import IssuesCard from "../IssuesCard/IssuesCard";

const Home = () => {
  const issues = useLoaderData();
  console.log(issues);

  return (
    <div className="min-h-screen">
      <div className="w-10/12 mx-auto my-14">
        <Swiper
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper">
          <SwiperSlide>
            <img
              className="w-full h-24 lg:h-96 object-cover rounded-xl"
              src={garbageIssue}
              alt=""
            />

            <div className="absolute top-0 bg-black/50 w-6/12 h-full rounded-xl rounded-r-none flex flex-col justify-center items-center text-white"></div>
            <div className="absolute top-6/12 w-full text-center text-white">
              <h1 className="text-xl md:text-3xl font-semibold mb-2">
                More than 430 million tons of plastic are produced each year
              </h1>
              <p className="text-sm md:text-sm w-[300px] md:w-8/12 text-center mx-auto">
                If plastic production stays on its current trajectory, by 2030,
                greenhouse gas emissions from plastic could reach 1.34 billion
                tons per year.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="relative w-full h-24 lg:h-96 object-cover rounded-xl"
              src={cleaning}
              alt=""
            />

            <div className="absolute top-0 bg-black/50 w-6/12 h-full rounded-xl rounded-r-none flex flex-col justify-center items-center text-white"></div>
            <div className="absolute top-6/12 w-full text-center text-white">
              <h1 className="text-xl md:text-3xl font-semibold mb-2">
                Join Hands for a Cleaner, Greener Community
              </h1>
              <p className="text-sm md:text-sm w-[300px] md:w-8/12 text-center mx-auto">
                Together we can make a difference! Be part of our community
                cleaning movement to create a healthier, more sustainable
                environment for everyone.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="relative w-full h-24 lg:h-96 object-cover rounded-xl"
              src={actions}
              alt=""
            />

            <div className="absolute top-0 bg-black/50 w-6/12 h-full rounded-xl rounded-r-none flex flex-col justify-center items-center text-white"></div>
            <div className="absolute top-6/12 w-full text-center text-white">
              <h1 className="text-xl md:text-3xl font-semibold mb-2">
                Take Action for a Sustainable Future
              </h1>
              <p className="text-sm md:text-sm w-[300px] md:w-8/12 text-center mx-auto">
                Every small step counts. Join our sustainability mission to
                protect the planet, conserve resources, and inspire positive
                change in your community.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="grid grid-cols-3 gap-6 max-w-11/12 mx-auto">
        {issues.map((issue) => (
          <IssuesCard key={issue._id} issue={issue}></IssuesCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
