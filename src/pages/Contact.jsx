import { useState } from "react";


const FormInputs = ({
  label,
  type,
  id,
  name,
  handleChange,
  value,
  placeHolder,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[5px] w-[100%]">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeHolder}
        onChange={handleChange}
        className="inputs"
      />
    </div>
  );
};

const FormTextArea = ({ label, name, id, handleChange, value, placeHolder}) => {
  
  return (
    <div className="flex flex-col items-center justify-center gap-[5px] w-[100%]">
      <label htmlFor={id}>{label}</label>
      <textarea
        name={name}
        id={id}
        value={value}
        placeholder={placeHolder}
        onChange={handleChange}
        cols="30"
        rows="4"
        className="textArea"
      ></textarea>
    </div>
  );
};

const SubmitButton = ({text}) => {
  return (
    <div className="w-[100%]">
      <button className="contactButton w-[100%]">{text}</button>
    </div>
  );
}

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleTextArea = (e) => {
    setTextarea(e.target.value);
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (name === "") {
    alert("Please enter your name");
    return
  } else if (email === "") {
    alert("Please enter your email");
    // return
  } else if (textarea === "") {
    alert("Please enter your message");
    // return
  } else {
    alert(`Feedback:
    Name: ${name}
    Email: ${email}
    Message: ${textarea}`);
    setName((e.target.value = ""));
    setEmail((e.target.value = ""));
    setTextarea((e.target.value = ""));
  }
}

  return (
    <section className="section flex items-center justify-center bg-[#000000] w-[100%] pt-[200px] md:pt-10 pr-[10px] pl-[10px]">
      <div className="form-container flex flex-col items-center justify-center w-[100%] md:w-[70%] rounded-lg text-white p-[20px]">
        <h1 className=" text-[40px]">Contact Us</h1>
        <form
          // action=""
          className="flex flex-col items-center justify-center w-[98%] md:w-[40%] bg-[#ffffff] rounded-lg text-[#464747] text-[23px] p-[10px] gap-[20px]"
          onSubmit={(e)=>handleSubmit(e)}
        >
          <FormInputs
            label={"Enter your name below:"}
            type={"text"}
            id={"name"}
            name={"name"}
            handleChange={handleName}
            value={name}
            placeHolder={"Enter your name here"}
          />

          <FormInputs
            label={"Enter your email below:"}
            type={"email"}
            id={"email"}
            name={"email"}
            handleChange={handleEmail}
            value={email}
            placeHolder={"Enter your email here"}
          />

          <FormTextArea
            label={"Type your message below:"}
            name={"textArea"}
            id={"textArea"}
            handleChange={handleTextArea}
            value={textarea}
            placeHolder={"Enter your message here"}
          />

          <SubmitButton text={"Submit"} />
        </form>
      </div>
    </section>
  );
};

export default Contact;
