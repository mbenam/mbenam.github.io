from datetime import datetime
import os

current_dir = os.path.dirname(os.path.abspath(__file__))

day_of_year = datetime.now().timetuple().tm_yday

f = open(current_dir + '/TimeTable.txt','r')

data = f.read().split('\n')[day_of_year-1].split(',')

f.close()

cron_command = ' * * * ' + 'python3 ' + current_dir + '/play_azan.py prayer' + '\n'

cron_file = current_dir + '/my_cron'

cron_text = ''


for i in range(0,5):
    cron_text = cron_text + data[2*i+1] + " " + data[2*i] + cron_command

cron_text = cron_text + '00 01 * * * python3 ' + current_dir + '/unzip_file.py' + '\n'
cron_text = cron_text + '30 01 * * * python3 ' + current_dir + '/new_main.py' + '\n'

print(cron_text)

f = open(cron_file, "w")
f.write(cron_text)
f.close()

os.system('crontab ' + cron_file)

