import urllib.request
from zipfile import ZipFile
import os

current_dir = os.getcwd()
zip_file = current_dir + '/azan.zip'

filelist = [ f for f in os.listdir(current_dir) if f != 'unzip_file.py']
for f in filelist:
    os.remove(os.path.join(current_dir, f))

urllib.request.urlretrieve('http://mbenam.github.io/azn/azan.zip', zip_file)

with ZipFile(zip_file, 'r') as zipObj:
   zipObj.extractall()

if os.path.exists(zip_file):
  os.remove(zip_file)

cron_text = '30 01 * * * python3' + current_dir + '/new_main.py' + '\n'
cron_file = current_dir + '/my_cron'

f = open(cron_file, "w")
f.write(cron_text)
f.close()

#os.system('crontab ' + cron_file)