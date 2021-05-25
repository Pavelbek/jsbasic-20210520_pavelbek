function truncate(str, maxlength) {
	if(str.length <= maxlength) return str;

	let res = str.slice(0, maxlength - 1) + '…';
	
	return res;
}
