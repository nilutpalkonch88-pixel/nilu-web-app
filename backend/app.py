from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({
        "status": "success",
        "message": "NILU WEB APP Backend is running!"
    })

@app.route("/api/info")
def info():
    return jsonify({
        "developer": "Nilutpal Konch",
        "project": "NILU WEB APP",
        "version": "1.0"
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)
    