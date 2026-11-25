# ร้านบะหมี่อร่อย – Landing Page + ระบบหยิบ/แพ็ค/จ่าหน้า
โครงสร้าง: index.html (หน้าขาย) | admin.html (หลังบ้าน) | config.js | apps-script.gs | images/ (รูปสินค้า)

## ขั้นตอน
1. สร้าง Google Sheet ใหม่ > ส่วนขยาย > Apps Script > วางโค้ด `apps-script.gs` > Deploy > Web app (Execute as Me, Anyone) > คัดลอก URL
2. วาง URL ใน `config.js` ที่ `API_URL` (และแก้ข้อมูลผู้ส่ง `SENDER`)
3. สร้าง GitHub repo > อัปโหลดไฟล์ทั้งหมด (รวมโฟลเดอร์ images)
4. vercel.com > Add New Project > Import repo > Deploy (ไม่ต้องตั้งค่า Framework)
5. ทดสอบสั่งซื้อที่ `/` แล้วดูหลังบ้านที่ `/admin.html`
