import Hero from "./homeComponents/Hero";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Button } from "../components/Button";

const Homepage = () => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <>
      <Hero />
      {/* <Button onClick={handleThemeToggle}>Toggle Theme</Button>
      <p>Current Mode: {themeMode}</p> */}
    </>
  );
};

export default Homepage;
