import { useToken } from "../../Store/tokenContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const { setToken } = useToken();

  const onSubmit = () => {
    setToken("");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Logout</h1>
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        <button>Logout</button>
      </form>
    </div>
  );
};

export default Logout;