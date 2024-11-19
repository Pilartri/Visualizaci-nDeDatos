// components/Header.tsx
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="bg-white text-black fixed top-0 w-full z-40 shadow-md">
      <div className="container mx-auto flex items-center p-4">
        <Image
          className="ml-[-50px]"
          src="/logo_par.svg"
          alt="Olympic Women Participation"
          width={45}
          height={45}
        />
        <ul className="flex space-x-8 ml-16">
          <li>
            <a href="/" className="text-[#5F1BBF] hover:text-[#5F1BBF]">
              Mujeres
            </a>
          </li>
          <li>
            <a href="historia" className="bg-violet-100 hover:bg-violet-300 text-[#5F1BBF] rounded px-2 py-1">
              Historia
            </a>
          </li>
          <li>
            <a
              href="medallero"
              className="text-[#5F1BBF] hover:text-[#5F1BBF]"
            >
              Medallero
            </a>
          </li>
        </ul>
      </div>
    </div>


  );
};

export default Header;
