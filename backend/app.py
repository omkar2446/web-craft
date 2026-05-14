from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Email Configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME') # Your email
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD') # Your app password
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_USERNAME')

mail = Mail(app)

@app.route('/', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy", "message": "WebCraft Backend is running"}), 200

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.json
        name = data.get('name')
        email = data.get('email')
        phone = data.get('phone', 'Not provided')
        subject = data.get('subject', 'New Inquiry from WebCraft Studio')
        message_body = data.get('message')

        if not name or not email or not message_body:
            return jsonify({"error": "Missing required fields (name, email, or message)"}), 400

        # Construct Email
        msg = Message(
            subject=f"Contact Form: {subject}",
            recipients=[app.config['MAIL_USERNAME']],
            body=f"Name: {name}\nEmail: {email}\nPhone: {phone}\n\nMessage:\n{message_body}"
        )
        
        # Uncomment the line below when you have valid credentials
        mail.send(msg)
        print(f"Success: Message sent from {name}")
        
        return jsonify({"message": "Message sent successfully!"}), 200
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": "Failed to send message"}), 500

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)