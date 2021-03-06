			<nav class="main_nav">
			<section class="categorywrap about" id="about">
				<?php $about_page = get_page_by_path( 'about' );?>
				<h2><a href="<?php echo get_permalink($about_page->ID);?>" class="about_link">About</a></h2>				
				<div class="widget about"><div class="times_ticker"></div></div>
				<span class="category_description"><? the_field('sub_heading',$about_page->ID);?></span>
				<div id="about-wrap">
					<?php get_template_part('includes/about-content');?>
				</div>
				<?php
					$rollover_img = wp_get_attachment_image_src( get_post_thumbnail_id($about_page->ID), 'full' );
					if($rollover_img){
						echo '<div class="bg_rollover" style="background-image:url('.$rollover_img[0].');"></div>';
					}					
				?>								
			</section>
			<section class="categorywrap times">
				<h2><a href="#times" class="category_toggle">Times</a></h2>
				
				<?php 
					get_template_part('includes/widget-times');
					echo '<span class="category_description">' . category_description(3) . '</span>';
				?>	

				<div class="category_posts">			        				
					<?php 
						$times_args = array('category_name' => 'times','posts_per_page'=>-1);
						$times_query = new WP_Query( $times_args );
		
						if ( $times_query->have_posts() ) {
							echo '<ul>';
							while ( $times_query->have_posts() ) {
								$times_query->the_post(); 
									echo '<li>';
									if ( has_post_thumbnail() ) { 
										echo '<a href="'.get_permalink().'" data-id="'.$post->ID.'" data-caption="'.get_the_title().'" class="post_link has_caption">';
										the_post_thumbnail('medium');
										//$image = wp_get_attachment_image_src( get_post_thumbnail_id(), 'medium' );
										//echo '<img src="'.$image[0].'" >';
										echo '</a>';									
									} 								
									echo '</li>';
							}
							echo '</ul>';
						}					
					?>						
				</div>

				<?php 
					$rollover_img = get_field('rollover_image','category_3');
					if($rollover_img){
						echo '<div class="bg_rollover" style="background-image:url('.$rollover_img.');"></div>';
					}					
				?>

			</section>
			<section class="categorywrap new">
				<h2><a href="#new" class="category_toggle">New</a></h2>
				<?php 
					get_template_part('includes/widget-new');
					echo '<span class="category_description">' . category_description(4) . '</span>'; 
				?>						
				<div class="category_posts">
					<?php 
						$new_args = array('category_name' => 'new','posts_per_page'=> -1);
						$new_query = new WP_Query( $new_args );
		
						if ( $new_query->have_posts() ) {
							echo '<ul>';
							while ( $new_query->have_posts() ) {
								$new_query->the_post(); 
									echo '<li>';
									
									if ( has_post_thumbnail() ) { 
										echo '<a href="'.get_permalink().'" data-id="'.$post->ID.'" class="post_link">';
										the_post_thumbnail('full');
										echo '</a>';									
									} 
									echo '<h4>'.get_the_title().'</h4>';								
									echo '</li>';
							}
							echo '</ul>';
						}					
					?>														
				</div>	
				<?php 
					$rollover_img = get_field('rollover_image','category_4');
					if($rollover_img){
						echo '<div class="bg_rollover" style="background-image:url('.$rollover_img.');"></div>';
					}					
				?>							
			</section>
			<section class="categorywrap roman">
				<h2><a href="roman" class="category_toggle">Roman</a></h2>
				<?php 
					get_template_part('includes/widget-roman');
					echo '<span class="category_description">' . category_description(5) . '</span>';					
				?>
				<div class="category_posts">
									
					<?php 
						$roman_args = array('category_name' => 'roman','posts_per_page'=>-1);
						$roman_query = new WP_Query( $roman_args );
		
						if ( $roman_query->have_posts() ) {
							echo '<ul>';
							while ( $roman_query->have_posts() ) {
								$roman_query->the_post(); 
									echo '<li>';
									
									if ( has_post_thumbnail() ) { 
										echo '<a href="'.get_permalink().'" data-id="'.$post->ID.'" class="post_link">';
										the_post_thumbnail('times-thumb');
										echo '</a>';									
									} 
									echo '<h4>'.get_the_title().'</h4>';
									$sub_heading = get_field('sub_heading');
									if($sub_heading){
										echo '<h5>'.$sub_heading.'</h5>';
									}								
									echo '</li>';
							}
							echo '</ul>';
						}					
					?>					
				</div>
				<?php 
					$rollover_img = get_field('rollover_image','category_5');
					if($rollover_img){
						echo '<div class="bg_rollover" style="background-image:url('.$rollover_img.');"></div>';
					}
				?>								
			</section>
		</nav>		