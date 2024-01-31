import React from "react";
import emailjs from "@emailjs/browser";

let Email = async ({ name, email, message }) => {
  const new_message = {
    from_name: name,
    name: name,
    email: email,
    message: message,
  };
  

  let resp = await emailjs
    .send(
      "service_w6p8vjf",
      "template_tutx11g",
      new_message,
      "p-57pAr2De8uPrLD8"
    )
    .then((res) => {
      return res;
    }).catch(err=>(err));
    return resp
};

export default Email;
