
export type Question = {
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
};

export const questions: Record<string, Question[]> = {
  anayasa: [
    {
      question: "Türkiye Cumhuriyeti'nin temel nitelikleri hangi maddede belirtilmiştir?",
      options: ["Madde 1", "Madde 2", "Madde 3", "Madde 4", "Madde 5"],
      answer: "Madde 2",
      explanation: "Anayasa'nın 2. maddesinde Türkiye Cumhuriyeti'nin temel nitelikleri belirtilmiştir."
    },
    {
      question: "Yasama yetkisi kime aittir?",
      options: [
        "Cumhurbaşkanı",
        "Türkiye Büyük Millet Meclisi",
        "Bakanlar Kurulu",
        "Anayasa Mahkemesi",
        "Yargıtay",
      ],
      answer: "Türkiye Büyük Millet Meclisi",
      explanation: "Anayasa'nın 7. maddesine göre yasama yetkisi Türkiye Büyük Millet Meclisi'ne aittir."
    },
    {
      question: "Anayasa'nın değiştirilmez hükümleri hangi maddede düzenlenmiştir?",
      options: ["Madde 1", "Madde 2", "Madde 3", "Madde 4", "Madde 5"],
      answer: "Madde 4",
      explanation: "Anayasa'nın 4. maddesi değiştirilmez hükümleri düzenlemektedir."
    },
    {
      question: "Cumhurbaşkanı'nın görev süresi kaç yıldır?",
      options: ["4 yıl", "5 yıl", "6 yıl", "7 yıl", "8 yıl"],
      answer: "5 yıl",
      explanation: "2017 Anayasa değişikliği ile Cumhurbaşkanı'nın görev süresi 5 yıl olarak belirlenmiştir."
    },
    {
      question: "Milletvekili seçilme yaşı kaçtır?",
      options: ["18 yaş", "25 yaş", "30 yaş", "35 yaş", "40 yaş"],
      answer: "18 yaş",
      explanation: "2017 Anayasa değişikliği ile milletvekili seçilme yaşı 18'e indirilmiştir."
    },
    {
      question: "Yürütme yetkisi kime aittir?",
      options: ["TBMM", "Cumhurbaşkanı", "Başbakan", "Bakanlar Kurulu", "Anayasa Mahkemesi"],
      answer: "Cumhurbaşkanı",
      explanation: "Anayasa'nın 8. maddesine göre yürütme yetkisi Cumhurbaşkanı'na aittir."
    },
    {
      question: "Yargı yetkisi hangi madde ile düzenlenmiştir?",
      options: ["Madde 7", "Madde 8", "Madde 9", "Madde 10", "Madde 11"],
      answer: "Madde 9",
      explanation: "Anayasa'nın 9. maddesinde yargı yetkisi düzenlenmiştir."
    },
    {
      question: "Cumhurbaşkanı seçilme yaşı kaçtır?",
      options: ["35 yaş", "40 yaş", "45 yaş", "50 yaş", "30 yaş"],
      answer: "40 yaş",
      explanation: "Anayasa'ya göre Cumhurbaşkanı seçilme yaşı 40'tır."
    },
    {
      question: "TBMM'nin görev süresi kaç yıldır?",
      options: ["4 yıl", "5 yıl", "6 yıl", "3 yıl", "7 yıl"],
      answer: "5 yıl",
      explanation: "TBMM'nin görev süresi 5 yıldır."
    },
    {
      question: "Anayasa'nın kaç maddesi vardır?",
      options: ["175 madde", "177 madde", "180 madde", "185 madde", "190 madde"],
      answer: "177 madde",
      explanation: "1982 Anayasası 177 maddeden oluşmaktadır."
    },
    {
      question: "Cumhurbaşkanı kaç defa seçilebilir?",
      options: ["1 defa", "2 defa", "3 defa", "Sınırsız", "4 defa"],
      answer: "2 defa",
      explanation: "Cumhurbaşkanı en fazla iki defa seçilebilir."
    },
    {
      question: "Anayasa değişikliği için kaç milletvekilinin oyuna ihtiyaç vardır?",
      options: ["276", "300", "367", "400", "450"],
      answer: "367",
      explanation: "Anayasa değişikliği için TBMM'de 367 milletvekilinin oyu gereklidir."
    },
    {
      question: "Temel hak ve hürriyetler hangi bölümde düzenlenmiştir?",
      options: ["I. Bölüm", "II. Bölüm", "III. Bölüm", "IV. Bölüm", "V. Bölüm"],
      answer: "II. Bölüm",
      explanation: "Temel hak ve hürriyetler Anayasa'nın II. Bölümünde düzenlenmiştir."
    },
    {
      question: "Olağanüstü hal ilan etme yetkisi kime aittir?",
      options: ["TBMM", "Cumhurbaşkanı", "Başbakan", "MGK", "Bakanlar Kurulu"],
      answer: "Cumhurbaşkanı",
      explanation: "Olağanüstü hal ilan etme yetkisi Cumhurbaşkanı'na aittir."
    },
    {
      question: "Anayasa Mahkemesi kaç üyeden oluşur?",
      options: ["11 üye", "15 üye", "17 üye", "19 üye", "21 üye"],
      answer: "15 üye",
      explanation: "Anayasa Mahkemesi 15 üyeden oluşur."
    },
    {
      question: "Cumhurbaşkanı'nın görevden alınması hangi suçla mümkündür?",
      options: ["Vatana ihanet", "Anayasayı ihlal", "Her türlü suç", "Yolsuzluk", "Görevi kötüye kullanma"],
      answer: "Vatana ihanet",
      explanation: "Cumhurbaşkanı sadece vatana ihanet suçundan dolayı görevden alınabilir."
    },
    {
      question: "Milletvekillerinin sorumsuzluğu hangi madde ile düzenlenmiştir?",
      options: ["Madde 82", "Madde 83", "Madde 84", "Madde 85", "Madde 86"],
      answer: "Madde 83",
      explanation: "Milletvekillerinin sorumsuzluğu Anayasa'nın 83. maddesinde düzenlenmiştir."
    },
    {
      question: "Devletin egemenlik kayıtsız şartsız hangi madde ile belirtilmiştir?",
      options: ["Madde 5", "Madde 6", "Madde 7", "Madde 8", "Madde 9"],
      answer: "Madde 6",
      explanation: "Devletin egemenliği Anayasa'nın 6. maddesinde düzenlenmiştir."
    },
    {
      question: "Bakanlar nasıl seçilir?",
      options: ["TBMM seçer", "Cumhurbaşkanı atar", "Halk seçer", "Anayasa Mahkemesi atar", "Başbakan seçer"],
      answer: "Cumhurbaşkanı atar",
      explanation: "2017 Anayasa değişikliği ile bakanlar Cumhurbaşkanı tarafından atanır."
    },
    {
      question: "1982 Anayasası ne zaman kabul edilmiştir?",
      options: ["7 Kasım 1982", "9 Kasım 1982", "11 Kasım 1982", "12 Kasım 1982", "15 Kasım 1982"],
      answer: "7 Kasım 1982",
      explanation: "1982 Anayasası 7 Kasım 1982 tarihinde kabul edilmiştir."
    }
  ],
  ataturk: [
    {
      question: "Aşağıdakilerden hangisi Atatürk ilkelerinden biri değildir?",
      options: ["Cumhuriyetçilik", "Milliyetçilik", "Halkçılık", "Devletçilik", "Krallık"],
      answer: "Krallık",
      explanation: "Atatürk'ün 6 ilkesi: Cumhuriyetçilik, Milliyetçilik, Halkçılık, Laiklik, Devletçilik, İnkılapçılık."
    },
    {
      question: "Türkiye Cumhuriyeti ne zaman kurulmuştur?",
      options: ["23 Nisan 1920", "19 Mayıs 1919", "29 Ekim 1923", "30 Ağustos 1922", "24 Temmuz 1923"],
      answer: "29 Ekim 1923",
      explanation: "Türkiye Cumhuriyeti 29 Ekim 1923'te ilan edilmiştir."
    },
    {
      question: "Lozan Antlaşması hangi tarihte imzalanmıştır?",
      options: ["24 Temmuz 1923", "29 Ekim 1923", "23 Nisan 1920", "19 Mayıs 1919", "30 Ağustos 1922"],
      answer: "24 Temmuz 1923",
      explanation: "Lozan Barış Antlaşması 24 Temmuz 1923'te imzalanmıştır."
    },
    {
      question: "Harf İnkılabı hangi yıl gerçekleşmiştir?",
      options: ["1924", "1925", "1926", "1927", "1928"],
      answer: "1928",
      explanation: "Harf İnkılabı 1928 yılında gerçekleştirilmiştir."
    },
    {
      question: "Kadınlara seçme ve seçilme hakkı hangi yılda verilmiştir?",
      options: ["1930", "1932", "1934", "1935", "1936"],
      answer: "1934",
      explanation: "Kadınlara milletvekili seçme ve seçilme hakkı 1934 yılında verilmiştir."
    },
    {
      question: "TBMM ne zaman açılmıştır?",
      options: ["19 Mayıs 1919", "23 Nisan 1920", "29 Ekim 1923", "30 Ağustos 1922", "24 Temmuz 1923"],
      answer: "23 Nisan 1920",
      explanation: "Türkiye Büyük Millet Meclisi 23 Nisan 1920'de açılmıştır."
    },
    {
      question: "Kurtuluş Savaşı'nın başlangıcı hangi olaydır?",
      options: ["Erzurum Kongresi", "Sivas Kongresi", "19 Mayıs 1919", "Amasya Genelgesi", "Ankara'ya geliş"],
      answer: "19 Mayıs 1919",
      explanation: "19 Mayıs 1919'da Mustafa Kemal'in Samsun'a çıkması Kurtuluş Savaşı'nın başlangıcıdır."
    },
    {
      question: "Saltanat ne zaman kaldırılmıştır?",
      options: ["1 Kasım 1922", "29 Ekim 1923", "3 Mart 1924", "30 Ağustos 1922", "24 Temmuz 1923"],
      answer: "1 Kasım 1922",
      explanation: "Saltanat 1 Kasım 1922'de kaldırılmıştır."
    },
    {
      question: "Hilafetin kaldırılması hangi tarihte gerçekleşmiştir?",
      options: ["1 Kasım 1922", "29 Ekim 1923", "3 Mart 1924", "30 Ağustos 1922", "20 Nisan 1924"],
      answer: "3 Mart 1924",
      explanation: "Hilafet 3 Mart 1924'te kaldırılmıştır."
    },
    {
      question: "Şapka İnkılabı hangi yıl yapılmıştır?",
      options: ["1924", "1925", "1926", "1927", "1928"],
      answer: "1925",
      explanation: "Şapka İnkılabı 1925 yılında gerçekleştirilmiştir."
    },
    {
      question: "Tekke ve zaviyelerin kapatılması hangi yılda olmuştur?",
      options: ["1924", "1925", "1926", "1927", "1928"],
      answer: "1925",
      explanation: "Tekke ve zaviyeler 1925 yılında kapatılmıştır."
    },
    {
      question: "Türk Medeni Kanunu hangi yıl kabul edilmiştir?",
      options: ["1924", "1925", "1926", "1927", "1928"],
      answer: "1926",
      explanation: "Türk Medeni Kanunu 1926 yılında kabul edilmiştir."
    },
    {
      question: "Türk Ceza Kanunu hangi yıl yürürlüğe girmiştir?",
      options: ["1924", "1925", "1926", "1927", "1928"],
      answer: "1926",
      explanation: "Türk Ceza Kanunu 1926 yılında yürürlüğe girmiştir."
    },
    {
      question: "İlk kadın milletvekilleri hangi yıl seçilmiştir?",
      options: ["1930", "1932", "1934", "1935", "1936"],
      answer: "1935",
      explanation: "İlk kadın milletvekilleri 1935 yılında seçilmiştir."
    },
    {
      question: "Soyadı Kanunu hangi yıl çıkarılmıştır?",
      options: ["1932", "1933", "1934", "1935", "1936"],
      answer: "1934",
      explanation: "Soyadı Kanunu 1934 yılında çıkarılmıştır."
    },
    {
      question: "Atatürk hangi soyadını almıştır?",
      options: ["1933", "1934", "1935", "1936", "1937"],
      answer: "1934",
      explanation: "Mustafa Kemal, 1934 yılında 'Atatürk' soyadını almıştır."
    },
    {
      question: "Sakarya Meydan Muharebesi hangi yıl yapılmıştır?",
      options: ["1920", "1921", "1922", "1923", "1924"],
      answer: "1921",
      explanation: "Sakarya Meydan Muharebesi 1921 yılında yapılmıştır."
    },
    {
      question: "Büyük Taarruz hangi tarihte başlamıştır?",
      options: ["26 Ağustos 1922", "30 Ağustos 1922", "9 Eylül 1922", "11 Ekim 1922", "1 Kasım 1922"],
      answer: "26 Ağustos 1922",
      explanation: "Büyük Taarruz 26 Ağustos 1922'de başlamıştır."
    },
    {
      question: "İzmir'in kurtuluşu hangi tarihte gerçekleşmiştir?",
      options: ["26 Ağustos 1922", "30 Ağustos 1922", "9 Eylül 1922", "11 Ekim 1922", "1 Kasım 1922"],
      answer: "9 Eylül 1922",
      explanation: "İzmir 9 Eylül 1922'de kurtuluşa kavuşmuştur."
    },
    {
      question: "Mudanya Ateşkes Anlaşması hangi tarihte imzalanmıştır?",
      options: ["26 Ağustos 1922", "30 Ağustos 1922", "9 Eylül 1922", "11 Ekim 1922", "1 Kasım 1922"],
      answer: "11 Ekim 1922",
      explanation: "Mudanya Ateşkes Anlaşması 11 Ekim 1922'de imzalanmıştır."
    }
  ],
  turkce: [
    {
      question: "Aşağıdaki cümlelerden hangisi doğru yazılmıştır?",
      options: [
        "Kitabı okumaya başladım.",
        "Kitabı okumeye başladım.",
        "Kitabı okumya başladım.",
        "Kitabı okumağa başladım.",
        "Kitabı okumuya başladım."
      ],
      answer: "Kitabı okumaya başladım.",
      explanation: "Mastar eki -mak/-mek'e -ya/-ye hali eki getirilerek 'okumaya' şeklinde yazılır."
    },
    {
      question: "Hangi kelime büyük harfle yazılmalıdır?",
      options: ["pazartesi", "ocak", "türkçe", "matematik", "istanbul"],
      answer: "istanbul",
      explanation: "Özel isimler büyük harfle başlar. İstanbul bir şehir adı olduğu için 'İstanbul' şeklinde yazılır."
    },
    {
      question: "Aşağıdakilerden hangisi birleşik fiildir?",
      options: ["koştu", "gelecek", "yardım etti", "okuyor", "yazdı"],
      answer: "yardım etti",
      explanation: "Yardım etti' bir isim ile yardımcı fiilden oluşan birleşik fiildir."
    },
    {
      question: "Hangi kelimede yazım yanlışı vardır?",
      options: ["düğün", "öğretmen", "büyük", "küçük", "güzel"],
      answer: "Hepsi doğru yazılmış",
      explanation: "Verilen seçeneklerin hepsi doğru yazılmıştır."
    },
    {
      question: "Aşağıdakilerden hangisi ünlü türemesi örneğidir?",
      options: ["beyin", "boyun", "karın", "burun", "ağız"],
      answer: "burun",
      explanation: "Burun kelimesi 'burn' köküne ünlü türemesi ile oluşmuştur."
    },
    {
      question: "Hangi kelimede ünsüz yumuşaması vardır?",
      options: ["kitap", "kitabı", "masa", "kalem", "defter"],
      answer: "kitabı",
      explanation: "Kitap kelimesindeki 'p' sesi 'kitabı'nda 'b'ye yumuşamıştır."
    },
    {
      question: "Aşağıdakilerden hangisi pekiştirme edatıdır?",
      options: ["bile", "dahi", "kadar", "gibi", "için"],
      answer: "bile",
      explanation: "'Bile' bir pekiştirme edatıdır."
    },
    {
      question: "Hangi kelime türemiş kelimedir?",
      options: ["ev", "evli", "su", "ağaç", "göz"],
      answer: "evli",
      explanation: "'Evli' kelimesi 'ev' köküne '-li' eki getirilerek türetilmiştir."
    },
    {
      question: "Aşağıdakilerden hangisi fiilimsidir?",
      options: ["koşan", "güzel", "masa", "kalem", "beyaz"],
      answer: "koşan",
      explanation: "'Koşan' kelimesi -an/-en sıfat-fiil ekiyle oluşturulmuş bir fiilimsidir."
    },
    {
      question: "Hangi cümlede nesne yoktur?",
      options: ["Çocuk oyun oynadı.", "Ali kitap okudu.", "Kuş uçtu.", "Anne yemek pişirdi.", "Öğrenci ders çalıştı."],
      answer: "Kuş uçtu.",
      explanation: "'Kuş uçtu' cümlesinde nesne yoktur, geçişsiz fiil kullanılmıştır."
    },
    {
      question: "Aşağıdakilerden hangisi zamir cümlesidir?",
      options: ["O geldi.", "Güzel bir gün.", "Ne kadar mutlu!", "Evde kimse yok.", "Yarın hava güzel olacak."],
      answer: "O geldi.",
      explanation: "'O geldi' cümlesinde özne zamir olduğu için zamir cümlesidir."
    },
    {
      question: "Hangi kelimede ünlü daralması vardır?",
      options: ["demek", "diyor", "yapmak", "okuyor", "gelmek"],
      answer: "diyor",
      explanation: "'De-' kökündeki 'e' sesi 'diyor'da 'i'ye daralır."
    },
    {
      question: "Aşağıdakilerden hangisi isim tamlamasıdır?",
      options: ["güzel çocuk", "Ali'nin kitabı", "çok güzel", "hızla koştu", "bugün geldi"],
      answer: "Ali'nin kitabı",
      explanation: "'Ali'nin kitabı' belirtili isim tamlamasıdır."
    },
    {
      question: "Hangi kelime basit kelimedir?",
      options: ["okul", "öğretmenlik", "güzellik", "kitaplık", "çocukluk"],
      answer: "okul",
      explanation: "'Okul' herhangi bir ek almamış basit kelimedir."
    },
    {
      question: "Aşağıdakilerden hangisi şimdiki zaman ekidir?",
      options: ["-di", "-acak", "-yor", "-mış", "-sa"],
      answer: "-yor",
      explanation: "'-yor' şimdiki zaman ekidir."
    },
    {
      question: "Hangi cümlede dolaylı anlatım vardır?",
      options: ["Ali geldi.", "Mehmet çalışıyor.", "Ayşe kitap okumuş.", "Fatma uyudu.", "Ahmet koşuyor."],
      answer: "Ayşe kitap okumuş.",
      explanation: "'-mış' eki dolaylı anlatım bildiren geçmiş zaman ekidir."
    },
    {
      question: "Aşağıdakilerden hangisi emir kipidir?",
      options: ["geldi", "gelecek", "geliyor", "gel", "gelmiş"],
      answer: "gel",
      explanation: "'Gel' emir kipi çekimidir."
    },
    {
      question: "Hangi kelimede ünlü uyumu bozuktur?",
      options: ["masalar", "kitaplar", "kalemler", "defterler", "elma"],
      answer: "defterler",
      explanation: "'Defterler' kelimesinde ünlü uyumu bozuktur, 'deftarlar' olmalıdır."
    },
    {
      question: "Aşağıdakilerden hangisi soru zamiridir?",
      options: ["bu", "şu", "o", "kim", "ben"],
      answer: "kim",
      explanation: "'Kim' soru zamiridir."
    },
    {
      question: "Hangi cümlede zarf tümleci vardır?",
      options: ["Ali geldi.", "Çocuk hızla koştu.", "Kitap masada.", "Ders çalıştı.", "Yemek yedi."],
      answer: "Çocuk hızla koştu.",
      explanation: "'Hızla' kelimesi zarf tümleci görevindedir."
    }
  ],
  "5902": [
    {
      question: "5902 sayılı Afet ve Acil Durum Yönetimi Hakkında Kanun hangi yılda yürürlüğe girmiştir?",
      options: ["2009", "2010", "2011", "2012", "2013"],
      answer: "2009",
      explanation: "5902 sayılı kanun 15 Mayıs 2009 tarihinde yürürlüğe girmiştir."
    },
    {
      question: "AFAD'ın tam adı nedir?",
      options: [
        "Afet ve Acil Durum Yönetimi Başkanlığı",
        "Afet ve Acil Durum Arama ve Kurtarma Başkanlığı",
        "Afet ve Acil Durum Müdahale Başkanlığı",
        "Afet ve Acil Durum Koordinasyon Başkanlığı",
        "Afet ve Acil Durum Planlama Başkanlığı"
      ],
      answer: "Afet ve Acil Durum Yönetimi Başkanlığı",
      explanation: "5902 sayılı kanunun 3. maddesine göre AFAD'ın tam adı 'Afet ve Acil Durum Yönetimi Başkanlığı'dır."
    },
    {
      question: "Afet yönetimi kaç aşamadan oluşur?",
      options: ["2", "3", "4", "5", "6"],
      answer: "4",
      explanation: "5902 sayılı kanunun 3. maddesine göre afet yönetimi 4 aşamadan oluşur: Zarar azaltma, hazırlık, müdahale ve iyileştirme."
    },
    {
      question: "AFAD hangi bakanlığa bağlıdır?",
      options: ["İçişleri Bakanlığı", "Sağlık Bakanlığı", "Milli Savunma Bakanlığı", "Çevre Bakanlığı", "Adalet Bakanlığı"],
      answer: "İçişleri Bakanlığı",
      explanation: "5902 sayılı kanunun 7. maddesine göre AFAD İçişleri Bakanlığı'na bağlıdır."
    },
    {
      question: "Afet ve acil durum tanımı hangi maddede yapılmıştır?",
      options: ["Madde 2", "Madde 3", "Madde 4", "Madde 5", "Madde 6"],
      answer: "Madde 3",
      explanation: "5902 sayılı kanunun 3. maddesinde afet ve acil durum tanımları yapılmıştır."
    },
    {
      question: "AFAD Başkanı kim tarafından atanır?",
      options: ["Cumhurbaşkanı", "İçişleri Bakanı", "Başbakan", "TBMM", "Bakanlar Kurulu"],
      answer: "Cumhurbaşkanı",
      explanation: "5902 sayılı kanunun 7. maddesine göre AFAD Başkanı Cumhurbaşkanı tarafından atanır."
    },
    {
      question: "İl Afet ve Acil Durum Müdürlüklerinin kurulması hangi maddede düzenlenmiştir?",
      options: ["Madde 8", "Madde 9", "Madde 10", "Madde 11", "Madde 12"],
      answer: "Madde 9",
      explanation: "5902 sayılı kanunun 9. maddesinde İl Afet ve Acil Durum Müdürlüklerinin kurulması düzenlenmiştir."
    },
    {
      question: "Afet ve acil durum planları kaç yılda bir gözden geçirilir?",
      options: ["1 yıl", "2 yıl", "3 yıl", "4 yıl", "5 yıl"],
      answer: "2 yıl",
      explanation: "5902 sayılı kanunun 15. maddesine göre afet ve acil durum planları 2 yılda bir gözden geçirilir."
    },
    {
      question: "AFAD'ın görevleri hangi maddede sayılmıştır?",
      options: ["Madde 6", "Madde 7", "Madde 8", "Madde 9", "Madde 10"],
      answer: "Madde 8",
      explanation: "5902 sayılı kanunun 8. maddesinde AFAD'ın görevleri sayılmıştır."
    },
    {
      question: "Ulusal Deprem Araştırma Programı hangi madde ile düzenlenmiştir?",
      options: ["Madde 16", "Madde 17", "Madde 18", "Madde 19", "Madde 20"],
      answer: "Madde 17",
      explanation: "5902 sayılı kanunun 17. maddesinde Ulusal Deprem Araştırma Programı düzenlenmiştir."
    },
    {
      question: "Afet bölgelerinde yapı denetimi zorunluluğu hangi maddede düzenlenmiştir?",
      options: ["Madde 18", "Madde 19", "Madde 20", "Madde 21", "Madde 22"],
      answer: "Madde 21",
      explanation: "5902 sayılı kanunun 21. maddesinde afet bölgelerinde yapı denetimi zorunluluğu düzenlenmiştir."
    },
    {
      question: "Afet sigortaları hangi madde ile düzenlenmiştir?",
      options: ["Madde 22", "Madde 23", "Madde 24", "Madde 25", "Madde 26"],
      answer: "Madde 23",
      explanation: "5902 sayılı kanunun 23. maddesinde afet sigortaları düzenlenmiştir."
    },
    {
      question: "AFAD personelinin eğitimi hangi maddede düzenlenmiştir?",
      options: ["Madde 24", "Madde 25", "Madde 26", "Madde 27", "Madde 28"],
      answer: "Madde 26",
      explanation: "5902 sayılı kanunun 26. maddesinde AFAD personelinin eğitimi düzenlenmiştir."
    },
    {
      question: "Afet ve acil durum rezerv fonu hangi maddede düzenlenmiştir?",
      options: ["Madde 27", "Madde 28", "Madde 29", "Madde 30", "Madde 31"],
      answer: "Madde 29",
      explanation: "5902 sayılı kanunun 29. maddesinde afet ve acil durum rezerv fonu düzenlenmiştir."
    },
    {
      question: "Koordinasyon kurulları hangi maddede düzenlenmiştir?",
      options: ["Madde 10", "Madde 11", "Madde 12", "Madde 13", "Madde 14"],
      answer: "Madde 12",
      explanation: "5902 sayılı kanunun 12. maddesinde koordinasyon kurulları düzenlenmiştir."
    },
    {
      question: "Afet ve acil durum eğitimi hangi maddede düzenlenmiştir?",
      options: ["Madde 14", "Madde 15", "Madde 16", "Madde 17", "Madde 18"],
      answer: "Madde 16",
      explanation: "5902 sayılı kanunun 16. maddesinde afet ve acil durum eğitimi düzenlenmiştir."
    },
    {
      question: "Afet ve acil durumda mali yardım hangi maddede düzenlenmiştir?",
      options: ["Madde 24", "Madde 25", "Madde 26", "Madde 27", "Madde 28"],
      answer: "Madde 28",
      explanation: "5902 sayılı kanunun 28. maddesinde afet ve acil durumda mali yardım düzenlenmiştir."
    },
    {
      question: "AFAD'ın yetkileri hangi maddede düzenlenmiştir?",
      options: ["Madde 6", "Madde 7", "Madde 8", "Madde 9", "Madde 10"],
      answer: "Madde 7",
      explanation: "5902 sayılı kanunun 7. maddesinde AFAD'ın yetkileri düzenlenmiştir."
    },
    {
      question: "Afet bölgesi ilan etme yetkisi kime aittir?",
      options: ["AFAD Başkanı", "İçişleri Bakanı", "Bakanlar Kurulu", "Cumhurbaşkanı", "Vali"],
      answer: "Bakanlar Kurulu",
      explanation: "5902 sayılı kanunun 10. maddesine göre afet bölgesi ilan etme yetkisi Bakanlar Kurulu'na aittir."
    },
    {
      question: "5902 sayılı kanunun yürürlük maddesi kaçıncı maddedir?",
      options: ["Madde 32", "Madde 33", "Madde 34", "Madde 35", "Madde 36"],
      answer: "Madde 35",
      explanation: "5902 sayılı kanunun 35. maddesi yürürlük maddesidir."
    }
  ]
};
