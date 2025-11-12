import React from "react";
import { useLoaderData, useParams } from "react-router";

const IssueDetails = () => {
  const { id } = useParams();
  const issue = useLoaderData();
  console.log("data", issue, "id", id);
  const { title, image, location, description, date, category ,amount} = issue;
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center gap-8 p-12">
        <div className="min-w-[400px]">
          <img src={image} alt="" />
        </div>
        <div className="">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <h2 className="font-semibold">{location}</h2>
          <p>{category}</p>
          {/* <p >date:{newDate()}</p> */}
          <p className="mb-7">Amount: {amount} tk</p>
          <h2>{description}</h2>
          <h2>{date}</h2>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
