<div class="widget roman">
	<?php 
		
		$d = date('j');
		$m = date('n');
		$y = date('Y');

		echo romanNumerals($d) . '. ' . romanNumerals($m) . '. ' . romanNumerals($y);
	?>	
</div>