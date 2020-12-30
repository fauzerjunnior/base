<?php defined('ABSPATH') OR exit('No direct script access allowed');
get_header(); ?>

	<!-- <div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<section class="error-404 not-found">
				<header class="page-header">
					<h1 class="page-title"><?php _e( 'Oops! That page can&rsquo;t be found.', 'twentyfifteen' ); ?></h1>
				</header>

				<div class="page-content">
					<p><?php _e( 'It looks like nothing was found at this location. Maybe try a search?', 'twentyfifteen' ); ?></p>

					<?php get_search_form(); ?>
				</div>
			</section>

		</main>
	</div> -->

	<div role="main" class="main">
		<section class="section bg-light-5">
			<img src="img/others/lamp-holder.png" class="img-fluid lamp-style-2 position-absolute transform-center-x appear-animation" data-appear-animation="fadeIn" alt="" />
			<div class="container">
				<div class="row justify-content-center text-center py-5 mt-5 mb-3">
					<div class="col-md-8 col-lg-6 pt-4 mt-5">
						<h1 class="font-weight-bold text-6 mb-5 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200"><strong class="d-block font-weight-bold text-20">404!</strong>PAGE NOT FOUND</h1>
						<p class="mb-5 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="400">The page you were looking for could not be found. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. </p>
						<form id="404ErrorSearch" class="mx-auto max-width-320 mb-5 appear-animation" action="#" method="get" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="600">
							<div class="input-group input-group-style-2">
								<input type="text" class="form-control line-height-1 bg-light border-0" name="s" id="s" placeholder="Enter your keywords..." required="">
								<span class="input-group-btn">
									<button class="btn btn-light align-items-center" type="submit"><i class="fas fa-search text-color-primary"></i></button>
								</span>
							</div>
						</form>
						<a href="index.html" class="btn btn-primary btn-rounded btn-v-3 btn-h-3 font-weight-bold appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="800"><i class="fas fa-angle-left mr-3 text-3"></i> BACK TO HOMEPAGE</a>
					</div>
				</div>
			</div>
		</section>		
	</div>

<?php get_footer(); ?>
