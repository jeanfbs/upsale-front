define(function(){$.fn.extend({autoLoadAddress:function(){$(this).focusout(function(){cep=$(this).val(),$.ajax({method:"GET",url:"http://api.postmon.com.br/v1/cep/"+cep,dataType:"json",beforeSend:function(){$(".iconLoadCep").removeClass("hide")},complete:function(){$(".iconLoadCep").addClass("hide")},success:function(o){$("#callback").empty(),$("#logradouro").val(o.logradouro),$("#bairro").val(o.bairro),$("#cidade").val(o.cidade),$("#pais").val("Brasil");var a=o.estado_info.nome.toUpperCase().replace(" ","_");$("#estado").select2("val",[a,o.estado_info.nome])},error:function(o,a,e){$("#callback").text("Erro ao chamar o serviço de verificação de CEP")}})})}}),$.fn.extend({validate:function(){$(this).formValidation({framework:"bootstrap",icon:{valid:"",invalid:"",validating:""},locale:"pt_BR"})}})});