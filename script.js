function isFibonacci(n) {
		// Write your code here
	 function isPerfectSquare(x) {
        let s = Math.sqrt(x);
        return s === Math.floor(s);
    }

    // Check the Fibonacci property
    const condition1 = 5 * n * n + 4;
    const condition2 = 5 * n * n - 4;

    // Return true if either condition is a perfect square
    return isPerfectSquare(condition1) || isPerfectSquare(condition2);
}
// const input = parseInt(prompt("Enter a number"));
// alert(isFibonacci(input));
