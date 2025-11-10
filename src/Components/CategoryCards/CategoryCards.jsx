import React, { use } from "react";
import styled from "styled-components";

const dataPromise1 = fetch("http://localhost:3000/garbage")
  .then((res) => res.json())
  .then((data) => {
    return data;
  });
const dataPromise2 = fetch("http://localhost:3000/illegalConstruction")
  .then((res) => res.json())
  .then((data) => {
    return data;
  });
const dataPromise3 = fetch("http://localhost:3000/brokenPublicProperty")
  .then((res) => res.json())
  .then((data) => {
    return data;
  });
const dataPromise4 = fetch("http://localhost:3000/roadDamage")
  .then((res) => res.json())
  .then((data) => {
    return data;
  });

const CategoryCards = () => {
  const data1 = use(dataPromise1);
  const data2 = use(dataPromise2);
  const data3 = use(dataPromise3);
  const data4 = use(dataPromise4);
  return (
    <div className="grid grid-cols-4 gap-3 max-w-11/12 mx-auto my-14">
      <StyledWrapper>
        <div className="card">
            <img className="w-[300px] h-[150px]" src={data1.image} alt="" />
          <p className="card-title">{data1.title}</p>
          <p className="small-desc">
            {data1.description}
          </p>
        </div>
      </StyledWrapper>

      <StyledWrapper>
        <div className="card">
        <img className="w-[300px] h-[150px]" src={data2.image} alt="" />
          <p className="card-title">{data2.title}</p>
          <p className="small-desc">
            {data2.description}
          </p>
        </div>
      </StyledWrapper>

      <StyledWrapper>
        <div className="card">
        <img className="w-[300px] h-[150px]" src={data3.image} alt="" />
          <p className="card-title">{data3.title}</p>
          <p className="small-desc">
            {data3.description}
          </p>
        </div>
      </StyledWrapper>

      <StyledWrapper>
        <div className="card">
        <img className="w-[300px] h-[150px]" src={data4.image} alt="" />
          <p className="card-title">{data4.title}</p>
          <p className="small-desc">
            {data4.description}
          </p>
        </div>
      </StyledWrapper>
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
    background-color: #f2f8f9;
    border-radius: 10px;
    padding: 2em 1.2em;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(to bottom, #c3e6ec, #a7d1d9);
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
