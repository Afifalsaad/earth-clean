import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const MyContribution = () => {
  const { user } = use(AuthContext);
  const [contributions, setContributions] = useState([]);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    console.log("clicked");
    doc.text("My Contribution Report", 14, 10);

    const tableColumn = ["#", "Title", "Category", "Amount", "Date"];
    const tableRows = [];

    contributions.map((item, index) => {
      const row = [
        index + 1,
        item.title || "No title",
        item.category || "No category",
        item.amount || "0",
        new Date(item.date).toLocaleDateString() || "N/A",
      ];
      tableRows.push(row);
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("my_contributions.pdf");
  };

  useEffect(() => {
    fetch(`http://localhost:3000/myContribution?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data from contribution", data);
        setContributions(data);
      });
  }, [user]);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-7">
        My Contribution :{" "}
        <span className="text-[#0084d1]">{contributions.length}</span>
      </h1>
      <div className="overflow-x-auto min-h-screen max-w-6xl mx-auto mb-14">
        <table className="table bg-white">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Paid Amount</th>
              <th>Date</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {contributions.map((data, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{data.title || "No title"}</td>
                <td>{data.category || "No category"}</td>
                <td>
                  {data.amount}
                  <br />
                </td>
                <td>{data.date}</td>

                <td>
                  <button
                    onClick={handleDownloadPDF}
                    className="hover:cursor-pointer">
                    <FaCloudDownloadAlt className="text-4xl mr-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyContribution;
