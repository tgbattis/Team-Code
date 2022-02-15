import flask
import backend

app = Flask(__name__)


@app.route('/')
def index():
    print("Page Rendered")
    return render_template('index.html')



@app.route('/testConnection', methods=['GET','POST'])
def testConnection():
    
    # POST REQUEST
    if request.method == 'POST':
        print("received TEST Post Request")
        data=request.json['data']
        print("POST sent: ", data)
        return json.dumps({'status':'OK'})

    # GET REQUEST
    if request.method == 'GET':
        print('received TEST GET request')
        return 'tester'

if __name__ == "__main__":
    app.run()
    print("Server now listening...")
