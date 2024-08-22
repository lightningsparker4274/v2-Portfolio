
import Github from "@mui/icons-material/GitHub";
import Linkedin from "@mui/icons-material/LinkedIn";
import PropTypes from "prop-types";

const IconBox = (props) => {
  function loadIcon(data) {
    const icons = {
      1: <Github style={{ color: "#333" }} />,
      2: <Linkedin style={{ color: "#0077b5" }} />,
      3: (
        <svg
          fill="#000000"
          className="w-6 h-6"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z" />
        </svg>
      ),
    };
    return icons[data];
  }
  function loadlink(id){
    const links = {
      1: "https://github.com/akashdurai4274/",
      2: "https://www.linkedin.com/in/akashdurai/",
      3: "https://leetcode.com/u/AkashDurai_4274/",
    };
    return links[id];
  }
  const {id} = props;
  return (
    <div className="border-2 border-gray-100 rounded-md cursor-pointer hover:border-purple-400">
      <a href={loadlink(id)} target="new" className="flex flex-col items-center p-2 text-center text-gray-500 bg-gray-100 rounded-md max-h-12 max-w-12 justify-centers">
        {loadIcon(id)} 
      </a>
    </div>
  );
};

IconBox.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default IconBox;
