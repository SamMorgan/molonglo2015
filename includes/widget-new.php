<?php 	
	$moon = new Solaris\MoonPhase();			
	$moon_phase = round($moon->phase() * 8);
	echo '<svg class="moon widget"><use xlink:href="#moon-'.$moon_phase.'" /></use></svg>';
?>