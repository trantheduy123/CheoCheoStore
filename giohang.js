var keyLocalStorageItemGiohang = 'danhSachItemGioHang'

/* tao ra đối tượng item giỏ hàng 
input : idSanPham, Soluong
output: Item giỏ hàng
*/

function TaoDoiTuongItemGioHang(idSanPham ,Soluong){
    var itemGioHang = new Object()
    itemGioHang.idSanPham = idSanPham
    itemGioHang.Soluong = Soluong
    return itemGioHang;
}

/* Yêu cầu lấy toàn bộ các item giỏ hàng trong local storage
input:
output: danh sách toàn bộ giỏ hàng lấy trong local storage

*/
function layDanhsachItemGiohang(){
  var danhSachiIemGiohang = new Array();
/* B1 lấy chuôi json lưu trữ trong local strage*/
var jsonDanhSachItemGioHang = localStorage.getItem(keyLocalStorageItemGiohang);
/*    B2 chuyển từ json qua danh sách item giỏ hàng
*/

if(jsonDanhSachItemGioHang == null)
   danhSachItemGioHang =JSON.parse(jsonDanhSachItemGioHang);

  return danhSachiIemGiohang;
}