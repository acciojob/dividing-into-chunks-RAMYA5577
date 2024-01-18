const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let sum = 0, ans = [], subArray = [];
	for(int i=0; i<arr.length; i++){
		if(sum+arr[i] <= n){
			// include the value in the subArray
			subArray.push(arr[i]);
			sum+=arr[i];
		}
		else{
			ans.push(subArray);
			subArray = [arr[i]];
			sum = arr[i];
		}
		
	}
	ans.push(subArray);
	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));


