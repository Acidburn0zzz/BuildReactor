define(['signals'], function (signals) {

	var settingsChanged = new signals.Signal();
	var showCalledCount = 0;

	function show(settings) {
		console.log('settingsController.show called with', settings);
		showCalledCount++;
	}

	function getShowCalledCount() {
		return showCalledCount;
	}
	return {
		show: show,
		getShowCalledCount: getShowCalledCount,
		settingsChanged: settingsChanged
	};
});