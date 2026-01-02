import React, { use } from "react";
import styled from "styled-components";

const dataPromise = fetch(
  "https://assignment-10-server-jet-nine.vercel.app/categoryCards"
)
  .then((res) => res.json())
  .then((data) => {
    return data;
  });

const CategoryCards = () => {
  const data1 = use(dataPromise);

  return (
    <div>
      <h1 className="text-center mt-4 text-xl font-bold text-accent">
        See all category
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-11/12 mx-auto my-1">
        {data1.map((d, index) => (
          <StyledWrapper key={index}>
            <h1 className="text-center text-accent">{d.category}</h1>
            <div className=" card h-[380px] hover:cursor-pointer">
              <img
                className="w-[300px] mx-auto md:w-[300px] h-[150px]"
                src={d.image}
                alt=""
              />
              <p className="font-bold mt-5 text-black">{d.title}</p>
              <p className="small-desc text-accent">{d.description}</p>
            </div>
          </StyledWrapper>
        ))}
      </div>
    </div>
  );
};
const StyledWrapper = styled.div`
  .card-title {
    color: #262626;
    font-size: 1.5em;
    line-height: normal;
    height: 80px;
    font-weight: 700;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  .small-desc {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5em;
    color: #452c2c;
  }

  .small-desc {
    font-size: 1em;
  }

  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
  }

  .card {
    display: block;
    position: relative;
    height: 400px;
    background-color: #97c09e;
    border-radius: 10px;
    padding: 2em 1.2em;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
  }

  .card:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg, #364a60, #384c6c);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }

  .card:hover:before {
    transform: scale(38);
  }

  .card:hover .small-desc {
    transition: all 0.5s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }

  .card:hover .card-title {
    transition: all 0.5s ease-out;
    color: #ffffff;
  }
`;

export default CategoryCards;
