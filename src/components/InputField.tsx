type InputFieldProps = {
  icon?: React.ReactNode;
  passIcon?: React.ReactNode;
  openPass?: boolean;
  setOpenPass?: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
  placeholder: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  propData?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputField = ({ icon, passIcon, openPass, setOpenPass, type, propData, ...props }: InputFieldProps) => {
  return (
    <div className="relative">
      {/* Left icon */}
      <div className="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none text-green-500">{icon}</div>

      {/* Password visibility toggle (for password fields only) */}
      {type === "password" || type === "text" ? (
        <div className="absolute inset-y-0 right-0 px-3 flex items-center text-green-500 cursor-pointer" onClick={() => setOpenPass && setOpenPass(!openPass)}>
          {passIcon}
        </div>
      ) : null}

      {/* Input field */}
      <input
        {...propData}
        {...props}
        type={type}
        className="bg-transparent w-full py-3 pl-3 pr-11 bg-dark-400 rounded-s-lg outline-none border border-green-1 focus:border-emerald-500 text-white placeholder:text-sm placeholder-dark_gray placeholder-opacity-50 transition-all duration-300"
      />
    </div>
  );
};

export default InputField;
