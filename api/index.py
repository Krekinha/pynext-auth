from flask import Flask, make_response, jsonify

app = Flask(__name__)


@app.route('/flask', methods=['GET'])
def hello_world():
    res = 'API FLASK: ONLINE'
    return make_response(jsonify(res))


if __name__ == '__main__':
    # app.run(port=8000)
    from waitress import serve
    serve(app, host="127.0.0.1", port=8000)
