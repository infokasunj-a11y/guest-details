# 🏨 Senasuma Inn - Daily Police Guest Report Generator

මෙම System එක නිර්මාණය කර ඇත්තේ **Senasuma Inn (Waterfall Road, Ella)** හෝටලයේ දිනපතා සංචාරක පොලිසියට (Tourist Police / Ella Police) යැවිය යුතු Guest Count Report එක පහසුවෙන්ම Mobile Phone එකෙන්ම සකසා ගැනීමටයි.

---

## 🌟 ප්‍රධාන පහසුකම් (Features)

1. **Mobile-First Design (ස්මාර්ට්ෆෝන් සඳහාම විශේෂිතයි):**
   - විශාල Touch බොත්තම් සහ `+` / `−` steppers මඟින් Male (පිරිමි) සහ Female (ගැහැණු) ගණන් 1-ටැප් එකකින් වෙනස් කළ හැක.
   - Smart totals (ස්වයංක්‍රීයව එකතුව ගණනය වේ).
   - LocalStorage මඟින් දත්ත ආරක්ෂිතව browser එකේ save වේ (Page reload වුවද මැකී නොයයි).

2. **පෙරනිමි රටවල් (Pre-added Countries):**
   - 🇺🇸 **USA**
   - 🇳🇱 **Netherlands**
   - 🇪🇸 **Spain**
   - 🇩🇪 **Germany**
   - 🇮🇳 **India**
   - *වෙනත් ඕනෑම රටක් (UK, France, Australia, Russia, etc.) dropdown එකෙන් හෝ Type කර Add කර ගත හැක.*

3. **පොලිස් වාර්තා ශීර්ෂය (Official Header):**
   - **Senasuma Inn**
   - **Waterfall Road, Ella**
   - **Tel: +94 71 411 0211**

4. **A5 ප්‍රමාණයේ නිල වාර්තාව (A5 Format Report):**
   - Standard A5 (148mm × 210mm) Portrait Layout.
   - Date, Time / Shift (Evening / Morning / Night), Occupied Rooms.
   - Country, Male, Female, Total Table.
   - Hotel Stamp Box & Manager Signature Line.
   - **Download A5 PDF** බොත්තම.
   - **Save as Photo (Image)** බොත්තම (WhatsApp එකේ image එකක් ලෙස යැවීමට පහසුයි).

5. **Direct WhatsApp Group Sharing:**
   - **Send WhatsApp** බොත්තම ක්ලික් කළ විට සුපිරිසිදු Text Summary එකක් ස්වයංක්‍රීයව සෑදී WhatsApp open වේ:
   ```
   🏨 *SENASUMA INN - ELLA*
   📍 Waterfall Road, Ella | 📞 +94714110211
   📋 *DAILY GUEST REPORT TO POLICE*
   ────────────────────
   📅 *Date:* 11 Nov 2026
   ⏰ *Report:* Evening (18:00)
   🚪 *Rooms Occupied:* 4

   👥 *GUEST BREAKDOWN BY COUNTRY:*
   • *USA*: 2 (M: 1 | F: 1)
   • *Netherlands*: 3 (M: 2 | F: 1)
   • *Germany*: 2 (M: 1 | F: 1)
   ────────────────────
   📊 *TOTAL SUMMARY:*
   • *Total Guests:* 7
   • *Male:* 4  |  *Female:* 3
   • *Countries:* 3
   ```

---

## 📱 Phone එකෙන් පාවිච්චි කරන ආකාරය (3 Methods)

### ක්‍රමය 1: Online නොමිලේ දමා Phone එකෙන් නිතරම පාවිච්චි කිරීම (Best & Easiest)
Computer එකක් නැතුව ඕනෑම තැනක සිට Phone එකෙන් පමණක් පාවිච්චි කිරීමට:
1. `index.html` file එක [https://tiiny.host](https://tiiny.host) හෝ [https://app.netlify.com/drop](https://app.netlify.com/drop) වෙත Drag & Drop කරන්න (නොමිලේ Link එකක් ලැබේ, උදා: `https://senasuma-inn.netlify.app`).
2. එම Link එක Phone එකේ Chrome හෝ Safari එකෙන් open කරන්න.
3. Phone එකේ Browser Menu (තුන් තිත් / Share icon) ගොස් **"Add to Home Screen"** දෙන්න.
4. එවිට ඔබේ Phone එකේ මෙය වෙනම App එකක් ලෙස දිස්වේ!

### ක්‍රමය 2: Hotel Wi-Fi ජාලය හරහා Phone එකෙන් Open කිරීම
1. Computer එකේ ඇති `START_APP.bat` file එක double click කරන්න.
2. එහි පෙන්වන IP ලිපිනය (උදා: `http://10.7.108.15:3000`) ඔබේ Phone එකේ Browser එකේ (Chrome / Safari) Type කරන්න.
3. Phone එක සහ Computer එක එකම Wi-Fi එකට සම්බන්ධ වී තිබිය යුතුය.

### ක්‍රමය 3: WhatsApp හරහා Phone එකට යවා Open කිරීම
1. `index.html` file එක WhatsApp හරහා ඔබේ Phone එකට Send කරගන්න.
2. Phone එකෙන් එය Download කර Chrome හෝ Safari මඟින් Open කරන්න.
