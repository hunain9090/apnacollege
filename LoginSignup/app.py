from flask import Flask,render_template,request,redirect,url_for
from pymongo import MongoClient

PORT = 5000
client=MongoClient("mongodb://localhost:27017/")
db = client["hunaindb"]
signup_collection = db["signup"]
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":

        user={
            "name": request.form["name"],
            "email": request.form["email"],
            "password": request.form["password"],
            "role": "user"
        }
        signup_collection.insert_one(user)
        return redirect(url_for("login"))
    
    return render_template("signup.html")

@app.route("/login", methods=["GET","POST"])
def login():
    if request.method == "POST":

        logemail = request.form["email"]
        logpassword = request.form["password"]

        data = signup_collection.find_one({"email": logemail,"password": logpassword})

        if data:

            return render_template("index.html", role=data["role"])
        else:
            return "Invalid email or password"


    return render_template("login.html")

if __name__ == "__main__":
    app.run(debug=True,port=PORT)