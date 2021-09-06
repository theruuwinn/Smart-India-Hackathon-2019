import threading
import bs4
import requests
import re
import multiprocessing
import os
import numpy as np 
import smtplib
import urllib.request as ureq
from email.mime.multipart import MIMEMultipart 
from email.mime.text import MIMEText 
from email.mime.base import MIMEBase 
from email import encoders 
import datetime



def Inter_link(links, files, distinct_links, URL):
  
    links_copy = set()
    
    for x in links:
        links_copy.add(x)
    
    for inter_page in distinct_links:
        try:
            html_page = requests.get(inter_page)
        except:
            continue
        soup = bs4.BeautifulSoup(html_page.text,'lxml')
       
        for link in soup.findAll('a', attrs={'href': re.compile("^"+URL)}):
            if (re.findall('.PDF$',link['href'])) or (re.findall('.pdf$',link['href'])):
                files.add(link.get('href'))
            else:
                links.add(link.get('href'))
        
        for link in soup.findAll('a', attrs={'href': re.compile("^/+"), 'href': re.compile("")}):
            if (re.findall('.PDF$',link['href'])) or (re.findall('.pdf$',link['href'])):
                files.add(URL + link.get('href'))
            else:
                links.add(URL + link.get('href'))
    
    distinct_links.clear()
    distinct_links = links - links_copy
    links_copy.clear()
    
    if (len(distinct_links) == 0):
        return print_Data(links, files)
    else:
        return Inter_link(links, files, distinct_links, URL) 


# In[2]:


def my_function(URL):
    print(1)
    html_page = requests.get(URL)
        
    soup = bs4.BeautifulSoup(html_page.text,'lxml')
    links = set()
    files = set()
    distinct_links = set()
    
    for link in soup.findAll('a', attrs={'href': re.compile("^"+URL)}):
        if (re.findall('.PDF$',link['href'])) or (re.findall('.pdf$',link['href'])):
            files.add(link.get('href'))
        else:
            links.add(link.get('href'))
   
    for link in soup.findAll('a', attrs={'href': re.compile("^/+"), 'href': re.compile("")}):
        if (re.findall('.PDF$',link['href'])) or (re.findall('.pdf$',link['href'])):
            files.add(URL + link.get('href'))
        else:
            links.add(URL + link.get('href'))
    
    for y in links:
        distinct_links.add(y)
    
    Inter_link(links, files, distinct_links, URL)


# In[3]:


def print_Data(links, files):
#    count = 0
#    count1 = 0
#    print('Links: ')
#    for x in links:
#        count = count + 1
#    print('Files: ')
#    for y in files:
#        count1 = count1 + 1
#    print('Total no. of links: ', count)
#    print('Total no. of file links: ', count1)
    return searching_data(files)
   # Excel_doc(links, files)


# In[4]:


def find_links_database():
    import pymysql

    connection = pymysql.connect(host="localhost", user="root", password="", database="autonomous statistical information collection system")
    cursor = connection.cursor()

    retrive = "SELECT File_Link FROM collected_data"
    cursor.execute(retrive)
    rows = cursor.fetchall()
    
    connection.commit()
    connection.close()
    return rows


# In[ ]:


def find_email_database():
    import pymysql

    connection = pymysql.connect(host="localhost", user="root", password="", database="autonomous statistical information collection system")
    cursor = connection.cursor()

    retrive = "SELECT Email_Id FROM add_officer"
    cursor.execute(retrive)
    rows = cursor.fetchall()
    
    connection.commit()
    connection.close()
    return rows


# In[5]:


def searching_data(files):
    temp = find_links_database()
    temp = set(np.unique(temp))
    if(files-temp):
        send_mail(files-temp)


def add_collected_data(filename, server_add, File_Link, timestamp):
    import pymysql
    # Open database connection
    db = pymysql.connect(host="127.0.0.1:3306",user="root",password="",database="autonomous statistical information collection system" )

    # prepare a cursor object using cursor() method
    cursor = db.cursor()

    # Prepare SQL query to INSERT a record into the database.
    sql = "INSERT INTO collected_data(File_Name,URL, File_Link, Timestamp) VALUES (filename, server_add, File_Link, timestamp)"
    try:
       # Execute the SQL command
       cursor.execute(sql)
       # Commit your changes in the database
       db.commit()
    except:
       # Rollback in case there is any error
       db.rollback()

    # disconnect from server
    db.close()
    

def send_mail(files):
    
    Email_Id = find_email_database()
    Email_Id = set(np.unique(Email_Id))
    
    for x in files:
        filename = x[x.rfind("/")+1:]
        #url = 'https://resume-13d69.firebaseapp.com/files/Resume.pdf'

        #print("downloading with urllib")
        server_add = "C:/xampp/htdocs/Server Documents/"+filename 
        ureq.urlretrieve(x, server_add)
        timestamp = datetime.datetime.now()
        
        add_collected_data(filename, server_add, x, timestamp)
    
        for y in Email_Id:
            fromaddr = "teamtechsols@gmail.com"
            toaddr = y

            # instance of MIMEMultipart 
            msg = MIMEMultipart() 

            # storing the senders email address   
            msg['From'] = fromaddr 

            # storing the receivers email address  
            msg['To'] = toaddr 

            # storing the subject  
            msg['Subject'] = "Reprt Collection"

            # string to store the body of the mail 
            body = "Kindly find report attached here with."

            # attach the body with the msg instance 
            msg.attach(MIMEText(body, 'plain')) 

            # open the file to be sent  
            attachment = open(server_add, "rb") 

            # instance of MIMEBase and named as p 
            p = MIMEBase('application', 'octet-stream') 

            # To change the payload into encoded form 
            p.set_payload((attachment).read()) 

            # encode into base64 
            encoders.encode_base64(p) 

            p.add_header('Content-Disposition', "attachment; filename= %s" % filename) 

            # attach the instance 'p' to instance 'msg' 
            msg.attach(p) 

            # creates SMTP session 
            s = smtplib.SMTP('smtp.gmail.com', 587) 

            # start TLS for security 
            s.starttls() 

            # Authentication 
            s.login(fromaddr, "teamtechsols2019") 

            # Converts the Multipart msg into a string 
            text = msg.as_string() 

            # sending the mail 
            s.sendmail(fromaddr, toaddr, text) 

            # terminating the session 
            s.quit() 


# In[8]:


import sys
def main():   
    #print("PYTHON TEST")
    #print('a')
    #print (sys.argv)
    url_list = sys.argv[1].split(",")
    
    #print("<br><br>-----------<br>")
    
    for i in range(1, len(url_list)):
        #print(url_list[i]) # you can now access each url from this variable
        #print("<br>")
        my_function(url_list[i])
    
#    URL = "https://resume-13d69.firebaseapp.com/"
    #my_function(URL)
    
if __name__== "__main__":
    main()		
