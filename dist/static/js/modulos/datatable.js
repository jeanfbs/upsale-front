define(function(){return{Table:function(){function t(t,e,a){this.selector=t,this.exportLinks=a,null!=e&&null!=e&&(this.settings={lengthMenu:[[10,25,50,-1],[10,25,50,"Todos"]],scrollX:!0,scrollY:"80vh",scrollCollapse:!0,pagingType:"simple",sDom:'<"rowDT text-primary" <"col-md-3 col-sm-3 col-xs-8"l> <"col-md-2 col-sm-2 hidden-xs export"><"col-md-5 col-sm-5 hidden-xs text-right"i><"col-md-2 col-xs-4 text-right"p>><"clear">rt<"rowDT text-primary"<"#buttons.col-md-3 col-sm-3 col-xs-8"l> <"col-md-2 col-sm-2 hidden-xs"><"col-md-5 col-sm-5 hidden-xs text-right"i><"col-md-2 col-xs-4 text-right"p>><"clear">',oLanguage:{sLengthMenu:"Itens por página: _MENU_",sZeroRecords:"Nenhum resultado foi encontrado",sInfo:'<span style="margin-right:100px">_START_ - _END_ / _TOTAL_</span>  Página _PAGE_',sInfoEmpty:" - ",sInfoFiltered:"",sProcessing:"Processando...",oPaginate:{sPrevious:'<i class="fa fa-chevron-left" aria-hidden="true"></i>',sNext:'<i class="fa fa-chevron-right" aria-hidden="true"></i>'}}},this.settings.bServerSide="bServerSide"in e&&e.bServerSide,"columns"in e&&(this.settings.columns=e.columns),"columnDefs"in e&&(this.settings.columnDefs=e.columnDefs),this.settings.aaSorting=null==e.aaSorting?[[1,"asc"]]:e.aaSorting,"ajax"in e&&(this.settings.ajax=Object.assign({},e.ajax),delete this.settings.ajax.data),"data"in e.ajax&&(this.settings.ajax.data=function(t){delete t.search,e.ajax.data(t),function(t){for(var e=0;e<t.columns.length;e++)column=t.columns[e],column.searchRegex=column.search.regex,column.searchValue=column.search.value,delete column.search}(t)}))}return t.prototype.makeExportMenu=function(){if(null==this.exportLinks&&null==this.exportLinks)return!1;var t='<div class="dropdown"><button class="btn btn-default btn-sm dropdown-toggle" type="button" id="menu-exportar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i class="fa fa-download fa-fw" aria-hidden="true"></i> Exportar <span class="caret"></span></button><ul class="dropdown-menu" aria-labelledby="menu-exportar">';null!=this.exportLinks[0]&&null!=this.exportLinks[0]&&(t+='<li><a href="'+this.exportLinks[0]+'"><i class="fa fa-file-excel-o" aria-hidden="true"></i> Excel</a></li>'),null!=this.exportLinks[1]&&null!=this.exportLinks[1]&&(t+='<li><a href="'+this.exportLinks[1]+'"><i class="fa fa-file-pdf-o" aria-hidden="true"></i> PDF</a></li>'),null!=this.exportLinks[2]&&null!=this.exportLinks[2]&&(t+='<li><a href="'+this.exportLinks[2]+'"><i class="fa fa-file-text-o" aria-hidden="true"></i> CSV</a></li>'),t+="</ul></div>",$(".export").html(t)},t.prototype.show=function(){this.dataTable=this.selector.DataTable(this.settings),this.registerEvents(),this.makeExportMenu()},t.prototype.redraw=function(){this.dataTable.draw()},t.prototype.registerEvents=function(){_dataTable=this.dataTable,$("#input-search").on("keyup",function(t){_dataTable.draw()}),$("#btn-search").on("click",function(){_dataTable.draw()})},t.prototype.getDT=function(){return this.dataTable},t}()}});