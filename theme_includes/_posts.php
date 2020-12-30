<?php defined('ABSPATH') OR exit('No direct script access allowed');

class custom_post {
	private $posts = array();
	public static function add($args = null) {
		GLOBAL $posts;

        if (isset($args) && is_array($args)) {
        	$args = (object) $args;
        	$posts[] = array (
				'name'       => $args->name,
				'slug'       => sanitize_title( strtolower( (isset($args->slug))?$args->slug:$args->name ) ),
				'supports'   => (isset($args->supports) && is_array($args->supports))?$args->supports:array('title','editor','excerpt'),
				'public'     => (isset($args->public))?$args->public:true,
				'with_front' => (isset($args->with_front))?$args->with_front:false,
				'taxonomies' => (isset($args->taxonomies) && is_array($args->taxonomies))?$args->taxonomies:null,	 
        	);
        }
    }

    public static function register() {
    	GLOBAL $posts;
	    	if ($posts) {
	    	foreach ($posts as $post) {

	    		/** 
	    		 * Set default labels for every custom post created
	    		 *
	    		 * @uses $post['name']
	    		 **/
				$labels = array(
					'name'               => $post['name'],
					'singular_name'      => $post['name'],
					'add_new'            => 'Adicionar novo',
					'add_new_item'       => 'Criando novo conteúdo',
					'edit_item'          => 'Editando conteúdo',
					'new_item'           => 'Adicionar',
					'view_item'          => 'Visualizar',
					'all_items' 		 => 'Ver Todos',
					'search_items'       => 'Procurar',
					'not_found_in_trash' => 'Nenhum item encontrado na lixeira',
					'not_found'          => 'Nenhum item encontrada',
					'parent_item_colon'  => '',
					'menu_name'          => $post['name'],
				);
				/**
				 * Set the rules for permalink
				 *
				 * @uses $post['slug']
				 * @uses $post['with_front']
				 **/
				$rules = array (
					'slug'       => $post['slug'],
					'with_front' => $post['with_front'],
				);
				/**
				 * Set the arguments for the new custom post
				 *
				 * @uses $post['public']
				 * @uses $post['supports']
				 * @uses $labels
				 * @uses $rules
				 **/
				$args = array(
					'labels'     => $labels,
					'rewrite'    => $rules,
					'public'     => $post['public'],
					'supports'   => $post['supports'],
				);
				// Register the custom post
				register_post_type($post['slug'], $args);

				// Check if user added taxonomies to this custom post
				if (isset($post['taxonomies'])) {
					foreach ($post['taxonomies'] as $key => $tax) {
						// Check if this taxonomy is array, if false, nothing happens and doesn't return errors
						if (is_array($tax)) {
							/** 
				    		 * Set default labels for every taxonomy for this post
				    		 *
				    		 * @uses $tax['name']
				    		 **/
							$labels = array(
								'name'                       => $tax['name'], 'taxonomy general name',
								'singular_name'              => $tax['name'], 'taxonomy singular name',
								'search_items'               => 'Procurar',
								'all_items'                  => 'Ver Todos',
								'parent_item'                => null,
								'parent_item_colon'          => null,
								'edit_item'                  => 'Editar',
								'update_item'                => 'Atualizar',
								'add_new_item'               => 'Adicionar novo',
								'new_item_name'              => 'Nome',
								'add_or_remove_items'        => 'Adicionar ou remover',
								'choose_from_most_used'      => 'Escolha as mais usados',
								'not_found'                  => 'Nenhum item encontrado',
								'menu_name'                  => $tax['name'],
							);
							/**
							 * Set the arguments for the new custom post
							 *
							 * @uses $post['hierarchical']
							 * @uses $labels
							 **/
							$args = array(
								'hierarchical'      => (isset($tax['hierarchical']))?$tax['hierarchical']:true,
								'labels'            => $labels,
								'show_ui'           => true,
								'show_admin_column' => true,
								'query_var'         => true,
							);

							register_taxonomy( sanitize_title( strtolower( ( isset($tax['slug']) ) ? $tax['slug'] : $tax['name'] ) ) , $post['slug'] , $args);
						}
					}
				}
	    	}
    	}
    	flush_rewrite_rules();
    }
}

foreach (glob(theme::assets('root') . '/theme_custom/posts-*.php') as $post) {
	include $post;
}
custom_post::register();