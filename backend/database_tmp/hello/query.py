from polls.models import User
import mysql.connector

conn = mysql.connector.connect(user='root', password='ZAQ123edcxsw', database='day54', use_unicode=True)
cursor = conn.cursor()
cursor.execute('INSERT INTO user')
data = cursor.fetchone()


conn.close()
