import React from "react";
import logoblack from "../assets/logoblack.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <div className="text-white bg-[#282828] py-10">
      <div className="container mx-auto flex justify-between w-[1200px] h-[531px]">
        <div>
          <img className=" mb-10" src={logoblack}></img>

          <h4 className="font-bold mb-4">Programs</h4>
          <ul className="space-y-2">
            <li>Data Science & AI</li>
            <li>Product Management</li>
            <li>Business Analytics</li>
            <li>Digital Transformation</li>
            <li>Business Management</li>
            <li>Project Management</li>
            <li>Strategy & Leadership</li>
            <li>Senior Management</li>
            <li>Fintech</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold ">Contact Us</h4>
          <p>Email us (For Data Science Queries): admissions@accredian.com</p>
          <p>Email us (For Product Management Queries): pm@accredian.com</p>
          <p>Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</p>
          <p>Product Management Admission Helpline: +91 9625811095</p>
          <p>Enrolled Student Helpline: +91 7969322507</p>
          <p>
            Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
            Gurugram, Haryana 122015
          </p>
          <p>Follow Us</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white">
              <img className="" src={facebook}></img>
            </a>
            <a href="#" className="text-white">
              <img className="" src={linkedin}></img>
            </a>
            <a href="#" className="text-white">
              <img className="" src={twitter}></img>
            </a>
            <a href="#" className="text-white">
              <img className="" src={instagram}></img>
            </a>
            <a href="#" className="text-white">
              <img className="" src={youtube}></img>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Accredian</h4>
          <ul className="space-y-2">
            <li>About</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Admission Policy</li>
            <li>Referral Policy</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Master FAQs</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-10 flex justify-center items-center border-t border-gray-600 pt-4">
        <div>
          <p className="text-sm ">
            © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
