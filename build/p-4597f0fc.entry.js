import{r as t,c as s,h as i,H as r,g as e}from"./p-990ce160.js";import{c as n}from"./p-3e8ff66b.js";import{g as o,u as l,s as a}from"./p-aa528952.js";var h=n((function(t){t.exports=function(){var t=function(){for(var t=3,s=document.createElement("b"),i=s.all||[];s.innerHTML="\x3c!--[if gt IE "+ ++t+"]><i><![endif]--\x3e",i[0];);return t>4?t:document.documentMode}(),s=navigator.platform.toLowerCase().indexOf("mac")+1,i=function(t){if(!(this instanceof i))return new i(t);var o=this,l={rows_in_block:50,blocks_in_cluster:4,tag:null,show_no_data_row:!0,no_data_class:"clusterize-no-data",no_data_text:"No data",keep_parity:!0,callbacks:{}};o.options={};for(var a,h=["rows_in_block","blocks_in_cluster","show_no_data_row","no_data_class","no_data_text","keep_parity","tag","callbacks"],c=0;a=h[c];c++)o.options[a]=void 0!==t[a]&&null!=t[a]?t[a]:l[a];var u,d=["scroll","content"];for(c=0;u=d[c];c++)if(o[u+"_elem"]=t[u+"Id"]?document.getElementById(t[u+"Id"]):t[u+"Elem"],!o[u+"_elem"])throw new Error("Error! Could not find "+u+" element");o.content_elem.hasAttribute("tabindex")||o.content_elem.setAttribute("tabindex",0);var f=n(t.rows)?t.rows:o.fetchMarkup(),v={},m=o.scroll_elem.scrollTop;o.insertToDOM(f,v),o.scroll_elem.scrollTop=m;var p=!1,g=0,y=!1,w=function(){s&&(y||(o.content_elem.style.pointerEvents="none"),y=!0,clearTimeout(g),g=setTimeout((function(){o.content_elem.style.pointerEvents="auto",y=!1}),50)),p!=(p=o.getClusterNum())&&o.insertToDOM(f,v),o.options.callbacks.scrollingProgress&&o.options.callbacks.scrollingProgress(o.getScrollProgress())},_=0,b=function(){clearTimeout(_),_=setTimeout(o.refresh,100)};r("scroll",o.scroll_elem,w),r("resize",window,b),o.destroy=function(t){e("scroll",o.scroll_elem,w),e("resize",window,b),o.html((t?o.generateEmptyRow():f).join(""))},o.refresh=function(t){(o.getRowsHeight(f)||t)&&o.update(f)},o.update=function(t){f=n(t)?t:[];var s=o.scroll_elem.scrollTop;f.length*o.options.item_height<s&&(o.scroll_elem.scrollTop=0,p=0),o.insertToDOM(f,v),o.scroll_elem.scrollTop=s},o.clear=function(){o.update([])},o.getRowsAmount=function(){return f.length},o.getScrollProgress=function(){return this.options.scroll_top/(f.length*this.options.item_height)*100||0};var x=function(t,s){var i=n(s)?s:[];i.length&&(f="append"==t?f.concat(i):i.concat(f),o.insertToDOM(f,v))};o.append=function(t){x("append",t)},o.prepend=function(t){x("prepend",t)}};function r(t,s,i){return s.addEventListener?s.addEventListener(t,i,!1):s.attachEvent("on"+t,i)}function e(t,s,i){return s.removeEventListener?s.removeEventListener(t,i,!1):s.detachEvent("on"+t,i)}function n(t){return"[object Array]"===Object.prototype.toString.call(t)}function o(t,s){return window.getComputedStyle?window.getComputedStyle(s)[t]:s.currentStyle[t]}return i.prototype={constructor:i,fetchMarkup:function(){for(var t=[],s=this.getChildNodes(this.content_elem);s.length;)t.push(s.shift().outerHTML);return t},exploreEnvironment:function(s,i){var r=this.options;r.content_tag=this.content_elem.tagName.toLowerCase(),s.length&&(t&&t<=9&&!r.tag&&(r.tag=s[0].match(/<([^>\s/]*)/)[1].toLowerCase()),this.content_elem.children.length<=1&&(i.data=this.html(s[0]+s[0]+s[0])),r.tag||(r.tag=this.content_elem.children[0].tagName.toLowerCase()),this.getRowsHeight(s))},getRowsHeight:function(t){var s=this.options,i=s.item_height;if(s.cluster_height=0,t.length){var r=this.content_elem.children;if(r.length){var e=r[Math.floor(r.length/2)];if(s.item_height=e.offsetHeight,"tr"==s.tag&&"collapse"!=o("borderCollapse",this.content_elem)&&(s.item_height+=parseInt(o("borderSpacing",this.content_elem),10)||0),"tr"!=s.tag){var n=parseInt(o("marginTop",e),10)||0,l=parseInt(o("marginBottom",e),10)||0;s.item_height+=Math.max(n,l)}return s.block_height=s.item_height*s.rows_in_block,s.rows_in_cluster=s.blocks_in_cluster*s.rows_in_block,s.cluster_height=s.blocks_in_cluster*s.block_height,i!=s.item_height}}},getClusterNum:function(){return this.options.scroll_top=this.scroll_elem.scrollTop,Math.floor(this.options.scroll_top/(this.options.cluster_height-this.options.block_height))||0},generateEmptyRow:function(){var t=this.options;if(!t.tag||!t.show_no_data_row)return[];var s,i=document.createElement(t.tag),r=document.createTextNode(t.no_data_text);return i.className=t.no_data_class,"tr"==t.tag&&((s=document.createElement("td")).colSpan=100,s.appendChild(r)),i.appendChild(s||r),[i.outerHTML]},generate:function(t,s){var i=this.options,r=t.length;if(r<i.rows_in_block)return{top_offset:0,bottom_offset:0,rows_above:0,rows:r?t:this.generateEmptyRow()};var e=Math.max((i.rows_in_cluster-i.rows_in_block)*s,0),n=e+i.rows_in_cluster,o=Math.max(e*i.item_height,0),l=Math.max((r-n)*i.item_height,0),a=[],h=e;o<1&&h++;for(var c=e;c<n;c++)t[c]&&a.push(t[c]);return{top_offset:o,bottom_offset:l,rows_above:h,rows:a}},renderExtraTag:function(t,s){var i=document.createElement(this.options.tag),r="clusterize-";return i.className=["clusterize-extra-row",r+t].join(" "),s&&(i.style.height=s+"px"),i.outerHTML},insertToDOM:function(t,s){this.options.cluster_height||this.exploreEnvironment(t,s);var i=this.generate(t,this.getClusterNum()),r=i.rows.join(""),e=this.checkChanges("data",r,s),n=this.checkChanges("top",i.top_offset,s),o=this.checkChanges("bottom",i.bottom_offset,s),l=this.options.callbacks,a=[];e||n?(i.top_offset&&(this.options.keep_parity&&a.push(this.renderExtraTag("keep-parity")),a.push(this.renderExtraTag("top-space",i.top_offset))),a.push(r),i.bottom_offset&&a.push(this.renderExtraTag("bottom-space",i.bottom_offset)),l.clusterWillChange&&l.clusterWillChange(),this.html(a.join("")),"ol"==this.options.content_tag&&this.content_elem.setAttribute("start",i.rows_above),this.content_elem.style["counter-increment"]="clusterize-counter "+(i.rows_above-1),l.clusterChanged&&l.clusterChanged()):o&&(this.content_elem.lastChild.style.height=i.bottom_offset+"px")},html:function(s){var i=this.content_elem;if(t&&t<=9&&"tr"==this.options.tag){var r,e=document.createElement("div");for(e.innerHTML="<table><tbody>"+s+"</tbody></table>";r=i.lastChild;)i.removeChild(r);for(var n=this.getChildNodes(e.firstChild.firstChild);n.length;)i.appendChild(n.shift())}else i.innerHTML=s},getChildNodes:function(t){for(var s=t.children,i=[],r=0,e=s.length;r<e;r++)i.push(s[r]);return i},checkChanges:function(t,s,i){var r=s!=i[t];return i[t]=s,r}},i}()}));const c=class{constructor(i){t(this,i),this.scrollingProgress=s(this,"scrollingProgress",7),this.clusterChanged=s(this,"clusterChanged",7),this.clusterWillChange=s(this,"clusterWillChange",7),this.aOnLazyLoad=s(this,"aOnLazyLoad",7),this.aOnItemClick=s(this,"aOnItemClick",7),this.clusterize=null,this.rows=[],this.instanceUuid="",this.rowsInBlock=10,this.blocksInCluster=4,this.first=0,this.firstInitCluster=!1,this.items=[],this.scrollerHeight=null,this.itemSize=null,this.lazy=!1,this.rowsPerPage=null,this.anyStyle=null,this.styleClass=null,this.itemTag="div",this.contentElemTag="div",this.noDataText="No Data",this.delay=250,this.contentElemClass=null,this.scrollElemClass=null,this.itemElemClass=null}async itemsChanged(){if(this.clusterize){let t=this.element.querySelector('[slot="item"]').cloneNode(!0),s=null,i=null;this.lazy&&(s=this.element.querySelector('[slot="loadingItem"]').cloneNode(!0),i=s.outerHTML);let r=[];r=await o(this.itemTag,this.items,this.itemSize,t.outerHTML,null,null,this.itemElemClass,i),this.clusterize.update(r),this.clusterize.refresh(!0)}}connectedCallback(){this.instanceUuid=l(),this.rowsPerPage?this.rowsInBlock=this.rowsPerPage/this.blocksInCluster:this.rowsPerPage=this.rowsInBlock*this.blocksInCluster}async componentWillLoad(){this.hasHeaderSlot=!!this.element.querySelector('[slot="header"]')}async componentDidLoad(){let t=this.element.querySelector('[slot="item"]').cloneNode(!0);this.lazy&&(t=this.element.querySelector('[slot="loadingItem"]').cloneNode(!0)),this.rows=await o(this.itemTag,this.items,this.itemSize,t.outerHTML,0,this.rowsInBlock*this.blocksInCluster,this.itemElemClass),this.initClusterize(),this.rows=await o(this.itemTag,this.items,this.itemSize,t.outerHTML,this.rowsInBlock*this.blocksInCluster,null,this.itemElemClass),this.clusterize&&(this.clusterize.append(this.rows),this.clusterize.refresh(!0));let s=this.element.querySelector("#any-virtualscroller-scroll-"+this.instanceUuid);a(s,(()=>{this.lazy&&this.aOnLazyLoad.emit({first:this.first,rows:this.rowsPerPage})}),this.delay)}initClusterize(){this.clusterize=new h({rows:this.rows,scrollElem:this.element.querySelector("#any-virtualscroller-scroll-"+this.instanceUuid),contentElem:this.element.querySelector("#any-virtualscroller-content-"+this.instanceUuid),rows_in_block:this.rowsInBlock,blocks_in_cluster:this.blocksInCluster,tag:this.itemTag,no_data_text:this.noDataText,callbacks:{clusterChanged:()=>{const t=this.element.querySelector("#any-virtualscroller-content-"+this.instanceUuid).getElementsByClassName("any-virtual-scroll-item")[0];this.defineVscrollItemClick(),this.first=parseInt(t.getAttribute("data-index")),this.clusterChanged.emit({first:this.first,rows:this.rowsPerPage})},clusterWillChange:()=>{this.clusterWillChange.emit({next:this.first+this.rowsPerPage>=this.items.length?this.items.length-1:this.first+this.rowsPerPage,rows:this.rowsPerPage}),!this.firstInitCluster&&this.lazy&&this.aOnLazyLoad.emit({first:this.first,rows:this.rowsPerPage})},scrollingProgress:t=>{this.scrollingProgress.emit({progress:t})}}}),this.firstInitCluster=!0}defineVscrollItemClick(){let t=this,s=this.element.querySelectorAll(".any-virtual-scroll-item");for(let i=0;i<s.length;i++)s[i].onclick=function(s){t.aOnItemClick.emit({originalEvent:s,index:parseInt(this.getAttribute("data-index"))})}}render(){return i(r,null,i("div",{style:{display:"none"}},i("slot",{name:"item"}),i("slot",{name:"loadingItem"})),i("div",{class:"any-component any-virtualscroller"+(this.styleClass?" "+this.styleClass:""),style:this.anyStyle},this.hasHeaderSlot&&i("div",{class:"any-virtualscroller-header"},i("slot",{name:"header"})),i("div",{id:"any-virtualscroller-scroll-"+this.instanceUuid,class:"any-virtualscroller-scroll clusterize-scroll",style:{height:this.scrollerHeight}},i(this.contentElemTag,{id:"any-virtualscroller-content-"+this.instanceUuid,class:" "+this.contentElemClass},i(this.itemTag,{class:"clusterize-no-data"}))),i("div",{class:"any-virtualscroller-footer"},i("slot",{name:"footer"}))))}get element(){return e(this)}static get watchers(){return{items:["itemsChanged"]}}};c.style=".clusterize-scroll.sc-any-virtual-scroller{max-height:200px;overflow:auto}.clusterize-extra-row.sc-any-virtual-scroller{margin-top:0 !important;margin-bottom:0 !important}.clusterize-extra-row.clusterize-keep-parity.sc-any-virtual-scroller{display:none}.clusterize-content.sc-any-virtual-scroller{outline:0;counter-reset:clusterize-counter}.clusterize-no-data.sc-any-virtual-scroller td.sc-any-virtual-scroller{text-align:center}.sc-any-virtual-scroller-h .clusterize-scroll.sc-any-virtual-scroller{max-height:100%}.sc-any-virtual-scroller-h .any-virtualscroller.sc-any-virtual-scroller .any-virtualscroller-header.sc-any-virtual-scroller{background:var(--surface-b);color:var(--text-color);border:solid var(--surface-d);border-width:1px 0 0 0;padding:1rem 1rem;font-weight:600}";export{c as any_virtual_scroller}