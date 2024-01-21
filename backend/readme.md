
# Flask Backend for Mars Hackathon 2024

This directory contains the Flask backend for the Mars Hackathon 2024 project. The backend is responsible for handling API requests and serving data to the frontend.

## Project Structure

```plaintext
backend/
│
├── app.py           # Main Flask application file
├── requirements.txt # List of Python dependencies
└── ...              # Other directories and files as needed
```

## Setup

### Prerequisites

- Python 3.8 or higher
- Conda or virtualenv (for creating isolated Python environments)

### Installation

1. **Clone the Repository:**
   If you haven't already, clone the main project repository.

2. **Navigate to the Backend Directory:**
   ```bash
   cd backend
   ```

3. **Create and Activate a Python Environment:**
   Using Conda:
   ```bash
   conda create -n mars-backend python=3.8
   conda activate mars-backend
   ```
   Or using virtualenv:
   ```bash
   virtualenv mars-backend
   source mars-backend/bin/activate  # On Windows use `mars-backend\Scriptsctivate`
   ```

4. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

## Running the Backend

1. **Start the Flask Server:**
   ```bash
   python app.py
   ```
   The server will start and typically listen on http://127.0.0.1:5000.

2. **Testing:**
   Open your browser or use a tool like Postman to test the API endpoints.

## Development Notes

### Day One

- Explored the initial concept of integrating SolarSam's 3D model of Mars in a Three.js environment.
- Considered the format for 3D models and decided on `.glTF` or `.GLB`.
- Discussed creating a navigation mesh in Blender and the possibility of using libraries like Yuka for AI-driven navigation.

### Development Goals

- Integrate an interactive AI agent using the EdenLabs API.
- Develop a basic 3D world, possibly importing a prefab .glTF model.
- Implement navigation controls to move around the space.
- (Optional) Populate the space with artifacts from wikis, blogs, Discord, and archived information about Mars.

## Archive: Day One Notes

The project kicked off with the setup of a basic structure using Three.js. Initial brainstorming focused on designing interactive elements and considering the use of Yuka for AI-first design protocols.

## Contact

- Discord: tashi
- Email: delictide@gmail.com

---

Stay tuned for more updates and backend development progress!
