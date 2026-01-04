import React from "react";

const CommunityState = () => {
  const stats = {
    totalUsers: 1250,
    resolved: 340,
    pending: 78,
  };

  return (
    <div>
      <section className="pt-4 bg-secondary dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold mb-10 text-accent">
            Community Stats Of Ours
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
              <div className="stat-title text-gray-500">Total Users</div>
              <div className="stat-value text-blue-600">{stats.totalUsers}</div>
            </div>

            <div className="stat bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
              <div className="stat-title text-gray-500">Resolved Issues</div>
              <div className="stat-value text-green-600">{stats.resolved}</div>
            </div>

            <div className="stat bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
              <div className="stat-title text-gray-500">Pending Issues</div>
              <div className="stat-value text-orange-500">{stats.pending}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityState;
