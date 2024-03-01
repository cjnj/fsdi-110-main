from flask import Flask
import json
from data import catalog

app = Flask(__name__)

@app.get("/")
def home():
    return "Hello, from flask"

@app.get("/test")
def test():
    return "This is another page"



@app.get('/api/products')
def get_products():
    return json.dumps(catalog)
# This will be the endpoints of the Json
# This is an API endpoint

@app.get("/api/about")
def about():
    me = {"name": "Adrian"}
    return json.dumps(me)



app.run(debug=True)