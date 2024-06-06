import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface PhoneProps {
  className: string;
  // children: ReactNode;
  imgSrc: string;
  dark?: boolean;
}

const Phone: FC<PhoneProps> = ({ imgSrc, dark = false, className, ...props }) => {
  return (
    <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)} {...props}>
      <img
        className="pointer-events-none z-50 select-none"
        src={dark ? "/phone-template-dark-edges.png" : "/phone-template-white-edges.png"}
        alt="phone image"
      />
      <div className="absolute -z-10 inset-0">
        <img className="object-cover" src={imgSrc} alt="overlaying phone image" />
      </div>
    </div>
  );
};

export default Phone;
