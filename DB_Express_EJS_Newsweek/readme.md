### CodeCamp 4 ###
ฺBy: ศุภวิชญ์ เจริญเวช

Ps. ผมขออนุญาตรวมโปรเจค 2 งานเข้าเป็นงานเดียวเลยนะครับ เพราะเนื้อหาต่อเนื่องกัน
    และก็ได้แนบ ER-diagram และ DB_Schema รวมถึง codecamp4_newsweek_db.sql ไปให้ในโปรเจคแล้วด้วยครับ
    ส่วน password ใน config.jon ผม null ไว้นะครับ

Project - ออกแบบ Database Web ข่าว: 
  จาก Project ก่อนหน้า Project 2 - Web ข่าว 1 หน้า ที่เราสร้างเว็บข่าวด้วย HTML + CSS
  - คราวนี้ให้ออกแบบ Database ด้วย ER Diagra
  - จากนั้นแปลง ER Diagram เป็น Database Schema
  - จากนั้น นำ Database Schema ไปสร้างใน MySQL
  - จากนั้น เขียน Code ด้วย NodeJS เพื่อให้ต่อกับ Database Mysql ได้

Project - สร้างเว็บข่าว ด้วย Database และ EJS
  จาก Project ก่อนหน้า ที่เราสร้างและออกแบบ Database เอาไว้ Project - ออกแบบ Database Web ข่าว
  - ให้ทำการสร้าง ExpressJS app ด้วย EJS ที่ทำให้เว็บข่าวนี้มีหน้าดังนี้
  - หน้า Home - แสดงข่าวทั้งหมดที่ดึงมาจาก Database
  - หน้า News Detail - เป็นหน้าดูรายละเอียดของข่าว เช่น อาจจะคล้ายๆ หน้านี้ https://www.newsweek.com/senators-tune-out-next-week-public-impeachment-hearings-1470477