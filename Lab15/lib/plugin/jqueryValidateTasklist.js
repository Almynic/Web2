(function($){
    $.fn.validateTitle = function(options){
        var _options = $.extend({allow_blank: false, allow_whitespace: false},options||{});
        var _save=true;

        this.each(function(){
            var _value=($(this).find("input[name='title']").val()=="");
            var _valueWs=($(this).find("input[name='title']").val().match(/\s+/g,""));

            if(_options.allow_blank){
                _value=false;
            }
            if(_options.allow_whitespace){
                _valueWs=false;
            }

            if(_value||_valueWs){
                $(this).find("input[name='title']").css("border", "1px solid red");
                alert("Can't be blank");
                _save=false;
            }
        });
        return _save;
    }
})(jQuery);