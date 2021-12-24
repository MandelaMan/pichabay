import React, { useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../context/GlobalState";

const Login = () => {
  const { userLogin, isLoading, user_info } = useContext(GlobalContext);

  // const { register, handleSubmit, errors, reset } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  //   userLogin(data);
  // };

  // useEffect(() => {
  //   if (isLoading) {
  //     reset();
  //   }
  //   return () => {
  //     //   cleanup
  //   };
  // }, [isLoading]);

  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data, e) => console.log(data, e);
  // const onError = (errors, e) => console.log(errors, e);

  return <></>;
};

export default Login;
