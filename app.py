import os
import json
import time
import anthropic
from flask import Flask, render_template, request, jsonify, send_from_directory
from pathlib import Path

app = Flask(__name__)

# Anthropic client - uses ANTHROPIC_API_KEY env var
client = anthropic.Anthropic()

SHAPES_DIR = Path("static/shapes")
SHAPES_DIR.mkdir(exist_ok=True)

SYSTEM_PROMPT = """You are AeroForge AI, an expert computational engineer specializing in mesh generation and shape optimization for aerospace, mechanical, and civil engineering applications.

You help engineers:
- Design and analyze complex 3D geometries (wings, turbine blades, structural members, pressure vessels)
- Solve mesh generation problems for FEA/CFD simulations
- Optimize shapes for aerodynamic efficiency, structural integrity, and thermal performance
- Interpret simulation results and suggest design improvements

When users describe a shape or engineering problem, provide detailed technical analysis including:
- Geometry parameters and mesh recommendations
- Material considerations
- Boundary conditions for simulation
- Expected stress/flow behavior
- Optimization suggestions

Keep responses technical but clear. Use engineering terminology appropriately."""


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.json
    messages = data.get("messages", [])

    if not messages:
        return jsonify({"error": "No messages provided"}), 400

    try:
        response = client.messages.create(
            model="claude-opus-4-5",
            max_tokens=2048,
            system=SYSTEM_PROMPT,
            messages=messages,
        )
        return jsonify({"content": response.content[0].text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/shapes", methods=["GET"])
def list_shapes():
    shapes = []
    for f in SHAPES_DIR.iterdir():
        if f.suffix in [".obj", ".stl", ".ply", ".json"]:
            stat = f.stat()
            shapes.append(
                {
                    "name": f.name,
                    "size": stat.st_size,
                    "modified": stat.st_mtime,
                    "type": f.suffix[1:].upper(),
                    "url": f"/static/shapes/{f.name}",
                }
            )
    shapes.sort(key=lambda x: x["modified"], reverse=True)
    return jsonify(shapes)


@app.route("/api/shapes/<filename>", methods=["GET"])
def get_shape(filename):
    return send_from_directory(SHAPES_DIR, filename)


@app.route("/api/shapes/upload", methods=["POST"])
def upload_shape():
    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No file selected"}), 400

    allowed = {".obj", ".stl", ".ply", ".json"}
    ext = Path(file.filename).suffix.lower()
    if ext not in allowed:
        return jsonify({"error": f"File type {ext} not supported"}), 400

    save_path = SHAPES_DIR / file.filename
    file.save(save_path)
    return jsonify({"success": True, "filename": file.filename})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
