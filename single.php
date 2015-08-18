<?php get_header(); ?>
<div class="mainwrap">
	<div id="slidewrap">
		
		<div class="sectionwrap homewrap">
			<div class="contentwrap">
				<?php get_template_part('includes/home-contents');?>
			</div>
			<?php get_template_part('includes/footer-contents');?>		
		</div> 

		<div class="sectionwrap articlewrap">
			<div class="contentwrap" id="article-container">
				<?php 
					if (have_posts()) while (have_posts()) : the_post();

						get_template_part('includes/article-content');

					endwhile;
				?>
			</div>
			<?php get_template_part('includes/footer-contents');?>		
		</div>

	</div>
</div>
<?php get_footer(); ?>