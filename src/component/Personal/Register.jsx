import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../Firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import './Login.css'


export default function Register() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user:Create a password-based account
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file)
      .then(() => {getDownloadURL(storageRef) //get url from firebase storage
        .then(async (downloadURL) => {
          try {
            // Update user's profile
            await updateProfile(res.user, {
              displayName:displayName,
              photoURL: downloadURL,
            });
            //create user list on firestore: add data to firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName:displayName,
              email:email,
              photoURL: downloadURL,
            });

            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Learning Platform</span>
          <span className="title">Register now!</span>
          <form onSubmit={handleSubmit}>
            <input required type="text" placeholder="display name" />
            <input required type="email" placeholder="email" />
            <input required type="password" placeholder="password" />
            <input required style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <img src="./img/addAvatar.png" alt="" />
              <span>Add an ID photo</span>
            </label>
            <button disabled={loading}>Sign up</button>
            {loading && <p style={{width:'230px', textAlign:'center'}}>"Uploading and compressing the image please wait..."</p>}
            {err && <span>Something went wrong</span>}
          </form>
          <p style={{width:'230px', textAlign:'center'}}>
            You do have an account?<Link to="/login"> Login</Link>
          </p>
        </div>
        <img className='avatarPhoto' src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="" />
      </div>

    </>
  );
};
