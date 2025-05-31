import clsx from "clsx";
import React from "react";

interface IInputComponentProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}

export const InputComponent: React.FC<IInputComponentProps> = ({
  placeholder,
  value,
  onChange,
  error,
  className
}) => {
  return (
    <React.Fragment>
      <div className="flex flex-col">
        <input
          className={clsx(className,`w-full border font-lightmrounded-none font-barlow leading-[1.5] text-[#212529] placeholder-[#212529] bg-white px-3 py-1.5 
        focus:border-[#86b7fe] focus:outline-none focus:ring-2 focus:ring-[#0d6efd40]   focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,0.25)] 
        border-[#082347]`)}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{
            color: "#2b2b2b",
            fontSize: '1rem',
    fontWeight: 400,
          }}
        />
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    </React.Fragment>
  );
};
