# LIVE CODE 3

## Rules

- Kerjakan secara individu. Semua bentuk diskusi tidak diperbolehkan dan menyebabkan skor live code ini 0.

- Dilarang membuka **repositori di organisasi tugas**, baik pada organisasi batch sendiri ataupun batch lain, baik branch sendiri maupun branch orang lain.

- Membuka referensi eksternal seperti Google, StackOverflow, dan MDN diperbolehkan.

- Tidak perlu memerhatikan kualitas tampilan/view karena tidak termasuk dalam penilaian

## Durasi

Durasi live code ini adalah **2 jam 30 menit**

Mulai: 9.30
Selesai: 12.00

## MINI ORM

- Pilihan A (poin 100: many to many), kerjakan model dan fitur yang berkaitan dengan Student dan Subject saja

- Pilihan B (poin 75: one to many), kerjakan model dan fitur yang berkaitan dengan Teacher dan Subject saja

## Task

Kamu diminta untuk membuat aplikasi web sederhana menggunakan ExpressJS untuk sebuah sekolah. Berikut adalah requirement yang harus kamu penuhi:

1. Subject memiliki informasi `subject_name` dan `subject_code`. Subject adalah mata pelajaran yang ada di sekolah tersebut.

2. Teacher memiliki informasi `first_name`, `last_name`, `email` dan `gender`(gunakan dropdown dengan pilihan: female/male. Harus re-populate ketika melakukan edit). Teacher adalah orang yang mengajarkan suatu Subject di sekolah tersebut

3. Student memiliki informasi `first_name`, `last_name`, `email` dan `gender`(gunakan dropdown dengan pilihan: female/male. Harus re-populate ketika melakukan edit)

4. Satu Teacher hanya boleh mengajar satu Subject saja, tetapi suatu Subject dapat diajarkan/dipegang oleh banyak Teacher

5. Student bisa mengambil banyak Subject begitupun sebaliknya.

6. Pisahkan routing ke dalam file yang berbeda, perhatikan penamaan dan pembagian routing. Routing yang sembarangan akan mengakibatkan pengurangan 10 poin

## Releases

### Release 0: Create Your ORM (A:45; B:30)
- Buatlah tabel yang dibutuhkan beserta relasi-nya (bila memilih many to many, buatlah conjunction table-nya) pada file setup.js yang telah disediakan
- Buatlah `Class` Model untuk setiap table berserta *method* yang dibutuhkan. Gunakan template class Model yang telah disediakan
- Simpan semua file model di dalam folder tersendiri
- Untuk meng-handle akses database yang asynchronus kamu boleh menggunakan *callback* atau *promise* (tambahan poin 15).
- Untuk yang memilih many-to-many pada conjunction table tambahkan column `score` bertipe integer

### Release 1: Start Your Web App (30)
Buatlah aplikasi CRUD untuk Subject, Teacher, dan Student. Bagi routing berdasarkan model dan pisahkan ke dalam file tersendiri. Template untuk membuat routing.

```
/subject
  GET  /list        * menampilkan semua subject
  GET  /add         * form untuk input subject  baru
  POST /add         * untuk handle input subject  baru
  GET  /update/:id  * form untuk update subject
  POST /update/:id  * untuk handle update subject
  GET  /delete/:id  * untuk handle delete subject
```

*Bonus Poin:*
- Alter table Subject untuk mengubah column `subject_code` menjadi Unique (Implementasikan di file setup.js)(5)
- Handle error dan tampilkan error 'Subject Code already used' pada view jika user meng-input data Subject dengan `subject_code` yang sudah ada (10)

### Release 2: Associate Your Models

**Untuk mendapatkan data yang berasosiasi, dilarang menggunakan query JOIN.**

Bila CRUD setiap model sudah selesai dibuat. Tambahkan fitur sebagai berikut:

### Pilihan A (25)

1. Pada halaman yang menampilkan semua Subject, tambahkan fitur/link **[ADD STUDENT]** yang bertujuan untuk menambahkan Student pada Subject tersebut. Tampilkan semua Student yang sudah ditambahkan pada halaman list Subject (15)

2. Pada halaman yang menampilkan semua Student, tambahkan fitur/link **[SUBJECT ASSIGNED]** untuk menampilkan semua Subject yang diambil oleh Student tersebut. (10)

### Pilihan B (15)

1. Pada halaman yang menampilkan semua data Teacher, munculkan Subject yang ditentukan untuk Teacher tersebut. Bila belum ditentukan, munculkan tulisan 'unassigned' (5)

2. Pada halaman yang menampilkan semua Subject, tambahkan fitur **[ASSIGN TEACHER]** yang bertujuan untuk menambahkan Teacher pada Subject tersebut dan menampilkan semua Teacher yang sudah ditambahkan (10)
