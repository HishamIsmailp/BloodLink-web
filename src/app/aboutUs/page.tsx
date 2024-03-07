// import React from "react";
// import NavBar from "../components/NavBar";

// function AboutUs() {
//   return (
//     <div>
//       <div className="position-fixed top-0 w-100"><NavBar /></div>
//       page
//     </div>
//   );
// }

// export default AboutUs;

"use client"
import { useForm, SubmitHandler } from "react-hook-form";




type Inputs = {
  example: string
  exampleRequired: string
  chalil:string
}


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log("***",data)


  console.log(watch("example")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />


      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input {...register("chalil")}/>


      <input type="submit" />
    </form>
  )
}