NEUNG RADIO — วิธีเผยแพร่ฟรีด้วย GitHub Pages

1. สมัครหรือเข้าสู่ระบบ https://github.com บน Safari (iPhone)
2. กด + > New repository ตั้งชื่อ neung-radio เลือก Public แล้ว Create repository
3. ใน repository กด Add file > Upload files (ถ้าใช้ iPhone ให้กดเมนู aA > Request Desktop Website หากไม่เห็น)
4. อัปโหลดไฟล์ทั้ง 5 ไฟล์จากโฟลเดอร์ neung-radio โดยให้อยู่ที่ root: index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png
5. กด Commit changes
6. เข้า Settings > Pages > Build and deployment > Source: Deploy from a branch > Branch: main, folder /(root) > Save
7. รอสักครู่แล้วเปิด https://ชื่อบัญชี.github.io/neung-radio/
8. บน iPhone เปิดลิงก์ด้วย Safari > ปุ่ม Share > Add to Home Screen > Add
9. เปิด Neung Radio จากหน้าจอโฮม เลือกสถานีแล้วกดเล่น จากนั้นทดสอบล็อกหน้าจอ

หมายเหตุ:
- ต้องต่ออินเทอร์เน็ตเพื่อโหลดรายชื่อและฟังวิทยุ
- สถานีบางแห่งใช้สตรีม HTTP ซึ่ง iOS หรือ HTTPS อาจบล็อก หรือสถานีอาจจำกัดการฝังเล่น
- การเล่นขณะล็อกหน้าจอและตัวควบคุมล็อกสกรีนขึ้นกับ iOS และรูปแบบสตรีม ไม่รับประกันทุกสถานี
- GitHub Pages เป็นโฮสต์ไฟล์สถิติตามข้อกำหนดการใช้งาน GitHub
