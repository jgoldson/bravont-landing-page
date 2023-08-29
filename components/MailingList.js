import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const MailingList = (props) => {
  const [mail, setMail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const subscribe = () => {
    setLoading(true);
    axios
      .put("api/subscribeUser", {
        mail,
      })
      .then((result) => {
        console.log("got result");
        console.log(result.data.message);
        if (result.status === 200) {
          toast.success(result.data.message);
          setLoading(false);
          setSuccess(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className="my-5">
      <hr className="my-5" />
      <label className="label">
        <p className="text-white text-lg max-w-xl text-left m-auto leading-9">
          Want to be the first to know when Bravont launches and get exclusive
          access to the Beta?
        </p>
      </label>
      <div className="mt-5">
        <input
          onChange={(e) => {
            setMail(e.target.value);
          }}
          type="email"
          placeholder="Your email"
          className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
        <br></br>
        {!loading ? (
          !success ? (
            <button
              onClick={subscribe}
              target="_blank"
              rel="noopener"
              className={`px-8 py-4 text-lg font-medium text-center text-${
                props.textColor
              } bg-${props.bgColor} rounded-lg 
          ${loading ? "btn-disabled loading" : "btn-primary"}`}
            >
              Join Beta Waitlist
            </button>
          ) : (
            <h1 className="text-lg text-white bg-green-500 text-center">
              Sign Up Successful!
            </h1>
          )
        ) : (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
      <hr className="my-6" />
    </div>
  );
};

export default MailingList;
