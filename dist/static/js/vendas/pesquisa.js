define(["datatable","api"],function(t,l){$(function(){$("#insertHeader").load("../../fragmentos/menu-navegacao.html");var a={bServerSide:!0,ajax:{url:l["vendas.pesquisa"],type:"GET",data:function(a){a.search=[],a.search[0]={filter:"data",value:$("#dataInicial").val()},a.search[1]={filter:"data",value:$("#dataFinal").val()},a.search[2]={filter:"valor",value:$("#valorMinimo").val()},a.search[3]={filter:"valor",value:$("#valorMaximo").val()},a.search[4]={filter:"status",value:$("#status").val()},a.search[5]={filter:"tipoPagamento",value:$("#tipoPagamento").val()},a.search[6]={filter:"cliente",value:$("#busca-cliente").val()},a.search[7]={filter:"multiplosPagamentos",value:$("#multiplosPagamentos").val()},a.search[8]={filter:"desconto",value:$("#desconto").val()},a.search[9]={filter:"nota",value:$("#busca-nota").val()},a.search[10]={filter:"produtos",value:$("#busca-produtos").val()}}},columns:[{name:"codigo"},{name:"data"},{name:"valor"},{name:"numNotaFiscal"},{name:"totalItens"},{name:"multiplosPagamentos"},{name:"desconto"},{name:"status"}],columnDefs:[{orderable:!1,targets:[0,8]},{targets:0,render:function(a,e,t,l){return"<input type='checkbox' class='check-id' id="+(a=t[1])+" value="+a+">"}}]},e=new t.Table($("#tabela-vendas"),a,["http://localhost:8789/download/excel","http://localhost:8789/download/pdf","http://localhost:8789/download/csv"]);e.show(),$("#btn-search").on("click",function(){e.redraw()})})});