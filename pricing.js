$(document).ready(function(){
	var numPpl = 10; //by default
	var epp = 80;// extra per person
	var hrbase,serviceType,ppp,baseFare,plusTip;
	sixhr();


	$('#6hr').click(sixhr)
	function sixhr() {
		$('#6hr').toggleClass('btn-primary');
		$('#8hr').toggleClass('btn-primary');
	hrbase = 625; //for 6 hr
		refresh();
	 }

	$('#8hr').click(function() {
	$('#6hr').toggleClass('btn-primary');
	$('#8hr').toggleClass('btn-primary');
	hrbase = 775; //for 6 hr
		refresh();
	 })
	$('.fa-minus').click(function() {
		numPpl-= 1;
		refresh();
	 })
	$('.fa-plus').click(function() {
		numPpl+= 1;
		refresh();
	 })

	function refresh(){
		if (numPpl<6) {
			baseFare = hrbase;
		}
		else {
		baseFare = hrbase + epp*(numPpl-6);
		}
		plusTip = baseFare*1.2;
		ppp = Math.round(plusTip/numPpl);
		// $('#service-type').text(serviceType);
		$('#num-ppl').text(numPpl);
		$('#baseFare').text(baseFare);
		$('#plusTip').text(plusTip);
		$('#ppp').text(ppp);
	}

})
