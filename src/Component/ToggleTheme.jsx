import { useState, useEffect } from "react"

const ToggleTheme = () => {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const savedTheme =
      document.documentElement.getAttribute("data-theme") || "dark"
    setTheme(savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", newTheme)
    setTheme(newTheme)
  }

  return (
    <button className="btn btn-outline" onClick={toggleTheme}>
      {theme === "dark" ? "Light☀️" : "Dark🌙"}
    </button>
  )
}

export default ToggleTheme
