// Your code here
const createEmployeeRecord = (recArray) => {
return{
    firstName: recArray[0],
    familyName: recArray[1],
    title: recArray[2],
    payPerHour: recArray[3],
    timeInEvents: [ ],
    timeOutEvents: [ ]

}
}

const createEmployeeRecords = (recordsArray) => {
    return recordsArray.map(rec => createEmployeeRecord(rec))
}

 const createTimeInEvent = (dateStamp) => {
    const [date, hour] = dateStamp.split(' ')
        const inEvent = {
        type: "TimeIn", 
        hour: parseInt(hour), 
        date: date
    }
    bind(this);
 this.timeInEvents.push(inEvent)

    return this
}
function createTimeOutEvent(eRecordObj, dateStamp){
    let outEvent = {
        type: "TimeOut", 
        hour: parseInt(dateStamp.slice(-4)), 
        date: dateStamp.slice(0, 10)
    }
    eRecordObj.timeOutEvents.push(outEvent)

    return eRecordObj   
}
const hoursWorkedOnDate = function(targetDate){
    const inEvent = this.timeInEvent.find(inEvent => inEvent.date === targetDate)
    const outEvent = this.timeOutEvent.find(oEvent => oEvent.date === targetDate)
   return (outEvent.hour - inEvent.hour) /100
   }
   const wagesEarnedOnDate = function(targetDate){
       return hoursWorkedOnDate.call(this,targetDate) * this.payPerHour
   }

const allWagesFor = function (){
    const eligibleDates = this.timeInEvents.map(function (e){
        return e.date
    })

const findEmployeeByFirstName = function(srcArray, firstName ){
    return srcArray.find(rec => rec.firstName === firstName)

}

const calculatePayroll = function(recsArray){
    return recsArray.reduce((total, rec) =>{
        return total + allWagesFor.call(rec)
    }, 0)
}


const payable = eligibleDates.reduce(function(memo, d){
    return memo + wagesEarnedOnDate.call(this, d)

}.bind(this), 0)

return payable
}








