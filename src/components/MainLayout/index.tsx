import { useState } from "react";
import { NavLink } from "react-router-dom";
import RoutesURL from "../../_shared/Routes.enum";
import Footer from "../Footer";

interface Props {
	children: React.ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
	
	return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div
        className={`text-white w-full md:w-60 lg:w-80 md:h-full ${
					open ? 'bg-white text-black' : 'bg-stone-900 shadow-lg md:fixed z-50 md:z-0'
				}`}
			>
      	<div className="md:flex flex-col hidden md:w-full bg-stone-700 ">
				  <div className="flex flex-col">
				    <NavLink to={RoutesURL.PROJETOS}>
				      <div className="px-4 py-3 cursor-pointer w-full font-medium text-base hover:text-teal-400 hover:bg-gray-100 hover:bg-opacity-10 transition-all ease-in-out ">
				        Projetos
				      </div>
				    </NavLink>
				  </div>
				  <div className="flex flex-col">
				    <NavLink to={RoutesURL.SOBRE_MIM}>
				      <div className="px-4 py-3 cursor-pointer w-full font-medium text-base hover:text-teal-400 hover:bg-gray-100 hover:bg-opacity-10 transition-all ease-in-out rounded-sm">
				        Funcionários
				      </div>
				    </NavLink>
				  </div>
				</div>
      </div>
      <div className="flex flex-col bg-gray-100 w-full h-full lg:ml-80 md:ml-60 overflow-y-auto">
        <div className="grow border-2 border-gray-300 bg-white rounded-sm mx-3 sm:mt-0 mt-4 py-4 px-5">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
