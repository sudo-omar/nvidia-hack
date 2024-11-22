import { Link } from "react-router-dom"
import axios from 'axios';
import React, { useEffect, useState } from "react"

const Dashboard = () => {
  const [customTones, setCustomTones] = useState([]);
  const [selectedTone, setSelectedTone] = useState('');
  const [newToneName, setNewToneName] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('');
  const [showTranscript, setShowTranscript] = useState(null);
  const [transcripts, setTranscripts] = useState([]);
  const [transcriptsText, setTranscirptsText] = useState([]);

  const containerStyle = {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#ffffff",
  }

  const sidebarStyle = {
    width: "300px",
    borderRight: "1px solid #eaeaea",
    padding: "20px",
  }

  const mainContentStyle = {
    flex: 1,
    padding: "40px",
    overflowY: "auto",
  }

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "40px",
  }

  const sectionStyle = {
    marginBottom: "40px",
  }

  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #eaeaea",
    borderRadius: "8px",
    marginBottom: "16px",
  }

  const toneButtonStyle = {
    padding: "8px 16px",
    borderRadius: "20px",
    border: "1px solid #eaeaea",
    marginRight: "8px",
    cursor: "pointer",
    backgroundColor: "white",
  }

  const selectedToneStyle = {
    ...toneButtonStyle,
    backgroundColor: "black",
    color: "white",
    border: "1px solid black",
  }

  const addButtonStyle = {
    padding: "8px 16px",
    borderRadius: "8px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  }

  const phoneNumberStyle = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #eaeaea",
    marginBottom: "8px",
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
    backgroundColor: "white",
  }

  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "80%",
    maxWidth: "600px",
    maxHeight: "80vh",
    overflowY: "auto",
  }

  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  const transcriptStyle = {
    marginBottom: "12px",
    padding: "8px",
    borderRadius: "8px",
    backgroundColor: "#f5f5f5",
  }

  const columnStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "24px",
    marginTop: "24px",
  }

  const handleAddTone = () => {
    if (newToneName.trim()) {
      setCustomTones([...customTones, newToneName.trim()]);
      setNewToneName('');
    }
  }

  
  useEffect(() => {
    const fetchCalls = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/calls');
          console.log(response.data);  // Handle your data here
          setTranscripts(response.data);
          setTranscirptsText(response.data.map((transcript) => transcript.transcript));
          console.log(response.data.map((transcript) => transcript.transcript))
        } catch (error) {
          console.error('Error fetching calls:', error);
        }
      };
      fetchCalls()

      const intervalId = setInterval(fetchCalls, 5000);

        // Cleanup interval when component unmounts
        return () => clearInterval(intervalId);
  }, [])


  return (
    

    <div style={containerStyle}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <div style={headerStyle}>
          <span>📞</span> So, Call Me Maybe
        </div>
        <h2 style={{ marginBottom: "16px" }}>Call History</h2>

        {
       
            
        ["714-555-0123", "714-555-0124", "714-555-0125", "714-555-0126", "714-555-0127"].map(
          (number) => (
            <button
              key={number}
              style={phoneNumberStyle}
              onClick={() => setShowTranscript(number)}
            >
              {number}
            </button>
          )
        )}
        
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        <h1 style={{ fontSize: "32px", marginBottom: "32px" }}>Customize Service</h1>
        
        {/* Tone Section */}
        <div style={sectionStyle}>
          <h2 style={{ marginBottom: "16px" }}>Tone</h2>
          <div style={{ marginBottom: "16px" }}>
            <input
              type="text"
              placeholder="Custom tone"
              value={newToneName}
              onChange={(e) => setNewToneName(e.target.value)}
              style={inputStyle}
            />
            <button style={addButtonStyle} onClick={handleAddTone}>
              Add Tone
            </button>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            {["Warm", "Friendly", "Professional", ...customTones].map((tone) => (
              <button
                key={tone}
                style={selectedTone === tone ? selectedToneStyle : toneButtonStyle}
                onClick={() => setSelectedTone(tone)}
              >
                {tone}
              </button>
            ))}
          </div>
        </div>

        {/* Voice Section */}
        <div style={sectionStyle}>
          <h2 style={{ marginBottom: "16px" }}>Voice</h2>
          <select
            value={selectedVoice}
            onChange={(e) => setSelectedVoice(e.target.value)}
            style={inputStyle}
          >
            <option value="">Select voice</option>
            <option value="voice1">AI Agent 1</option>
            <option value="voice2">AI Agent 2</option>
            <option value="voice3">AI Agent 3</option>
          </select>
        </div>

        {/* Three Column Section */}
        <div style={columnStyle}>
          {/* General Information */}
          <div>
            <h2 style={{ marginBottom: "16px" }}>General Information</h2>
            <h3 style={{ marginBottom: "8px" }}>Hours of Operation</h3>
            <textarea
              placeholder="Enter your business hours..."
              style={{ ...inputStyle, minHeight: "100px" }}
            />
            <h3 style={{ marginBottom: "8px" }}>Contact Information</h3>
            <textarea
              placeholder="Enter your contact details..."
              style={{ ...inputStyle, minHeight: "100px" }}
            />
          </div>

          {/* Services */}
          <div>
            <h2 style={{ marginBottom: "16px" }}>Services</h2>
            <button style={addButtonStyle}>Add Service</button>
          </div>

          {/* Policies */}
          <div>
            <h2 style={{ marginBottom: "16px" }}>Policies</h2>
            <h3 style={{ marginBottom: "8px" }}>Return Policy</h3>
            <textarea
              placeholder="Enter your return policy..."
              style={{ ...inputStyle, minHeight: "100px" }}
            />
            <h3 style={{ marginBottom: "8px" }}>Cancellation Policy</h3>
            <textarea
              placeholder="Enter your cancellation policy..."
              style={{ ...inputStyle, minHeight: "100px" }}
            />
          </div>
        </div>
      </div>

      {/* Transcript Modal */}
      {showTranscript && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px" }}>
              <h2>Transcript | {showTranscript}</h2>
              <button onClick={() => setShowTranscript(null)}>✕</button>
            </div>
            <div>
              <p style={transcriptStyle}>Customer: Hi, I'm calling about your services.</p>
              <p style={transcriptStyle}>AI: Hello! Thank you for calling. How can I assist you today?</p>
              <p style={transcriptStyle}>Customer: I'd like to know your business hours.</p>
              <p style={transcriptStyle}>
                AI: We're open Monday through Friday from 9 AM to 6 PM, and Saturdays from 10 AM to 4 PM.
                We're closed on Sundays.
              </p>
              <p style={transcriptStyle}>Customer: Great, thank you!</p>
              <p style={transcriptStyle}>AI: You're welcome! Is there anything else I can help you with?</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard