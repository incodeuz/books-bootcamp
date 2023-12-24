import { Button, Form, Input, message } from "antd";
import login_image from "../../../assets/images/login.svg";
import { Link, useNavigate } from "react-router-dom";
import useUsersApi from "../../../service/api/users";
import { useDispatch, useSelector } from "react-redux";
import { endLoading, startLoading } from "../../../store/loader";

type FieldType = {
  password?: string;
  email?: string;
};

const SignIn = () => {
  const { login } = useUsersApi();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    dispatch(startLoading(true));
    login(values)
      .then((data) => {
        if (data) {
          message.success("Siz muvaffaqiyatli tizimga kirdingiz!");
          dispatch(endLoading(false));
          localStorage.setItem("token", data?.data.token);
          return navigate("/");
        }
        console.log(data);
      })
      .catch((err: any) => {
        if (err) {
          dispatch(endLoading(false));
          message.error(err?.response?.data?.message);
        }
      });
  };

  return (
    <div className="flex items-center h-screen w-full">
      <div className="bg-[#c9ac8c] flex-1 h-full w-[50%] select-none flex items-center justify-center">
        <img
          className="w-[800px] select-none"
          src={login_image}
          alt="Login poster image"
        />
      </div>
      <div className="flex-1 h-full w-[50%] flex items-center justify-center">
        <div className="flex flex-col w-full m-auto mt-auto mb-auto max-w-[350px]">
          <h1 className="text-[36px] font-bold mb-[10px]">Sign in</h1>
          <p className="p-0 text-[14px] font-normal mb-[30px]">
            Do not you have an account?{" "}
            <Link className="text-[#549FF9] underline" to={"/sign-up"}>
              Sign up
            </Link>
          </p>
          <Form
            className="w-full"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item<FieldType>
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Email`da xatolik bor",
                },
              ]}
            >
              <Input size="large" placeholder="Enter your email" />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password size="large" placeholder="Enter your password" />
            </Form.Item>

            <Form.Item>
              <Button loading={isLoading} type="primary" htmlType="submit">
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
