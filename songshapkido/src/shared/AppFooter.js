import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BsYelp } from "react-icons/bs";
import logo from "../assets/hapkido-logo.png";

function Footer() {
  const iconsTab = [
	{ icon: <FaInstagram />, link: 'https://www.pinterest.com/your-pinterest-page' },
    { icon: <FaFacebookF />, link: 'https://www.facebook.com/your-facebook-page' },
    { icon: <BsYelp />, link: 'https://twitter.com/your-twitter-page' },
    { icon: <AiFillYoutube />, link: 'https://www.youtube.com/your-youtube-page' },
  ];

  return (
    <footer className="bg-white">
      <div className="container mx-auto py-10 sm:py-20 md:py-24">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 text-left">
          <div className="w-full md:w-1/2 md:p-0">
            <div className="flex flex-col gap-4 md:gap-8 items-center md:items-start">
              <img
                src={logo}
                alt="footer_logo"
                className="w-40 md:w-48"
              />
              <p className="text-sm font-medium text-[#646464] text-center">
                Empower Your Journey to Wellness and Martial Excellence with Hapkido.
              </p>
              <div className="flex gap-4 justify-center md:justify-end">
                {iconsTab.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff1803] hover:text-white transition-all duration-300"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
              <p className="text-sm font-medium text-[#646464] text-center">
                Privacy Policy | © {new Date().getFullYear()} Song's Hapkido West Los Angeles <br />
                Created by{" "}
                <a
                  href="https://www.linkedin.com/in/almaalvarado11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  Alma Alvarado
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <p className="text-lg font-bold space-x-4 footer-main">Quick Links</p>
            <span className="block w-7 h-1 bg-yellow-600 mb-2"></span>
            <a
              href="/our-programs"
              className="text-[16px] hover:text-yellow-600 cursor-pointer text-[#646464] font-medium hover:font-bold"
            >
              Children Classes
            </a>
            <a
              href="/our-programs"
              className="text-[16px] hover:text-yellow-600 cursor-pointer text-[#646464] font-medium hover:font-bold"
            >
              PreTeen Classes
            </a>
            <a
              href="/our-programs"
              className="text-[16px] hover:text-yellow-600 cursor-pointer text-[#646464] font-medium hover:font-bold"
            >
              Adult Classes
            </a>
            <a
              href="/hapkido"
              className="text-[16px] hover:text-yellow-600 cursor-pointer text-[#646464] font-medium hover:font-bold"
            >
              What is Hapkido
            </a>
            <a
              href="/instructors"
              className="text-[16px] hover:text-yellow-600 cursor-pointer text-[#646464] font-medium hover:font-bold"
            >
              Instructors
            </a>
          </div>

          <div className="flex flex-col  space-x-4 gap-3 md:gap-4">
            <p className="text-lg font-bold space-x-4 footer-main">Studio Hours</p>
            <span className="block w-7 h-1 bg-yellow-600 mb-2"></span>
            <p className="text-[16px] text-[#646464] font-medium">
              Monday-Thursday:
            </p>
            <p className="text-[16px] text-[#646464] font-medium">
              4:00pm - 8:00pm
            </p>
            <p className="text-[16px] text-[#646464] font-medium">Friday:</p>
            <p className="text-[16px] text-[#646464] font-medium">
              4:00pm - 7:00pm
            </p>
            <p className="text-[16px] text-[#646464] font-medium">Saturday:</p>
            <p className="text-[16px] text-[#646464] font-medium">
              8:40am - 12:00pm
            </p>
            <p className="text-[16px] text-[#646464] font-medium">Sunday - Closed</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
