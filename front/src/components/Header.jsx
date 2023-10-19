import "../css/login.css";
const Header = () => {
  return (
    <nav className="bg-[#000033] h-[70px] flex justify-between items-center px-[31px]">
      <div className="flex text-white">
        <p className="pr-[62px]">Logo</p>
        <ul className="flex space-x-[32px]">
          <li>Home</li>
          <li>Films</li>
          <li>Séries</li>
          <li>Catégories</li>
        </ul>
      </div>
      <div className="flex">
        <div className="pr-[46px]">
          <input type="text" className="bg-transparent focus:outline-none border-b-2 text-white" placeholder="search"/>
          <button>
            <span className="material-symbols-outlined material">search</span>
          </button>
        </div>
        <div className="flex">
          <a href="" className="text-white">userName</a>
          <button>
            <span className="material-symbols-outlined user">account_circle</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
