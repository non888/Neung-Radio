NEUNG RADIO — REALTIME LISTENERS (Firebase)

เว็บไซต์: https://non888.github.io/Neung-Radio/

1) เข้า https://console.firebase.google.com/ บน Safari แล้ว Create project (แผน Spark ฟรี)
2) ใน Project Overview กด Add app > Web (ไอคอน </>) ตั้งชื่อ Neung Radio แล้ว Register app
3) คัดลอกค่า firebaseConfig มาใส่ใน firebase-config.js ให้ครบ โดยเฉพาะ databaseURL
4) Build > Authentication > Get started > Sign-in method > Anonymous > Enable > Save
5) Build > Realtime Database > Create Database > เลือก location > Start in locked mode
6) ใน Realtime Database > Rules วางเนื้อหาจาก database.rules.json แล้วกด Publish
7) ตรวจสอบว่า databaseURL ใน firebase-config.js ตรงกับ URL ที่แสดงบนหน้า Realtime Database
8) เข้า GitHub repository non888/Neung-Radio > Add file > Upload files
9) อัปโหลด index.html, sw.js, firebase-config.js, live-count.js และไฟล์อื่นที่ต้องการจาก ZIP โดยให้ไฟล์อยู่ ROOT (ระดับเดียวกับ README.md)
10) หาก GitHub ไม่ให้ Upload ไฟล์ชื่อซ้ำ ให้เปิดไฟล์เดิม > ไอคอนดินสอ > แก้ไข/แทนที่เนื้อหา หรือใช้ Add file > Upload files ผ่านหน้าจอ Desktop site แล้ว Commit changes
11) รอ GitHub Pages เผยแพร่ เปิดเว็บและ Refresh; หากยังเป็นเวอร์ชันเก่าให้ปิดแท็บ/ลบเว็บแอปจากหน้าจอโฮมแล้วเพิ่มใหม่
12) ทดสอบด้วย iPhone สองเครื่อง: กดเล่นสถานีและดูยอดรวม/ยอดแยกสถานี

หมายเหตุสำคัญ
- ตัวเลขนับเฉพาะผู้ฟังที่เปิดสถานีผ่านเว็บ Neung Radio ไม่ใช่จำนวนผู้ฟังทั้งหมดของสถานีต้นทาง
- ต้องเปิด Anonymous Authentication และใช้ Realtime Database Rules ที่จำกัดการเขียนตาม uid ห้ามใช้ public write
- ค่าที่ใส่ใน firebase-config.js เป็น client config ไม่ใช่ service account key; ห้ามนำ private key มาใส่ในเว็บไซต์
- เมื่อ iPhone ล็อกหน้าจอ ระบบ Firebase อาจถูกพักและตัดการเชื่อมต่อ จึงอาจนับต่ำกว่าจำนวนคนที่ยังได้ยินเสียงอยู่
- คนที่เปิดเว็บหลายแท็บอาจถูกนับหลายครั้ง; นับเป็น session ที่กำลังเล่น ไม่ใช่จำนวนบุคคลที่ยืนยันตัวตน
- Firebase Spark มีโควตาฟรีและอาจจำกัดจำนวนการเชื่อมต่อ/ทราฟฟิก; ตรวจสอบหน้า Usage
- จำนวนผู้เข้าชมรายวัน/ทั้งหมดไม่รวมในเวอร์ชันนี้ เพราะเป็นตัวชี้วัดคนละแบบกับผู้ฟังจริง
