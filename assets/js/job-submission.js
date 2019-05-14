jQuery(document).ready(function($) {
	$( document.body ).on( 'click', '.job-manager-remove-uploaded-file', function() {
		$(this).closest( '.job-manager-uploaded-file' ).remove();

		return false;
	});

	$( document.body ).on( 'click', '#submit-job-form .button.save_draft', function() {
		var $form    = $(this).closest( '#submit-job-form' );
		var is_valid = true;

		$form.find( 'div.draft-required input[required]').each( function() {
			$(this).get( 0 ).reportValidity();
			if ( $(this).is( ':invalid' ) ) {
				is_valid = false;
			}
		} );

		return is_valid;
	});

	$( document.body ).on( 'submit', '.job-manager-form:not(.prevent-spinner-behavior)', function() {
		$(this).find( '.spinner' ).addClass( 'is-active' );
		$(this).find( 'input[type=submit]' ).addClass( 'disabled' ).on( 'click', function() { return false; } );
	});
});
