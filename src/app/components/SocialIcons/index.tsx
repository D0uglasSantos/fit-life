import { ElementType } from "react";

interface SocialIconsProps {
  icon: ElementType;
}

const SocialIcons = ({ icon: Icon }: SocialIconsProps) => {
  return (
    <div className="bg-color-details px-2 py-2 flex items-center justify-center rounded-full">
      <Icon className="h-6 w-6 text-white" />
    </div>
  );
};

export default SocialIcons;
