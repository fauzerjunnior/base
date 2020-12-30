<?php defined('ABSPATH') OR exit('No direct script access allowed');?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=no">
    <meta name="HandheldFriendly" content="true"/>
    <meta name="MobileOptimized" content="480" />
    <meta name="msapplication-TileColor" content="#d52d31">
    <meta name="theme-color" content="ffd52d31f">
	<?php wp_head(); ?>
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400,700|Ubuntu" rel="stylesheet">
	<link rel="shortcut icon" href="<?php echo theme::images().'favicon.ico'?>" type="image/x-icon">
	<link rel="stylesheet" href="<?php echo theme::css().'style.css'?>">  
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
	<script src="<?php echo get_template_directory_uri().'/_dev/js/vendor/modernizr/modernizr.min.js'?>"></script>
</head>
<body <?php body_class(); ?>>  
	<div class="body">
		<header id="header" class="header-effect-shrink header-container-no-min-height header-border-bottom-white" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 100, 'stickyHeaderContainerHeight': 100}">
			<div class="header-body bg-white">
				<div class="header-container container">
					<div class="header-row">
						<div class="header-column justify-content-start">
							<div class="header-logo my-3">
								<a href="<?php echo site_url(); ?>">
									<img alt="MKR" width="127" height="20" src="<?php echo theme::images().'logo-wide.png'?>">
								</a>
							</div>
						</div>
						
						<!-- Atribuição de Variáveis das Páginas -->
						<?php $home = site_url().'/';
						$sobrenos = site_url().'/sobre-nos/';
						$servicos = site_url().'/servicos/';
						$obrasrealizadas = site_url().'/obras-realizadas/';
						$contato = site_url().'/contato/';
						$orcamento = site_url().'/orcamento/';
						$atualpage = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>

						<div class="header-column justify-content-end">
							<div class="header-nav">
								<div class="header-nav-main header-nav-main-dark header-nav-main-effect-1 header-nav-main-sub-effect-1">
									<nav class="collapse">
										<ul class="nav flex-column flex-lg-row" id="mainNav">
											<li class="dropdown">
												<a class="dropdown-item dropdown-toggle
												<?php if ($atualpage==$home) : echo 'active'; endif; ?>
												" href="<?php echo $home; ?>"> 
													Home
												</a>
											</li>
											<li class="dropdown"> 
												<a class="dropdown-item dropdown-toggle <?php if ($atualpage==$sobrenos) : echo 'active'; endif; ?>" href="<?php echo $sobrenos; ?>">
													Sobre Nós
												</a>
											</li>
											<li class="dropdown">
												<a class="dropdown-item dropdown-toggle <?php if ($atualpage==$servicos) : echo 'active'; endif; ?>" href="<?php echo $servicos; ?>">
													Serviços
												</a>
											</li>
											<li class="dropdown">
												<a class="dropdown-item dropdown-toggle <?php if ($atualpage==$obrasrealizadas) : echo 'active'; endif; ?>" href="<?php echo $obrasrealizadas; ?>">
													Obras Realizadas
												</a>
											</li>
											<li class="dropdown">
												<a class="dropdown-item dropdown-toggle <?php if ($atualpage==$contato) : echo 'active'; endif; ?>" href="<?php echo $contato; ?>">
													Contato
												</a>
											</li>
										</ul>
									</nav>
								</div>
								<div class="header-button ml-3">
									<a href="#modalOrcamento" data-toggle="modal" class="btn btn-rounded btn-primary btn-4 btn-icon-effect-1 font-weight-semibold d-none d-sm-block">
										<span class="wrap">
											<span>Peça seu Orçamento</span>
											<i class="fas fa-shopping-cart"></i>
										</span>
									</a>
								</div>
								<button class="header-btn-collapse-nav header-btn-collapse-nav-light ml-3" data-toggle="collapse" data-target=".header-nav-main nav">
									<span class="hamburguer">
										<span></span>
										<span></span>
										<span></span>
									</span>
									<span class="close">
										<span></span>
										<span></span>
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<!-- <?php if ($atualpage) : echo 'Página atual: '. $atualpage .' <br/> Home: '. $home; endif; ?> -->