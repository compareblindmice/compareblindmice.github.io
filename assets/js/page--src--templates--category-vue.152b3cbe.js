(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/qiM":function(e,t,a){},"6t1d":function(e,t,a){"use strict";a("/qiM")},"U/0A":function(e,t,a){"use strict";a("ruzq")},nldV:function(e,t,a){"use strict";a.r(t);a("TeQF"),a("QWBl"),a("yXV3"),a("oVuX"),a("2B1R"),a("ToJy"),a("DQNa"),a("07d7"),a("B6y2"),a("rB9j"),a("JfAA"),a("UxlC"),a("EnZy"),a("mRH6"),a("FZtP"),a("R5XZ");var o=a("Xvt5"),n=a("qac8"),r={components:{SfProductCardHorizontal:o.a,SfButton:n.a},computed:{console:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return console})),window:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return window}))},metaInfo:function(){return{title:this.generate_title(),meta:[{name:"description",content:"Need to find cheap blinds near you? Why not "+this.generate_title().toLowerCase()+" online to find the perfect blind for your specific needs."}]}},mounted:function(){this.loadMoreProductsOnScrollBottom()},data:function(){return{visibleCount:10,is_mobile:this.detect_mobile()}},methods:{titleCase:function(e){return e.toLowerCase().split(" ").map((function(e){return e.replace(e[0],e[0].toUpperCase())})).join(" ")},generate_title:function(){var e="compare";return this.$page.category.colour&&(e+=" "+this.$page.category.colour),this.$page.category.model&&(e+=" "+this.$page.category.model),this.$page.category.category&&(e+=" "+this.$page.category.category),e+=" blinds",this.titleCase(e.replaceAll?e.replaceAll("-"," ").replaceAll(" and "," & "):e)},loadMoreProductsOnScrollBottom:function(){var e=this;window.onscroll=function(){Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight===document.documentElement.offsetHeight&&(e.visibleCount+=50,e.visibleCount>100&&(e.$page.category.page,e.$page.category.pages))}},clean_tag:function(e){return e.replaceAll?e.replaceAll("-"," ").replaceAll("shutters and","shutters").replaceAll("curtains and","curtains").replaceAll(" and "," & "):e},determine_slug:function(e,t,a){var o=[];return a&&o.push(a),t&&o.push(t),e&&o.push(e),(o=o.join("-")).replaceAll?o.replaceAll(" ","-"):o},calc_all_tags:function(){var e=this,t={};return this.$page.category.products.forEach((function(a){a.colour&&a.colour!=e.$page.category.colour&&(t[a.colour]||(t[a.colour]={name:a.colour,slug:e.determine_slug(e.$page.category.category,e.$page.category.model,a.colour),count:0}),t[a.colour].count++),a.model&&a.model!=e.$page.category.model&&(t[a.model]||(t[a.model]={name:a.model,slug:e.determine_slug(e.$page.category.category,a.model,e.$page.category.colour),count:0}),t[a.model].count++),a.category&&a.category!=e.$page.category.category&&(t[a.category]||(t[a.category]={name:a.category,slug:e.determine_slug(a.category,e.$page.category.model,e.$page.category.colour),count:0}),t[a.category].count++)})),Object.values(t).sort((function(e,t){return e.count<t.count?1:e.count>t.count?-1:0}))},go_affiliate:function(e,t,a){if(window&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"affiliate_click",affiliate_link_site:e.site,affiliate_link_url:e.url,affiliate_link_value:e.affiliate.value})),e.affiliate.link&&a){var o=a.target;o&&"A"!=o.nodeName&&(o=o.parentElement),o&&(o.setAttribute("href",e.affiliate.link),t&&!this.is_mobile&&setTimeout((function(){return o.setAttribute("href",e.url)}),100))}},page_link:function(e){return 0==e?"/compare-"+this.$page.category.slug+"-blinds/":"/compare-"+this.$page.category.slug+"-blinds-"+(e+1)+"/"},get_pagination:function(){var e=this.$page.category.page,t=this.$page.category.pages,a=[1];return e<4?a.push(2,3,4,5,6,7,8):e>t-5?a.push(t-7,t-6,t-5,t-4,t-3,t-2,t-1):a.push(e-2,e-1,e,e+1,e+2,e+3,e+4),a.push(t),1==(a=a.filter((function(e,a,o){return o.indexOf(e)===a&&e>0&&e<=t}))).length?[]:a},detect_mobile:function(){if(!window||!window.navigator)return!1;var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t}}},i=(a("U/0A"),a("6t1d"),a("KHd+")),l=null,c=Object(i.a)(r,(function(){var e=this,t=this,a=t.$createElement,o=t._self._c||a;return o("Layout",[o("h1",[t._v(t._s(t.generate_title()))]),o("div",{ref:"taglist",staticClass:"taglist oneline",on:{mouseover:function(e){return t.$refs.taglist.classList.remove("oneline")},mouseout:function(e){return t.$refs.taglist.classList.add("oneline")}}},[o("span",{staticClass:"tag tag-filter",on:{click:function(e){return e.target.parentElement.classList.toggle("oneline")}}},[t._v("Filter:")]),t.$page.category.colour&&(t.$page.category.model||t.$page.category.category)?o("a",{staticClass:"tag tag-remove",attrs:{href:"/compare-"+t.determine_slug(t.$page.category.category,t.$page.category.model,"")+"-blinds/"}},[t._v("\n            "+t._s(t.clean_tag(t.$page.category.colour))+"\n        ")]):t._e(),t.$page.category.model&&(t.$page.category.colour||t.$page.category.category)?o("a",{staticClass:"tag tag-remove",attrs:{href:"/compare-"+t.determine_slug(t.$page.category.category,"",t.$page.category.colour)+"-blinds/"}},[t._v("\n            "+t._s(t.clean_tag(t.$page.category.model))+"\n        ")]):t._e(),t.$page.category.category&&(t.$page.category.model||t.$page.category.colour)?o("a",{staticClass:"tag tag-remove",attrs:{href:"/compare-"+t.determine_slug("",t.$page.category.model,t.$page.category.colour)+"-blinds/"}},[t._v("\n            "+t._s(t.clean_tag(t.$page.category.category))+"\n        ")]):t._e(),t._l(this.calc_all_tags(),(function(e){return o("a",{directives:[{name:"show",rawName:"v-show",value:e.slug!=t.$page.category.slug,expression:"tag.slug != $page.category.slug"}],key:e.name,staticClass:"tag tag-add",attrs:{href:"/compare-"+e.slug+"-blinds/"}},[t._v("\n            "+t._s(t.clean_tag(e.name))+"\n        ")])}))],2),o("span",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img.lazy",loading:"/loading.png"},expression:"{ selector: 'img.lazy', loading: '/loading.png'}"}]},t._l(t.$page.category.products.filter((function(t,a){return a<e.visibleCount})),(function(e,a){return o("SfProductCardHorizontal",{key:e.url,staticClass:"product-container",attrs:{regularPrice:"from £"+e.price.toFixed(2)},scopedSlots:t._u([{key:"image",fn:function(){return[o("a",{attrs:{href:t.is_mobile&&e.affiliate.link?e.affiliate.link:e.url,rel:"nofollow,noopener,noreferrer",target:"_blank"},on:{click:function(a){return t.go_affiliate(e,!0,a)},mousedown:function(a){return t.go_affiliate(e,!1,a)}}},[a<3?o("img",{staticClass:"sf-product-card-horizontal__picture",attrs:{src:"/product-images/"+e.paththumb,alt:e.title,width:"140"}}):t._e(),a>=3?o("img",{staticClass:"sf-product-card-horizontal__picture lazy",attrs:{"data-src":"/product-images/"+e.paththumb,alt:e.title,width:"140"}}):t._e()])]},proxy:!0},{key:"title",fn:function(){return[o("a",{staticClass:"sf-product-card-horizontal__link",attrs:{href:t.is_mobile&&e.affiliate.link?e.affiliate.link:e.url,rel:"nofollow,noopener,noreferrer",target:"_blank"},on:{click:function(a){return t.go_affiliate(e,!0,a)},mousedown:function(a){return t.go_affiliate(e,!1,a)}}},[o("h3",{staticClass:"sf-product-card-horizontal__title"},[t._v("\n                "+t._s(e.title+" ("+e.site+")")+"\n                ")])])]},proxy:!0},{key:"description",fn:function(){return[o("p",{staticClass:"sf-product-card-horizontal__description desktop-only truncate-overflow",on:{click:function(e){return e.target.classList.toggle("truncate-overflow")},mouseover:function(e){return e.target.classList.remove("truncate-overflow")},mouseout:function(e){return e.target.classList.add("truncate-overflow")}}},[t._v("\n                    "+t._s(e.description)+"\n                ")])]},proxy:!0},{key:"add-to-cart",fn:function(){return[o("SfButton",{attrs:{link:t.is_mobile&&e.affiliate.link?e.affiliate.link:e.url,rel:"nofollow,noopener,noreferrer",target:"_blank"},on:{click:function(a){return t.go_affiliate(e,!0,a)},mousedown:function(a){return t.go_affiliate(e,!1,a)}}},[t._v("\n                    Shop now\n                ")])]},proxy:!0},{key:"actions",fn:function(){return[e.categories.length>1?o("span",t._l(e.categories,(function(e){return o("a",{directives:[{name:"show",rawName:"v-show",value:e!=t.$page.category.slug,expression:"c != $page.category.slug"}],key:e,staticClass:"tag",attrs:{href:"/compare-"+e+"-blinds/"}},[t._v("\n                        "+t._s(t.clean_tag(e))+"\n                    ")])})),0):t._e()]},proxy:!0},{key:"reviews",fn:function(){return[o("span")]},proxy:!0},{key:"wishlist-icon",fn:function(){return[o("span")]},proxy:!0}],null,!0)})})),1),o("span",{staticClass:"page-2",staticStyle:{display:"none"}},t._l(t.$page.category.products.filter((function(t,a){return a>=e.visibleCount})),(function(e){return o("div",{key:e.url},[o("a",{attrs:{href:e.url,rel:"nofollow,noopener,noreferrer",target:"_blank"}},[o("h3",[t._v(t._s(e.title+" ("+e.site+")"))])]),o("p",[t._v(t._s(e.description))]),t._l(e.categories,(function(e){return o("a",{key:e,attrs:{href:"/compare-"+e+"-blinds/"}},[t._v(t._s(t.clean_tag(e)))])}))],2)})),0),o("div",{staticClass:"pagination"},t._l(this.get_pagination(),(function(e){return o("a",{key:e,staticClass:"pagination-page tag",attrs:{href:t.page_link(e-1)}},[t._v(t._s(e))])})),0),o("br"),o("br"),o("br")])}),[],!1,null,"1b0a4b26",null);"function"==typeof l&&l(c);t.default=c.exports},ruzq:function(e,t,a){}}]);