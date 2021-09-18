import React from "react";
import style from "./profile.module.css";

const Profile = () => {
  return (
    <>
      <section className={style.profile_banner}>
        <div className={style.container}>
          <div className={style.banner}>
            <h1>MY Profile</h1>
          </div>
        </div>
      </section>
      <section className={style.profile_content}>
        <div className={style.container}></div>
      </section>
    </>
  );
};

export default Profile;
