import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const profile = useSelector(state => state.auth.profile)
  return (
    <div>
      <h1>ProfilePage</h1>
      <h3>{profile.email}</h3>
    </div>
  );
}

export default ProfilePage;
