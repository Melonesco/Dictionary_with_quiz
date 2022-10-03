import React from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import "./FillUp.css";

const FillUp = () => {
  const id = uuidv4();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Address error ${url}, status ${response.status}`);
    }

    return await response.json();
  };

  const onSubmit = (data) => {
    postData("http://localhost:2000/words", data).then((data2) =>
      console.log(">>>>", data2)
    );
    reset();
  };

  return (
    <div>
      <h2 className="main-title">Dictionary</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="field">
        <input
          style={{ display: "none" }}
          type="text"
          defaultValue={id}
          {...register("id", { required: false })}
        />
        <label>
          <p>First word</p>
          <input type="text" {...register("firstWord", { required: true })} />
          <div className="error">
            {errors.firstWord && <p>Fill in this field!</p>}
          </div>
        </label>
        <label>
          <p>Word translation</p>
          <input type="text" {...register("secondWord", { required: true })} />
          <div className="error">
            {errors.secondWord && <p>Fill in this field!</p>}
          </div>
        </label>
        <input className="submit btn-add" type="submit" value="Add" />
      </form>
      <Link className="submit btn-dictionary" to="/dictionary">
        Dictionary
      </Link>
      <Link className="submit btn-dictionary" to="/quiz">
        Repeat Words
      </Link>
      <Link className="submit btn-dictionary" to="/history">
        History
      </Link>
    </div>
  );
};

export default FillUp;
