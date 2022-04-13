// $(function() {
//     var page = 0;
//     $(window).scroll(function() {
//       var scrollTop = $(this).scrollTop(); //滚动条距离顶部的高度
//       var scrollHeight = $(document).height() - 100; //当前页面的总高度
//       var windowHeight = $(this).height(); //当前可视的页面高度
      
//       if (scrollTop + windowHeight >= scrollHeight && $(window).width() <= 480) { //距离顶部+当前高度 >=文档总高度 即代表滑动到底部
//         var _url = './list.jsonp';
//         if(page >= 1){
//           _url = './list_'+ page +'.jsonp';
//         }
//         $.ajax({
//           url: _url,
//           type: 'GET',
//           dataType: "jsonp", //指定服务器返回的数据类型
//           jsonpCallback: "mobileListHandler",
//           success: function(res) {
//             page++
//             var html = ''
//             for( var i = 0; i<res.msg.doclist.length;i++){
//               if(!res.msg.doclist[i].docsource){
//                 html+=`<li>
//               <a href="` + res.msg.doclist[i].docpuburl + `">
//                     <span class="list3-title">` + res.msg.doclist[i].doctitle + `</span>
//                     <span class="list3-time">` + res.msg.doclist[i].docpubtime + `</span>
//                 </a>
//               </li>`
//               }else{
//                 html+=`<li>
//               <a href="` + res.msg.doclist[i].docpuburl + `">
//                     <span class="text">` + res.msg.doclist[i].doctitle + `</span>
//                     <span class="date">` + res.msg.doclist[i].docpubtime + `</span>
//                     <span class="right"><span class="icon-icon_documents_alt"></span>` + res.msg.doclist[i].docsource + `</span>
//                 </a>
//               </li>`
//               }
              
//             }
//             $('.list3').append(html)
//           },
//           error: function(res) {
//             console.log(res)
//             $('.loading').hide()
//           }
//         });
//       }
//     })
//   })