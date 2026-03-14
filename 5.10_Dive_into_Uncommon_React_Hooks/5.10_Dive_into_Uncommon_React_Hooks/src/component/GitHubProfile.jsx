import React from "react";
import { useGithub } from "../hook/useGithub";

const GitHubProfile = () => {
  const { user, error, loading } = useGithub("ibrahimohid");

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      {user && (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div
            className="relative px-7 py-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
  rounded-xl flex flex-col items-center w-1/4 shadow-2xl"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src={user.avatar_url}
                className="w-32 h-32 rounded-full object-cover transition-all duration-500 hover:scale-110"
                alt={user.name}
              />
            </div>

            {/* Profile Info */}
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
                {user.name || user.login}
              </h2>

              <p className="text-purple-400 font-medium mt-1">GitHub Profile</p>

              <p className="text-gray-300 mt-2 text-sm">
                {user.location || "Open Source Contributor"}
              </p>
            </div>

            {/* Stats */}
            <div className="flex justify-between w-full mt-6 px-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-pink-500">
                  {user.followers}
                </p>
                <p className="text-gray-400 text-xs">FOLLOWERS</p>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold text-purple-500">
                  {user.public_repos}
                </p>
                <p className="text-gray-400 text-xs">REPOS</p>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold text-violet-500">
                  {user.following}
                </p>
                <p className="text-gray-400 text-xs">FOLLOWING</p>
              </div>
            </div>

            {/* GitHub Button */}
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-full"
            >
              <button className="w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg text-white hover:opacity-90 transition">
                View GitHub
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubProfile;
