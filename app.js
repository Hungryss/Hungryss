<script>
	rollout=new Image();
	rollout.src="out.gif";
	rollover=new Image();
	rollover.src="over.gif";

	function onMouseOut(){
		document.images["rollout"].src="out.gif";
	};
	function onMouseOver(){
		document.images["rollout"].src="over.gif";
	};
</script>
