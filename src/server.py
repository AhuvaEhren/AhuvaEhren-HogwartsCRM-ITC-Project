import json
from random import randint
from flask import Flask, request

books = {
    "1": [
        {
            "id": "1",
            "title": "Harry Potter and the Sorcerer's Stone",
            "author": "J K Rowling",
            "genre": "Fantasy Fiction"
            "summary": "Harry Potter and the Sorcerer's Stone is the first book in a seven-part series about the powerful young wizard Harry Potter. In this book, he's orphaned and sent to live with his aunt and uncle. Years later, he receives an acceptance letter from Hogwarts School of Witchcraft and Wizardry, where he will have many dangerous and fantastic adventures."
        },
    ],
    "2": [
        {
            "id": "2",
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "genre": "Southern Gothic"
            "summary": "The storyline is based in Maycomb, a small town in Alabama in the 1930s where Scout lives with her elder brother Jem, and her father, Atticus, who is widowed. Scout and her brother get to learn some crucial lessons about judging others through the character of Boo, the cryptic and solitary neighbor."
        },
    ],
    "3": [
        {
            "id": "3",
            "title": "Pachinko",
            "author": "Min Jin Lee",
            "genre": "Historical Fiction"
            "summary":"Pachinko follows one Korean family through the generations, beginning in early 1900s Korea with Sunja, the prized daughter of a poor yet proud family, whose unplanned pregnancy threatens to shame them all. Deserted by her lover, Sunja is saved when a young tubercular minister offers to marry and bring her to Japan."
        },
    ]
}

app = Flask(__name__)


@app.route("/hello/<name>")
def hello_handler(name):
    return "hello " + name


@app.route('/get_question')
def get_books():
    id = request.args.get('id')
    index = randint(0, len(boks[id]) - 1)
    return json.dumps(books[id][index])


# @app.route('/add_question', methods=['POST'])
# def add_question():
#     global questions
#     level = request.form.get('level')
#     new_question = {}
#     new_question["question"] = request.form.get('question')
#     new_question["ans"] = request.form.get('ans')
#     new_question["answers"] = []
#     new_question["answers"].append(request.form.get('ans1'))
#     new_question["answers"].append(request.form.get('ans2'))
#     new_question["answers"].append(request.form.get('ans3'))
#     new_question["answers"].append(request.form.get('ans4'))
#     questions[level].append(new_question)
#     return "SUCCESS: level contains " + str(len(questions[level])) + " questions"


# # Static file handlers

# @app.route("/")
# def homepage():
#     return app.send_static_file('index.html')


# @app.route('/static/<path:path>')
# def static_root(path):
#     return app.send_static_file(path)


# @app.route('/static/js/<path:path>')
# def javascripts(path):
#     return app.send_static_file('js/' + path)


# @app.route('/static/css/<path:path>')
# def stylesheets(path):
#     return app.send_static_file('css/' + path)


# @app.route('/static/images/<path:path>')
# def images(path):
#     return app.send_static_file('images/' + path)


# @app.after_request
# def add_header(r):
#     r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
#     r.headers["Pragma"] = "no-cache"
#     r.headers["Expires"] = "0"
#     r.headers['Cache-Control'] = 'public, max-age=0'
#     return r


if __name__ == "__main__":
    app.run(host="localhost", port=7000, debug=True)
