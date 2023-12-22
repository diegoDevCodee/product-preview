import { useEffect, useState } from "react";
import CardComponent from "./components/CardComponent";
import { motion } from "framer-motion";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main
      className={`${
        theme === "light" ? "bg-Cream" : "bg-veryDarkBlue"
      } min-h-screen grid place-content-center`}
    >
      <button
        onClick={handleTheme}
        className="absolute right-4 top-4"
      >
        {theme === "dark" ? (
          <motion.img
            whileHover={{ scale: 1.1 }}
            // initial={{ opacity: 0,}}
            animate={{ x: 10 }}
            transition={{ease: "linear", duration: 0.2, x:{duration: 0.2} }}
            
            src="icons8-day-64.png"
            alt="sun"
            width={50}
            className="object-cover "
          />
        ) : (
          <motion.img
            whileHover={{ scale: 1.1 }}
            // initial={{ opacity: 0 }}
            animate={{ x: 0 }}
            transition={{ease: "linear", duration: 0.2, x:{duration: 0.2} }}
            src="icons8-dark-85.png"
            alt="sun"
            width={50}
            className="object-cover"
          />
        )}
      </button>

      <CardComponent />
    </main>
  );
}

export default App;
