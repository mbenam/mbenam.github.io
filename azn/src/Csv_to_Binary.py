f = open('TimeTable.csv','rb')
data = f.read().decode('utf-8')
f.close()
data = data.replace(':',',').split('\r\n')[:-1]

data = [x.split(',') for x in data]

for x in data:
    x.pop(0) #Removes the date
    x.pop(2) #Removes sunrise hour
    x.pop(2) #Removes sunrize minute
    
data = [[int(x) for x in y] for y in data]
print(data)

f = open('TimeTable.txt','w')

for x in data:
    for y in x:
        f.write(chr(y))
f.close()
