import iconGoogle from "../assets/icon-google.svg.webp";
import { useRef, useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    setError("");

    try {
      await api.post("/cadastro", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      toast.success("Usuário Cadastrado com Sucesso!");

      navigate("/login");
    } catch (err) {
      toast.error("Erro ao Cadastrar Usuário");
    }
  }

  return (
    <section className="flex items-center w-screen h-screen justify-center bg-gray-100 font-poppins">
      <div className="flex flex-col items-center justify-center w-[90%] sm:w-[30%] bg-white rounded-2xl px-[2.7rem] sm:px-[5rem] sm:py-[3rem] py-[1.3rem] sm:pb-[4rem] pb-[3.5rem]">
        <h1 className="text-[32px] font-[600]">Sign Up</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-[100%] gap-y-[1rem] mt-[1rem]"
        >
          <div className="flex flex-col w-full relative">
            <input
              type="text"
              name="inputName"
              ref={nameRef}
              className="border-[2px] peer border-gray-300 rounded-[4px] px-[0.8rem] h-[2.7rem] py-[0.4rem] w-full focus:outline-none focus:border-blue-500"
              placeholder="Name"
              id="inputName"
              required
            />

            <label
              className="absolute left-3 top-[-10px] px-1 bg-white text-blue-500 font-[600] text-sm opacity-0 peer-focus:opacity-100 transition"
              htmlFor="inputName"
            >
              Name
            </label>
          </div>

          <div className="flex flex-col w-full relative">
            <input
              type="email"
              name="inputEmail"
              ref={emailRef}
              className="border-[2px] peer border-gray-300 rounded-[4px] px-[0.8rem] py-[0.4rem] h-[2.7rem] w-full focus:outline-none focus:border-blue-500"
              placeholder="E-mail"
              id="inputEmail"
              required
            />

            <label
              className="absolute left-3 top-[-10px] px-1 bg-white text-blue-500 font-[600] text-sm opacity-0 peer-focus:opacity-100 transition"
              htmlFor="inputEmail"
            >
              E-mail
            </label>
          </div>

          <div className="flex flex-col w-full relative">
            <input
              type={showPassword ? "text" : "password"}
              name="inputPassword"
              ref={passwordRef}
              onChange={(e) => setPassword(e.target.value)}
              className="border-[2px] peer border-gray-300 rounded-[4px] px-[0.8rem] py-[0.4rem] h-[2.7rem] w-full focus:outline-none focus:border-blue-500"
              placeholder="Password"
              id="inputPassword"
              minLength={6}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7
                 a9.964 9.964 0 012.235-3.592M3 3l18 18"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5
                 c4.477 0 8.268 2.943 9.542 7
                 -1.274 4.057-5.065 7-9.542 7
                 -4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>

            <label
              className="absolute left-3 top-[-10px] px-1 bg-white text-blue-500 font-[600] text-sm opacity-0 peer-focus:opacity-100 transition"
              htmlFor="inputPassword"
            >
              Password
            </label>
          </div>

          <div className="flex flex-col w-full relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="inputConfirmPassword"
              ref={confirmPasswordRef}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border-[2px] peer border-gray-300 rounded-[4px] px-[0.8rem] py-[0.4rem] h-[2.7rem] w-full focus:outline-none focus:border-blue-500"
              placeholder="Confirm Password"
              id="inputConfirmPassword"
              minLength={6}
              required
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600"
            >
              {showConfirmPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7
                 a9.964 9.964 0 012.235-3.592M3 3l18 18"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5
                 c4.477 0 8.268 2.943 9.542 7
                 -1.274 4.057-5.065 7-9.542 7
                 -4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>

            <label
              className="absolute left-3 top-[-10px] px-1 bg-white text-blue-500 font-[600] text-sm opacity-0 peer-focus:opacity-100 transition"
              htmlFor="inputConfirmPassword"
            >
              Confirm Password
            </label>
          </div>

          {error && (
            <p className="mt-[-0.5rem] text-red-600 text-[12px] font-[400] self-start tracking-[0.75px]">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 transition-all duration-[0.5s] w-full py-[0.545rem] h-[2.7rem] mt-[0.4rem] text-[14px] font-[600] tracking-[0.5px] rounded-[4px] text-white"
          >
            Sign Up
          </button>
        </form>

        <p className="text-[12px] font-[400] mt-[0.7rem] tracking-[0.75px] text-[black]/50">
          Already have an account?{" "}
          <Link
            to={"/login"}
            href="#"
            className="text-blue-500 hover:underline"
          >
            Log In
          </Link>
        </p>

        <div className="flex flex-row w-[97%] items-center justify-between mt-[1.5rem]">
          <hr className="w-[46%] h-[2px] rounded-md border-none bg-black/20" />

          <p className="text-[12px] leading-none text-[black]/50">or</p>

          <hr className="w-[46%] h-[2px] rounded-md border-none bg-black/20" />
        </div>

        <button
          type="submit"
          className="bg-white hover:bg-gray-200 hover:border-white transition-all duration-[0.5s] text-black flex items-center h-[2.7rem] justify-center mt-[1.3rem] gap-x-2 w-full py-[0.545rem] text-[14px] font-[600] border-[1.6px] border-black/70 tracking-[0.5px] rounded-[4px]"
        >
          <img src={iconGoogle} alt="" className="w-[20px]" /> Sign up with
          Google
        </button>
      </div>
    </section>
  );
}
