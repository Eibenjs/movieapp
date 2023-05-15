import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";

import { useForm } from "react-hook-form";
import { useToken } from "../../Store/tokenContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setToken } = useToken();

  const onSubmit = (data) => {
    // build the request payload
    let payload = {
      email: data.email,
      password: data.password,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    // make the request
    fetch(`http://localhost:8080/authenticate`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.error) {
          alert(data.error);
        } else {
          setToken(data.access_token);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            label="Email"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <Input
            label="Password"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default LoginForm;
