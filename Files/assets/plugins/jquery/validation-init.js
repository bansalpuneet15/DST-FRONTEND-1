var Script=function(){$.validator.setDefaults({submitHandler:function(){alert("submitted!");}});$().ready(function(){$("#personalddform").validate({rules:{title:"required",fname:"required",sname:"required",b_date:"required",gender:"required",pin_no:{required:true,minlength:6},},messages:{title:"Please enter your title",fname:"Please enter your firstname",sname:"Please enter your lastname",b_date:"Please select Birthday",gender:"Please select Gender",pin_no:{required:"Please enter a pin_no",minlength:"Your username must consist of at least 6 characters"},}});$("#username").focus(function(){var firstname=$("#firstname").val();var lastname=$("#lastname").val();if(firstname&&lastname&&!this.value){this.value=firstname+"."+lastname;}});var newsletter=$("#newsletter");var inital=newsletter.is(":checked");var topics=$("#newsletter_topics")[inital?"removeClass":"addClass"]("gray");var topicInputs=topics.find("input").attr("disabled",!inital);newsletter.click(function(){topics[this.checked?"removeClass":"addClass"]("gray");topicInputs.attr("disabled",!this.checked);});});}();