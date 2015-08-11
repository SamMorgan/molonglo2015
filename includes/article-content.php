<article class="article" id="post-<?php echo $post->ID;?>">

	<section class="article_body">
	
		<div class="article_heading">
			<h1><?php the_title();?></h1>
			<?php $sub_heading = get_field('sub_heading');
			if($sub_heading){
				echo '<h2>'.$sub_heading.'</h2>';
			}?>
		</div>

	    <?php the_content();?>

	</section>
	
	<?php if( have_rows('footnotes') ): ?>
		<section class="footnotes">
			<ol>
		    <?php $i = 1;
			while ( have_rows('footnotes') ) : the_row();
			    echo '<li id="footnote-'.$i.'" class="footnote"><span class="footnote_marker">'.$i.'</span>'.get_sub_field('footnote').'</li>';
			    $i++;
			endwhile;?>
		    </ol>
	    </section>
	<?php endif;?>

</article>