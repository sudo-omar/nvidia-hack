import { Link } from "react-router-dom"
import React, { useState } from "react"

const Home = () => {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: "20px",
  }

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    maxWidth: "800px",
    textAlign: "center",
  }

  const titleStyle = {
    fontSize: "64px",
    fontWeight: "bold",
    color: "#000000",
    marginBottom: "16px",
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
    lineHeight: "1.1",
  }

  const subtitleStyle = {
    fontSize: "20px",
    color: "#666666",
    maxWidth: "600px",
    lineHeight: "1.5",
    marginBottom: "32px",
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
  }

  const buttonStyle = {
    fontSize: "16px",
    padding: "12px 24px",
    backgroundColor: "#000000",
    color: "#ffffff",
    cursor: "pointer",
    transition: "transform 0.2s, background-color 0.2s",
    borderRadius: "32px",
    border: "none",
    fontWeight: "500",
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
  }

  const buttonHoverStyle = {
    ...buttonStyle,
    transform: "scale(1.05)",
    backgroundColor: "#333333",
  }

  const logoStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    position: "absolute",
    top: "40px",
    left: "40px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  }

  const [isHovered, setIsHovered] = useState(false)

  return (
    <div style={containerStyle}>
      <div style={logoStyle}>
        <span>📞</span> So, Call Me Maybe
      </div>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Customize Your AI Customer Service</h1>
        <p style={subtitleStyle}>
          Create a personalized AI assistant that matches your brand voice and handles
          customer inquiries exactly how you want.
        </p>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <button
            style={isHovered ? buttonHoverStyle : buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Start Customizing
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home