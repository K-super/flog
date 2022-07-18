function debounce(fn, delay) {
	let timer = null;
	return function () {
		if (timer) clearTimeout(timer);
		if (!timer) fn.apply(this, arguments);
		timer = setTimeout(() => {
			return timer = null;
		}, delay)
	}
}

function thorttle(fn, delay) {
	let start = 0;
	return function () {
		let cur = new Date().getTime();
		if (cur - start >= delay) {
			fn.apply(this, arguments);
			start = cur;
		};
	}
}


export {
	debounce,
	thorttle
}
