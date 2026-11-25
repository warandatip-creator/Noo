// ===== แก้ค่าตรงนี้หลัง Deploy Apps Script =====
const API_URL = "PASTE_APPS_SCRIPT_WEB_APP_URL_HERE";
const ADMIN_KEY = "noodle1234"; // ต้องตรงกับใน apps-script.gs
const SENDER = { name: "ร้านบะหมี่อร่อย", phone: "081-234-5678", address: "123 ถ.สุขุมวิท กรุงเทพฯ 10110" };
const PRODUCTS = [
  { sku: "TOM01", name: "บะหมี่กึ่งสำเร็จรูป รสต้มยำกุ้ง (แพ็ค 5 ซอง)", price: 59, img: "images/tomyum.svg" },
  { sku: "MOO01", name: "บะหมี่กึ่งสำเร็จรูป รสหมูสับ (แพ็ค 5 ซอง)", price: 59, img: "images/moosub.svg" }
];
