<?php get_header();
	if (have_posts()) : while (have_posts()) : the_post(); ?>

		<div id="slidewrap">
			
			<div class="homewrap contentwrap">
			   
				<?php //get_template_part('includes/home-contents');?>

			</div> 

			<div class="contentwrap articlewrap">

				<?php get_template_part('includes/article-content');?>

			</div>

		</div>     
	
	<?php endwhile; endif;	
get_footer(); ?>