import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import garbageIssue from "../../assets/garbage-issue.jpg";
import cleaning from "../../assets/community-cleaning.jpg";
import actions from "../../assets/sustainability-actions.jpg";
import IssuesCard from "../IssuesCard/IssuesCard";
import CategoryCards from "../CategoryCards/CategoryCards";
import CommunityState from "../CommunityStats.jsx/CommunityState";
import JoinCommunity from "../JoinCommunity/JoinCommunity";
import Skeleton from "../skeleton/Skeleton";
import Reviews from "../Reviews/Reviews";
import Features from "../Features/Features";
import Services from "../Services/Services";
import Highlights from "../Highlights/Highlights";
import Blogs from "../Blogs/Blogs";

const Home = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://assignment-10-server-jet-nine.vercel.app/issues")
        .then((res) => res.json())
        .then((data) => {
          setIssues(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <div className="bg-secondary w-full">
      <div className="min-h-screen max-w-[1100px] lg:max-w-[1200px] mx-auto">
        <div className="lg:w-full p-1 mx-auto">
          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay]}
            className="mySwiper">
            <SwiperSlide>
              <div className="relative w-full h-32 md:h-56 lg:h-96 rounded-xl overflow-hidden">
                <img
                  src={garbageIssue}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                  <h1 className="text-[10px] md:text-xl lg:text-3xl font-semibold mb-2">
                    More than 430 million tons of plastic are produced each year
                  </h1>
                  <p className="text-[10px] lg:text-sm md:w-8/12 mx-auto">
                    If plastic production stays on its current trajectory, by
                    2030, greenhouse gas emissions from plastic could reach 1.34
                    billion tons per year.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-32 md:h-56 lg:h-96 rounded-xl overflow-hidden">
                <img
                  src={cleaning}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                  <h1 className="text-[10px] md:text-xl lg:text-3xl font-semibold mb-2">
                    Join Hands for a Cleaner, Greener Community
                  </h1>
                  <p className="text-[10px] lg:text-sm md:w-8/12 mx-auto">
                    Together we can make a difference! Be part of our community
                    cleaning movement to create a healthier, more sustainable
                    environment for everyone.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-32 md:h-56 lg:h-96 rounded-xl overflow-hidden">
                <img
                  src={actions}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                  <h1 className="text-[10px] md:text-xl lg:text-3xl font-semibold mb-2">
                    Join Hands for a Cleaner, Greener Community
                  </h1>
                  <p className="text-[10px] lg:text-sm md:w-8/12 mx-auto">
                    Together we can make a difference! Be part of our community
                    cleaning movement to create a healthier, more sustainable
                    environment for everyone.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div>
          <CategoryCards></CategoryCards>
        </div>

        <div>
          <h1 className="text-center mt-4 text-xl font-bold text-accent">
            See recent issues
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4 lg:grid-cols-4">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} />)
            : issues.map((issue) => (
                <IssuesCard key={issue._id} issue={issue} />
              ))}
        </div>

        <div>
          <CommunityState></CommunityState>
        </div>

        <div className="my-14">
          <JoinCommunity></JoinCommunity>
        </div>

        <div>
          <Reviews></Reviews>
        </div>

        <div>
          <Features></Features>
        </div>

        <div>
          <Services></Services>
        </div>

        <div>
          <Highlights></Highlights>
        </div>

        <div>
          <Blogs></Blogs>
        </div>
      </div>
    </div>
  );
};

export default Home;
