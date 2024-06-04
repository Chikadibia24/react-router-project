

const FormInputs = ({ label, type, id, name }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[5px] w-[100%]">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} className="inputs"/>
    </div>
  );
};

const FormTextArea = ({label,name,id,}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[5px] w-[100%]">
      <label htmlFor={id}>{label}</label>
      <textarea
        name={name}
        id={id}
        cols="30"
        rows="4"
        className="textArea"
      ></textarea>
    </div>
  );
}

const SubmitButton = ({text}) => {
  return (
    <div className="w-[100%]">
      <button className="contactButton w-[100%]">{text}</button>
    </div>
  );
}

const Contact = () => {
  return (
    <section className="section flex items-center justify-center bg-[#000000] w-[100%] pt-10 pr-[10px] pl-[10px]">
      <div className="form-container flex flex-col items-center justify-center w-[70%] rounded-lg text-white p-[20px]">
        <h1 className=" text-[40px]">Contact Us</h1>
        <form
          action=""
          className="flex flex-col items-center justify-center w-[40%] bg-[#ffffff] rounded-lg text-[#464747] text-[23px] p-[10px] gap-[20px]"
        >
          <FormInputs
            label={"Enter your name below:"}
            type={"text"}
            id={"name"}
            name={"name"}
          />

          <FormInputs
            label={"Enter your email below:"}
            type={"email"}
            id={"email"}
            name={"email"}
          />

          <FormTextArea label={"Type your message below:"} name={"textArea"} id={"textArea"} />

          <SubmitButton text={"Submit"} />
        </form>
      </div>
    </section>
  );
};

export default Contact;
