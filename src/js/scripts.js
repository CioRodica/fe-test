(function ($) {
  'use strict';

  $(document).ready(function () {
    var activeClass = 'is-active';
    var hideClass = 'visually-hidden';
    var $toggle = $('.js-tabs__nav').find('li');
    var $tab = $('.js-tab');
    $toggle.each(function () {
      $(this).on('click', function () {
        var $this = $(this);
        var tabIndex = $this.index();
        if (!$this.hasClass(activeClass)) {
          $this.addClass(activeClass);
        }
        $this.siblings().removeClass(activeClass);

        $tab
          .addClass(hideClass)
          .eq(tabIndex)
          .removeClass(hideClass);
      });
    });
  });

}(jQuery));