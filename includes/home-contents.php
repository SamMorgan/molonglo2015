		<nav class="main_nav">
			<section class="category">
				<h2><span class="category_toggle">About</span></h2>
				<div class="category_posts">
					
				</div>
			</section>
			<section class="category times">
				<h2><span class="category_toggle">Times</span></h2>
				<div class="category_posts">
			        <?php get_template_part('includes/widget-clock');?>				
					<?php 
						$times_args = array(
							//'post_type' 	=> 'post',
							'category_name' => 'times'
						);

						$times_query = new WP_Query( $times_args );
		
						if ( $times_query->have_posts() ) {
							echo '<ul>';
							while ( $times_query->have_posts() ) {
								$times_query->the_post(); 
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
			</section>
			<section class="category">
				<h2><span class="category_toggle">New</span></h2>
				<div class="category_posts">					
					<?php get_template_part('includes/widget-new');?>
				</div>
			</section>
			<section class="category roman">
				<h2><span class="category_toggle">Roman</span></h2>
				<div class="category_posts">
					<?php get_template_part('includes/widget-roman');?>				
					<?php 
						$roman_args = array('category_name' => 'roman');

						$roman_query = new WP_Query( $roman_args );
		
						if ( $roman_query->have_posts() ) {
							echo '<ul>';
							while ( $roman_query->have_posts() ) {
								$roman_query->the_post(); 
									echo '<li><a href="'.get_permalink().'" data-id="'.$post->ID.'" class="post_link">';
									 
									echo '<h4>'.get_the_title().'</h4>';
									$sub_heading = get_field('sub_heading');
									if($sub_heading){
										echo '<h5>'.$sub_heading.'</h5>';
									}
									the_excerpt();								
									echo '</a></li>';
							}
							echo '</ul>';
						}					
					?>					
				</div>
			</section>
		</nav>