import React from "react";
import { FaQuoteLeft, FaStar, FaRegUserCircle } from "react-icons/fa";

const Reviews = () => {
  const feedbacks = [
    {
      id: 1,
      name: "Rahim Uddin",
      role: "Local Volunteer",
      message:
        "This project made our neighborhood noticeably cleaner and more pleasant. I feel proud to be part of something that truly helps the community.",
      rating: 5,
    },
    {
      id: 2,
      name: "Ayesha Begum",
      role: "Community Member",
      message:
        "The cleaning drives are well-organized and inspiring. It encouraged my family and neighbors to care more about our environment.",
      rating: 4,
    },
    {
      id: 3,
      name: "Green Youth Club",
      role: "Student Group",
      message:
        "A wonderful initiative that teaches young people responsibility and environmental awareness through real action.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-accent">
            What Our Community Says
          </h2>
          <p className="mt-3 text-base-content/70">
            Real voices from volunteers and community members
          </p>
        </div>

        {/* Carousel */}
        <div className="carousel w-full">
          {feedbacks.map((item, index) => (
            <div
              key={item.id}
              id={`slide${index}`}
              className="carousel-item w-full justify-center">
              <div className="card w-full md:w-3/4 bg-base-100 shadow-xl rounded-2xl p-8 relative">
                <FaQuoteLeft className="text-4xl text-primary absolute top-4 left-6" />

                {/* Content */}
                <p className="text-base-content/80 text-lg mb-6 px-6">
                  “{item.message}”
                </p>

                {/* Rating */}
                <div className="flex mb-4 px-6">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} className="text-warning mr-1" />
                  ))}
                </div>

                {/* User */}
                <div className="flex items-center gap-4 px-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary/10 border border-primary">
                    <FaRegUserCircle className="text-3xl text-primary/60" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-base-content/60">{item.role}</p>
                  </div>
                </div>

                {/* Controls */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href={`#slide${
                      index === 0 ? feedbacks.length - 1 : index - 1
                    }`}
                    className="btn btn-circle btn-sm">
                    ❮
                  </a>
                  <a
                    href={`#slide${(index + 1) % feedbacks.length}`}
                    className="btn btn-circle btn-sm">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
