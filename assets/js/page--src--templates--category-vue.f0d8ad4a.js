(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/qiM":function(t,e,r){},"6t1d":function(t,e,r){"use strict";r("/qiM")},MrnV:function(t,e,r){"use strict";r("bU1Y")},bU1Y:function(t,e,r){},nldV:function(t,e,r){"use strict";r.r(e);r("oVuX"),r("2B1R"),r("rB9j"),r("UxlC"),r("EnZy");var n=r("Xvt5"),o=r("qac8"),a={components:{SfProductCardHorizontal:n.a,SfButton:o.a},metaInfo:function(){return{title:this.generate_title(),meta:[{name:"description",content:"Need to find blinds near you? Why not "+this.generate_title().toLowerCase()+" online to find the perfect blind for your specific needs."}]}},mounted:function(){this.loadMoreProductsOnScrollBottom()},data:function(){return{visibleCount:10}},methods:{titleCase:function(t){return t.toLowerCase().split(" ").map((function(t){return t.replace(t[0],t[0].toUpperCase())})).join(" ")},generate_title:function(){var t="compare";return this.$page.category.colour&&(t+=" "+this.$page.category.colour),this.$page.category.model&&(t+=" "+this.$page.category.model),this.$page.category.category&&(t+=" "+this.$page.category.category),t+=" blinds",this.titleCase(t.replaceAll?t.replaceAll("-"," ").replaceAll(" and "," & "):t)},loadMoreProductsOnScrollBottom:function(){var t=this;window.onscroll=function(){Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight===document.documentElement.offsetHeight&&(console.log("loadMoreProducts",t.visibleCount),t.visibleCount+=50)}}}},l=(r("MrnV"),r("6t1d"),r("KHd+")),i=null,s=Object(l.a)(a,(function(){var t=this,e=this,r=e.$createElement,n=e._self._c||r;return n("Layout",[n("h1",[e._v(e._s(e.generate_title()))]),n("span",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img.lazy",loading:"/loading.png"},expression:"{ selector: 'img.lazy', loading: '/loading.png'}"}]},[e._l(e.$page.category.products.filter((function(e,r){return r<t.visibleCount})),(function(t,r){return n("SfProductCardHorizontal",{key:t.url,staticClass:"product-container",attrs:{regularPrice:"from £"+t.price.toFixed(2)},scopedSlots:e._u([{key:"image",fn:function(){return[n("a",{attrs:{href:t.url,rel:"nofollow,noopener,noreferrer",target:"_blank"}},[r<3?n("img",{staticClass:"sf-product-card-horizontal__picture",attrs:{src:"/product-images/"+t.paththumb,alt:t.title,width:"140"}}):e._e(),r>=3?n("img",{staticClass:"sf-product-card-horizontal__picture lazy",attrs:{"data-src":"/product-images/"+t.paththumb,alt:t.title,width:"140"}}):e._e()])]},proxy:!0},{key:"title",fn:function(){return[n("a",{staticClass:"sf-product-card-horizontal__link",attrs:{href:t.url,rel:"nofollow,noopener,noreferrer",target:"_blank"}},[n("h3",{staticClass:"sf-product-card-horizontal__title"},[e._v("\n                "+e._s(t.title+" ("+t.site+")")+"\n                ")])])]},proxy:!0},{key:"description",fn:function(){return[n("p",{staticClass:"sf-product-card-horizontal__description desktop-only truncate-overflow"},[e._v("\n                    "+e._s(t.productdescription+" "+t.metadescription)+"\n                ")])]},proxy:!0},{key:"add-to-cart",fn:function(){return[n("SfButton",{attrs:{link:t.url,rel:"nofollow,noopener,noreferrer",target:"_blank"}},[e._v("\n                    Shop now\n                ")])]},proxy:!0},{key:"actions",fn:function(){return[t.categories.length>1?n("span",e._l(t.categories,(function(t){return n("a",{directives:[{name:"show",rawName:"v-show",value:t!=e.$page.category.slug,expression:"c != $page.category.slug"}],key:t,staticClass:"tag",attrs:{href:"/compare-"+t+"-blinds/"}},[e._v("\n                        "+e._s(t.replaceAll?t.replaceAll("-"," ").replaceAll("shutters and","shutters").replaceAll("curtains and","curtains").replaceAll(" and "," & "):t)+"\n                    ")])})),0):e._e()]},proxy:!0},{key:"reviews",fn:function(){return[n("span")]},proxy:!0},{key:"wishlist-icon",fn:function(){return[n("span")]},proxy:!0}],null,!0)})})),n("br"),n("br"),n("br")],2),n("span",{staticClass:"page-2",staticStyle:{display:"none"}},e._l(e.$page.category.products.filter((function(e,r){return r>=t.visibleCount})),(function(t){return n("div",{key:t.url},[n("a",{attrs:{href:t.url,rel:"nofollow,noopener,noreferrer",target:"_blank"}},[n("h3",[e._v(e._s(t.title+" ("+t.site+")"))])]),n("p",[e._v(e._s(t.productdescription+" "+t.metadescription))]),e._l(t.categories,(function(t){return n("a",{key:t,attrs:{href:"/compare-"+t+"-blinds/"}},[e._v(e._s(t.replaceAll?t.replaceAll("-"," ").replaceAll("shutters and","shutters").replaceAll("curtains and","curtains").replaceAll(" and "," & "):t))])}))],2)})),0)])}),[],!1,null,"42045f7c",null);"function"==typeof i&&i(s);e.default=s.exports}}]);