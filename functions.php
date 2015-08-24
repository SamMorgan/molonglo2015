<?php
/*
 * Enable post thumbnail support
 */
	add_theme_support( 'post-thumbnails' );

	//set_post_thumbnail_size( 600, 400, true ); // Normal post thumbnails
	//add_image_size( 'banner-thumb', 566, 250, true ); // Small thumbnail size
    add_image_size( 'square-thumb', 256, 256, true ); // Square thumbnail used by sharethis and facebook
    add_image_size( 'times-thumb', 190, 265, true );
    // add_image_size( '288-height', 999, 288, false );	
    // add_image_size( '238-height', 999, 238, false );
    // add_image_size( '188-height', 999, 188, false );
    // add_image_size( '138-height', 999, 138, false );
    // add_image_size( '88-height', 999, 138, false );

    // function pw_show_image_sizes($sizes) {
    //     $sizes['288-height'] = __( '288 height', 'pippin' );
    //     $sizes['238-height'] = __( '238 heigh', 'pippin' );
    //     $sizes['188-height'] = __( '188 heigh', 'pippin' );
    //     $sizes['138-height'] = __( '138 heigh', 'pippin' );
    //     $sizes['88-height'] = __( '88 heigh', 'pippin' );

    //     return $sizes;
    // }
    // add_filter('image_size_names_choose', 'pw_show_image_sizes');

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
                $classes[] = 'is_mobile';                
                break;

            case is_page() :
                $classes[] = 'single';                
                break;

            default :
                $classes[] = 'not_mobile';                            
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
      $line_height = 'line_height_' . get_field('image_line_height',$id);

      // check if there are already classes assigned to the anchor
      if ( preg_match('/<a.*? class=".*?">/', $html) ) {
        $html = preg_replace('/(<a.*? class=".*?)(".*?>)/', '$1 ' . $classes . '$2', $html);
      } else {
        $html = preg_replace('/(<a.*?)>/', '$1 class="' . $classes .' '. $line_height. '" >', $html);
      }
      return $html;
    }
    add_filter('image_send_to_editor','give_linked_images_class',10,8);    


    // shortcodes //
    // Footnotes //     
    function footnotes( $atts ) {
        extract(shortcode_atts(array(
          "fig" => 1,
        ), $atts));     
        return '<sup class="footnote_marker footnote-'.$fig.'">'.$fig.'</sup>';
    }
    add_shortcode( 'footnote', 'footnotes' );
    // wrap for centered images //
    function centerwrap_shortcode( $atts, $content = null) {
        return '<div class="centerwrap">' . $content . '</div>';
    }
    add_shortcode( 'wrap', 'centerwrap_shortcode' );



    function load_about(){
        get_template_part('includes/about-content');
        wp_die();        
    }
    add_action('wp_ajax_nopriv_load_about', 'load_about');
    add_action('wp_ajax_load_about', 'load_about'); 


    function load_article(){
        //$postid = url_to_postid( $_POST['post_url'] ); 
        $args = array('p' => $_POST['post_id']);
        //$args = array('p' => $postid);

        $post_query = new WP_Query( $args );
        while( $post_query->have_posts() ) : $post_query->the_post(); 
            get_template_part('includes/article-content');
        endwhile;
        wp_die();        
    }
    add_action('wp_ajax_nopriv_load_article', 'load_article');
    add_action('wp_ajax_load_article', 'load_article'); 


    include( 'MoonPhase.php' );    


    /**
     *
     * @create a roman numeral from a number
     *
     * @param int $num
     *
     * @return string
     *
     */
    function romanNumerals($num) 
    {
        $n = intval($num);
        $res = '';
     
        /*** roman_numerals array  ***/
        $roman_numerals = array(
                    'M'  => 1000,
                    'CM' => 900,
                    'D'  => 500,
                    'CD' => 400,
                    'C'  => 100,
                    'XC' => 90,
                    'L'  => 50,
                    'XL' => 40,
                    'X'  => 10,
                    'IX' => 9,
                    'V'  => 5,
                    'IV' => 4,
                    'I'  => 1);
     
        foreach ($roman_numerals as $roman => $number) 
        {
            /*** divide to get  matches ***/
            $matches = intval($n / $number);
     
            /*** assign the roman char * $matches ***/
            $res .= str_repeat($roman, $matches);
     
            /*** substract from the number ***/
            $n = $n % $number;
        }
     
        /*** return the res ***/
        return $res;
    }	
?>