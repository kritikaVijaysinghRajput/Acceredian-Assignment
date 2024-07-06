import React from "react";
import ReferCircle from "../assets/ReferCircle.png";
import addfriend from "../assets/addfriend.png";
import bag from "../assets/bag.png";
import notes from "../assets/notes.png";

const HowItRefer = () => {
  return (
    <div className="text-center p-10 bg-[#EEF5FF] w-full h-[785px] relative">
      <h2 className="text-3xl font-bold mb-8">How Do I Refer?</h2>
      <div className="relative">
        <img src={ReferCircle} className="mx-auto" alt="Refer Circle" />
        <div className="absolute w-[88px] h-[66.96px] top-[160px] left-[280px] flex flex-col items-center text-center">
          <img src={addfriend} className="mb-2" alt="Add Friend" />
          <p className="w-[193px] h-[88px] text-center">
            Submit referrals easily via our website’s referral section.
          </p>
        </div>
        <div className="absolute w-[65.11px] h-[67.38px] top-[160px] left-[680px] flex flex-col items-center text-center">
          <img src={bag} className="mb-2" alt="Bag" />
          <p className="w-[193px] h-[88px] text-center">
            Earn rewards once your referral joins an Accredian program.
          </p>
        </div>
        <div className="absolute w-[65px] h-[67.25px] top-[160px] left-[1070px] flex flex-col items-center text-center">
          <img src={notes} className="mb-2" alt="Notes" />
          <p className="w-[193px] h-[88px] text-center">
            Both parties receive a bonus 30 days after program enrollment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItRefer;
