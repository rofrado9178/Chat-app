import React, { useRef } from "react";

const Login = (props) => {
  const { setId } = props;
  const idRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setId(idRef.current.value);
  };
  return (
    <article className="my-auto mx-4">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="">Enter Your Id</label>
        <input
          type="text"
          ref={idRef}
          required
          className="border-2 border-gray-200 w-96 rounded"
        />
        <section className="flex flex-row">
          <button className="my-2 mr-2 p-2 rounded bg-gray-200 w-20">
            Login
          </button>
          <button className="my-2 p-2 rounded bg-gray-200 w-20">New Id</button>
        </section>
      </form>
    </article>
  );
};

export default Login;
