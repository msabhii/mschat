import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className=" text-center my-4 text-white">
      <div className="flex items-center justify-center">
        <div className="flex-grow border-b border-gray-300"></div>
        <div className="mx-4 text-purple-600">Connect With</div>
        <div className="flex-grow border-b border-gray-300"></div>
      </div>
      <div className="m-2 flex justify-center items-center">
        <div className="mr-4  hover:text-blue-800">
          <a href="https://twitter.com/mscode07" target="_blank">
            <BsTwitterX />
          </a>
        </div>
        <div className="mr-4 hover:text-slate-600">
          <a href="https://github.com/msabhii" target="_blank">
            <FaGithub />
          </a>
        </div>
        <div className="hover:text-blue-600">
          <a href="https://www.linkedin.com/in/msabhi7777/" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div>© {new Date().getFullYear()}</div>
    </div>
  );
}
export default Footer;
