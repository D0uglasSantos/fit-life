import { FaWhatsapp } from "react-icons/fa";

interface IconChatProps {}

const IconChat = ({}: IconChatProps) => {
  return (
    <div className="px-2 py-2 bg-color-details fixed right-5 bottom-16 rounded-full">
      <FaWhatsapp className="text-white h-7 w-7 md:h-12 md:w-12" />
    </div>
  );
};

export default IconChat;
