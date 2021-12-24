import React, { useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../context/GlobalState";

const Register = () => {
  const { userRegistration, isLoading } = useContext(GlobalContext);

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    userRegistration(data);
  };

  //   useEffect(() => {
  //     if (isLoading) {
  //       reset();
  //     }
  //     return () => {
  //       //   cleanup
  //     };
  //   }, [isLoading]);

  return <></>;
};

export default Register;
