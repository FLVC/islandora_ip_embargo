// Make embargoed thumbnails obvious.
jQuery(document).ready(function($) {
  $('.islandora_ip_embargo_embargoed').wrap('<div style="position:relative;"></div>');
  $('.islandora_ip_embargo_embargoed').after('<span id="embargo_overlay">LIMITED ACCESS<br>Click For More Info</span>');
});
