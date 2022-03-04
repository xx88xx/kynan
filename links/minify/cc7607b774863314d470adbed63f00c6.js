class CreateLink extends BaseComponent{run(){this.listen([[this.opts.$contentInput,'keyup change',this.filter],[this.opts.$tabs,'click',this.filter],[this.opts.$createLink,'click',this.submit],[this.opts.$createPopularLink,'click',this.submitPopular],[this.opts.$createPaidLink,'click',this.createPaidLink],]);setTimeout(()=>this.opts.$contentInput.focus(),1000);}
filter(){let needle=this.opts.$contentInput.val().trim();let isInputEmpty=needle.length===0;if(this.isPopularTabActive()){this.highlightPopularsBy(needle,isInputEmpty);}
else if(this.isPaymentsTabActive()){this.highlightPaymentsBy(needle,isInputEmpty);}}
highlightPopularsBy(needle,isInputEmpty){needle=needle.replace(/^(http|https):\/\//,'');this.opts.$popularLinkContainers.show().filter(function(){return $(this).data('hostname').indexOf(needle)===-1}).hide();}
highlightPaymentsBy(needle,isInputEmpty){needle=needle.replace(/^(http|https):\/\//,'');this.opts.$paymentsLinkContainers.show().filter(function(){return $(this).data('hostname').indexOf(needle)===-1}).hide();}
submitPopular($el){this.opts.$contentInput.val($el.data('hostname'));this.submit($el);}
submit($el){show_modal({url:this.opts.createUrl+'?'+(new URLSearchParams({'type':$el.data('type-id'),'content':this.opts.$contentInput.val().trim()}).toString()),class:'modal-links',backdrop:'static',closeBtn:false});}
isPopularTabActive(){return this.opts.$popularTab.closest('li').hasClass('active');}
isPaymentsTabActive(){return this.opts.$paymentsTab.closest('li').hasClass('active');}
createPaidLink(){show_modal({url:this.opts.createPaidUrl+'?'+(new URLSearchParams({'type':1,'pullSourceMeta':1,'content':this.opts.$contentInput.val().trim()}).toString()),class:'modal-links',backdrop:'static',closeBtn:false});}};