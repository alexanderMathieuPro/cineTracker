import { Link, Navigate } from "react-router-dom";

const Card = ({ titre, dateSortie, cover, id }) => {
  return (
    <div className="w-[300px] h-[440px] text-white relative overflow-hidden border-[5px] rounded-[35px] group hover:border-sky-500 lg:w-[250px] lg:h-[360px] lg:rounded-[20px] md:w-[200px] md:h-[290px] md:rounded-[15px] sm:w-[150px] sm:h-[220px] sm:rounded-[10px]">
  <Link to={`/film/${id}`}>
    <div className="absolute inset-0 bg-white">
      <img src={`http://localhost:1337${cover}`} alt="" className="transform transition-transform duration-500 group-hover:scale-[1.2]"/>
      <span className=" absolute top-0 left-0 w-full h-full bg-gradient-custom"></span>
    </div>
    <h1 className="absolute bottom-[95px] left-0 right-0 text-[25px] font-bold pl-5 group-hover:text-sky-500 group-hover:underline transition-transform lg:bottom-[85px] lg:text-[20px] md:bottom-[75px] md:text-[18px] sm:bottom-[65px] sm:text-[15px]">{titre}</h1>
    <p className="absolute bottom-[65px] left-0 right-0 pl-5 group-hover:text-sky-500 lg:bottom-[55px] md:bottom-[45px] sm:bottom-[35px]">{dateSortie}</p>
  </Link>
</div>

  );
};
export default Card;
