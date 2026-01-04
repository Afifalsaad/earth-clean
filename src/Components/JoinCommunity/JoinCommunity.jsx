import React from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import { Fade, Hinge, JackInTheBox } from "react-awesome-reveal";

const JoinCommunity = () => {
  return (
    <div>
      <div className="text-center text-2xl font-bold">
        <JackInTheBox>
        <h1 className="text-center text-4xl font-bold text-accent my-4">Become one of us.</h1>
        </JackInTheBox>
      </div>
      <section className="bg-linear-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">
            Join Our Community Clean Drive
          </h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Become a part of the positive change! Help us make our neighborhoods
            cleaner and greener. Together, we can build a better tomorrow.
          </p>
          <Link
            to="/register"
            className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-green-100 transition">
            Join as Volunteer
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JoinCommunity;
