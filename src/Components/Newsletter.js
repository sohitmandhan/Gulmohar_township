import React from "react";
import sectionImage from "../Images/Section.png";

const NewsLetter = () => {
  return (
    <div>
      <img src={sectionImage} alt="ihkbjnibjkn" className="absolute h-full w-full object-fill" />
      <div className="relative p-28">
        <div className="flex flex-row">
          <div className="p-16 text-center bg-white text-3xl font-mono w-1/2 my-10">
            <h1>WORK WITH</h1>
            <h1>GULMOHAR TOWNSHIP</h1>
            <p className="text-balance text-sm p-4 italic">
              David is committed to the highest level of expertise, knowledge
              and service. Your real estate inquiries are important to us, so
              please expect a prompt reply.
            </p>
            <button className="border-black border-2 text-sm p-4 m-4 w-64">
              LET'S GET STARTED
            </button>
          </div>
          <div className="border-t-2 border-b-2 border-r-2 border-l-0 border-white border-solid text-white font-mono p-16 m4-0 text-center w-1/2">
            <form>
              <h1 className="text-3xl m-2">NEWSLETTER</h1>
              <p className="p-4 text-sm">
                Subscribe to get our weekly newsletters.
              </p>
              <input className="p-3 w-3/4 font-arapey text-black"></input>
              <div className="flex align-top">
                <input type="checkbox"></input>
              <p className='text-xs p-4 text-justify italic'>
                By provideing Gulmohar Township your contact information, you
                acknowledge and agree to our <a>Privacy Policy</a> and onsent to
                receiving marketing communications, includingthrough automated
                calls, texts, emails, some of which may use artificial or
                prerecorded voices. This concent isn't necessary for purchasing
                any products or services and you may opt out any time. To opt
                out from text you can reply 'stop' at anytime. To opt out from
                emails, you can click on the unscbcribe link in the emails.
                Message and data charges may apply.
              </p>
              </div>
              <button className="bg-white text-black p-4 m-4 w-40">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
