
; (function ($) {
    var instances = {};

    $.fn.extend({
        wcTableFix: function (options) {
            options = $.extend({}, $.wcTableFix.defaults, {
            }, options);

            return this.each(function () {
                new $.wcTableFix(this, options);
            });
        }
    });

    $.wcTableFix = function (input, options) {
        if (arguments.length === 1 && typeof arguments[0] == "string") {
            var id = arguments[0];

            if (instances.hasOwnProperty(id)) {
                return instances[id];
            } else {
                alert("無此物件")
            }
        } else {
            // Set Default Value
            var self = input;
            var $self = $(input);
            var Thead = $self.find("thead");
            var Id = input.id;

            // 初始化元件
            var init = function(){
                
                // Table Dom Element 重組
                $self.wrap("<div class='fixedTableHeader_wrap' id='" + Id + "_warp'></div>");
                var wcTableFix = $self.parent(".fixedTableHeader_wrap");
                self.SetTableWidth(options.width);
                
                wcTableFix.prepend("<table class='table table-striped table-bordered' id='"+Id+"_header'></table>");
                var TableHeader = $('#' + Id + '_header');
                
                TableHeader.append(Thead);
                $self.wrap( "<div class='fixedTableHeader_inner' id='" + Id + "_inner'></div>" );

                // 設定高度
                self.SetTableHeight(options.height);
                //$self.find("tr:first").addClass(Id + "_mainTR");
                
                // Set TH Width When Table Resize 
                $("#" + Id + " > tbody > tr:first > td").resize(function(e){
                    self.SetThWidth();
                });
                
                // Set TH Width When Window Onload
                self.SetThWidth();
                
            }
            
            // Set TH Width
            self.SetThWidth = function () {
                var $divWrap = $('#' + Id + '_warp');
                var divWrapiW = $divWrap.innerWidth();
                var $tableTbody = $('#' + Id + '_inner' + ' tbody');
                var tableTbodyiW = $tableTbody.innerWidth();
                var thPaddingRight = divWrapiW - tableTbodyiW;
                var mainTD = $("#" + Id + " > tbody > tr:first > td");
                var mainTDNum = $("#" + Id + " > tbody > tr:first > td").length;
                var headTH = $("#" + Id + "_header").find("tr th");
                var thWidth = $divWrap.find("table thead th");

                $(mainTD).each(function (i) {
                    var headThWidth = headTH.eq(i).attr("width");
                    if(headThWidth){
                        $(this).attr("width", headThWidth);
                    }
                });
                
                $(mainTD).each(function (i) {
                    var headThSetWidth = headTH.eq(i).attr("width");
                    var headThRealWidth = headTH.eq(i).width();
                    var colwidth = $(this).outerWidth();
                    if(headThSetWidth){
                        if (i < mainTDNum - 1){
                            headTH.eq(i).css("width", colwidth);
                        }
                    } else {
                        var colwidth = $(this).outerWidth();
                        var num = mainTD.length;                        // To Do Width
                        var CWidth = colwidth > headTH.eq(i).width() ? colwidth : headTH.eq(i).width();
                        thWidth.eq(i).outerWidth(colwidth)
                    }
                });

                $divWrap.find("table thead th:last-child").css({'width' : '','padding-right' : thPaddingRight});
            }
            
            // Bind ReSize Event
            self.bindResize = function () {
                $("#" + Id + " > tbody > tr:first > td").bind("resize", function(e){
                    self.SetThWidth();
                });
            }

            self.SetTableHeight = function (height) {
                var TableInner = $('#' + Id + '_inner');
                TableInner.height(height);
            }

            self.SetTableWidth = function (width) {
                var wcTableFix = $('#' + Id + '_warp');
                wcTableFix.width(width);
            }
            
            init();
            
        }

        instances[input.id] = self;
    };

    // Set Defaults 
    $.wcTableFix.defaults = {
        width: 'auto',
        height: '300'
    };
})(jQuery);
