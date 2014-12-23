
# coding: utf-8

# In[1]:

import csv
import matplotlib.mlab as mlab
import matplotlib.pyplot as plt
import pandas as pd
from pandas import DataFrame
from time import mktime
from datetime import datetime, timedelta
import time


# In[2]:

get_ipython().magic(u'matplotlib inline')


# In[3]:

def str_to_rounded_dt(ts, minutes=2):
    ts = str(ts)
    t1 = datetime.strptime(ts, '%Y-%m-%d %H:%M:%S')
    #t1 = datetime.fromtimestamp(mktime(ts))
    return (t1 - timedelta(minutes=t1.minute % minutes,
                             seconds=t1.second,
                             microseconds=t1.microsecond))


# In[5]:

f = open('R/B63-2011-04-03_2011-05-03-2.csv')
csv_f = csv.reader(f)
next(csv_f, None)

bus_dict = {}

for row in csv_f:
    time_interval = str_to_rounded_dt(row[1])
    stop_id = row[9]
    vehicle_id = row[0]
    trip_id = row[5]
    if (time_interval, stop_id) not in bus_dict:
        bus_dict[(time_interval, stop_id)] = []
    bus_dict[(time_interval, stop_id)].append((vehicle_id,trip_id))


# In[6]:

overlap = []
for tup, details in bus_dict.iteritems():
    if len(set(map(lambda x:x[0],details))) > 1:
        overlap.append((tup[0],tup[1], list(set(map(lambda x:x[0],details))), list(set(map(lambda x:x[1],details)))))


# In[7]:

overlap[2:3]


# In[8]:

df = pd.DataFrame(overlap, columns=['time_interval', 'stop_id', 'vehicle_list', 'trip_list'])


# In[9]:

weekday = df['time_interval'].apply(lambda row: row.weekday()).tolist()
days = df['time_interval'].apply(lambda row: row.day).tolist()
hour = df['time_interval'].apply(lambda row: row.hour).tolist()
stop = df['stop_id'].tolist()


# In[10]:

plt.xlabel('Weekday')
plt.ylabel('Count')
plt.title('Bus Overlap Count by Day of Week')
x,y,z = plt.hist(weekday, 7, facecolor='red', alpha=0.75)


# In[13]:

plt.xlabel('Day of Week')
plt.ylabel('Count')
plt.title('Bus Overlap Count by Month Day')
x,y,z = plt.hist(days, 30, facecolor='green', alpha=0.75)


# In[12]:

plt.xlabel('Hour of Day')
plt.ylabel('Count')
plt.title('Bus Overlap Count by Hour of Day')
x,y,z = plt.hist(hour, 24, facecolor='blue', alpha=0.75)


# In[14]:

df.dtypes
df['stop_id'] = df['stop_id'].astype(float)
df.dtypes


# In[ ]:



