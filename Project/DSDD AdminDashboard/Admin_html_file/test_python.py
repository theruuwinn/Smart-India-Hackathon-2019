import threading
import bs4
import requests
import re
import multiprocessing
import os
import numpy as np 
import smtplib

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
        print('return')
        return print_Data(links, files)
    else:
        
        for x in links:
            print(x)
        for y in files:
            print(y)
        return Inter_link(links, files, distinct_links, URL)

def my_function(URL):
    
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


def print_Data(links, files):
    count = 0
    count1 = 0
    print('Links: ')
    for x in links:
        count = count + 1
        print(x)
    print('Files: ')
    for y in files:
        count1 = count1 + 1
        print(y)
    print('Total no. of links: ', count)
    print('Total no. of file links: ', count1)
    return searching_data(files)
   # Excel_doc(links, files)	
   
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

def searching_data(files):
    temp = find_links_database()
    temp = set(np.unique(temp))
    if(files-temp):
        print(files-temp)

def main():   
    print("PYTHON TEST")
    print('a')
    URL = "https://resume-13d69.firebaseapp.com/"
    #my_function(URL)
    
if __name__== "__main__":
    main()		
