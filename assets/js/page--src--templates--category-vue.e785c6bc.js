(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/qiM":function(e,t,a){},"6t1d":function(e,t,a){"use strict";a("/qiM")},nldV:function(e,t,a){"use strict";a.r(t);a("QWBl"),a("oVuX"),a("2B1R"),a("ToJy"),a("DQNa"),a("07d7"),a("B6y2"),a("rB9j"),a("JfAA"),a("UxlC"),a("EnZy"),a("mRH6"),a("FZtP"),a("R5XZ");var o=a("Xvt5"),r=a("qac8"),n={components:{SfProductCardHorizontal:o.a,SfButton:r.a},computed:{console:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return console})),window:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return window}))},metaInfo:function(){return{title:this.generate_title(),meta:[{name:"description",content:"Need to find cheap blinds near you? Why not "+this.generate_title().toLowerCase()+" online to find the perfect blind for your specific needs."}]}},mounted:function(){this.loadMoreProductsOnScrollBottom()},data:function(){return{visibleCount:10}},methods:{titleCase:function(e){return e.toLowerCase().split(" ").map((function(e){return e.replace(e[0],e[0].toUpperCase())})).join(" ")},generate_title:function(){var e="compare";return this.$page.category.colour&&(e+=" "+this.$page.category.colour),this.$page.category.model&&(e+=" "+this.$page.category.model),this.$page.category.category&&(e+=" "+this.$page.category.category),e+=" blinds",this.titleCase(e.replaceAll?e.replaceAll("-"," ").replaceAll(" and "," & "):e)},loadMoreProductsOnScrollBottom:function(){var e=this;window.onscroll=function(){Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight===document.documentElement.offsetHeight&&(console.log("loadMoreProducts",e.visibleCount),e.visibleCount+=50)}},clean_tag:function(e){return e.replaceAll?e.replaceAll("-"," ").replaceAll("shutters and","shutters").replaceAll("curtains and","curtains").replaceAll(" and "," & "):e},determine_slug:function(e,t,a){var o=[];return a&&o.push(a),t&&o.push(t),e&&o.push(e),(o=o.join("-")).replaceAll?o.replaceAll(" ","-"):o},calc_all_tags:function(){var e=this,t={};return this.$page.category.products.forEach((function(a){a.colour&&a.colour!=e.$page.category.colour&&(t[a.colour]||(t[a.colour]={name:a.colour,slug:e.determine_slug(e.$page.category.category,e.$page.category.model,a.colour),count:0}),t[a.colour].count++),a.model&&a.model!=e.$page.category.model&&(t[a.model]||(t[a.model]={name:a.model,slug:e.determine_slug(e.$page.category.category,a.model,e.$page.category.colour),count:0}),t[a.model].count++),a.category&&a.category!=e.$page.category.category&&(t[a.category]||(t[a.category]={name:a.category,slug:e.determine_slug(a.category,e.$page.category.model,e.$page.category.colour),count:0}),t[a.category].count++)})),Object.values(t).sort((function(e,t){return e.count<t.count?1:e.count>t.count?-1:0}))},go_affiliate:function(e,t){if(window&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"affiliate_click",affiliate_link_site:e.site,affiliate_link_url:e.url,affiliate_link_value:e.affiliate.value})),e.affiliate.link&&t){var a=t.target;a&&"A"!=a.nodeName&&(a=a.parentElement),a&&(a.setAttribute("href",e.affiliate.link),setTimeout((function(){return a.setAttribute("href",e.url)}),100))}},page_prev:function(){return this.$page.category.page>0&&this.page_link(this.$page.category.page-1)},page_next:function(){return this.$page.category.page<this.$page.category.pages-1&&this.page_link(this.$page.category.page+1)},page_link:function(e){return 0==e?"/compare-"+this.$page.category.slug+"-blinds/":"/compare-"+this.$page.category.slug+"-blinds-"+(e+1)+"/"}}},i=(a("pqze"),a("6t1d"),a("KHd+")),c=null,l=Object(i.a)(n,(function(){var e=this,t=this,a=t.$createElement,o=t._self._c||a;return o("Layout",[o("h1",[t._v(t._s(t.generate_title()))]),o("div",{ref:"taglist",staticClass:"taglist oneline",on:{mouseover:function(e){return t.$refs.taglist.classList.remove("oneline")},mouseout:function(e){return t.$refs.taglist.classList.add("oneline")}}},[o("span",{staticClass:"tag tag-filter",on:{click:function(e){return e.target.parentElement.classList.toggle("oneline")}}},[t._v("Filter:")]),t.$page.category.colour&&(t.$page.category.model||t.$page.category.category)?o("a",{staticClass:"tag tag-remove",attrs:{href:"/compare-"+t.determine_slug(t.$page.category.category,t.$page.category.model,"")+"-blinds/"}},[t._v("\n            "+t._s(t.clean_tag(t.$page.category.colour))+"\n        ")]):t._e(),t.$page.category.model&&(t.$page.category.colour||t.$page.category.category)?o("a",{staticClass:"tag tag-remove",attrs:{href:"/compare-"+t.determine_slug(t.$page.category.category,"",t.$page.category.colour)+"-blinds/"}},[t._v("\n            "+t._s(t.clean_tag(t.$page.category.model))+"\n        ")]):t._e(),t.$page.category.category&&(t.$page.category.model||t.$page.category.colour)?o("a",{staticClass:"tag tag-remove",attrs:{href:"/compare-"+t.determine_slug("",t.$page.category.model,t.$page.category.colour)+"-blinds/"}},[t._v("\n            "+t._s(t.clean_tag(t.$page.category.category))+"\n        ")]):t._e(),t._l(this.calc_all_tags(),(function(e){return o("a",{directives:[{name:"show",rawName:"v-show",value:e.slug!=t.$page.category.slug,expression:"tag.slug != $page.category.slug"}],key:e.name,staticClass:"tag tag-add",attrs:{href:"/compare-"+e.slug+"-blinds/"}},[t._v("\n            "+t._s(t.clean_tag(e.name))+"\n        ")])}))],2),o("span",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img.lazy",loading:"/loading.png"},expression:"{ selector: 'img.lazy', loading: '/loading.png'}"}]},[t._l(t.$page.category.products.filter((function(t,a){return a<e.visibleCount})),(function(e,a){return o("SfProductCardHorizontal",{key:e.url,staticClass:"product-container",attrs:{regularPrice:"from £"+e.price.toFixed(2)},scopedSlots:t._u([{key:"image",fn:function(){return[o("a",{attrs:{href:e.url,rel:"nofollow,noopener,noreferrer",target:"_blank"},on:{click:function(a){return t.go_affiliate(e,a)}}},[a<3?o("img",{staticClass:"sf-product-card-horizontal__picture",attrs:{src:"/product-images/"+e.paththumb,alt:e.title,width:"140"}}):t._e(),a>=3?o("img",{staticClass:"sf-product-card-horizontal__picture lazy",attrs:{"data-src":"/product-images/"+e.paththumb,alt:e.title,width:"140"}}):t._e()])]},proxy:!0},{key:"title",fn:function(){return[o("a",{staticClass:"sf-product-card-horizontal__link",attrs:{href:e.url,rel:"nofollow,noopener,noreferrer",target:"_blank"},on:{"&click":function(a){return t.go_affiliate(e,a)}}},[o("h3",{staticClass:"sf-product-card-horizontal__title"},[t._v("\n                "+t._s(e.title+" ("+e.site+")")+"\n                ")])])]},proxy:!0},{key:"description",fn:function(){return[o("p",{staticClass:"sf-product-card-horizontal__description desktop-only truncate-overflow",on:{click:function(e){return e.target.classList.toggle("truncate-overflow")},mouseover:function(e){return e.target.classList.remove("truncate-overflow")},mouseout:function(e){return e.target.classList.add("truncate-overflow")}}},[t._v("\n                    "+t._s(e.description)+"\n                ")])]},proxy:!0},{key:"add-to-cart",fn:function(){return[o("SfButton",{attrs:{link:e.url,rel:"nofollow,noopener,noreferrer",target:"_blank"},on:{click:function(a){return t.go_affiliate(e,a)}}},[t._v("\n                    Shop now\n                ")])]},proxy:!0},{key:"actions",fn:function(){return[e.categories.length>1?o("span",t._l(e.categories,(function(e){return o("a",{directives:[{name:"show",rawName:"v-show",value:e!=t.$page.category.slug,expression:"c != $page.category.slug"}],key:e,staticClass:"tag",attrs:{href:"/compare-"+e+"-blinds/"}},[t._v("\n                        "+t._s(t.clean_tag(e))+"\n                    ")])})),0):t._e()]},proxy:!0},{key:"reviews",fn:function(){return[o("span")]},proxy:!0},{key:"wishlist-icon",fn:function(){return[o("span")]},proxy:!0}],null,!0)})})),o("br"),o("br")],2),o("span",{staticClass:"page-2",staticStyle:{display:"none"}},t._l(t.$page.category.products.filter((function(t,a){return a>=e.visibleCount})),(function(e){return o("div",{key:e.url},[o("a",{attrs:{href:e.url,rel:"nofollow,noopener,noreferrer",target:"_blank"}},[o("h3",[t._v(t._s(e.title+" ("+e.site+")"))])]),o("p",[t._v(t._s(e.description))]),t._l(e.categories,(function(e){return o("a",{key:e,attrs:{href:"/compare-"+e+"-blinds/"}},[t._v(t._s(t.clean_tag(e)))])}))],2)})),0),o("div",{staticClass:"pagination"},[t.page_prev()?o("a",{staticClass:"pagination-previous sf-link sf-button color-info",attrs:{href:t.page_prev()}},[t._v("previous")]):t._e(),t._v("\n         \n        "),t._l(t.$page.category.pages,(function(e){return o("a",{directives:[{name:"show",rawName:"v-show",value:e>t.$page.category.page-2&&e<t.$page.category.page+4,expression:"index > $page.category.page-2 && index < $page.category.page+4 "}],key:e,staticClass:"pagination-page tag",attrs:{href:t.page_link(e-1)}},[t._v(t._s(e))])})),t._v("\n         \n        "),t.page_next()?o("a",{staticClass:"pagination-next sf-link sf-button color-info",attrs:{href:t.page_next()}},[t._v("next")]):t._e()],2),o("br")])}),[],!1,null,"cf7e2b1e",null);"function"==typeof c&&c(l);t.default=l.exports},pqze:function(e,t,a){"use strict";a("si3W")},si3W:function(e,t,a){}}]);