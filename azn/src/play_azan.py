import pychromecast
import os

curr_dir = os.path.dirname(os.path.abspath(__file__))

prayer_mp3 = 'http://mbenam.github.io/azn/azan.mp3'
CC_list = curr_dir + '/CC_List.conf'

def getserial():
    cpuserial = "0000000000000000"
    try:
        f = open('/proc/cpuinfo','r')
        for line in f:
            if line[0:6]=='Serial':
                cpuserial = line[10:26]
        f.close()
    except:
        cpuserial = "ERROR000000000"

    return cpuserial

f = open(CC_list,'rb')
data = f.read().decode('utf-8')
f.close()
data = data.replace('\r','').split('\n')[:-1]
data = [x.split(',') for x in data]

my_serial = getserial()


for item in data:
    print(item)
    if item[0] == my_serial:
        speaker_name = item[1]

print(speaker_name)

chromecasts = pychromecast.get_chromecasts()
cast = next(cc for cc in chromecasts if cc.device.friendly_name == speaker_name)
cast.wait()
cast.set_volume(0.5)
mc = cast.media_controller
mc.play_media(prayer_mp3, 'audio/mp3')
mc.block_until_active()
