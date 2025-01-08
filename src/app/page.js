"use client";
import React, { useState } from "react";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let tempErrors = {};
    let valid = true;

    if (!formData.firstName) {
      tempErrors.firstName = "First Name is required";
      valid = false;
    }
    if (!formData.lastName) {
      tempErrors.lastName = "Last Name is required";
      valid = false;
    }
    if (!formData.age || formData.age < 18 || formData.age > 100) {
      tempErrors.age = "Age must be between 18 and 100";
      valid = false;
    }
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
      tempErrors.mobile = "Mobile Number must be 10 digits";
      valid = false;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid Email Address";
      valid = false;
    }
    if (!formData.password || formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      valid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }
    if (!formData.description) {
      tempErrors.description = "Description is required";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    if (validateForm()) {
      setSuccessMessage("Form submitted successfully!");
    }
  };
  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      mobile: "",
      email: "",
      description: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
    setSuccessMessage("");
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    mobile: "",
    email: "",
    description: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className={styles.main}>
      <div className={styles.left_div}>
        <Image
          src="/Web.png"
          width={100}
          height={100}
          quality={100}
          className={styles.image}
          alt="Image"
        ></Image>
      </div>
      <div className={styles.right_div}>
        <form onSubmit={handleSubmit}>
          {" "}
          <h1 className={styles.title}>Create an account</h1>
          <div className={styles.threeinput}>
            <div className={styles.al1}>
              <p className={styles.name}>First Name</p>
              <input
                className={styles.i3}
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              ></input>
              {errors.firstName && (
                <span className={styles.error}>{errors.firstName}</span>
              )}
            </div>
            <div className={styles.al1}>
              <p className={styles.name}>Last Name</p>
              <input
                className={styles.i3}
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              ></input>
              {errors.lastName && (
                <span className={styles.error}>{errors.lastName}</span>
              )}
            </div>
            <div className={styles.al1}>
              <p className={styles.name}>Age</p>
              <input
                className={styles.i31}
                type="number"
                name="age"
                placeholder="18 - 100"
                value={formData.age}
                onChange={handleChange}
              ></input>
              {errors.age && <span className={styles.error}>{errors.age}</span>}
            </div>
          </div>
          <div className={styles.twoinput}>
            <div className={styles.al1}>
              <p className={styles.name}>Mobile Number</p>
              <input
                className={styles.i2}
                type="text"
                name="mobile"
                placeholder="xxxxx xxxxx"
                value={formData.mobile}
                onChange={handleChange}
              ></input>
              {errors.mobile && (
                <span className={styles.error}>{errors.mobile}</span>
              )}
            </div>
            <div className={styles.al1}>
              <p className={styles.name}>Email</p>
              <input
                className={styles.i2}
                type="email"
                name="email"
                placeholder="abc@xxx.zzz"
                value={formData.email}
                onChange={handleChange}
              ></input>
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.al1}>
              <p className={styles.name}>Description</p>
              <textarea
                className={styles.text}
                name="description"
                placeholder="Description"
                maxLength={150}
                value={formData.description}
                onChange={handleChange}
              ></textarea>
              {errors.description && (
                <span className={styles.error}>{errors.description}</span>
              )}
              <div className={styles.maxchar}>
                <p className={styles.max}>Max 150 char</p>
              </div>
            </div>
          </div>
          <div className={styles.passwords}>
            <div className={styles.pass}>
              <p className={styles.name}>Password</p>
              <input
                className={styles.i2}
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              ></input>
              {errors.password && (
                <span className={styles.error}>{errors.password}</span>
              )}
              <img src="/eye.png" className={styles.eye}></img>
            </div>
            <div className={styles.pass}>
              <p className={styles.name}>Confirm Password</p>
              <input
                className={styles.i2}
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              ></input>
              {errors.confirmPassword && (
                <span className={styles.error}>{errors.confirmPassword}</span>
              )}
              <img src="/eye.png" className={styles.eye}></img>
            </div>
          </div>
          <div className={styles.btns}>
            <button className={styles.btn1} onClick={handleReset}>
              RESET
            </button>
            <button className={styles.btn2} type="submit">
              SUBMIT
            </button>
          </div>
          {successMessage && <p className={styles.error}>{successMessage}</p>}
        </form>
      </div>
    </div>
  );
}
