/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$.ajax({
    url:'test.json',
    dataType:'json',
    type:'get',
    cache:false,
    success:function(data){
        $(data.test).each(function(index, value){
            console.log(value.name);
            //console.log(value.id);
        });
    }
    