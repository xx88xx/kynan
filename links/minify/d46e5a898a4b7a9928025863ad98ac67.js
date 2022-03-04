class SaveLink extends BaseComponent{run(){this.listen([[this.opts.$titleInput,'keyup change',this.changeTitle],[this.opts.$contentInput,'keyup change',this.changeContent],[this.opts.$usernameInput,'keyup change',this.changeUsername],[this.opts.$draft,'click',this.draft],[this.opts.$publish,'click',this.publish],[this.opts.$form,'beforeSubmit',()=>false],]);if(this.opts.isNotPopularUrl){this.changeContent();}
setTimeout(()=>this.opts.$usernameInput.focus(),1000);}
changeContent(){let newUrl=this.opts.$contentInput.val();let urlTitle=newUrl.replace(/^(http|https):\/\//,'');this.opts.$descr_link.attr('href',newUrl).text(urlTitle);}
changeTitle(){this.opts.$descr_title.text(this.opts.$titleInput.val());}
changeUsername(){let newUrl=this.opts.urlTemplate.replace('{hostname}',this.opts.hostname).replace('{username}',this.opts.$usernameInput.val());let urlTitle=newUrl.replace(/^(http|https):\/\//,'');this.opts.$descr_link.attr('href',newUrl).text(urlTitle);this.opts.$contentInput.val(newUrl);}
draft($el){this.clickSubmitBtn($el,1);}
publish($el){this.clickSubmitBtn($el,0);}
clickSubmitBtn($el,isPrivate){$el.prop('disabled',true);this.opts.$private.val(isPrivate);return this.submit();}
submit(){$.post(this.opts.$form.attr('action'),this.opts.$form.serialize()).done((response)=>show_modal({"class":"alert alert-success",'text':'Link saved successfully.','timeout':20000,after:()=>this.afterSave(response)})).fail((xhr)=>show_modal({'class':'alert alert-success','text':'Error saving link: '+xhr.responseText}));return false;}
afterSave(response){if(response.id){window.location=response.profile_url;}}};