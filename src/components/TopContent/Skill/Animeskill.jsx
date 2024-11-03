import PropTypes from "prop-types";
const Animeskill = ({ id, title, detial ,color}) => {
  console.log(detial);
  const loadata = (data) => {
    const icons = {
      //html
      1: <img src="html.png" alt="" />,
      2: <img src="node.png" alt="" />,
      3: <img src="java.png" alt="" height={60} width={60} />,
      4: <img src="Flutter.png" alt="" />,
      5: <img src="golang.png" alt="" height={60} width={60}/>,
      6: <img src="Spring.png" alt="" height={80} width={80}/>,
      7: <img src="Docker.png" alt="" height={70} width={70}/>,
      8: <img src="React.png" alt="" height={70} width={70}/>,
      9: <img src="Python.png" alt="" height={70} width={70}/>,
      10: <img src="Selenium.png" alt="" height={70} width={70}/>,
    };
    return icons[data];
  };

  const colorClass =
    {
      web: "hover:bg-orange-500 border-orange-500 text-orange-500",
      flutter: "hover:bg-sky-500 border-sky-500 text-sky-500",
      node: "hover:bg-green-700 border-green-700 text-green-700",
      java: "hover:bg-red-500 border-red-500 text-red-500",
      go: "hover:bg-sky-300 text-sky-300 border-sky-300",
      react: "hover:bg-sky-500 text-sky-500 border-sky-500",
      selenium: "hover:bg-green-400 border-green-400 text-green-400",
      docker: "hover:bg-blue-600 border-blue-600 text-blue-600",
      spring: "hover:bg-green-600 border-green-600 text-green-600",
      python: "hover:bg-yellow-500 border-yellow-500 text-yellow-500",
    }[color] || "bg-gray-100";
  
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row max-h-[550px] lg:max-h-[220px] min-w-[300px] max-w-[650px] div sq-div my-10 ml-5 lg:ml-0  rounded-2xl p-3  ">
        <div className="w-40 h-40 shadow-inner m-7 bottom-3 left-7 lg:left-0 div circle circle::after">
          {loadata(id)}
        </div>
        <div className="relative flex justify-between p-2 m-2 overflow-auto rounded-lg shadow-lg max-h-64 w-60 lg:max-h-46 lg:w-96 sq-vid">
          <p className="pl-4 text-sm text-justify font-rajdhani">
            <span className="text-2xl font-bold font-rajdhani">Learned:</span>
            {detial.map((items, index) => (
              <ul key={index}>
                <li>
                  <p className="flex flex-col">{items}</p>
                </li>
              </ul>
            ))}
          </p>
          <div className="flex items-end p-3">
            <span
              className={`p-2 lg:text-2xl font-bold border-2 border-black rounded-md  hover:text-white  ${colorClass} font-rajdhani`}
            >
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Animeskill.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  detial: PropTypes.arrayOf(PropTypes.string),
};
export default Animeskill;
