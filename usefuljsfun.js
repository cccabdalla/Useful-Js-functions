/**
 * Used to remove dollar sign($) from a given amount or price
 * @param {*} amount 
 */
function removeDollarSignFromAmount(amount){
    if ( !amount || typeof amount !== 'string')
          return amount;
    
    var dollarSign = amount.match(/^\$/);
    
    if( !dollarSign || !dollarSign.length || dollarSign.length < 1)
          return parseInt(amount);
          
        return parseInt(amount.replace(/\$/g, ''));
  
  }

/**
 * used to validate date format based on a given format
 * @param {*} selectedDate 
 * @param {*} format 
 */
  function isDateFormatValid(selectedDate,format){
    var moment = require('moment');
    if(!format || !selectedDate || typeof format !== 'string' || typeof selectedDate !== 'string')
        return false;

    return moment(selectedDate, format,true).isValid();
}
