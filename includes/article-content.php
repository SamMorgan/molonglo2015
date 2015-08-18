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
			    echo '<li id="footnote-'.$i.'" class="footnote"><span class="footnote_marker">'.$i.'</span><span class="to_marker">BACK</span>'.get_sub_field('footnote').'</li>';
			    $i++;
			endwhile;?>
		    </ol>
	    </section>
	<?php endif;?>
	<?php 
		$categories = get_the_category();

	    foreach( $categories as $category ) {
	        switch($category->category_nicename){
	        	case "times":
	        	get_template_part('includes/widget-times');
	        	break;

	        	case "new":
	        	get_template_part('includes/widget-new');
	        	break;

	        	case "roman":
	        	get_template_part('includes/widget-roman');
	        	break;	        		        	
	        } 
	    }		
	?>	
</article>