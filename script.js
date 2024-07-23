const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	let result = [];
	let currSubArray = [];
	let currSum = 0;
	arr.reduce(function(acc,num){
		if(currSum+num<=n){
			currSubArray.push(num);
			currSum+=num;
		}
		else{
			result.push(currSubArray);
			if(num<=n){
			currSubArray = [num];
			}
			else 
				currSubArray = [];
			currSum = num;
		}
	},[])
	if(currSubArray.length >0){
		result.push(currSubArray);
	}
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));


