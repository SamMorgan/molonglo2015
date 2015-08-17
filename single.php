<?php get_header();?>

	<div id="slidewrap">
		
		<div class="homewrap contentwrap">
		   
			<?php get_template_part('includes/home-contents');?>

		</div> 

		<div class="contentwrap articlewrap">
			<?php 
				if (have_posts()) while (have_posts()) : the_post();

					get_template_part('includes/article-content');

				endwhile;
			?>

		</div>

	</div>     
	
<?php get_footer(); ?>