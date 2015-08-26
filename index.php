<?php get_header(); ?>
<div class="mainwrap">
    <div id="slidewrap">
        
        <div class="sectionwrap homewrap">
            <div class="contentwrap">
                <?php get_template_part('includes/home-content');?>
            </div>
            <?php get_template_part('includes/footer-content');?>      
        </div> 

        <div class="sectionwrap articlewrap">
            <div class="contentwrap" id="article-container">
                
            </div>
            <?php get_template_part('includes/footer-content');?>
        </div>

    </div>
<div>   
<?php get_footer(); ?>