;(function($) {
    'use strict'

    $("[progress-bar]").each(function () {
        let percentage = $(this).attr("data-percentage");

        // Set initial position to 0%
        $(this).find(".progress-number-mark").css("left", "0%");

        $(this).find(".progress-fill").animate(
            { width: percentage },
            2000
        );

        $(this).find(".progress-number-mark").animate(
            { left: percentage },
            {
                duration: 2000,
                step: function (now) {
                    let data = Math.round(now);
                    $(this).find(".percent").html(data + "%");
                }
            }
        );
    });
})(jQuery);
