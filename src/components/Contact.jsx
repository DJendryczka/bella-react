import React from "react";

const Contact = () => {
  return (
    <div id="contact" className=" max-w-[1250px] h-[700px] mx-auto mt-20 bg-blue-50">
      <h4 className=" text-center text-2xl px-3 lg:text-3xl font-bold py-10 ">Vid förfrågningar samt offert fyll i formuler nedan</h4>

      <form action="https://formsubmit.co/bellastad18@gmail.com" method="POST" className=" max-w-[700px] mx-auto p-4 flex flex-col">
        <input type="email" name="email" required placeholder="Email" className=" border-solid  border-2 my-1 border-purple-200 rounded-md p-1" />
        <input type="text" name="name" required placeholder="Ditt namn" className=" border-solid  border-2 my-1 border-purple-200 rounded-md p-1" />
        <input type="tel" name="phone" required placeholder="Ditt tel. nr." className=" border-solid  border-2 my-1 border-purple-200 rounded-md p-1" />
        <textarea
          type="text"
          name="message"
          rows="10"
          required
          placeholder="Meddelande"
          className=" border-2 border-purple-200 rounded-md p-1"
        ></textarea>
        <button className=" mx-auto my-4" type="submit">Skicka</button>
      </form>
    </div>
  );
};

export default Contact;
