<?php
/*
 * Enable post thumbnail support
 */
	add_theme_support( 'post-thumbnails' );

	//set_post_thumbnail_size( 600, 400, true ); // Normal post thumbnails
	//add_image_size( 'banner-thumb', 566, 250, true ); // Small thumbnail size
    add_image_size( 'square-thumb', 256, 256, true ); // Square thumbnail used by sharethis and facebook
    add_image_size( 'times-thumb', 190, 265, true );	


/*
 * Enable Wordpress features
 */
 	
 	// Enable styling of Admin
	add_editor_style('css/editor-style.css');	
	 
    // Turn on menus
    register_nav_menus(
    	array(
    	  'main_menu' => 'Main Menu',
    	)
	);

    
    // Excerpts for pages
    //add_post_type_support( 'page', 'excerpt' );    	



function enqueue_scripts_styles() {

    wp_enqueue_script( 'js', get_template_directory_uri() . "/js/min/js-min.js", array('jquery'), filemtime( get_stylesheet_directory() . '/js/min/js-min.js' ), true );

    wp_localize_script( 'js', 'sitevars', array(
        'ajaxurl'   => admin_url( 'admin-ajax.php' ),
        //'themeurl'  => get_stylesheet_directory_uri()
        )
    ); 

    wp_enqueue_style( 'style', get_template_directory_uri() . "/style.css", array(), filemtime( get_stylesheet_directory() . '/style.css' ) );
}
add_action( 'wp_enqueue_scripts', 'enqueue_scripts_styles' );


/*
 * Enqueue Custom Admin Scripts
 */
	//function custom_admin_scripts() {
		//wp_register_script('custom_admin', get_template_directory_uri() . '/js/admin.js', 'jquery', '1.0');
		//wp_enqueue_script('custom_admin');
	//}
	//add_action( 'admin_enqueue_scripts', 'custom_admin_scripts' ); 



    add_filter('body_class','custom_class_names');
    function custom_class_names($classes) {
        
        // Mobile detects
        switch (true) {         
            case wp_is_mobile() :
                $classes[] = 'is-mobile';                
                break;
            
            default :
                $classes[] = 'not-mobile';                            
                break;
        }

        return $classes;
    }


    /**
     * Attach a class to linked images' parent anchors
     * e.g. a img => a.img img
     */
    function give_linked_images_class($html, $id, $caption, $title, $align, $url, $size, $alt = '' ){
      $classes = 'popup_img'; // separated by spaces, e.g. 'img image-link'

      // check if there are already classes assigned to the anchor
      if ( preg_match('/<a.*? class=".*?">/', $html) ) {
        $html = preg_replace('/(<a.*? class=".*?)(".*?>)/', '$1 ' . $classes . '$2', $html);
      } else {
        $html = preg_replace('/(<a.*?)>/', '$1 class="' . $classes . '" >', $html);
      }
      return $html;
    }
    add_filter('image_send_to_editor','give_linked_images_class',10,8);    



    // Footnotes //     
    function footnotes( $atts ) {
        extract(shortcode_atts(array(
          "fig" => 1,
        ), $atts));     
        return '<sup class="footnote_marker">'.$fig.'</sup>';
    }
    add_shortcode( 'footnote', 'footnotes' );


    function load_article(){
        //$postid = url_to_postid( $_POST['post_url'] ); 

        $args = array('p' => $_POST['post_id']);

        $post_query = new WP_Query( $args );
        while( $post_query->have_posts() ) : $post_query->the_post(); 
            get_template_part('includes/article-content');
        endwhile;
        wp_die();        
    }
    add_action('wp_ajax_nopriv_load_article', 'load_article');
    add_action('wp_ajax_load_article', 'load_article');     
	
?>