<div class="widget new"><?php 	
	$moon = new Solaris\MoonPhase();			
	$moon_phase = round($moon->phase() * 8);
	echo '<svg class="moon"><use xlink:href="#moon-'.$moon_phase.'" /></use></svg>';
	echo '<span>';
	if($moon_phase <= 1) echo 'New';
	if($moon_phase == 2) echo 'Waxing<br>Crescent';
	if($moon_phase == 3) echo 'First<br>Quarter';
	if($moon_phase == 4) echo 'Waxing<br>Gibbous';
	if($moon_phase == 5) echo 'Full';
	if($moon_phase == 6) echo 'Waning<br>Gibbous';
	if($moon_phase == 7) echo 'Third<br>Quarter';
	if($moon_phase == 8) echo 'Waning<br>Crescent';
	echo '</span>';
?></div>