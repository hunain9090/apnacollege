from flask import Flask,render_template,request,redirect,url_for
from pymongo import MongoClient
from bson import ObjectId

PORT = 2000
client = MongoClient("mongodb://localhost:27017/")
db = client["hunaindb"]
student_collection = db["students"]

app = Flask(__name__)

@app.route("/")
def index():
    student = student_collection.find()
    return render_template("index.html",student=student)

@app.route("/add-student",methods=["GET","POST"])
def addstudent():
    if(request.method == "POST"):
        student_data = {
            "name": request.form["name"],
            "email": request.form["email"],
            "phone": request.form["phone"]
        }
        student_collection.insert_one(student_data)
        
        return redirect(url_for('index'))
    return render_template("addstudent.html")

@app.route("/edit-student/<id>",methods=["GET","POST"])
def editstudent(id):
    if(request.method == "POST"):
        update_student_data = {
            "name": request.form["name"],
            "email": request.form["email"],
            "phone": request.form["phone"]
        }
        student_collection.update_one({"_id": ObjectId(id)},{"$set": update_student_data})
        return redirect(url_for("index"))
        
    student = student_collection.find_one({"_id": ObjectId(id)})
    return render_template("editstudent.html", student=student )

@app.route("/delete-student/<id>")
def deletestudent(id):
    student_collection.delete_one({"_id": ObjectId(id)})
    return redirect(url_for('index'))


if __name__ == "__main__":
    app.run(debug= True,port= PORT)
    