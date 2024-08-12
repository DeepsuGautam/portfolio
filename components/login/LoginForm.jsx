"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const domain = process.env.NEXT_PUBLIC_DOMAIN;
console.domain;

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const change = (e) => {
    const { name, value } = e?.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const redirect = useRouter();

  const submit = async (e) => {
    e?.preventDefault();
    try {
      if (!data?.email || !data?.password) {
        return setMessage("Enter all fields!");
      }
      const res = await fetch(`${domain}/api/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        return setMessage("Enter correct credentials!");
      }
      return redirect.push("/dashboard");
    } catch (error) {
      console.log(error?.message);
      return setMessage("OOPS, Something went wrong!");
    }
  };

  return (
    <form
      className="w-full mx-auto bg-white rounded-xl shadow-xl max-w-[350px] p-[20px]"
      onSubmit={submit}
    >
      <h3 className="w-full p-[10px] py-[20px] text-[22px] font-semibold text-slate-700">
        Login
      </h3>
      <input
        value={data?.email}
        onChange={change}
        type="email"
        className="w-full text-[16px] p-[10px] border-2 rounded-xl"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <br />
      <br />
      <input
        value={data?.password}
        onChange={change}
        type="password"
        className="w-full text-[16px] p-[10px] border-2 rounded-xl"
        name="password"
        id="password"
        placeholder="Password"
        required
      />
      <br />
      <br />
      <button
        type="submit"
        className="w-fit rounded-xl py-[5px] px-[20px] bg-blue-500 transition-all duration-300 hover:bg-blue-600 text-white text-[16px]"
      >
        Login
      </button>
      {message && (
        <div className="w-full py-[20px] text-[16px] font-semibold text-red-500">
          {message}
        </div>
      )}
    </form>
  );
};

export default LoginForm;
