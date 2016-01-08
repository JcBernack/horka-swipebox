meteor-swipebox
===============

[Swipebox](http://brutaldesign.github.io/swipebox/) is a jQuery "lightbox" plugin for desktop, mobile and tablet. This package bundles it for Meteor.

     meteor add jcbernack:swipebox

# Usage

Add anchor elements to your page with links to the images, select them via jQuery and call `.swipebox()` on them.

Example:

    <a href="/url/to/image" target="_blank" title="caption of the image" class="swipebox">
      <img src="/url/to/thumbnail">
    </a>
    ...
    $(".swipebox").swipebox();

If you're using Meteors default templating engine (Blaze), the call to `.swipebox()` should be in the `onRendered()` event of the template:
   
    <template name="gallery">
      {{#each images}}
        <a href="{{url}}" target="_blank" title="{{caption}}" class="swipebox">
          <img src="{{thumbnail}}">
        </a>     
      {{/each}}
    </template>

    Template.onRendered(function () {
      $(".swipebox").swipebox();
    });

    Template.gallery.helpers({
      images: function () {
        return Images.find();
      }
    });
