import { Button } from "@/components/button/__index";
import { Input } from "@/components/input/__index";
import Icon from "@/assets/icon.png";
import { Send } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-subtitle">Enter in contact with me.</h2>
        <span className="text-lg text-title">
          Talk to me via email, Twitter, BlueSky and other options!
        </span>
      </div>
      <div className="flex gap-5">
        <Input placeholder="Enter your email" />
        <Button icon={<Send />} />
      </div>
      <div className="my-10">
        <Image src={Icon} alt="icon" width={50} />
      </div>
    </div>
  );
}
