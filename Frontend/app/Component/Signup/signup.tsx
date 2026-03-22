"use client";

import Signuppage from "./Signuppage";

type SignupProps = {
  setSignup: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Signup({ setSignup }: SignupProps) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={() => setSignup(false)}   // click outside closes modal
    >
      <div onClick={(e) => e.stopPropagation()}>
        <Signuppage setSignup={setSignup} />
      </div>
    </div>
  );
}
