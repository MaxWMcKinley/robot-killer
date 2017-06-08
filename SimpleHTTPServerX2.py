import SimpleHTTPServerX

class MyHTTPRequestHandler(SimpleHTTPServerX.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_my_headers()

        SimpleHTTPServerX.SimpleHTTPRequestHandler.end_headers(self)

    def send_my_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")

    # def do_GET(self):
    #     self.send_head()

if __name__ == '__main__':
    SimpleHTTPServerX.test(HandlerClass=MyHTTPRequestHandler)
