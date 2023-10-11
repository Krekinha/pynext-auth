from flask import Flask, make_response, jsonify

app = Flask(__name__)


@app.route('/api/hello', methods=['GET'])
def hello_world():
    res = {'message': 'Olá, FLASK 2!'}
    return make_response(jsonify(res))


if __name__ == '__main__':
    # app.run(port=8000)
    from waitress import serve
    serve(app, host="127.0.0.1", port=8000)
