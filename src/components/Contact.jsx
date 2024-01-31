import { IconMail, IconSend, IconUser } from "@tabler/icons-react";
import React from "react";
import Email from "./Email";
import { ToastContainer, toast } from "react-toastify";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';



const Button = ({Icon,text}) => {
    return(
        <AwesomeButton type="primary" className="aws-btn"  before={Icon && <Icon/>}> {text}</AwesomeButton>
    )
}

let sendEmail = async (e) => {
  e.preventDefault();

  //   console.log()
  const resp = await toast.promise(
    Email({
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    }),
    {
      pending: " is pending",
      success: "resolved 👌",
      error: "rejected 🤯",
    }
  );
  if (resp?.status == 200) {
   for (let i = 0 ; i < 3; i++) {
    e.target[i].value = ""
   }
  }
};
function Contact() {
  return (
    <div className="contact">
        <ToastContainer/>
      <div className="h1">Get in Touch</div>
      <form
        action="#"
        onSubmit={(e) => {
          sendEmail(e);
        }}
      >
        <div className="div">
          <IconUser />
          <input type="text" placeholder="name" required />
        </div>
        <div className="div">
          <IconMail />
          <input type="email" placeholder="email" required />
        </div>

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          required
          placeholder="message here"
        ></textarea>
        {/* <button>
          <IconSend />
          send Message
        </button> */}
        <Button text={"Send Message"} Icon={IconSend}/>
      </form>
    </div>
  );
}

export default Contact;
