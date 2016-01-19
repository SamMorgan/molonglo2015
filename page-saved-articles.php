<?php get_header(); 
	$savedUrl = $_GET['saved'];
	$savedUrl = substr($savedUrl, 1, -1);
	$ids = explode("--", $savedUrl);

	$args = array(
	    'post_type' => array( 'post' ),
	    'post__in' => $ids,
	    'orderby' => 'post__in'
	);

	$post_query = new WP_Query( $args );
	while( $post_query->have_posts() ) : $post_query->the_post();?>
		<div class="saved_article_wrap">
	    	<?php get_template_part('includes/article-content');?>
	    	<p><a href="#" class="remove_saved_article" data-id="<?php echo $post->ID;?>">- Remove</a></p>
	    </div>
	<?php endwhile;?>

	<a class="email_selection" href="#" target="_blank">EMAIL YOUR SELECTION</a>
<?php get_footer();?>