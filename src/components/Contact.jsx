import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
import contact from "../assets/contact.png";
// import { Element } from 'react-scroll';


const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        const user_name = e.target.user_name.value;
        const user_email = e.target.user_email.value;
        const message = e.target.message.value;
        const templateParams = {user_name, user_email, message};
        console.log(templateParams)
        emailjs.send(`${import.meta.env.VITE_SERVICEID}`, `${import.meta.env.VITE_TEMPLATEID}`, templateParams, `${import.meta.env.VITE_PUBLICKEY}`)
          .then((result) => {
            console.log(result)
              if(result.status === 200){
                toast.success('Your Message Has Been Sent.')
            e.target.reset();
              }
          }, (error) => {
              console.log(error);
          });
      };
    return (
          <div className='pt-20 max-w-7xl mx-auto'>
            <h3 className='text-3xl mb-10 ml-4'>Contact Me</h3>
      <div className="hero-content lg:gap-20 flex-col lg:flex-row p-5">
        <div>
          <img
            className="lg:max-w-xl"
            src={contact}
            alt="Login Image"
          />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={sendEmail} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-[#1D4786]">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="user_name" type="text" placeholder="Full Name" className="input input-bordered max-w-lg" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="user_email" type="email" placeholder="Email" className="input input-bordered max-w-lg" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea name="message" className="textarea textarea-bordered max-w-lg" placeholder="Message..." required></textarea>
        </div>
        <div className="form-control mt-6">
            <input className="btn max-w-lg text-white" type="submit" value="Submit" />
        </div>
      </div>
    </form>
            </div>
           </div>
        </div>
    );
};

export default Contact;