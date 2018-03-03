/**
 * ©ЛкыеепР
 */
function quickSort(a) {
		if(a.length <= 1) { return a }
		var left = [], right = []
		var start = parseInt((a.length-1)/2)
		var pivot = a[start]
		for(var i=0;i<a.length;i++){
		if(i == start) continue;
		if(a[i] < a[start]){
			left.push(a[i])
		}else {
			right.push(a[i])
		}
	}
		return quickSort(left).concat(pivot, quickSort(right))
	}