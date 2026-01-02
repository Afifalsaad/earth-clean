import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const MyContribution = () => {
  const { user } = use(AuthContext);
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
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
    setLoading(true);
    fetch(
      `https://assignment-10-server-jet-nine.vercel.app/myContribution?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setContributions(data);
        setLoading(false);
      });
  }, [user?.email]);

  return (
    <div className="min-h-screen bg-secondary">
      <h1 className="text-center text-2xl font-bold py-7">
        My Contribution :{" "}
        <span className="text-[#0084d1] text-2xl">{contributions.length}</span>
      </h1>
      <div className="overflow-x-auto min-h-screen max-w-4xl md:max-w-6xl mx-auto mb-14">
        {/* Responsive */}
        {loading ? (
          <div className="min-h-screen flex justify-center items-center mx-auto">
            <div class="loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : contributions.length === 0 ? (
          <div className="flex justify-center items-center min-h-screen">
            <p className="font-semibold text-xl">No Data Found</p>
          </div>
        ) : (
          <div>
            <div className="md:hidden min-h-screen bg-secondary text-accent space-y-4 p-2">
              {contributions.map((d, index) => (
                <div
                  key={d._id}
                  className="border p-4 rounded shadow">
                  <p className="font-bold">
                    {index + 1}. {d.title}
                  </p>
                  <p>Title: {d.title ? d.title : "No title Added"}</p>
                  <p>
                    Category: {d.category ? d.category : "No category Added"}
                  </p>
                  <p>Paid Amount: {d.amount}</p>
                  <p>Date: {new Date(d.createdAt).toLocaleDateString()}</p>
                </div>
              ))}
            </div>

            <div className="hidden md:block bg-secondary text-accent">
              <table className="table">
                <thead className="text-accent">
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
                      <td>{new Date(data.createdAt).toLocaleDateString()}</td>

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
        )}
      </div>
    </div>
  );
};

export default MyContribution;
