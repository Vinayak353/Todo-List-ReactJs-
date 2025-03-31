import React from "react";

const About = () => {
  const styles = {
    page: {
      background: "linear-gradient(to right,rgb(255, 255, 255),rgb(255, 255, 255))", // Soft gradient background
      color: "#333", // Dark gray for readability
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "50px 5%",
      fontFamily: "'Poppins', sans-serif",
    },
    container: {
      maxWidth: "1100px",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
      alignItems: "start",
      
    },
    card: {
      background: " rgba(114, 244, 223, 0.1)",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    heading: {
      color: "#0077b6", // Modern blue color
      fontSize: "28px",
      fontWeight: "600",
      marginBottom: "15px",
      textTransform: "uppercase",
    },
    subheading: {
      color: "#444",
      fontSize: "20px",
      marginBottom: "10px",
      fontWeight: "bold",
    },
    text: {
      color: "#555",
      lineHeight: "1.8",
      fontSize: "16px",
    },
    list: {
      paddingLeft: "20px",
      marginTop: "10px",
      fontSize: "16px",
    },
    listItem: {
      marginBottom: "8px",
      display: "flex",
      alignItems: "center",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Left Side - About Section */}
        <div style={styles.card}>
          <h2 style={styles.heading}>📌 About This To-Do App</h2>
          <p style={styles.text}>
            Welcome to **My To-Do List App**, a **simple yet powerful tool** that helps you 
            **organize daily tasks efficiently** and **boost productivity**.
          </p>
          <p style={styles.text}>
            Designed with **a clean and minimal interface**, this app allows you to manage 
            your tasks effortlessly with features like **auto-save, local storage, and a 
            distraction-free UI**.
          </p>
        </div>

        {/* Right Side - Features */}
        <div style={styles.card}>
          <h3 style={styles.subheading}>🚀 Features:</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>✔️ **User-Friendly UI** – Clean and intuitive design.</li>
            <li style={styles.listItem}>💾 **Auto-Save Tasks** – Keeps your tasks saved automatically.</li>
            <li style={styles.listItem}>📊 **Minimalist Layout** – Less clutter, more focus.</li>
            <li style={styles.listItem}>🎨 **Smooth Animations** – Enhancing user experience.</li>
          </ul>
        </div>

        {/* Left Side - Future Enhancements */}
        <div style={styles.card}>
          <h3 style={styles.subheading}>🔮 Future Enhancements:</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>⏰ Task Reminders & Notifications.</li>
            <li style={styles.listItem}>🔄 Syncing Across Devices.</li>
            <li style={styles.listItem}>🎨 Custom Themes for Personalization.</li>
          </ul>
        </div>

        {/* Right Side - Final Message */}
        <div style={styles.card}>
          <h3 style={styles.subheading}>📢 Why Use This App?</h3>
          <p style={styles.text}>
            Stay organized and **take control of your productivity** with **My To-Do List App**.  
            Start managing your daily schedule **effortlessly** today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
