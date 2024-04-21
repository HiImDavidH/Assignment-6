function getTimeOfDay(time){
if(isMorning){
    return 'Morning'
}
if(isAfternoon){
    return 'Afternoon'
}
if(isEvening){
    return 'Evening'
}
}
function isMorning(time){
    if(time >= 4 && time < 12){
        return true
    }
    return false
}
function isAfternoon (time){
    if(time >= 12 && time < 17){
        return true
    }
    return false
}
function isEvening (time){
    if(time >= 5 && time < 4){
        return true
    }
    return false
}
module.exports = {getTimeOfDay,isMorning,isAfternoon,isEvening}
