<?php defined('ABSPATH') OR exit('No direct script access allowed'); ?>

<div class="modal fade" id="modalOrcamento" tabindex="-1" role="dialog" aria-labelledby="modalOrcamento" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
	  	<div class="row">
		  <div class="container contentmodal">
		  	<span class="top-sub-title text-color-light">Já conhece nosso negócio? Agora envie a sua necessidade pra gente.</span>
			<h3 class="font-weight-bold text-color-light text-10 mb-4">Solicite seu orçamento!</h3>
		  </div>
		</div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"> 
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
	  	<?php echo do_shortcode('[contact-form-7 id="97" title="Faça seu Orçamento"]'); ?>
      </div>
    </div>
  </div>
</div>


<footer id="footer" class="bg-light mt-0"> 
	<?php wp_footer();?>
	<div class="container">
		<div class="row">
			<div class="col-lg-4 mb-4 mb-lg-0">
				<a href="index.html" class="logo">
					<img alt="MKR Refrigeração" class="img-fluid mb-3" src="<?php echo theme::images().'logo-wide.png'?>">
				</a>
				<p><?php echo get_option('company_description'); ?></p>
			</div>
			<div class="col-lg-4 ml-auto mb-4 mb-lg-0">
				<h2 class="font-weight-bold text-color-dark text-1 mb-3">ONDE NOS ENCONTRAR</h2>
				<ul class="list list-unstyled">
					<li class="mb-2"><i class="fas fa-angle-right mr-2 ml-1"></i> <strong class="text-color-dark">Nosso Endereço:</strong> <?php echo get_option('adress_description'); ?></li>
					<li class="mb-2"><i class="fas fa-angle-right mr-2 ml-1"></i> <strong class="text-color-dark">Contato:</strong> <?php echo get_option('tel_number'); ?></li>
					<li class="mb-2"><i class="fas fa-angle-right mr-2 ml-1"></i> <strong class="text-color-dark">Email:</strong> <?php echo get_option('adress_email'); ?></li>
				</ul>
			</div>
			<div class="col-lg-3">
				<h2 class="font-weight-bold text-color-dark text-1 mb-3">NOSSAS REDES SOCIAIS</h2>
				<ul class="social-icons social-icons-transparent social-icons-icon-dark social-icons-lg">									
					<li class="social-icons-facebook">
						<a href="http://www.facebook.com/" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a>
					</li>									
					<li class="social-icons-instagram">
						<a href="http://www.instagram.com/" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
					</li>								
				</ul>
			</div> 
		</div>
	</div>
	<div class="footer-copyright bg-light footer-copyright-container-border-top py-5">				
		<div class="container">						
			<div class="row text-center text-md-left align-items-center">							
				<div class="col-md-7 col-lg-8">								
					<p class="text-md-left pb-0 mb-0">Developed by FauzerJr</p>					
				</div>							
				<div class="col-md-5 col-lg-4">								
					<p class="text-md-right pb-0 mb-0">MKR Refrigeração © 2018. Todos os Direitos Reservados</p>							
				</div>						
			</div>					
		</div>				
	</div>
</footer>
</div>
<script src="<?php echo theme::JS().'main.js'?>"></script>
</body>
</html>
