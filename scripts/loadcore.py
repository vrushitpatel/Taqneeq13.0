import pandas as pd
from core.models import Member
def run():
    data = pd.read_csv('memberdeets.csv')
    columns = [i for i in data][0:]
    print(columns)
    for i in range(len(data)-1):
        name=data[columns[0]][i]
        position,deptName=data[columns[1]][i],data[columns[2]][i]
        gifurl = data[columns[4]][i]
        if(position in ['Head','Chairperson']):
            m = Member(name=name,position=position,deptName=deptName,posnum=1,gifurl=gifurl)
            m.save()
        else:
            m = Member(name=name,position=position,deptName=deptName,posnum=2,gifurl=gifurl)
            m.save()

