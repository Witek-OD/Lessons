
function SplitString() {

    let OriginalString= +prompt('Please enter a number');

    let TmpString=(OriginalString).toString().split('');

    let ResultString=TmpString.join(' ');

    alert(ResultString);
}