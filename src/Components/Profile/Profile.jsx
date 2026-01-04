import { useState } from "react";
import UseAuth from "../Context/UseAuth";
import { FaRegUser } from "react-icons/fa";

const Profile = () => {
  const { user } = UseAuth();
  const [edit, setEdit] = useState(false);
  const image = user.photoURL;

  const [profile, setProfile] = useState({
    name: `${user.displayName}`,
    role: "Role",
    about:
      "Nature worker focused on environmental conservation, sustainability, and community awareness. Dedicated to protecting ecosystems and promoting responsible interaction with the natural world.",
    email: `${user.email}`,
    phone: "+8801XXXXXXXXX",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full min-h-screen bg-secondary px-6 py-10">
      <div className="max-w-6xl mx-auto bg-secondary border border-accent/20 rounded-2xl shadow-md p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 border-b pb-6">
          {image ? (
            <img
              src={image}
              className="w-32 h-32 rounded-full object-cover border"
            />
          ) : (
            <FaRegUser className="w-32 h-32 p-3 rounded-full border" />
          )}

          <div className="flex-1 text-accent">
            {edit ? (
              <>
                <input
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="input input-bordered w-full mb-2"
                />
                <input
                  name="role"
                  value={profile.role}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </>
            ) : (
              <>
                <h1 className="text-3xl font-semibold">{profile.name}</h1>
                <p className="text-gray-500 mt-1">{profile.role}</p>
              </>
            )}
          </div>

          <button
            onClick={() => setEdit(!edit)}
            className="btn btn-outline btn-sm">
            {edit ? "Save" : "Edit"}
          </button>
        </div>

        {/* About */}
        <Section className="text-accent" title="About Me">
          {edit ? (
            <textarea
              name="about"
              value={profile.about}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
            />
          ) : (
            <p>{profile.about}</p>
          )}
        </Section>

        {/* Skills */}
        <Section title="Skills">
          {edit ? (
            <input
              name="skills"
              value={profile.skills}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          ) : (
            <div className="flex flex-wrap gap-2">
              {profile.skills?.split(",").map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                  {skill.trim()}
                </span>
              ))}
            </div>
          )}
        </Section>

        {/* Contact */}
        <Section title="Contact">
          <div className="grid md:grid-cols-2 gap-4">
            {edit ? (
              <>
                <input
                  name="email"
                  value={profile.email}
                  className="input input-bordered w-full"
                />
                <input
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </>
            ) : (
              <>
                <p>
                  <span className="font-medium">Email:</span> {profile.email}
                </p>
                <p>
                  <span className="font-medium">Phone:</span> {profile.phone}
                </p>
              </>
            )}
          </div>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mt-8">
    <h2 className="text-xl font-semibold mb-3">{title}</h2>
    {children}
  </div>
);

export default Profile;
