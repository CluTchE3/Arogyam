# 🏥 Arogyam - Your All-in-One Healthcare Platform 🚀

Arogyam is a comprehensive healthcare platform designed to streamline appointment booking, doctor management, and administrative tasks. It provides a user-friendly interface for patients to easily find and book appointments with doctors based on their specialization. For administrators and doctors, Arogyam offers robust tools to manage appointments, doctor profiles, and overall system operations. This project aims to bridge the gap between patients and healthcare providers, making healthcare more accessible and efficient.

## 🔗 Live Demo
👉 [Visit Arogyam](https://arogyam-frontend.vercel.app/)

## 🚀 Key Features

- **Effortless Appointment Booking**: Patients can easily search for doctors by speciality and book appointments online. 🗓️
- **Doctor Management**: Administrators can add, manage, and update doctor profiles, including their availability. 👨‍⚕️
- **Admin Dashboard**: Provides a centralized view of key metrics, including appointments, doctors, and system performance. 📊
- **Doctor Dashboard**: Doctors can manage their appointments, view their schedules, and update their profiles. 🧑‍⚕️
- **User Authentication**: Secure login for both administrators and doctors, ensuring data privacy and security. 🔒
- **Real-time Notifications**: Toast notifications provide instant feedback to users on successful actions or errors. 🔔
- **Speciality-Based Doctor Listings**: Browse doctors filtered by their medical speciality for targeted care. 🔍
- **Responsive Design**: Ensures a seamless experience across various devices, including desktops, tablets, and mobile phones. 📱

## 🛠️ Tech Stack

- **Frontend**:
    - React: JavaScript library for building user interfaces.
    - React Router DOM: For handling routing and navigation.
    - Vite: Build tool for fast development and optimized production builds.
    - Axios: HTTP client for making API requests.
    - React Toastify: For displaying toast notifications.
- **Backend**: (Not detailed in provided files, but assumed)
    - Node.js / Express.js (Likely)
    - RESTful API
- **Context/State Management**:
    - React Context API: For managing application-wide state.
- **Build Tools**:
    - Vite
- **Other**:
    - CSS: Styling for the user interface.
    - Tailwind: Styling for the user interface.

## 📦 Getting Started / Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A backend server running and accessible (configure `backendUrl` in `AppContext.jsx` and similar files)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install frontend dependencies:**

    ```bash
    cd Frontend
    npm install
    ```

3.  **Install admin panel dependencies:**

    ```bash
    cd admin
    npm install
    ```

### Running Locally

1.  **Start the frontend development server:**

    ```bash
    cd Frontend
    npm run dev
    ```

    This will start the frontend application, usually on `http://localhost:5173`.

2.  **Start the admin panel development server:**

    ```bash
    cd admin
    npm run dev
    ```

    This will start the admin panel application, usually on `http://localhost:5174`.

3.  **Configure API Endpoints:**

    Ensure that the `backendUrl` variable in `Frontend/src/context/AppContext.jsx` and `admin/src/context/AdminContext.jsx`, `admin/src/context/DoctorContext.jsx` points to the correct backend API URL.

## 📂 Project Structure

```
Arogyam/
├── Frontend/
│   ├── vite.config.js          # Vite configuration for the frontend
│   ├── src/
│   │   ├── main.jsx            # Entry point for the React application
│   │   ├── App.jsx             # Main application component
│   │   ├── index.css           # Global CSS styles
│   │   ├── context/
│   │   │   ├── AppContext.jsx  # Application-wide context provider
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Home page component
│   │   │   ├── Doctors.jsx     # Doctors page component
│   │   │   ├── Login.jsx       # Login page component
│   │   ├── components/
│   │   │   ├── Navbar.jsx      # Navigation bar component
│   │   │   ├── Footer.jsx      # Footer component
│   │   │   ├── Header.jsx      # Header component
│   │   │   ├── SpecialityMenu.jsx # Speciality menu component
│   │   │   ├── TopDoctors.jsx  # Top doctors component
│   │   │   ├── Banner.jsx      # Banner component
├── admin/
│   ├── vite.config.js          # Vite configuration for the admin panel
│   ├── src/
│   │   ├── main.jsx            # Entry point for the admin panel React application
│   │   ├── App.jsx             # Main admin panel application component
│   │   ├── index.css           # Global CSS styles for admin panel
│   │   ├── context/
│   │   │   ├── AdminContext.jsx # Admin context provider
│   │   │   ├── DoctorContext.jsx# Doctor context provider
│   │   │   ├── AppContext.jsx  # General application context provider
│   │   ├── pages/
│   │   │   ├── Login.jsx       # Login page for admin/doctors
│   │   │   ├── Admin/
│   │   │   │   ├── Dashboard.jsx   # Admin dashboard component
│   │   │   │   ├── AllAppointments.jsx # All appointments component
│   │   │   │   ├── AddDoctor.jsx   # Add doctor component
│   │   │   │   ├── DoctorsList.jsx # Doctors list component
│   │   │   ├── Doctor/
│   │   │   │   ├── DoctorDashboard.jsx # Doctor dashboard component
│   │   │   │   ├── DoctorAppointments.jsx # Doctor appointments component
│   │   │   │   ├── DoctorProfile.jsx   # Doctor profile component
│   │   ├── components/
│   │   │   ├── Navbar.jsx      # Navigation bar component
│   │   │   ├── Sidebar.jsx     # Sidebar component
```



## 🤝 Contributing

We welcome contributions to Arogyam! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Submit a pull request to the main branch.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

For questions, feedback, or support, please contact:

Harsh 
Email: harshofc9@gmail.com

## 💖 Thanks Message

Thank you for using and contributing to Arogyam! We appreciate your support in making healthcare more accessible and efficient.

