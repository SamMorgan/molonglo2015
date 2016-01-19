<?php if(in_category('roman')){

	get_template_part('includes/roman-content');	

}else{ ?>
	
	<article class="article postwrap" id="post-<?php echo $post->ID;?>">
	
		<section class="article_body">
		
			<div class="article_heading">
				<h1><?php the_title();?></h1>
				<?php $sub_heading = get_field('sub_heading');
				if($sub_heading){
					echo '<h2>'.$sub_heading.'</h2>';
				}
				 
				$categories = get_the_category();

			    foreach( $categories as $category ) {
			        switch($category->category_nicename){
			        	case "times":
			        	get_template_part('includes/widget-times');
			        	break;

			        	case "new":
			        	get_template_part('includes/widget-new');
			        	break;

			        	//case "roman":
			        	//get_template_part('includes/widget-roman');
			        	//break;	        		        	
			        } 
			    }		
				?>		
			</div>
	
			<div class="article_contents">
		    	<?php the_content();?>
	
				<?php if( have_rows('project_details') ): ?>
					<table class="project_details">		 	
					    <?php while ( have_rows('project_details') ) : the_row();?>			  
					        <tr><td class="label"><?php the_sub_field('title');?></td><td><?php the_sub_field('text');?></td></tr>
					    <?php endwhile;?>
				    </table>	
				<?php endif;?>
	
		    </div>
		</section>
		
		<?php if( have_rows('footnotes') ): ?>
			<section class="footnotes">
	
			    <?php $i = 1;
				while ( have_rows('footnotes') ) : the_row();
				    echo '<div id="footnote-'.$i.'" class="footnote">'.get_sub_field('footnote').'</div>';
				    $i++;
				endwhile;?>
	
		    </section>
		<?php endif;?>	
	</article>

<?php } ?>