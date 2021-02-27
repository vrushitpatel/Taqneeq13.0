from events.models import Event
import pandas as pd

def run():
    data = pd.read_csv('eventsinfo.csv')
    columns = [i for i in data][1:]
    print(len(data))
    for i in range(len(data)):
        eventSlug,eventType,eventName = data[columns[0]][i],data[columns[1]][i],data[columns[2]][i]
        deptName,desc,rules,content = data[columns[3]][i],data[columns[4]][i],data[columns[5]][i],data[columns[6]][i]
        url = data[columns[7]][i]
        e = Event(eventslug=eventSlug,eventName=eventName,eventType=eventType,desc=desc,rules=rules,content=content,deptName=deptName,url=url)
        e.save()

    # for i in range(80):
    #     firstName,lastName,stream=data[columns[0]][i],data[columns[1]][i],data[columns[2]][i]
    #     course,year=data[columns[3]][i],data[columns[4]][i]
    #     position,deptName,quote=data[columns[5]][i],data[columns[6]][i],data[columns[7]][i]
    #     if position in ["Chairperson","Head"]:
    #         m = Member(firstName=firstName,lastName=lastName,stream=stream,course=course,year=year,position=position,deptName=deptName,posnum=1,quote=quote)
    #     else:
    #         m = Member(firstName=firstName,lastName=lastName,stream=stream,course=course,year=year,position=position,posnum=2,deptName=deptName,quote=quote)
    #     m.save()

