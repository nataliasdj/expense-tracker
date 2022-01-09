// //could have used moment js for date but we can do it
// //func that formats the date

const formatDate = (date) => {  //date object
    const d = new Date(date); //make sure its a date object

    let month = `${d.getMonth() + 1}`; //0-index, use the `` cuz its a string
    let day= `${d.getDate()}`;
    const year = d.getFullYear();

    //focus on months / days with no 2 digits, ex January is 1 since this format needs to prepend it

    if (month.length < 2){
        month = `0${month}`;
    }
    if (day.length < 2){
        day = `0${day}`;
    }
  
    return [year, month, day].join('-');

};

export default formatDate;
