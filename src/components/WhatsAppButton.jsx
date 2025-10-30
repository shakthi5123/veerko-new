import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div className="text-green-500 text-4xl fixed top-[60%] right-2 z-50">
      <a
        href="https://wa.me/8425937790"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-400 transition"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default WhatsAppButton;
