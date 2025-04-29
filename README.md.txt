# 🌱 Hydroponic Smart IoT Agriculture System using Full Stack Web Development

![Node.js Badge](https://img.shields.io/badge/Backend-Node.js-green)
![Firebase Badge](https://img.shields.io/badge/Database-Firebase-orange)
![MongoDB Badge](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![React Badge](https://img.shields.io/badge/Frontend-React.js-blue)
![IoT Badge](https://img.shields.io/badge/IoT-ESP8266-blueviolet)

---

## 📚 Project Overview

This project implements a **Smart Hydroponic Farming System** using IoT sensors and Full Stack Web Technologies.  
It enables **real-time monitoring** of environmental factors like **temperature, humidity, soil moisture**, and **motion detection**, with the ability to **remotely control irrigation** through a web dashboard.  
It uses **Firebase** for live data streaming and **MongoDB** for securely storing user queries.

---

## 🎯 Objectives

- Automate hydroponic farming monitoring using IoT technology.
- Enable real-time visualization of sensor data on a web platform.
- Remotely control water pump motor for irrigation.
- Store user feedback/query data securely.
- Reduce manual errors and optimize resource usage.

---

## 🛠️ Hardware List

- **ESP8266 NodeMCU** – WiFi-enabled microcontroller
- **DHT11 Sensor** – Measures Temperature and Humidity
- **Soil Moisture Sensor** – Measures water level in growth medium
- **PIR Motion Sensor** – Detects human movement
- **Relay Module** – Controls water motor ON/OFF
- **Water Pump Motor** – Provides irrigation
- **Breadboard, Jumper Wires** – For circuit setup
- **5V Power Supply** – To power the system

---

## 💻 Software Stack

- **Frontend:** HTML, CSS, JavaScript (React.js)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (for Contact Form Data)
- **Cloud Real-time Database:** Firebase (for sensor data)
- **Microcontroller Programming:** Arduino IDE (C++)

---

## 🔗 System Architecture Diagram

*(Flow: Sensor readings ➔ Controller ➔ Cloud ➔ Dashboard ➔ Motor Control + User Queries)*

---

## ⚙️ Working Principle

1. **Sensors** collect real-time environment readings.
2. **ESP8266** reads data and uploads it to **Firebase Realtime Database**.
3. **React.js Website** fetches live sensor data and displays it dynamically.
4. **Motor control** is triggered remotely via website dashboard.
5. **Contact form** sends user queries to the **Node.js server**, storing them into **MongoDB**.

---

## 🌟 Website Features

- **Home Page:** Introduction and overview of project.
- **Sensor Dashboard:** Live sensor readings (Temperature, Humidity, Soil Moisture, Motion Detection).
- **Motor Control:** ON/OFF switch for water pump motor.
- **Guidebook Section:** Details about hydroponics system, components, tips, and tricks.
- **Contact Page:** User form to submit queries, saved securely.

---
### Frontend Setup:
-** cd frontend
-** npm install
-** npm start

### Backend Setup
-** cd backend
-** npm install
-** npm start

---

### ESP8266 Microcontroller Setup
-** Open Arduino IDE
-** Install ESP8266 Board Manager from Preferences
-** Install libraries: DHT.h, FirebaseESP8266.h
-** Flash your .ino file into ESP8266 with your Wi-Fi SSID and Password.

---

### Configure Firebase
-** Create a Firebase project.
-** Set up Realtime Database.
-** Update firebaseConfig object inside your frontend code.

### MongoDB Setup
-** Create a MongoDB Atlas Cluster.
-** Update your backend .env file with your MONGO_URI.

---

### Dependencies
-** Node.js
-** npm (Node Package Manager)
-** React.js
-** Express.js
-** MongoDB Atlas
-** Firebase Realtime Database
-** Arduino IDE
-** ESP8266 Board Driver

----

## ⚙️ Configurations Required
-** Firebase Configuration: Add your Firebase Project credentials in the frontend.
-** MongoDB Connection String: Add your MongoDB URI in backend .env file.
-** Wi-Fi Credentials: Add your Wi-Fi SSID and Password inside Arduino .ino code.

---

## 🔒 Security Measures

- **Firebase Database Rules** for read/write security.
- **HTTPS** secure communication for website.
- **Server-side Input Validation** for Contact Form.
- **Authentication Setup (Future Scope)** for Admin Control.

---

## 📈 Testing Results

- Sensor data updates every few seconds without latency.
- Motor ON/OFF tested via dashboard successfully.
- Contact Form data successfully stored into MongoDB.
- 48-hour system uptime test showed stable real-time performance.
- PIR motion sensor accurately triggered alerts.

---

## 🚀 Future Scope

- **AI Prediction Models** for automated irrigation decisions.
- **Mobile App Integration** for remote monitoring/control.
- **Expansion to Commercial Hydroponic Farms** with large-scale deployments.
- **Integration with IoT Edge Devices** for faster processing.

---
Contact Info
Project Owner: Sneha 👑
Email: snehakri0206@gmail.com
GitHub:github.com/sneha020603
LinkedIn: [https://www.linkedin.com/in/sneha-kumari-391909264]
