<!DOCTYPE html>
<html <?php language_attributes(); ?> prefix="og: http://ogp.me/ns#">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <title><?php bloginfo('name'); ?><?php wp_title(); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">     
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/images/favicon.png" />
    <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/images/icon-touch.png"/> 
    
    <!--Make Microsoft Internet Explorer behave like a standards-compliant browser. http://code.google.com/p/ie7-js/-->
    <!--[if lt IE 9]>
        <script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
    <![endif]-->
    
    <?php //get_template_part('part-facebook-tags'); ?>
	<script type="text/javascript">
		WebFontConfig = { fontdeck: { id: '58903' } };

		(function() {
		  var wf = document.createElement('script');
		  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		  wf.type = 'text/javascript';
		  wf.async = 'true';
		  var s = document.getElementsByTagName('script')[0];
		  s.parentNode.insertBefore(wf, s);
		})();
	</script>     
    <?php wp_head();?>   
</head>
<body <?php body_class(); ?>>
	<?php include_once("svg-defs.svg");?> 

	<header>
	    
		<?php 
			// $menuArgs = array(
			//     'container'         => 'false',
			//     'menu'              => 'Main Menu',
			//     'menu_id'           => 'main-menu',
			//     'menu_class'        => 'main-menu menu'
			// );
			// wp_nav_menu($menuArgs); 
	    ?>

	    <a id="logo" href="<?php bloginfo('url'); ?>">
	    	<svg alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>"><use xlink:href="#molonglo-logo" /></svg>
	    </a>

		<nav class="breadcrumbs">
			<a href="<?php echo home_url();?>" id="back"><svg><use xlink:href="#left-arrow" /></use></svg></a>
			<a href="<?php echo home_url();?>/#about" class="<?php if(is_page('about')){ echo 'active';}?> about crumb">About</a>
			<a href="<?php echo home_url();?>/#times" class="<?php if(has_category('times')){ echo 'active';}?> times crumb">Times</a>
			<a href="<?php echo home_url();?>/#new" class="<?php if(has_category('new')){ echo 'active';}?> new crumb">New</a>
			<a href="<?php echo home_url();?>/#roman" class="<?php if(has_category('roman')){ echo 'active';}?> roman crumb">Roman</a>
		</nav>
	</header>
