const JAWSHAN_DATA = [
    {
      "id":1,
      "latin": `Bismillahirrahmanirrahim
      Allahümme innî es\'elüke, bi-esmâike:
      1. Yâ Allah
      2. Yâ Rahmân
      3. Yâ Rahîm
      4. Yâ Alîm
      5. Yâ Halîm
      6. Yâ \'Azîm
      7. Yâ Hakîm
      8. Yâ Kadîm
      9. Yâ Mukîm
      10. Yâ Kerîm`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `Rahman ve Rahim Olan Allah\'ın Adıyla
      Allah\'ım Senden şu isimlerinin hakkı için istiyor ve yalvarıyorum.
      1. Ey her şeyin Gerçek Mâbudu olan Allah
      2. Ey dünyada dost ve düşman ayırt etmeden bütün mahlukatını rızıklandıran Rahman
      3. Ey âhirette sadece dostlarına rahmet edecek olan Rahim
      4. Ey herseyi hakkıyla bilen Alîm
      5. Ey yarattıklarına son derece yumuşak muamele eden Halîm
      6. Ey sonsuz büyüklük ve yücelik sahibi olan Azîm
      7. Ey herşeyi yerli yerinde yapan Hakîm
      8. Ey varlığının başlangıcı olmayan Kadîm
      9. Ey herşeyi ayakta tutan Mukîm
      10. Ey iyilik ve ikrami bol olan Kerîm`,
      "russian":`Обращаюсь к тебе и молю;
  1. О, Аллах - истинный творец всего и вся, бесконечно далекий от всего несовершенного, обладатель прекраснейших  из имен и вечных идеальных качеств,
  2. О, Тот, кто кормит всех в мире земном, не разделяя их на друзей и врагов,
  3. О, Тот, кто одарит особой благодатью и окружит великодушием послушных рабов своих в жизни вечной,
  4. О, Тот кто, знает все, что было, есть и будет, от знание которого не сокроется ничего из того, что есть в мироздании, и чье знание охватывает все - от мала до велика, все тайное и явное,
  5. О, Тот, кто велик в терпении своем и не спешит наказать грешных рабов своих,
  6. О, Тот, рядом с которым все бесконечно ничтожно,
  7. О, Тот, кто мудр в делах своих,
  8. О, Тот, чье бытье не имеет ни начала, ни конца,
  9. О, Тот, чья сущность неизменна и независимо существование, и от которого исходит бытие всего сущего,
  10. О, Господин наш, чья доброта не имеет границ, а щедрость не иссякает, в ком собраны все достоинства , и чьи дела восхваления  достойны,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I beseech You in Your name: \nO Allah,\nO Most Merciful, \nO Most Compassionate,\nO Most Generous, \nO Self-Subsisting,\nO Greatest, \nO Eternal,\nO All-Knowing, \nO Forbearing, \nO Wise.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`اَللّٰهُمَّ إِنِّي أَسْأَلُكَ بِأَسْمَائِكَ يَا اَللهُ ؛۝؛ يَا رَحْمٰنُ ؛۝؛ يَا رَحِيمُ ؛۝؛ يَا عَلِيمُ ؛۝؛ يَا حَلِيمُ ؛۝؛ يَا عَظِيمُ ؛۝؛ يَا حَكِيمُ ؛۝؛ يَا قَدِيمُ ؛۝؛ يَا مُقِيمُ ؛۝؛ يَا كَرِيمُ ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":2,
      "latin": `1. Yâ seyyide\'s-sâdât
      2. Yâ mücîbe\'d-de\'avât
      3. Yâ veliyye\'l-hasenât
      4. Yâ rafi\'ad-derecât
      5. Yâ azîme\'l-berekât
      6. Yâ gâfire\'l-hatîât
      7. Yâ dâfia\'l-beliyyât
      8. Yâ sâmi\'a\'l-asvât
      9. Yâ mu\'tiye\'l-mes\'ûlât
      10. Yâ âlime\'s-sırri ve\'l-hafiyyât`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey efendilerin efendisi
      2. Ey dualara cevap veren
      3. Ey iyiliklerin sahibi
      4. Ey dereceleri yükselten
      5. Ey bereketleri büyük olan
      6. Ey hataları bağışlayan
      7. Ey belaları def eden
      8. Ey sesleri işiten
      9. Ey dilekleri veren
      10.Ey sır ve gizlilikleri bilen`,
      "russian":`1. О, Господин всех господ,
  2. О, внимающий всем мольбам,
  3. О, хранитель доброты и всех благ, и вознаграждающий щедро за добродетель,
  4. О, Тот, кто возвышает нас ступень за ступенью,
  5. О, Тот, кто умножает блага, и бесконечной милостью своей дарует изобилие всем духовным и материальным благам,
  6. О, прощающий грехи и недостатки,
  7. О, устраняющий все беды,
  8. О, слышащий одновременно все явные и тайные голоса сущего, не путая их,
  9. О, Тот, кто не оставляет без ответа желания всех им сотворенных,
  10. О, Господь наш, знающий все сокрытое и потаённое, `,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Master of Masters,\nO Acceptor of prayers,\nO Elevator of rank,\nO Guardian of good deeds,\nO Forgiver of evil deeds,\nO Granter of requests,\nO Acceptor of repentance,\nO Hearer of voices,\nO Knower of attributes,\nO Repeller of calamities.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic": `يَا سَيِّدَ السَّادَاتِ ؛۝؛ يَا مُجِيبَ الدَّعَوَاتِ ؛۝؛ يَا وَلِيَّ الْحَسَنَاتِ ؛۝؛ يَا رَفِيعَ الدَّرَجَاتِ ؛۝؛ يَا عَظِيمَ الْبَرَكَاتِ ؛۝؛ يَا غَافِرَ الْخَطِيئَاتِ ؛۝؛يَا دَافِعَ الْبَلِيَّاتِ ؛۝؛ يَا سَامِعَ الْأَصْوَاتِ ؛۝؛ يَا مُعْطِيَ الْمَسْؤُولَاتِ ؛۝؛ يَا عَالِمَ السِّرِّ وَالْخَفِيَّاتِ ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":3,
      "latin": `1. Yâ hayra\'l-ğâfirîn
      2. Yâ hayra\'n-nâsırîn
      3. Yâ hayra\'l-hâkimîn
      4. Yâ hayra\'l-fâtihîn
      5. Yâ hayra\'z-zâkirîn
      6. Yâ hayra\'l-vârisîn
      7. Yâ hayra\'l-hâmidîn
      8. Yâ hayra\'r-râzikîn
      9. Yâ hayra\'l-fâsılîn
      10. Yâ hayra\'l-muhsinîn`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey Bağışlayanların en hayırlısı
      2. Ey yardım edenlerin en hayırlısı
      3. Ey hükmedenlerin en hayırlısı
      4. Ey herşeyi hikmetle açanların en hayırlısı
      5. Ey kendisini zikredenlerin en hayırlısı
      6. Ey varislerin en hayırlısı
      7. Ey övenlerin en hayırlısı
      8. Ey rızk verenlerin en hayırlısı
      9. Ey müşkil meseleleri hal ve fasl edenlerin en hayırlısı
      10.Ey ihsan edenlerin en hayırlısı`,
      "russian":`1. О, наилучший и добрейший из прощающих,
  2. О, наилучший и добрейший из всех помогающих,
  3. О, наилучший и добрейший из всех, кто справедлив в решении своем,
  4. О, наилучший и добрейший среди правящих,
  5. О, наилучший и добрейший среди всех, кто помнит и бывает упомянут, и наилучший из вознаграждающих за то, что помнят Его и упоминают,
  6. О, единственно нетленный, остающийся вечно после того, как погибнет все и вся, и единственный, которому вернется все, что принадлежало рабам Его,
  7. О, вознаграждающий наилучшим образом тех, кто славу ему возносит и благодарение и хвалу,
  8. О, дающий пищу многократно и в изобилии,
  9. О, наилучший и добрейший из тех, кто отделяет правду ото лжи, и из тех, кто правит и решает,
  10. Нет иных благ, кроме благ Твоих, о, наилучший и добрейший из всех, кто дарит благородно и щедро,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Best of forgivers,\nO Best of deciders,\nO Best of helpers,\nO Best of rulers,\nO Best of providers,\nO Best of inheritors\nO Best of praisers,\nO Best of rememberers,\nO Best of Dischargers,\nO Best of benefactors.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا خَيْرَ الْغَافِرِينَ ؛۝؛ يَا خَيْرَ النَّاصِرِينَ ؛۝؛ يَا خَيْرَ الْحَاكِمِينَ ؛۝؛ يَا خَيْرَ الْفَاتِحِينَ ؛۝؛ يَا خَيْرَ الذَّاكِرِينَ ؛۝؛ يَا خَيْرَ الْوَارِثِينَ ؛۝؛ يَا خَيْرَ الْحَامِدِينَ ؛۝؛ يَا خَيْرَ الرَّازِقِينَ ؛۝؛ يَا خَيْرَ الْفَاصِلِينَ ؛۝؛ يَا خَيْرَ الْمُحْسِنِينَ ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":4,
      "latin": `1. Yâ men lehü\'l-\'izzü ve\'l-cemâl
      2. Yâ men lehü\'l-mülkü ve\'l-celâl
      3. Yâ men lehü\'l-kudretü ve\'l-kemâl
      4. Yâ men hüve\'l-kebîrü\'l-müte\'âl
      5. Yâ men hüve şedîdü\'l-mihâl
      6. Yâ men hüve şedîdü\'l-ikâb
      7. Yâ men hüve serî\'ü\'l-hisâb
      8. Yâ men hüve \'indehû hüsnü\'s-sevâb
      9. Yâ men hüve \'indehû ümmü\'l-kitâb
      10. Yâ men hüve yünşiü\'s-sehabe\'s-sikâl`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey izzet ve güzelligin gerçek sahibi
      2. Ey saltanat ve celalin gerçek sahibi
      3. Ey kudret ve kemalin gerçek sahibi
      4. Ey büyük ve yüce olan
      5. Ey kudret ve azabı şiddetli olan
      6. Ey ikâbi siddetli olan
      7. Ey hesabı süratli gören
      8. Ey katında güzel ve mükafatı bulunan
      9. Ey katında Ümmü\'l Kitap bulunan
      10. Ey yüklü bulutları yoktan var eden`,
      "russian":`1. О, истинный обладатель грозного величия и красоты,
  2. О, истинный обладатель единовластия и величия,
  3. О, истинный обладатель могущества и совершенства,
  4. О, единственно великий и величайший из великих,
  5. О, Тот, чье наказание ужасно и возмездие тяжко,
  6. О, Тот, чья кара беспощадна,
  7. О, Тот, кто судит решительно,
  8. О, Тот, чьи сокровищницы полны достойнейших из наград,
  9. О, Тот, у кого есть книга, где все отражено и отмечено,
  10. О, Владыка наш, который творит облака, полные дождя, и поднимает их в небеса,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, to Whom is all glory and virtue,\nO He, to Whom is all might and perfection,\nO He, to Whom is all dominion and sublimity,\nO He, Who is great above all,\nO He, Who creates heavy clouds,\nO He, Who is the most powerful,\nO He, Who is quick to reckon,\nO He, Who metes out the severest punishment,\nO He, with Whom is the excellent reward,\nO He, with Whom is the Original Book.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ لَهُ الْعِزُّ وَالْجَمَالُ ؛۝؛يَا مَنْ لَهُ الْمُلْكُ وَالْجَلَالُ ؛۝؛ يَا مَنْ لَهُ الْقُدْرَةُ وَالْكَمَالُ ؛۝؛ يَا مَنْ هُوَ الْكَبِيرُ الْمُتَعَالِ ؛۝؛ يَا مَنْ هُوَ شَدِيدُ الْمِحَالِ ؛۝؛ يَا مَنْ هُوَ شَدِيدُ الْعِقَابِ ؛۝؛ يَا مَنْ هُوَ سَرِيعُ الْحِسَابِ ؛۝؛ يَا مَنْ هُوَ عِنْدَهُ حُسْنُ الثَّوَابِ ؛۝؛ يَا مَنْ هُوَ عِنْدَهُ أُمُّ الْكِتَابِ ؛۝؛ يَا مَنْ هُوَ يُنْشِئُ السَّحَابَ الثِّقَالَ ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":5,
      "latin": `Ve es\'elüke, bi-esmâike:
      1. Yâ Hannân
      2. Yâ Mennân
      3. Yâ Deyyân
      4. Yâ Gufrân
      5. Yâ Burhân
      6. Yâ Sultân
      7. Yâ Sübhân
      8. Yâ Müste\'ân
      9. Yâ Ze\'l-Menni ve\'l-Beyân
      10. Yâ Ze\'l-Emân`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey sonsuz merhamet sahibi olan Hannân
      2. Ey hakiki iyilik ve ihsan sahibi Mennân
      3. Ey kullarının hiçbir amelini zayi etmeden karşılığı veren Deyyân
      4. Ey bağışlaması bol olan Gufrân
      5. Ey kullarına yol gösteren Burhân
      6. Ey gerçek saltanat sahibi Sultân
      7. Ey bütün kusur ve noksan sıfatlardan münezzeh olan Sübhân
      8. Ey kendisinden yardım istenen Müsteân
      9. Ey nîmet ve beyan sahibi
      10. Ey emnü eman sahibi`,
      "russian":`Обращаюсь к тебе и молю;
  1. О, Тот, который милосерден многократно о обращает милость свою к тому, кто отвернулся от Него,
  2. О. Тот, чьи блага и доброты бессчетны,
  3. О, Тот, кто призывает к ответу рабов своих и не оставляет без награды ни одно из деяний их,
  4. О, Тот, который прощением прикрывает грехи рабов своих и уберегает их от позора,
  5. О, Тот, который указывает рабам своим на путь истинный и верный и сам является подтверждением своего существования и существования всего сущего,
  6. О, истинный обладатель власти и единодержавия,
  7. О, бесконечно далекий от всяких ошибок и недостатков, обладатель всех красот и совершенств,
  8. О, Тот, к кому за помощью обращается все сущее,
  9. О, Тот, кто бесконечными благами своими питает и растит творения свои, дает им силу выразить себя и помыслы свои и лучше всех поясняет цель свою,
  10. О, дарующий уверенность и покой всему сущему перед лицом всякой опасности и страха,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, Verily I beseech You in Your name:\nO Charitable One, \nO Benefactor,\nO Judge, \nO Proof,\nO Sovereign, \nO Approver,\nO Fver, \nO Elevated One, \nO Helper,\nO Holder of blessings and manifestation.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا حَنَّانُ ؛۝؛ يَا مَنَّانُ ؛۝؛ يَا دَيَّانُ ؛۝؛ يَا غُفْرَانُ ؛۝؛ يَا بُرْهَانُ ؛۝؛ يَا سُلْطَانُ ؛۝؛ يَا سُبْحَانُ ؛۝؛ يَا مُسْتَعَانُ ؛۝؛ يَا ذَا الْمَنِّ وَالْبَيَانِ ؛۝؛ يَا ذَا الْأَمَانِ ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":6,
      "latin": `1. Yâ men tevâda\'a küllü şey\'in li-\'azemetih
      2. Yâ menistesleme küllü şey\'in li-kudretih
      3. Yâ men zelle küllü şey\'in li-\'izzetih
      4. Yâ men hada\'a küllü şey\'in li-heybetih
      5. Yâ men\'in-kâde küllü şey\'in li-mülketih
      6. Yâ men dâne küllü şey\'in min-mehâfetih
      7. Yâ meni\'n-şekkati\'l-cibâlü min-haşyetih
      8. Yâ men kâmeti\'s-semâvâtü bi-emrih
      9. Yâ meni\'s-tekarrati\'l-ardu bi-iznih
      10. Yâ men lâ ya\'tedî \'alâ ehli memleketih`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey azametine herşeyin boyun eğdiği
      2. Ey kudretine her şeyin teslim olduğu
      3. Ey izzetine karşı her seyin zelîl olduğu
      4. Ey heybetine her seyin itaat ettigi
      5. Ey Saltanatına karşı her şeyin inkiyad ettigi
      6. Ey korkusundan her şeyin kendisine boyun egdiği
      7. Ey korkusundan dağların yarıldığı ve parçalandığı
      8. Ey emriyle göklerin ayakta durduğu
      9. Ey izniyle yerin karar kıldığı
      10. Ey memleketinin ahalisine zulmetmeyen`,
      "russian":`1. О, Тот, пред величием которого все сущее ниц простирается,
  2. О, Тот, могуществу и силе которого все сущее подчиняется,
  3. О, Тот, гордому величию которого все покорны,
  4. О, Тот, пред суровым величием которого все головы склоняются,
  5. О, Тот, власти которого все подчиняется,
  6. О, Тот, которому все в страхе служит и поклоняется,
  7. О, Тот, пред грозным величием которого горы и скалы в пыль обращаются,
  8. О, Тот, чьей волею небеса держатся,
  9. О, Тот, благодаря чьему соизволению Земля существует ,
  10. О, обладатель власти неоспоримой , Господь наш, в справедливости которого народ Его не сомневается,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He before Whose greatness everything bows,\nO He before Whose power everything submits,\nO He before Whose might overshadows everything,\nO He before Whose awesomeness everything is humbled,\nO He before Whose fearsomeness everything yields,\nO He before Whose terribleness mountains shake,\nO He before Whose command the heavens are raised,\nO He through Whose permission in the earths are secured,\nO He Whose glory the thunder proclaims,\nO He Who is never cruel to his subjects.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ تَوَاضَعَ كُلُّ شَيْءٍ لِعَظَمَتِه۪ ؛۝؛ يَا مَنِ اسْتَسْلَمَ كُلُّ شَيْءٍ لِقُدْرَتِه۪ ؛۝؛ يَا مَنْ ذَلَّ كُلُّ شَيْءٍ لِعِزَّتِه۪ ؛۝؛ يَا مَنْ خَضَعَ كُلُّ شَيْءٍ لِهَـيْـبَـتِـه۪ ؛۝؛ يَا مَنِ انْقَادَ كُلُّ شَيْءٍ لِمُلْكَتِه۪ ؛۝؛ يَا مَنْ دَانَ كُلُّ شَيْءٍ مِنْ مَخَافَـتِه۪ ؛۝؛ يَا مَنِ انْشَقَّتِ الْجِبَالُ مِنْ خَشْيَـتِه۪ ؛۝؛ يَا مَنْ قَامَتِ السَّمَاوَاتُ بِأَمْرِه۪ ؛۝؛ يَا مَنِ اسْتَـقَرَّتِ الْأَرْضُ بِإِذْنِه۪ ؛۝؛ يَا مَنْ لَا يَعْتَدِي عَلَى أَهْلِ مَمْلَكَتِه۪ ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":7,
      "latin": `1. Yâ ğafire\'l-hatâyâ
      2. Yâ kâşife\'l-belâyâ
      3. Yâ müntehe\'r-recâyâ
      4. Yâ müczile\'l-\'atâyâ
      5. Yâ vâsi\'a\'l-hedâyâ
      6. Yâ râzıka\'l-berâyâ
      7. Yâ kâdıye\'l-münâyâ
      8. Yâ sâmi\'a\'ş-şekâyâ
      9. Yâ bâ\'ise\'s-serâyâ
      10. Yâ mütlika\'l-üsârâ`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey hataları mağfiret eden
      2. Ey belaları kaldıran
      3. Ey ümitler Kendisinde son bulan
      4. Ey ihsani bol veren
      5. Ey hediyeleri geniş olan
      6. Ey mahlukata rızk veren
      7. Ey ölümlere karar veren
      8. Ey şikayetleri işiten
      9. Ey askerleri gönderen
      10. Ey esirleri salıveren`,
      "russian":`1. О, Тот, кто прощает грехи,
  2. О, Тот, кто останавливает беды,
  3. О, последняя и высочайшая из надежд,
  4. О, Тот, кто  благодетельствует щедро,
  5. О, Тот, чьи дары изобильны,
  6. О, Тот, кто кормит все им сотворенное,
  7. О, Тот, кто назначает смерть и творит своевременно,
  8. О, Тот, кто не оставит без внимания ни одну из жалоб,
  9. О, Тот, кто посылает воинства свои на помощь нуждающимся,
  10. О, Господь наш, который освобождает от рабства духовного и физического,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Forgiver of sins,\nO Dispeller of tribulations,\nO Aim of hopes,\nO Giver of abundant gifts,\nO Bestower of bounties,\nO Provider of creatures,\nO Judge of destinies,\nO Hearer of complaints,\nO Resurrector of creatures,\nO Freer of captives.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا غَافِرَ الْخَطَايَا ؛۝؛ يَا كَاشِفَ الْبَلَايَا ؛۝؛ يَا مُنْـتَـهَى الرَّجَايَـا ؛۝؛ يَا مُجْزِلَ الْعَطَايَا ؛۝؛ يَا وَاسِعَ الْهَدَايَا ؛۝؛ يَا رَازِقَ الْبَرَايَا ؛۝؛ يَا قَاضِيَ الْمَنَايَا ؛۝؛ يَا سَامِعَ الشَّكَايَا ؛۝؛ يَا بَاعِثَ السَّرَايَا ؛۝؛ يَا مُطْلِقَ الْأُسَارَى ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":8,
      "latin": `1. Yâ ze\'l-hamdi ve\'s-senâi
      2. Yâ ze\'l-mecdi ve\'s-senâi
      3. Yâ ze\'l-fahri ve\'l-behâi
      4. Yâ ze\'l-\'ahdi ve\'l-vefâi
      5. Yâ ze\'l-\'afvi ve\'r-rıdâi
      6. Yâ ze\'l-menni ve\'l-\'atâi
      7. Yâ ze\'l-faslı ve\'l-kadâi
      8. Yâ ze\'l-\'izzeti ve\'l-bekâi
      9. Yâ ze\'l-cûdi ve\'n-ne\'mai
      10. Yâ ze\'l-fadli ve\'l-âlâi`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey hamd ve senâ sahibi
      2. Ey şeref ve yücelik sahibi
      3. Ey fahr ve bahâa sahibi
      4. Ey ahd ve vefâ sahibi
      5. Ey af ve rızâ sahibi
      6. Ey iyilik ve bağış sahibi
      7. Ey kesin söz ve hüküm sahibi
      8. Ey izzet ve sonsuzluk sahibi
      9. Ey cömertlik ve nimetler sahibi
      10. Ey karşılıksız iyilik ve nimetler sahibi`,
      "russian":`1. О, Тот единственный, которого восхваляют, славят и благодарят,
  2. О, обладатель величия и славы,
  3. О, достойный бесконечной хвалы и обладатель всех красот и великолепия,
  4. О, Тот, кто в силах исполнить все то, что обещал, и исполняет обещанное наилучшим образом,
  5. О, Тот, который прощает всех, кто просит прощения и остается доволен теми, кто хочет угодить ему,
  6. О, дарящий и одаривающий без счета всех, кого сотворил,
  7. О, Тот, от которого зависит решение всех дел и их исполнение,
  8. О, Тот, чье гордое величие бесконечно и кто  сам бесконечен и вечен,
  9. О, Тот, кто раздает щедрые блага,
  10. О, Господь наш, дарящий и дающий безвозмездно,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, to Whom is due all praise and adoration,\nO He, Who holds all pride and eminence,\nO He, Who holds all honour and rank,\nO He, Who makes promises and honours them,\nO He, Who pardons and is content,\nO He, Who holds all abundance and provides,\nO He, Who holds decision and judgement,\nO He, Who is glorious and eternal,\nO He, Who is liberal and munificent,\nO He, Who holds all blessings and bounties,`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا ذَا الْحَمْدِ وَالثَّنَاءِ ؛۝؛ يَا ذَا الْمَجْدِ وَالسَّنَاءِ ؛۝؛ يَا ذَا الْفَخْرِ وَالْبَهَاءِ ؛۝؛ يَا ذَا الْعَهْدِ وَالْوَفَاءِ ؛۝؛ يَا ذَا الْعَفْوِ وَالرِّضَاءِ ؛۝؛ يَا ذَا الْمَنِّ وَالْعَطَاءِ ؛۝؛ يَا ذَا الْفَصْلِ وَالْقَضَاءِ ؛۝؛ يَا ذَا الْعِزَّةِ وَالْبَقَاءِ ؛۝؛ يَا ذَا الْجُودِ وَالنَّعْمَاءِ ؛۝؛ يَا ذَا الْفَضْلِ وَالْأٰلَاءِ ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":9,
      "latin": `Ve es\'elüke, bi-esmâike:
      1. Yâ Mâni\'
      2. Yâ Dâfi\'
      3. Yâ Nâfi\'
      4. Yâ Sâmi\'
      5. Yâ Râfi\'
      6. Yâ Sâni\'
      7. Yâ Şâfi\'
      8. Yâ Câmi\'
      9. Yâ Vâsi\'
      10. Yâ Mûsi\'`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey olmamasını istedigi meydana gelmesine engel olan Mânî
      2. Ey zararlı şeyleri ve manileri defeden Dâfi
      3. Ey faydalı şeyleri yapan Nafî
      4. Ey bütün sesleri işiten Sem\'î
      5. Ey dilediklerinin mertebesini yükselten Rafî
      6. Ey herşeyi san\'atla yapan Sânî
      7. Ey kullarına şefaat eden Safî
      8. Ey istediğini istediği şekilde toplayan Camî
      9. Ey ilim ve ihsanı herşeyi içine alan Vasî
      10. Ey istediği şeyi istedigi şekilde genişletip bollaştıran Mûsî`,
      "russian":`Обращаюсь к тебе и молю;
  1. О, Тот, который пресекает все, что ему не угодно,
  2. О, Тот, кто избавляет все сущее от всех бед,
  3. О, Тот, кто создает все полезное и распределяет блага свои, как ему угодно,
  4. О, всеслышащий,
  5. О, Тот, кто высочайший из всех высочайших, возвышающий, кого пожелает,
  6. О, Тот, кто творит все искусно и безупречно,
  7. О, Тот, кто заступается за того, за кого пожелает, и принимает заступничество от всякого, от кого захочет,
  8. О, объединяющий в себе все самое лучшее и прекрасное, и тот, что соберет перед ликом своим все сущее, когда восстанут они из мертвых,
  9. О, всеокружающий,
  10. О, Господь наш, вседержитель миров и пространств, в чьей власти раздвинуть границы их насколько он пожелает,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I beseech You in Your name:\nO Preventer of misfortune, \nO Repeller of calamities.\nO Elevator of rank, \nO Fashioner,\nO Benefiter \nO Hearer,\nO Aggregator, \nO Intercessor,\nO Magnanimous, \nO Increaser.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا مَانِعُ ؛۝؛ يَا دَافِعُ ؛۝؛ يَا نَافِعُ ؛۝؛ يَا سَامِعُ ؛۝؛ يَا رَافِعُ ؛۝؛ يَا صَانِعُ ؛۝؛ يَا شَافِعُ ؛۝؛ يَا جَامِعُ ؛۝؛ يَا وَاسِعُ ؛۝؛ يَا مُوسِعُ ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":10,
      "latin": `1. Yâ sâni\'a külli masnû
      2. Yâ hâlika külli mahlûk
      3. Yâ râzıka külli merzûk
      4. Yâ mâlike külli memlûk
      5. Yâ kâşife külli mekrûb
      6. Yâ fârice külli mağmûm
      7. Yâ râhime külli merhûm
      8. Yâ nâsıra külli mahzûl
      9. Yâ sâtire külli ma\'yûb
      10. Yâ melcee külli mazlûm`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey bütün sanatların Sanatkârı
      2. Ey bütün mahsulatların Yaratıcısı
      3. Ey bütün rızıklananların Rızık Vericisi
      4. Ey bütün sahip olunanların Sahibi
      5. Ey bütün sıkıntıya düşenlerin Ferahlatıcısı
      6. Ey bütün üzüntüye düşenlerin Sevindiricisi
      7. Ey bütün merhamet olunanların Merhamet Edicisi
      8. Ey bütün yardımcısız kalanların Yardımcısı
      9. Ey bütün ayıplıların Ayıbını Örten
      10. Ey bütün zulme uğrayanların Sığınağı`,
      "russian":`1. О, искусный творец всех совершенных творений,
  2. О, создатель всего сотворенного,
  3. О, кормящий всех и вся, кто нуждается в пище,
  4. О, хозяин всего и вся, и обладатель власти,
  5. О, дарящий покой и радость тем, чьи сердца сжимаются от горя,
  6. О, избавляющий сердца и души от горести и печали,
  7. О, милосердный ко всем, кто нуждается в милосердии и великодушии,
  8. О, Тот, кто оказывается помощь всякому, кто нуждается в ней,
  9. О, прикрывающий все изъяны,
  10. О, Господь мой, прибежище всех, кто стал жертвой зла и несправедливости,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Fashioner of every fashioned thing,\nO Creator of every created thing,\nO Provider for every needy thing,\nO Sovereign over all subjects,\nO Dispeller of every hardship,\nO Comforter of every griever,\nO Merciful to every sufferer,\nO Helper of everything forsaken,\nO Concealer of every blemished thing,\nO Shelter for every exile.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا صَانِعَ كُلِّ مَصْنُوعٍ ؛۝؛ يَا خَالِقَ كُلِّ مَخْلُوقٍ ؛۝؛ يَا رَازِقَ كُلِّ مَرْزُوقٍ ؛۝؛ يَا مَالِكَ كُلِّ مَمْلُوكٍ ؛۝؛ يَا كَاشِفَ كُلِّ مَكْرُوبٍ ؛۝؛ يَا فَارِجَ كُلِّ مَغْمُومٍ ؛۝؛ يَا رَاحِمَ كُلِّ مَرْحُومٍ ؛۝؛ يَا نَاصِرَ كُلِّ مَخْذُولٍ ؛۝؛ يَا سَاتِرَ كُلِّ مَعْيُوبٍ ؛۝؛ يَا مَلْجَأَ كُلِّ مَظْلُومٍ ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":11,
      "latin": `1. Yâ \'iddetî \'inde şiddetî
      2. Yâ recâî \'inde musîbetî
      3. Yâ mûnisî \'inde vahşeti
      4. Yâ sâhibi \'inde ğurbeti
      5. Yâ veliyyi \'inde ni\'meti
      6. Yâ kâşifî \'inde kurbetî
      7. Yâ ğıyâsî \'inde\'f-tıkârî
      8. Yâ melceî \'inde\'d-dırârî
      9. Yâ mu\'înî \'inde feze\'î
      10. Yâ delîlî \'inde hayretî`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey zorluk zamanında hazırlığım,
      2. Ey musibet zamanında ümit kaynağım,
      3. Ey yalnızlık zamanımda yoldaşım,
      4. Ey gurbette benim arkadaşım,
      5. Ey nimetlerimde velinimetim,
      6. Ey sıkıntı zamanında imdadım,
      7. Ey şaşkınlık zamanımda kılavuzum,
      8. Ey fakirlik zamanında zenginliğim,
      9. Ey çeresizlik zamanında sığınağım,
      10. Ey korku zamanımda benim yardımcım`,
      "russian":`1. О, опора моя и спасение мое в минуты трудностей моих,
  2. О, надежда моя в минуты бедствий моих,
  3. О, друг мой, не оставляющий меня в одиночестве моем и беспомощности,
  4. О, хранитель мой, милостью своей, покровительством и защитой оберегающий меня в одиночестве моем,
  5. О, господин мой, чье могущество и милосердие - единственный источник всех благ, которыми обладаю,
  6. О, Тот, кто исцелит все печали мои и трудности разрешит,
  7. О, спаситель мой, помогающий мне, когда я нуждаюсь в помощи,
  8. О, прибежище мое, к которому устремляюсь, когда мне тяжко и трудно,
  9. О, Тот, кто помогает мне побороть страх, когда мне страшно,
  10. О, Владыка мой, указывающий мне путь верный, когда пребываю я в смущении и замешательстве,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Provider in my hardship,\nO Source of Hope in my misfortune,\nO Companion in my isolation,\nO Fellow Traveller in my journey,\nO Friend in my ease,\nO Rescuer from my trials,\nO Guide in my perplexity,\nO Resource in my neediness,\nO Shelter in my helplessness,\nO Deliverer from my fears.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا عُدَّتِي عِنْدَ شِدَّتِي ؛۝؛ يَا رَجَائِي عِنْدَ مُصِيبَتِي ؛۝؛ يَا مُونِسِي عِنْدَ وَحْشَتِي ؛۝؛ يَا صَاحِبِي عِنْدَ غُرْبَتِي ؛۝؛ يَا وَلِيِّي عِنْدَ نِعْمَتِي ؛۝؛يَا كَاشِفِي عِنْدَ كُرْبَتِي ؛۝؛ يَا غِيَاثِي عِنْدَ افْتِقَارِي ؛۝؛ يَا مَلْجَئِي عِنْدَ اضْطِرَارِي ؛۝؛ يَا مُعِينِي عِنْدَ فَزَعِي ؛۝؛ يَا دَلِيلِي عِنْدَ حَيْرَتِي ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":12,
      "latin": `1. Yâ allâme\'l-ğuyûb
      2. Yâ ğaffâra\'z-zünûb
      3. Yâ settâre\'l-\'uyûb
      4. Yâ keşşâfe\'l-kürûb
      5. Yâ mukallibe\'l-kulûb
      6. Yâ müzeyyine\'l-kulûb
      7. Yâ münevvira\'l-kulûb
      8. Yâ tabîbe\'l-kulûb
      9. Yâ habîbe\'l-kulûb
      10. Yâ enîse\'l-kulûb`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey gaypta olan her şeyi bilen,
      2. Ey günahları sürekli bağışlayan,
      3. Ey ayııpları sürekli örten,
      4. Ey zorlukarı gideren,
      5. Ey kalpleri değiştiren,
      6. Ey kalplerin tabibi,
      7. Ey kalpleri aydınlatan,
      8. Ey kalperin hemderdi,
      9. Ey sıkıntıları esenliğe dönüştüren,
      10. Ey üzüntüleri yok eden`,
      "russian":`1. О, знающий неизвестное,
  2. О, многократно прощающий грехи повторяющиеся,
  3. О, прикрывающий изъяны,
  4. О, уничтожающий печали,
  5. О, изменяющий состояние души,
  6. О, Тот, кто исполняет сердца красотой,
  7. О, Тот, кто наполняет сердца светом,
  8. О, врачеватель душ,
  9. О, Тот, кого любят сердца,
  10. О, Владыка мой, вселяющий дружбу в сердца,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Knower of the unseen,\nO Forgiver of sins,\nO Concealer of defects,\nO Expeller of pain,\nO Transformer of the hearts\nO Physician of the hearts,\nO Illuminator of the hearts,\nO Intimate of the hearts,\nO Dispeller of anxiety,\nO Liberator from grief.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا عَلَّامَ الْغُيُوبِ ؛۝؛ يَا غَفَّارَ الذُّنُوبِ ؛۝؛ يَا سَتَّارَ الْعُيُوبِ ؛۝؛ يَا كَشَّافَ الْكُرُوبِ ؛۝؛ يَا مُقَلِّبَ الْقُلُوبِ ؛۝؛ يَا مُزَيِّنَ الْقُلُوبِ ؛۝؛ يَا مُنَوِّرَ الْقُلُوبِ ؛۝؛ يَا طَبِيبَ الْقُلُوبِ ؛۝؛ يَا حَبِيبَ الْقُلُوبِ ؛۝؛ يَا أَنِيسَ الْقُلُوبِ ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":13,
      "latin": `Ve es\'elüke, bi-esmâike:
      1. Yâ Celîl
      2. Yâ Cemîl
      3. Yâ Vekîl
      4. Yâ Kefîl
      5. Yâ Delîl
      6. Yâ Mukîl
      7. Yâ Habîr
      8. Yâ Latîf
      9. Yâ \'Azîz
      10. Yâ Melîk`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey yücelik ve ululuk sahibi Celil
      2. Ey gerçek güzellik sahibi Cemil,
      3. Ey kendine güvenen kullarının işini en iyi yoluna koyan Vekil,
      4. Ey kullarının takatını aşan işlerini üzerine alan Kefil,
      5. Ey kullarına yol gösteren Delil,
      6. Ey kullarının hata ve yanlışlarını bağışlayan Mukil,
      7. Ey her şeyden haberdar olan Habir,
      8. Ey lütuf u keremi bol olan Latif,
      9. Ey sonsuz izzet sahibi Aziz,
      10. Ey bütün mevcudatın gerçek sahibi ve hükümdarı olan Melik`,
      "russian":`Обращаюсь к тебе и молю;
  1. О, обладатель величия безграничного и бесконечного,
  2. О, прекрасный и украшающий все сущее,
  3. О, насыщающий всех и управляющий всеми,
  4. О, берущий на себя исполнение всех потребностей всего сущего,
  5. О, указывающий рабам своим путь верный,
  6. О, прощающий грехи и ошибки рабам своим,
  7. О, осведомленный, от чьего всеведения ничто не может скрыться,
  8. О, Тот, кто рабам и тварям своим дарит утонченно и изящно все, что для них полезно, и знает все сокрытые стороны всякого дела,
  9. О, сильный, непобедимый,
  10. О, Владыка мой, Царь всего мироздания и истинный хозяин всего сущего,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I beseech You in Your name:\nO Glorious, \nO Virtuous,\nO Protector, \nO Patron,\nO Guide, \nO Guarantor,\nO Bestower of Wealth, \nO Bestower of blessings,\nO Bestower of strength, \nO Acceptor of repentance.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا جَلِيلُ ؛۝؛ يَا جَمِيلُ ؛۝؛ يَا وَكِيلُ ؛۝؛ يَا كَفِيلُ ؛۝؛ يَا دَلِيلُ ؛۝؛ يَا مُقِيلُ ؛۝؛ يَا خَبِيرُ ؛۝؛ يَا لَطِيفُ ؛۝؛ يَا عَزِيزُ ؛۝؛ يَا مَلِيكُ ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":14,
      "latin": `1. Yâ delîle\'l-mütehayyirîn
      2. Yâ ğıyâse\'l-müsteğisîn
      3. Yâ sarîha\'l-müstasrihîn
      4. Yâ câre\'l-müstecirîn
      5. Yâ melcee\'l-\'âsîn
      6. Yâ ğâfire\'l-müznibîn
      7. Yâ emâne\'l-hâifîn
      8. Yâ râhime\'l-mesâkîn
      9. Yâ enîse\'l-müstevhışîn
      10. Yâ mucîbe da\'vetil-mudtarrîn`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey şaşkınlarin yol göstericisi,
      2. Ey yardım isteyenlerin yardımcısı,
      3. Ey medet isteyenlerin imdat edicisi,
      4. Ey korunmak isteyenlerin koruyucusu,
      5. Ey asilerin sığınagı,
      6. Ey günahkarların bağışlayıcısı,
      7. Ey korkanlara emniyet veren,
      8. Ey miskinlere merhamet eden,
      9. Ey yalnızlık duyanların dostu,
      10. Ey darda kalanların dualarina cevap veren`,
      "russian":`1. О, Тот, кто указывает путь всем, кто терзается в сомнениях,
  2. О, помогающий всем, кто просит о помощи,
  3. О, посылающий помощь всем, кто взывает о ней,
  4. О, хранящий всех, кто ищет спасения,
  5. О, прибежище грешников, восставших против воли Его,
  6. О, прощающий грешников,
  7. О, устраняющий страх тех, кто испуган,
  8. О, великодушный к беспомощным и нуждающимся,
  9. О, не оставляющий тех, кто остался в полном одиночестве,
  10. О, Владыка мой, внимающий мольбам всех, кому трудно и тяжко,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Guide of the waylaid,\nO Rescuer of those who appeal,\nO Helper of those who call,\nO Aider of those who call,\nO Shelter of the fearful,\nO Succourer of the faithful,\nO Merciful to the indigent,\nO Refuge for the disobedient,\nO Forgiver of the sinner,\nO Responder to the supplicant`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا دَلِيلَ الْمُتَحَيِّرِينَ ؛۝؛ يَا غِيَاثَ الْمُسْتَغِيثِينَ ؛۝؛ يَا صَرِيخَ الْمُسْتَصْرِخِينَ ؛۝؛ يَا جَارَ الْمُسْتَجِيرِينَ ؛۝؛ يَا مَلْجَأَ الْعَاصِينَ ؛۝؛ يَا غَافِرَ الْمُذْنِبِينَ ؛۝؛ يَا أَمَانَ الْخَائِفِينَ ؛۝؛ يَا رَاحِمَ الْمَسَاكِينِ ؛۝؛ يَا أَنِيسَ الْمُسْتَوْحِشِينَ ؛۝؛ يَا مُجِيبَ دَعْوَةِ الْمُضْطَرِّينَ ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":15,
      "latin": `1. Yâ ze\'l-cûdi ve\'l-ihsân
      2. Yâ ze\'l-fadlı ve\'l-imtinân
      3. Yâ ze\'l-emni ve\'l-emân
      4. Yâ ze\'l-kudsi ve\'s-sübhân
      5. Yâ ze\'l-hikmeti ve\'l-beyân
      6. Yâ ze\'r-rahmeti ve\'r-rıdvân
      7. Yâ ze\'l-hücceti ve\'l-bürhân
      8. Yâ ze\'l-azameti ve\'s-sultân
      9. Yâ ze\'l-afvi ve\'l-gufrân
      10. Yâ ze\'r-re\'feti ve\'l-müste\'ân`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey cömertlik ve ihsan sahibi,
      2. Ey fazl ve iyilik sahibi,
      3. Ey emniyet ve eman sahibi,
      4. Ey kudsiyet ve kemalat sahibi
      5. Ey hikmet ve bayan sahibi
      6. Ey rahmet ve rıdvan sahibi,
      7. Ey kesin delil ve bürhan sahibi,
      8. Ey azamet ve saltanat sahibi,
      9. Ey af ve mağfiret sahibi,
      10. Ey kendisinden yardim istenen şefkat sahibi`,
      "russian":`1. О, обладатель щедрот неисчерпаемых,
  2. О, дарующий щедро и ничего не требующий взамен,
  3. О, Тот, кто хранит в безопасности и дарует свое прощение и покровительство,
  4. О, Тот, кто далек от недостатков и является источником всякой чистоты во всем мироздании,
  5. О, творящий мудро и объясняющий мудрость свою,
  6. О, бесконечно великодушный к созданиям своим и довольный покорными рабами своими,
  7. О, свидетель всякой вещи и ясно доказывающий свое существование,
  8. О, единственный обладатель величия и властелин мироздания,
  9. О, прощающий грешных рабов своих,
  10. О, Владыка мой, безгранично сострадающий и великодушный в благодеяниях своих, тот, к кому все живое обращается в мольбах о помощи,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Master of liberality and beneficence,\nO Most gracious and obliging,\nO Master of peace and security,\nO Most holy and above all defects,\nO Master of wisdom and manifestation,\nO Master of mercy and satisfaction,\nO Master of argument and proof,\nO Master of grandeur and sovereignty,\nO Master of kindness and succour,\nO Master of pardon and forgiveness.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا ذَا الْجُودِ وَالْإِحْسَانِ ؛۝؛ يَا ذَا الْفَضْلِ وَالْاِمْتِنَانِ ؛۝؛ يَا ذَا الْأَمْنِ وَالْأَمَانِ ؛۝؛ يَا ذَا الْقُدْسِ وَالسُّبْحَانِ ؛۝؛ يَا ذَا الْحِكْمَةِ وَالْبَيَانِ ؛۝؛ يَا ذَا الرَّحْمَةِ وَالرِّضْوَانِ ؛۝؛ يَا ذَا الْحُجَّةِ وَالْبُرْهَانِ ؛۝؛ يَا ذَا الْعَظَمَةِ وَالسُّلْطَانِ ؛۝؛ يَا ذَا الْعَفْوِ وَالْغُفْرَانِ ؛۝؛ يَا ذَا الرَّأْفَةِ وَالْمُسْتَعَانِ ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":16,
      "latin": `1. Yâ men hüve Rabbü külli şey\'in
      2. Yâ men hüve ilâhu külli şey\'in
      3. Yâ men hüve hâliku külli şey\'in
      4. Yâ men hüve fevka külli şey\'in
      5. Yâ men hüve kable külli şey\'in
      6. Yâ men hüve ba\'de külli şey\'in
      7. Yâ men hüve alimu külli şey\'in
      8. Yâ men hüve kâdiru külli şey\'in
      9. Yâ men hüve sâniu külli şey\'in
      10. Yâ men hüve yebkâ ve yefnâ küllü şey\'in`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey her şeyin Rabbi,
      2. Ey her şeyin İlahı,
      3. Ey her şeyin Yaratıcısı,
      4. Ey her şeyin üzerinde olan,
      5. Ey her şeyden önce olan,
      6. Ey her şeyden sonra olan
      7. Ey her şeyi bilen,
      8. Ey her şeye gücü yeten
      9. Ey her şeyin Sanii
      10. Ey her şey fenâ bulup, Kendisi bâkî kalan`,
      "russian":`1. О, единственный Владыка всего сущего,
  2. О, единственный Бог всего сущего,
  3. О, единственный Творец всего сущего,
  4. О, Тот, который над всеми и который выше всех,
  5. О, Тот, который был, когда еще ничего не было,
  6. О, Тот, который будет и тогда, когда все перестанет существовать,
  7. О, Тот, от всеведения которого не может скрыться ничего из прошлого, настоящего, и будущего, ничего из малого и великого, ничего из тайного и явного,
  8. О, Всемогущий,
  9. О, творящий искусно и совершенно,
  10. О, Владыка мой вечный, тогда как все остальное не вечно,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, Who is the Lord over all things,\nO He, Who is the Allah of all things,\nO He, Who is the Creator of all things,\nO He. Who is the Fashioner of all things,\nO He, Who is the Preceder of all things,\nO He, Who is the Successor of all things,\nO He, Who is above all things,\nO He, Who knows all things,\nO He, Who is Powerful over all things,\nO He, Who is the Sustainer and Extinguisher of all things,`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ هُوَ رَبُّ كُلِّ شَيْءٍ ؛۝؛ يَا مَنْ هُوَ إِلٰهُ كُلِّ شَيْءٍ ؛۝؛ يَا مَنْ هُوَ خَالِقُ كُلِّ شَيْءٍ ؛۝؛ يَا مَنْ هُوَ فَوْقَ كُلِّ شَيْءٍ ؛۝؛ يَا مَنْ هُوَ قَبْلَ كُلِّ شَيْءٍ ؛۝؛ يَا مَنْ هُوَ بَعْدَ كُلِّ شَيْءٍ ؛۝؛ يَا مَنْ هُوَ عَالِمُ كُلِّ شَيْءٍ ؛۝؛ يَا مَنْ هُوَ قَادِرُ كُلِّ شَيْءٍ ؛۝؛ يَا مَنْ هُوَ صَانِعُ كُلِّ شَيْءٍ ؛۝؛ يَا مَنْ هُوَ يَـبْقَى وَيَـفْنَى كُلُّ شَيْءٍ ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":17,
      "latin": `Ve es\'elüke, bi-esmâike:
      1. Yâ Mü\'min
      2. Yâ Müheymin
      3. Yâ Mükevvin
      4. Yâ Mülekkin
      5. Yâ Mübeyyin
      6. Yâ Mühevvin
      7. Yâ Müzeyyin
      8. Yâ Muazzim
      9. Yâ Muavvin
      10. Yâ Mülevvin`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey kalplerde iman nurunu yakan ve kullarına huzur ve güven veren Mümin,
      2. Ey bütün varlıkları ilim ve kontrolü altında tutan Müheymin,
      3. Ey bütün mahlukatı yoktan meydana getiren Mükevvin,
      4. Ey bütün yaratıklarına dünyadaki vazifelerini ögretip telkin eden Mülakkin,
      5. Ey kulları için açıklanması gereken her şeyi beyan eden Mübeyyin,
      6. Ey musibetleri hafifleten ve zorluklari kolaylaştıran Mühevvin,
      7. Ey her seyi münasip şekilde süsleyen Müzeyyin,
      8. Ey diledigini yücelten ve kullarına büyüklügünü gösteren Muazzim,
      9. Ey muhtaçlarin yardımına koşan Mavvin,
      10. Ey her şeyi çesit çesit renklerle bezeyen Melevvin`,
      "russian":`Обращаюсь к тебе и молю;
  1. О, оберегающий рабов своих в мире земном от всякой опасности и в День Суда от несправедливости,
  2. О, оберегающий рабов своих и наблюдающий за ними неусыпно,
  3. О, создавший все сущее из ничего,
  4. О, внушающий и обучающий все сущее тому, в чем оно нуждается,
  5. О, объясняющий рабам своим все, что нужно им знать и ясно поясняющий единство свое,
  6. О, облегчающий рабам своим все трудности,
  7. О, украшающий все так, как достойно его величия,
  8. О, о величии которого сами рабы его свидетельствуют,
  9. О, заставляющий создания свои спешить друг другу на помощь и сам помогающий всем, кто в ней нуждается,
  10. О, который творит радужно и многообразно,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I beseech You in Your name:\nO Securer of safety, \nO Protector,\nO Bestower of being, \nO Bestower of knowledge,\nO Manifester, \nO Facilitator,\nO Provider of place, \nO Adorner,\nO Proclaimer, \nO Distributor.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا مُؤْمِنُ ؛۝؛ يَا مُهَيْمِنُ ؛۝؛ يَا مُكَوِّنُ ؛۝؛ يَا مُلَقِّنُ ؛۝؛ يَا مُبَـيِّنُ ؛۝؛ يَا مُهَوِّنُ ؛۝؛ يَا مُزَيِّنُ ؛۝؛ يَا مُعَظِّمُ ؛۝؛ يَا مُعَوِّنُ ؛۝؛ يَا مُلَوِّنُ ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":18,
      "latin": `1. Yâ men hüve fî-mülkihî mukîm
      2. Yâ men hüve fî-celâlihî \'azîm
      3. Yâ men hüve fî-sultânihî kadîm
      4. Yâ men hüve \'alâ \'abdihî rahîm
      5. Yâ men hüve bi-külli şey\'in \'alîm
      6. Yâ men hüve li-men cefâhü halîm
      7. Yâ men hüve li-men tereccâhü kerim
      8. Yâ men hüve fî-makâdîrihî hakîm
      9. Yâ men hüve fî-hükmihî lâtif
      10. Yâ men hüve fî-lütfihî kadîr`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey mülkünde daim olan,
      2. Ey celalinde azim olan,
      3. Ey saltanatında kadim olan,
      4. Ey kullarına rahmet eden,
      5. Ey her şeyi bilen,
      6. Ey emirlerine uymayana halim olan,
      7. Ey kendisine ümit bağlayana kerim olan,
      8. Ey ölçülerinde hikmetli olan,
      9. Ey hükmünde lütuf sahibi olan,
      10. Ey lütfunda kadir olan`,
      "russian":`1. О, Тот, чья власть над мирозданием и распорядительность непоколебима,
  2. О, Тот, пред величием которого все становится крошечным и ничтожным,
  3. О, Тот, чья власть изначальна,
  4. О, Тот, кто велик в милосердии своем и великодушии к рабам своим,
  5. О, Тот, от знания которого не может скрыться ничего из прошлого, настоящего и будущего, ничего из малого и великого, ничего тайного и явного,
  6. О, Тот, кто долготерпим и не спешит наказать тех рабов своих грешных, которые отвернулись от Него и пошли против воли его,
  7. О, Тот, кто не оставляет без ответа ожидания тех, кто понадеялся на него и воздает за это добром,
  8. О, обладатель мудрости, предопределением своим и волею все совершающий к месту и ко времени,
  9. О, Тот, кто утончен и изящен в решениях своих и знает все тайные и скрытые стороны всех дел,
  10. О, Владыка мой, могущий каждому воздать по заслугам милость и доброту Свою,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Everlasting in His Kingdom,\nO Eternal in His sovereignty,\nO Greatest in His grandeur,\nO Most Merciful to His servants,\nO Knower of everything,\nO Forbearing to him who disobeys Him,\nO Magnanimous to him who places his hope in Him,\nO He Who is Wise over what He has fashioned,\nO He Who is Subtle in his Wisdom,\nO He Who is Eternal in His Kindness.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ هُوَ فِي مُلْكِه۪ مُقِيمٌ ؛۝؛ يَا مَنْ هُوَ فِي جَلَالِه۪ عَظِيمٌ ؛۝؛ يَا مَنْ هُوَ فِي سُلْطَانِه۪ قَدِيمٌ ؛۝؛ يَا مَنْ هُوَ عَلَى عَبْدِه۪ رَحِيمٌ ؛۝؛ يَا مَنْ هُوَ بِكُلِّ شَيْءٍ عَلِيمٌ ؛۝؛ يَا مَنْ هُوَ لِمَنْ جَفَاهُ حَلِيمٌ ؛۝؛ يَا مَنْ هُوَ لِمَنْ تَرَجَّاهُ كَرِيمٌ ؛۝؛ يَا مَنْ هُوَ فِي مَقَادِيرِه۪ حَكِيمٌ ؛۝؛ يَا مَنْ هُوَ فِي حُكْمِه۪ لَطِيفٌ ؛۝؛ يَا مَنْ هُوَ فِي لُطْفِه۪ قَدِيرٌ ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":19,
      "latin": `1. Yâ men lâ yürcâ illâ fadluh
      2. Yâ men lâ yühâfü illâ \'adluh
      3. Yâ men lâ yüntezarû illâ birruh
      4. Yâ men lâ yüs\'elü illâ \'afvuh
      5. Yâ men lâ yedûmu illâ mülküh
      6. Yâ men lâ sultâne illâ sultanüh
      7. Yâ men lâ bürhâne illâ burhânüh
      8. Yâ men vesi\'at külle şey\'in rahmetüh
      9. Yâ men sebekat rahmetühü \'alâ gadabih
      10. Yâ men ehâta bi külli şey\'in \'ilmüh`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey fazlından başka bir şey ümit edilmeyen,
      2. Ey fazlından başka bir şey ümit edilmeyen,
      3. Ey adaletinden başka bir şeyden korkulmayan,
      4. Ey affından başka bir şey istenmeyen,
      5. Ey mülkünden başkası devam etmeyen,
      6. Ey saltanatından başka saltanat bulunmayan,
      7. Ey bürhanlarından başka bürhan bulunmayan,
      8. Ey rahmeti her şeyi kuşatmış olan,
      9. Ey rahmeti gazabını geçmiş olan,
      10. Ey ilmiyle her şeyi kuşatmış olan,`,
      "russian":`1. О, Тот, от кого можно ожидать только прекрасных и достойных поступков,
  2. О, Тот, в чьих свершениях всесильна справедливость Его,
  3. О, Тот, от которого ожидают лишь добра,
  4. О, Тот, лишь которого просят о прощении,
  5. О, Тот, единственный, чья власть неподвластна времени,
  6. О, Тот, единственный, чья власть всесильна, и нет другой власти кроме Его власти,
  7. О, Тот, в существовании которого нет необходимости в доказательствах, ибо Он Сам может доказать, что угодно,
  8. О, Тот, чья милость объяла все и вся,
  9. О, Тот, чья милость сильнее гнева Его,
  10. О, Владыка мой, чье знание охватывает все и вся,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, from Whom no hope is entertained save by His Grace ,\nO He, from Whom nothing is begged save His Pardon,\nO He, of Whom nothing is seen save His Goodness,\nO He, from Whom nothing is feared save His Justice,\nO He, Whose sovereignty alone of eternal,\nO He, Who alone has true majesty,\nO He, Whose blessings extend to all,\nO He, Whose Wrath is surpassed by His Mercy,\nO He, Whose knowledge encompasses everything,\nO He, Who is without equal,`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ لَا يُرْجَى إِلَّا فَضْلُهُ ؛۝؛ يَا مَنْ لَا يُخَافُ إِلَّا عَدْلُهُ ؛۝؛ يَا مَنْ لَا يُنْتَظَرُ إِلَّا بِرُّهُ ؛۝؛ يَا مَنْ لَا يُسْئَلُ إِلَّا عَفْوُهُ ؛۝؛يَا مَنْ لَا يَدُومُ إِلَّا مُلْكُهُ ؛۝؛يَا مَنْ لَا سُلْطَانَ إِلَّا سُلْطَانُهُ ؛۝؛ يَا مَنْ لَا بُرْهَانَ إِلَّا بُرْهَانُهُ ؛۝؛ يَا مَنْ وَسِعَتْ كُلَّ شَيْءٍ رَحْمَتُهُ ؛۝؛ يَا مَنْ سَبَقَتْ رَحْمَتُهُ عَلَى غَضَبِه۪ ؛۝؛ يَا مَنْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمُهُ ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":20,
      "latin": `1. Yâ fârice\'l-hemmi
      2. Yâ kâşife\'l-ğammi
      3. Yâ gâfire\'z-zenbi
      4. Yâ kâbile\'t-tevbi
      5. Yâ hâlika\'l-halki
      6. Yâ sâdıka\'l-va\'di
      7. Yâ râzıka\'t-tıfli
      8. Yâ mûfiye\'l-\'ahdi
      9. Yâ \'alime\'s-sırri
      10. Yâ fâlika\'l-habbi`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey tasayı kaldıran,
      2. Ey gamı gideren,
      3. Ey günahı affeden,
      4. Ey tevbeyi kabul eden,
      5. Ey yaratılmışların yaratıcısı,
      6. Ey vaadinde sadık olan,
      7. Ey yavrulara rızık veren,
      8. Ey sözünü yerine getiren,
      9. Ey gizliyi bilen,
      10. Ey tohumu yarıp sümbüllendiren`,
      "russian":`1. О, Тот, кто избавляет от печалей и трудностей,
  2. О, Тот, кто освобождает от горечей и невзгод,
  3. О, Тот, кто прощает грехи,
  4. О, Тот, кто принимает раскаяния,
  5. О, Творец всего и вся,
  6. О, Тот, кто исполняет обещания,
  7. О, Тот, кто кормит великодушно детей и детенышей,
  8. О, Тот, кто держит слово Свое,
  9. О, Тот, кто знает тайны все,
  10. О, Владыка мой, что рассекает семена и зерна и выводит из них ростки,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Remover of anxiety,\nO Expeller of sorrow,\nO Forgiver of sins,\nO Acceptor of repentance,\nO Creator of creatures,\nO Truthful in promises,\nO Fulfiller of promises,\nO Knower of secrets,\nO Splitter of seed,\nO Provider for creatures.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا فَارِجَ الْهَمِّ ؛۝؛ يَا كَاشِفَ الْغَمِّ ؛۝؛ يَا غَافِرَ الذَّنْبِ ؛۝؛ يَا قَابِلَ التَّوْبِ ؛۝؛ يَا خَالِقَ الْخَلْقِ ؛۝؛ يَا صَادِقَ الْوَعْدِ ؛۝؛ يَا رَازِقَ الطِّفْلِ ؛۝؛ يَا مُوفِيَ الْعَهْدِ ؛۝؛ يَا عَالِمَ السِّرِّ ؛۝؛ يَا فَالِقَ الْحَبِّ ؛۝؛`,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":21,
      "latin": `Fe es\'elüke, bi-esmâike:
      1. Yâ \'Aliyyü
      2. Yâ Vefiyyü
      3. Yâ Veliyyü
      4. Yâ Ganiyyü
      5. Yâ Meliyyü
      6. Yâ Zekiyyü
      7. Yâ Radıyyü
      8. Yâ Bediyyü
      9. Yâ Hafiyyü
      10. Yâ Kaviyyü`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey her şeyiyle yüce olan Ali,
      2. Ey sözünde vefalı olan ve vaadinden dönmeyen Vefî,
      3. Ey Müminlerin dostu olan Veli,
      4. Ey gerçek zenginlik sahibi ve hiçbir şeye muhtaç olmayan Gani,
      5. Ey sonsuz servet ve tükenmez hazineler sahibi Meli,
      6. Ey her cihetten temiz ve pak olan Zeki,
      7. Ey kendisine kulluk edenlerden hoşnut olan Razi,
      8. Ey eser ve ihsanlarıyla varlığı apaçık görünen Bedi,
      9. Ey şiddet i zuhurundan gizlenen Hafi,
      10. Ey güç ve kuvveti sonsuz olan Kavi`,
      "russian":`Обращаюсь к тебе и молю;
  
  1. О, великий в могуществе своем над созданиями своими,
  2. О, верный всем своим благим обещанием и угрозам, и воздающий нуждающимся по их потребностям и нуждам,
  3. О, вершащий дела мироздания и всех создания своих,
  4. О обладатель истинного богатства, совершенный в том, чем обладает, ни в чём не нуждающийся,
  5. О, всемогущий обладатель сокровищниц неистощимых,
  6. О, абсолютно совершенный и бесконечно далекий от всякой духовной и физической нечисти,
  7. О, внушающий любовь к себе своими благами и воздаяниями творениям своим и довольный их службой,
  8. О, существование и единство которого ясно проявляется в необыкновенных творениях его,
  9. О, ведающий обо всём, вплоть до мельчайшей из мелочей и дарующий незаметно,
  10. О, чья мощь и сила не знают границ,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I beseech You in Your name:\nO High, \nO Perfect\nO Independent, \nO Rich,\nO Kind, \nO Agreeable\nO Purifier, \nO Eternal,\nO Mighty, \nO Friend.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`فَأَسْأَلُكَ بِأَسْمَائِكَ يَا عَلِيُّ ؛۝؛ يَا وَفِيُّ ؛۝؛ يَا وَلِيُّ ؛۝؛ يَا غَنِيُّ ؛۝؛ يَا مَلِيُّ ؛۝؛ يَا زَكِيُّ ؛۝؛ يَا رَضِيُّ ؛۝؛ يَا بَدِيُّ ؛۝؛ يَا حَفِيُّ ؛۝؛ يَا قَوِيُّ ؛۝؛` ,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":22,
      "latin": `1. Yâ men azhera\'l-cemîl
      2. Yâ men setera \'ale\'l-kabîh
      3. Yâ men lâ yüâhizü bi\'l-cerîmeh
      4. Yâ men lâ yehtikü\'s-sitr
      5. Yâ azîmel-\'Afvi
      6. Yâ hasene\'t-tecâvüz
      7. Yâ vâsia\'l-mağfireh
      8. Yâ bâsita\'l-yedeyni bi\'r-rahmeh
      9. Yâ sâhibe külli necvâ
      10. Yâ müntehâ külli şekvâ`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey güzeli açığa çıkaran,
      2. Ey çirkinin üzerini örten,
      3. Ey suç sebebiyle hemen azarlamayan,
      4. Ey ayıpların üzerindeki perdeyi yırtmayan,
      5. Ey affı büyük olan,
      6. Ey günahkarları cezalandırmaktan vazgeçmesi güzel olan,
      7. Ey mağfireti geniş olan,
      8. Ey rahmeti bol veren,
      9. Ey bütün sessiz yalvarışların sahibi,
      10. Ey bütün şikayetler kendisinde son bulan,`,
      "russian":`1. О, являющий миру прекрасное,
  2. О, скрывающий уродливое,
  3. О, Тот, кому не вредят грехи рабов его, и кто не спешит наказать за них из мести,
  4. О, Тот, кто не обрекает на позор, скрывая тайные постыдные дела созданий своих,
  5. О, Тот, чье прощение велико,
  6. О, лучший из тех, кто умеет великодушно не наказать,
  7. О, Тот, чье прощение не знает границ,
  8. О, Тот, кто открывает рабам своим врата милости своей,
  9. О, Тот, кто улавливает и распознаёт всякий шёпот,
  10. О, Владыка мой, последний и высочайший, к кому обращаются с жалобами,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, Who reveals virtue,\nO He, Who conceals vice,\nO He Who does not call to severe account for sins,\nO He, Who does not disclose the disgrace of his servants,\nO He, Who is the best forgiver,\nO He, Who overlooks errancy,\nO He, Whose forgiveness extends over all.\nO He, Whose Hands are stretched forth in mercy,\nO He, Who knows all secrets,\nO He, to Whom all complaints are directed.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ أَظْهَرَ الْجَمِيلَ ؛۝؛ يَا مَنْ سَتَرَ عَلَى الْقَبِيحِ ؛۝؛ يَا مَنْ لَا يُؤَاخِذُ بِالْجَرِيمَةِ ؛۝؛ يَا مَنْ لَا يَهْتِكُ السِّتْرَ ؛۝؛ يَا عَظِيمَ الْعَفْوِ ؛۝؛ يَا حَسَنَ التَّجَاوُزِ ؛۝؛ يَا وَاسِعَ الْمَغْفِرَةِ ؛۝؛ يَا بَاسِطَ الْيَدَيْنِ بِالرَّحْمَةِ ؛۝؛ يَا صَاحِبَ كُلِّ نَجْوَى ؛۝؛ يَا مُنْتَهَى كُلِّ شَكْوَى ؛۝؛` ,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":23,
      "latin": `1. Yâ ze\'n-ni\'meti\'s-sâbiğah
      2. Yâ zer\'rahmeti\'l-vâsi\'ah
      3. Yâ ze\'l-hikmeti\'l-bâliğah
      4. Yâ ze\'l-kudreti\'l-kâmileh
      5. Yâ ze\'l-hücceti\'l-kâti\'ah
      6. Yâ ze\'l-kerâmeti\'z-zâhirah
      7. Yâ ze\'s-sıfati\'l-\'âliyeh
      8. Yâ ze\'l-izzeti\'d-dâimeh
      9. Yâ ze\'l-kuvveti\'l-metîneh
      10. Yâ ze\'l-minneti\'s-sâbikah`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey bol nimet sahibi,
      2. Ey geniş rahmet sahibi,
      3. Ey tam hikmet sahibi,
      4. Ey kamil kudret sahibi,
      5. Ey kesin hüccet sahibi,
      6. Ey açık ikram sahibi,
      7. Ey yüce sıfat sahibi,
      8. Ey daim izzet sahibi,
      9. Ey metin kuvvet sahibi,
      10. Ey geçmiş minnet sahibi,`,
      "russian":`1. О, обладатель благ всеохватывающих,
  2. О, обладатель милости широчайшей,
  3. О, обладатель мудрости полнейшей,
  4. О, обладатель могущества совершеннейшего,
  5. О, обладатель твердого доказательства бытия своего и единства,
  6. О, обладатель благородства и щедрости явной,
  7. О, обладатель черт высочайших и изысканнейших,
  8. О, обладатель вечного величия гордого,
  9. О, обладатель силы твердой,
  10. О, Владыка мой, что осыпает благами рабов своих прежде, чем они сослужат ему службу,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Master of countless blessings,\nO Master of limitless mercy,\nO Master surpassing all obligation,\nO Master of perfect wisdom,\nO Master of infinite might,\nO Master of the decisive argument,\nO Master of the manifest miracle,\nO Master of perpetual prestige,\nO Master of great strength,\nO Master of unsurpassable glory`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا ذَا النِّعْمَةِ السَّابِغَةِ ؛۝؛ يَا ذَا الرَّحْمَةِ الْوَاسِعَةِ ؛۝؛ يَا ذَا الْحِكْمَةِ الْبَالِغَةِ ؛۝؛ يَا ذَا الْقُدْرَةِ الْكَامِلَةِ ؛۝؛ يَا ذَا الْحُجَّةِ الْقَاطِعَةِ ؛۝؛ يَا ذَا الْكَرَامَةِ الظَّاهِرَةِ ؛۝؛ يَا ذَا الصِّفَةِ الْعَالِـيَـةِ ؛۝؛ يَا ذَا الْعِـزَّةِ الدَّائِمَةِ ؛۝؛ يَا ذَا الْقُوَّةِ الْمَـتِـينَـةِ ؛۝؛ يَا ذَا الْمِنَّـةِ السَّابِقَةِ ؛۝؛` ,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":24,
      "latin": `1. Yâ ahkeme\'l-hâkimin
      2. Yâ a\'dele\'l-âdilin
      3. Yâ esdaka\'s-sâdıkîn
      4. Yâ ezhara\'z-zâhirîn
      5. Yâ ethera\'t-tâhirîn
      6. Yâ ahsene\'l-hâlikîn
      7. Yâ esre\'a\'l-hâsibîn
      8. Yâ esma\'a\'s-sâmiîn
      9. Yâ ekreme\'l-ekremîn
      10. Yâ erhame\'r-râhimîn
      11. Yâ eşfe\'a\'ş-şâfi\'în`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey hükmedenlerin en hükmedicisi,
      2. Ey adillerin en adaletlisi,
      3. Ey doğruların en doğrusu,
      4. Ey varlığı açık olanların en açıgı,
      5. Ey temiz olanların en temizi,
      6. Ey yaratıcılık mertebelerinin en güzelinde olan,
      7. Ey hesaba çekenlerin en süratlisi,
      8. Ey işitenlerin en iyi işiticisi,
      9. Ey ikram edenlerin en iyi ikram edicisi,
      10. Ey merhamet edenlerin en merhametlisi,`,
      "russian":`1. О, властелин властелинов,
  2. О, наисправедливый,
  3. О, наиверный,
  4. О, Тот, чье существование яснее ясного,
  5. О, наичистый,
  6. О, наилучший из всех творящих,
  7. О, Тот, который рассчитывается быстрее быстрого,
  8. О, Тот, который слышит все и вся,
  9. О, наиблагородный из дарящих,
  10. О, наимилосердный из милосердных,
  11. О, величайший из всех заступников,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Originator of the heavens,\nO Maker of darkness,\nO Merciful to those who weep,\nO He Who oversees slips and errors,\nO Concealer of defects,\nO Reviver of the dead,\nO Revealer of signs,\nO Increaser of virtue,\nO Who rubs out vices,\nO He Who calls to account.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا أَحْكَمَ الْحَاكِمِينَ ؛۝؛ يَا أَعْدَلَ الْعَادِلِينَ ؛۝؛ يَا أَصْدَقَ الصَّادِقِينَ ؛۝؛ يَا أَظْهَرَ الظَّاهِرِينَ ؛۝؛ يَا أَطْهَرَ الطَّاهِرِينَ ؛۝؛ يَا أَحْسَنَ الْخَالِقِينَ ؛۝؛ يَا أَسْرَعَ الْحَاسِبِينَ ؛۝؛ يَا أَسْمَعَ السَّامِعِينَ ؛۝؛ يَا أَكْرَمَ الْأَكْرَمِينَ ؛۝؛ يَا أَرْحَمَ الرَّاحِمِينَ ؛۝؛ يَا أَشْفَعَ الشَّافِعِينَ ؛۝؛` ,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":25,
      "latin": `1. Yâ bedi\'â\'s-semâvât
      2. Yâ câ\'ile\'z-zulümât
      3. Yâ \'âlime\'l-hafiyyât
      4. Yâ râhime\'l-\'aberât
      5. Yâ sâtira\'l-\'averât
      6. Yâ kâşife\'l-beliyyât
      7. Yâ muhyiye\'l-emvât
      8. Yâ dâ\'ife\'l-hasenât
      9. Yâ münzile\'l-berekât
      10. Yâ şedîde\'n-nekamât`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1 Ey semaları yoktan yaratan,
      2. Ey karanlıkları meydana getiren,
      3. Ey gizlilikleri bilen,
      4. Ey için için üzülenlere acıyan,
      5. Ey utanılacak şeyleri örten,
      6. Ey belaları defeden,
      7. Ey ölüleri dirilten,
      8. Ey sevapları kat kat yazan,
      9. Ey bereketleri indiren,
      10. Ey cezaları şiddetli olan,`,
      "russian":`1. О, сотворивший небеса без предварительных расчетов и не нуждаясь в примерах,
  2. О, сотворивший мрак и тьму,
  3. О, знающий все сокровенное,
  4. О, Тот, кто милует согрешивших, но кающихся,
  5. О, Тот, кто скрывает позорные дела созданий своих,
  6. О, Тот, кто отдаляет беды и несчастья,
  7. О, Тот, кто воскрешает мертвых,
  8. О, вознаграждающий рабов своих сторицей за дела их добрые,
  9. О, Тот, кто ниспосылает благодать и изобилие,
  10. О, Владыка мой, карающий беспощадно и сурово тех, кто достоин наказания,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I beseech You in Your name:\nO Fashioner, \nO Preordainer,\nO Planner, \nO Purifier,\nO Illuminator, \nO Facilitator,\nO Giver of glad tidings, \nO Warner,\nO Giver of precedence, \nO Postponer.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا بَدِيعَ السَّمَاوَاتِ ؛۝؛ يَا جَاعِلَ الظُّلُمَاتِ ؛۝؛ يَا عَالِمَ الْخَـفِـيَّـاتِ ؛۝؛ يَا رَاحِمَ الْعَـبَـرَاتِ ؛۝؛ يَا سَاتِرَ الْعَوْرَاتِ ؛۝؛ يَا كَاشِفَ الْـبَـلِـيَّـاتِ ؛۝؛ يَا مُحْيِـيَ الْأَمْوَاتِ ؛۝؛ يَا ضَاعِفَ الْحَسَنَاتِ ؛۝؛ يَا مُنْزِلَ الْبَرَكَاتِ ؛۝؛ يَا شَدِيدَ الـنَّـقَمَاتِ ؛۝؛` ,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":26,
      "latin": `Ve es\'elüke, bi-esmâike:
      1. Yâ Musavvir
      2. Yâ Mukaddir
      3. Yâ Mutahhir
      4. Yâ Münevvir
      5. Yâ Mukaddim
      6. Yâ Muahhir
      7. Yâ Müyessir
      8. Yâ Münzir
      9. Yâ Mübeşşir
      10. Yâ Müdebbir`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey her varlığa münasip şekil giydiren Musavvir,
      2. Ey her şeyin plan ve programını ölçülü yapan Mukaddir,
      3. Ey her şeyi maddi ve manevi kirlerden temizleyen Mutahhir,
      4. Ey nuruyla her şeyi nurlandıran Münevvir,
      5. Ey dilediğini öne geçiren Mukaddim,
      6. Ey istediğini arkaya bırakan Muahhir,
      7. Ey hayırli isleri kolaylaştıran Müyessir,
      8. Ey kullarını azabıyla korkutan Münzir,
      9. Ey kullarını Cennet ve diğer mükafatlarla müjdeleyen Mübeşşir,
      10. Ey bütün kainati tam bir nizam içinde idare eden Müdebbir,`,
      "russian":`Обращаюсь к тебе и молю;
  1. О, придающий созданиям своим образ, какой пожелает,
  2. О, творящий всё соразмерно,
  3. О, очищающий всё и вся от грязи духовной и физической,
  4. О, озаряющий всё светом своим,
  5. О, выдвигающий вперед, кого пожелает - в положении, славе и почете, месте и времени,
  6. О, оставляющий позади, кого пожелает,
  7. О, дающий благо тем, кто ищет блага и не препятствующий злу для тех, кто ищет зла, и облегчающий трудности,
  8. О, предупреждающий рабов своих о плачевном исходе и возмездии,
  9. О, радующий рабов своих благой вестью,
  10. О, правящий всем мирозданием распорядительно,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Lord of the Sanctuary,\nO Lord of the holy month,\nO Lord of the Holy City,\nO Lord of the Rukn and the Maqam,\nO Lord of the Mashair of Mecca,\nO Lord of the Holy Mosque in Mecca,\nO Lord of what is lawful and what is proscribed,\nO Lord of light and darkness,\nO Lord of salutation and peace,\nO Lord of strength among creatures.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا مُصَوِّرُ ؛۝؛ يَا مُقَدِّرُ ؛۝؛ يَا مُطَهِّرُ ؛۝؛ يَا مُنَوِّرُ ؛۝؛ يَا مُقَدِّمُ ؛۝؛ يَا مُؤَخِّرُ ؛۝؛ يَا مُيَسِّرُ ؛۝؛ يَا مُنْذِرُ ؛۝؛ يَا مُبَشِّرُ ؛۝؛ يَا مُدَبِّرُ ؛۝؛` ,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":27,
      "latin": `1. Yâ Rabbe\'l-Beyti\'l-Harâm
      2. Yâ Rabbe\'ş-şehri\'l-harâm
      3. Yâ Rabbe\'l-Mescidi\'l-harâm
      4. Yâ Rabbe\'l-beledi\'l-harâm
      5. Yâ Rabbe\'r-rükni ve\'l-makâm
      6. Yâ Rabbe\'l-meş\'ari\'l-harâm
      7. Yâ Rabbe\'l-hılli ve\'l-harâm
      8. Yâ Rabbe\'n-nûri ve\'z-zalâm
      9. Yâ Rabbe\'t-tahiyyeti ve\'s-selâm
      10. Yâ Rabbe\'l-celâli ve\'l-ikrâm`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey Beytil Haramın Rabbi,
      2. Ey haram ayların Sahibi,
      3. Ey Mescidü\'l Haramın Rabbi,
      4. Ey haram belde olan Mekke\'nin Rabbi,
      5. Ey Rükn u Hacerü\'l Esved ve Makam-ı İbrahim\'in Rabbi,
      6. Ey Meş\'arü\'l Haramın Rabbi,
      7. Ey helal ve haramın Rabbi,
      8. Ey nur ve karanlığın Rabbi,
      9. Ey tahiyyat ve selamın Rabbi,
      10. Ey celal ve ikramın Rabbi,`,
      "russian":`1. О, Владыка Дома запретного (Каабы),
  2. О, Господь месяцев священных,
  3. О, Владыка мечети запретного (Каабы),
  4. О, Господь Святой Земли - Мекки,
  5. О, Господь Рукна и Макама (священных мест возле Каабы),
  6. О, Владыка Машъаруль-харама,
  7. О, Господь всех свободных и заповедных мест в Хиджазе,
  8. О, Владыка и хозяин света и тьмы (дня и ночи),
  9. О, единственный источник здравия, мира и согласия,
  10. О, Владыка мой, обладатель величия грозного и воздаяний несчётных,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Highest of all authorities,\nO Most Just of all the just,\nO Most Trustworthy of all the trustworthy,\nO Purest of the pure,\nO Best of creators,\nO Quickest Reckoner,\nO Best of listeners,\nO Most vigilant of invigilators,\nO Best of intercessors,\nO Most honourable of all.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا رَبَّ الْبَيْتِ الْحَرَامِ ؛۝؛ يَا رَبَّ الشَّهْرِ الْحَرَامِ ؛۝؛ يَا رَبَّ الْمَسْجِدِ الْحَرَامِ ؛۝؛ يَا رَبَّ الْبَلَدِ الْحَرَامِ ؛۝؛ يَا رَبَّ الرُّكْنِ وَالْمَقَامِ ؛۝؛ يَا رَبَّ الْمَشْعَرِ الْحَرَامِ ؛۝؛ يَا رَبَّ الْحِلِّ وَالْحَرَمِ ؛۝؛ يَا رَبَّ النُّورِ وَالظَّلَامِ ؛۝؛ يَا رَبَّ التَّحِيَّةِ وَالسَّلَامِ ؛۝؛ يَا رَبَّ الْجَلَالِ وَالْإِكْرَامِ ؛۝؛` ,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":28,
      "latin": `1. Yâ \'imâde men lâ \'imâde leh
      2. Yâ senede men lâ senede leh
      3. Yâ zuhra men lâ zuhra leh
      4. Yâ ğıyâse men lâ ğıyâse leh
      5. Yâ hırze men lâ hırze leh
      6. Yâ fahra men lâ fahra leh
      7. Yâ \'izze men lâ \'izze leh
      8. Yâ mu\'îne men lâ mu\'îne leh
      9. Yâ enîse men lâ enîse leh
      10. Yâ ğunyete men lâ ğunyete leh`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey desteği olmayanların desteği,
      2. Ey dayanağı olmayanların dayanağı,
      3. Ey övünülecek bir şeyi olmayanların övüncü,
      4. Ey imdata koşacak kimsesi olmayanların imdadı,
      5. Ey korunacak yeri olmayanların koruyucusu,
      6. Ey iftihar edecek kimsesi olmayanların iftiharı,
      7. Ey izzeti olmayanların izzeti,
      8. Ey yardımcısı olmayanların yardımcısı,
      9. Ey dostu olmayanların dostu,
      10. Ey zenginliği olmayanların zenginliği,`,
      "russian":`1. О, опора тех, кто лишён всякой опоры,
  2. О, надежда всех, кто утратил всякую надежду,
  3. О, пища тех, кто не имеет никакой пищи,
  4. О, помощник всех, кто нуждается в помощи,
  5. О, прибежище всех, кому необходимо прибежище,
  6. О, источник гордости тех, кому нечем гордиться,
  7. О, источник почёта для тех, кто лишён уважения,
  8. О, помощник тех, у кого нет помощника,
  9. О, друг тех, у кого нет друзей,
  10. О, Владыка мой, являющийся несметным богатством тех, у кого нет богатства,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Supporter of the unsupported,\nO Helper of the helpless,\nO Protector of the unprotected,\nO Shield for the defenseless,\nO Hearer of the unheard appeal,\nO Pride of those without pride,\nO Honour of the honourless,\nO Giver of Aid to the unaided,\nO Friend of the forsaken,\nO Shelter of the shelterless.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا عِمَادَ مَنْ لَا عِمَادَ لَهُ ؛۝؛ يَا سَنَدَ مَنْ لَا سَنَدَ لَهُ ؛۝؛ يَا ذُخْرَ مَنْ لَا ذُخْرَ لَهُ ؛۝؛ يَا غِيَاثَ مَنْ لَا غِيَاثَ لَهُ ؛۝؛ يَا حِرْزَ مَنْ لَا حِرْزَ لَهُ ؛۝؛ يَا فَخْرَ مَنْ لَا فَخْرَ لَهُ ؛۝؛ يَا عِزَّ مَنْ لَا عِزَّ لَهُ ؛۝؛ يَا مُعِينَ مَنْ لَا مُعِينَ لَهُ ؛۝؛ يَا أَنِيسَ مَنْ لَا أَنِيسَ لَهُ ؛۝؛ يَا غُنْيَةَ مَنْ لَا غُنْيَةَ لَهُ ؛۝؛` ,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":29,
      "latin": `Ve es\'elüke, bi-esmâike:
      1. Yâ Kâim
      2. Yâ Dâim
      3. Yâ Râhim
      4. Yâ Hâkim
      5. Yâ \'Âlim
      6. Yâ \'Âsım
      7. Yâ Kâsım
      8. Yâ Sâlim
      9. Yâ Kâbid
      10. Yâ Bâsıt`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey varlığında başkasına muhtaç olmayan Kaim,
      2. Ey varlığının sonu olmayan Daim,
      3. Ey mahlukatına merhamet eden Rahim,
      4. Ey mevcudatına hükmeden Hakim,
      5. Ey her şeyi bilen Alim,
      6. Ey yarattıklarını koruyan Asım,
      7. Ey her şeyi adaletle taksim eden Kasım,
      8. Ey ayıp ve kusur kendisine ariz olmayan Salim,
      9. Ey istediğinin maddi ve manevi rızkını daraltan Kabid,
      10. Ey istediğinin maddi ve manevi rızkını genişleten Basıt,`,
      "russian":`Обращаюсь к тебе и молю;
  1. О, дающий жизнь всякому существу,
  2. О, извечный и бессмертный,
  3. О, милостивый ко всему сущему,
  4. О, Тот, чья власть простирается надо всем сущим,
  5. О, Тот, который знает о прошлом, настоящем и будущем,
  6. О, охраняющий и берегущий создания свои,
  7. О, распределяющий всё по справедливости,
  8. О, далекий от всяких недостатков и постыдных качеств,
  9. О, Тот, кто сужает источники пищи духовной и материальной любому из рабов своих, кому пожелает,
  10. О, расширяющий источники пищи духовной и материальной любому из рабов своих, кому пожелает,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I beseech You in Your name:\nO Protector, \nO Persistent,\nO Eternal, \nO Merciful,\nO Accorder of peace,\nO Omniscient, \nO Distributor,\nO Preventer, \nO Opener.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا قَائِمُ ؛۝؛ يَا دَائِمُ ؛۝؛ يَا رَاحِمُ ؛۝؛ يَا حَاكِمُ ؛۝؛ يَا عَالِمُ ؛۝؛ يَا عَاصِمُ ؛۝؛ يَا قَاسِمُ ؛۝؛ يَا سَالِمُ ؛۝؛ يَا قَابِضُ ؛۝؛ يَا بَاسِطُ ؛۝؛` ,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":30,
      "latin": `1. Yâ \'âsıme meni\'s-ta\'sameh
      2. Yâ râhime meni\'s-terhameh
      3. Yâ nâsıra meni\'s-tensarah
      4. Yâ hâfiza meni\'s-tahfezah
      5. Yâ mükrime meni\'s-tekremeh
      6. Yâ mürşide meni\'s-terşedeh
      7. Yâ mu\'îne meni\'s-te\'âneh
      8. Yâ muğıse meni\'s-teğâseh
      9. Yâ sarîha meni\'s-tasrahah
      10. Yâ gâfira meni\'s-tağferah`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey kendisine sığınmak isteyenleri koruyan,
      2. Ey kendisinden merhamet isteyenlere merhamet eden,
      3. Ey kendisinden yardım isteyenlere yardım eden,
      4. Ey korunmak isteyenleri muhafaza eden,
      5. Ey kendisinden ikram isteyenlere ikram eden,
      6. Ey kendisinden irşad edilmeyi isteyenleri irşad eden,
      7. Ey kendisinden inayet isteyenlere inayet eden,
      8. Ey kendisinden imdat isteyenlere imdat eden,
      9. Ey feryat edenlerin feryadına koşan,
      10. Ey kendisinden mağfiret isteyenleri bağışlayan,`,
      "russian":`1. О, оберегающий всех, кто ищет в нем прибежище,
  2. О, милостивый ко всем, кто просит милости его,
  3. О, помогающий всем, кто просит его о помощи,
  4. О, оберегающий всех, кто просит прибежища у него,
  5. О, дарующий всем, кто просит даров его,
  6. О, направляющий на путь истинный всех, кто ищет спасения душ своих,
  7. О, помогающий всем, кто взывает к нему о помощи,
  8. О, прибежище всех, кто прибегает к нему,
  9. О, слышащий вопли всех, кто взывает к нему,
  10. О, Владыка мой, прощающий всех, кто просит прощения,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Protector of he who seeks His protection,\nO Merciful to he who requests His mercy,\nO Forgiver of the implore His forgiveness,\nO Helper of he who asks for His help,\nO Protector of he who seeks His protection,\nO Magnanimous to he who seeks His magnanimity,\nO Guide for he who seeks His guidance,\nO Giver of Aid to he who seeks His aid,\nO Helper of he who appeals to Him,\nO Rescuer of he who appeals to Him,`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا عَاصِمَ مَنِ اسْتَعْصَمَهُ ؛۝؛ يَا رَاحِمَ مَنِ اسْتَرْحَمَهُ ؛۝؛ يَا نَاصِرَ مَنِ اسْتَنْصَرَهُ ؛۝؛ يَا حَافِظَ مَنِ اسْتَحْفَظَهُ ؛۝؛ يَا مُكْرِمَ مَنِ اسْتَكْرَمَهُ ؛۝؛ يَا مُرْشِدَ مَنِ اسْتَرْشَدَهُ ؛۝؛ يَا مُعِينَ مَنِ اسْتَعَانَهُ ؛۝؛ يَا مُغِيثَ مَنِ اسْتَغَاثَهُ ؛۝؛ يَا صَرِيخَ مَنِ اسْتَصْرَخَهُ ؛۝؛ يَا غَافِرَ مَنِ اسْتَغْفَرَهُ ؛۝؛` ,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":31,
      "latin": `1. Yâ kerîme\'s-safhi
      2. Yâ \'azime\'l-menni
      3. Yâ kesîre\'l-hayri
      4. Yâ kadîme\'l-fadli
      5. Yâ lâtîfe\'s-suni\'
      6. Yâ dâime\'l-lûtfi
      7. Yâ nâfise\'l-kerbi
      8. Yâ kâşife\'d-durri
      9. Yâ mâlike\'l-mülki
      10. Yâ kâdiyem-bi\'l-hakkı`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey affı bol olan
      2. Ey iyiliği büyük olan,
      3. Ey hayrı çok olan
      4. Ey fazlı kadim olan,
      5. Ey sanatı güzel olan,
      6. Ey lütfu daim olan,
      7. Ey sıkıntıyı gideren,
      8. Ey zararı kaldıran
      9. Ey mülkün sahibi,
      10. Ey hak ile hükmeden,`,
      "russian":`1. О, Тот, чья терпимость и всепрощение неистощимы,
  2. О, Тот, чьи блага велики,
  3. О, Тот, чьи доброты бесчисленны,
  4. О, Тот, чьи высшие блага извечны,
  5. О, точнейший в делах своих, тот, чьи качества и тайны недоступны пониманию во всей полноте своей,
  6. О, Тот, чьи блага и воздаяния непрерывны,
  7. О, Тот, кто разрешает трудности,
  8. О, Тот, кто избавляет от зол,
  9. О, Владыка царствия и власти,
  10. О, Владыка мой, правящий справедливо и творящий справедливость,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Powerful Who is never overpowered,\nO Benign Who is invisible,\nO Self-Subsistent Who never sleeps,\nO Eternal Who never perishes,\nO Ever-living Who never dies,\nO Monarch Whose rule is endless,\nO Eternal Who is imperishable,\nO Omniscient Who never forgets,\nO Independent Who needs no sustenance,\nO Mighty Who never weakens.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا كَرِيمَ الصَّفْحِ ؛۝؛ يَا عَظِيمَ الْمَنِّ ؛۝؛ يَا كَثِيرَ الْخَيْرِ ؛۝؛ يَا قَدِيمَ الْفَضْلِ ؛۝؛ يَا لَطِيفَ الصُّنْعِ ؛۝؛ يَا دَائِمَ اللُّطْفِ ؛۝؛ يَا نَافِسَ الْكَرْبِ ؛۝؛ يَا كَاشِفَ الضُّرِّ ؛۝؛ يَا مَالِكَ الْمُلْكِ ؛۝؛ يَا قَاضِيًا بِالْحَقِّ ؛۝؛` ,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":32,
      "latin": `1. Yâ \'azîzen lâ yudâm
      2. Yâ lâtifen lâ yurâm
      3. Yâ rakiben lâ yenâm
      4. Yâ kâimen lâ yefût
      5. Yâ hayyen lâ yemût
      6. Yâ maliken lâ yezûl
      7. Yâ bâkıyen lâ yefnâ
      8. Yâ \'alimen lâ yechel
      9. Yâ sameden lâ yut\'am
      10. Yâ kaviyyen lâ yud\'af`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey mağlup edilmeyen Aziz,
      2. Ey kendisinden uzaklaşılmayan Latif,
      3. Ey uyumayan Gözetleyici,
      4. Ey yok olmayan Mevcud,
      5. Ey ölmeyen Hayy,
      6. Ey yok olmayan Melik,
      7. Ey fena bulmayan Baki,
      8. Ey cehalet ariz olmayan Alim,
      9. Ey taama muhtaç olmayan Samed,
      10. Ey zaafa uğratılmayan Kavi,`,
      "russian":`1. О, непобедимый,
  2. О, Тот, чья суть непознаваема,
  3. О, наблюдатель недремлющий,
  4. О, вечносущий,
  5. О, обладатель жизни вечной,
  6. О, Тот, чья власть нетленна,
  7. О, Тот, кто вечен и бессмертен,
  8. О, Тот, кто далек от невежества, и ничто не может оказаться вне его знания,
  9. О, Тот, в ком всё и вся нуждается, а он не испытывает нужды ни в чём
  10. О, Владыка, обладатель силы и могущества, и тот, кого нельзя ослабить,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I beseech You in Your name:\nO Unique, \nO One,\nO Present, \nO Praiser,\nO Exalted, \nO Guide,\nO Resurrector, \nO Heir,\nO Harmful to the unjust, \nO Beneficial to the just.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا عَزِيزًا لَا يُضَامُ ؛۝؛ يَا لَطِيفًا لَا يُرَامُ ؛۝؛ يَا رَقِيبًا لَا يَنَامُ ؛۝؛ يَا قَـائِـمًا لَا يَـفُوتُ ؛۝؛ يَا حَيًّا لَا يَمُوتُ ؛۝؛ يَا مَلِكًا لَا يَزُولُ ؛۝؛ يَا بَاقِـيًا لَا يَفْنَى ؛۝؛ يَا عَالِمًا لَا يَجْهَلُ ؛۝؛ يَا صَمَدًا لَا يُطْعَمُ ؛۝؛ يَا قَوِيًّا لَا يُـضْعَفُ ؛۝؛` ,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":33,
      "latin": `Ve es\'elüke, bi-esmâike:
      1. Yâ Vâhid
      2. Yâ Vâcid
      3. Yâ Şâhid
      4. Yâ Mâcid
      5. Yâ Râşid
      6. Yâ Bâ\'is
      7. Yâ Vâris
      8. Yâ Dârru
      9. Yâ Nâfi\'
      10. Yâ Hâdi`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey isimlerinde, sıfatlarında ve fiillerinde ortağı olmayan Vahid,
      2. Ey istediğini bulan Vacid,
      3. Ey her yerde hazır ve nazır olan Sahid,
      4. Ey sonsuz şan ve yücelik sahibi Macid,
      5. Ey bütün işlerini ezeli hikmetine göre neticeye ulaştıran Raşid,
      6. Ey peygamberler gönderen ve ölüleri dirilten Bais,
      7. Ey bütün mülk ve servetlerin hakiki sahibi Varis,
      8. Ey hikmeti gereği elem ve zarar verici şeyleri yaratan Darr,
      9. Ey hayır ve menfaatli şeyleri yaratan Nafi,
      10. Ey kullarına hidayet veren Hadi,`,
      "russian":`
  Обращаюсь к тебе и молю;
  1. О, не имеющий равных себе и сотоварищей ни в самости своей, ни в качествах своих, ни в именах и деяниях своих,
  2. О, не нуждающийся ни в чём и обретающий, что пожелает и когда пожелает,
  3. О, от которого ничего не скроешь, и который ничего не забывает,
  4. О, обладатель вечной славы и величия,
  5. О, указующие созданиям своим наиполезнейшее и открывающий рабам своим вернейшие из путей,
  6. О, посылающий пророков и воскрешающий мертвых в Судный день,
  7. О, вечносущий обладатель жизни бессмертной, когда всё разрушится и погибнет,
  8. О, Тот, чья воля навредить кому-либо неотвратима,
  9. О, творец добра и всего полезного,
  10. О, творец спасения и дарующий спасение всякому, кому пожелает,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Grandest of all the grand,\nO Most Magnanimous of all the magnanimous,\nO Most Merciful of all the merciful,\nO Most Knowledgeable of all knowers,\nO Most Wise of all the wise,\nO Most Ancient of all the ancient,\nO Most Great of all the great,\nO Most Benign of all the benign,\nO Most Magnificent of all the magnificent,\nO Most Mighty of all the mighty.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا وَاحِدُ ؛۝؛ يَا وَاجِدُ ؛۝؛ يَا شَاهِدُ ؛۝؛ يَا مَاجِدُ ؛۝؛ يَا رَاشِدُ ؛۝؛ يَا بَاعِثُ ؛۝؛ يَا وَارِثُ ؛۝؛ يَا ضَارُّ ؛۝؛ يَا نَافِعُ ؛۝؛ يَا هَادِي ؛۝؛` ,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":34,
      "latin": `1. Yâ a\'zamu min külli \'azîm
      2. Yâ ekremu min külli kerîm
      3. Yâ erhamu min külli rahîm
      4. Yâ ahkemu min külli hakîm
      5. Yâ a\'lemu min külli \'alîm
      6. Yâ akdemu min külli kadîm
      7. Yâ ekberu min külli kebîr
      8. Yâ acellu min külli celîl
      9. Yâ e\'azzu min külli \'azîz
      10. Yâ eltafu min külli lâtif`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey bütün azimlerden daha Azim,
      2. Ey bütün cömertlerden daha Kerim,
      3. Ey bütün merhametlilerden daha Rahim,
      4. Ey bütün hikmet sahiplerinden daha Hakim,
      5. Ey bütün alimlerden daha Alim,
      6. Ey bütün izzet sahiplerinden daha Aziz,
      7. Ey bütün büyüklerden daha Büyük,
      8. Ey bütün yücelerden daha Celil,
      9. Ey bütün izzet sahiplerinden daha Aziz,
      10. Ey bütün lütuf sahiplerinden daha Latif,`,
      "russian":`1. О, величайший из великих,
  2. О, щедрейший из всех щедрых,
  3. О, милостивейший из всех милостивых,
  4. О, наимудрейший в делах своих,
  5. О, самый знающий из всех знающих,
  6. О, Тот, кто был прежде тех, что были сотворены первыми,
  7. О, величайший из великих,
  8. О, высочайший из высоких,
  9. О, наиблистательнейший из всех обладателей величия гордого и непреодолимого,
  10. О, утонченнейший из всех обладателей утонченной щедрости и изящества,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Most Magnanimous in overlooking sins,\nO Greatest Benefactor,\nO Most Bounteous in goodness,\nO Eternal in grace,\nO Eternal in subtlety,\nO Creator of subtlety,\nO Remover of pain,\nO Healer of injury,\nO Master of dominion,\nO True Judge.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا أَعْظَمُ مِنْ كُلِّ عَظِيمٍ ؛۝؛ يَا أَكْرَمُ مِنْ كُلِّ كَرِيمٍ ؛۝؛ يَا أَرْحَمُ مِنْ كُلِّ رَحِيمٍ ؛۝؛ يَا أَحْكَمُ مِنْ كُلِّ حَكِيمٍ ؛۝؛ يَا أَعْلَمُ مِنْ كُلِّ عَلِيمٍ ؛۝؛ يَا أَقْدَمُ مِنْ كُلِّ قَدِيمٍ ؛۝؛ يَا أَكْبَرُ مِنْ كُلِّ كَبِيرٍ ؛۝؛ يَا أَجَلُّ مِنْ كُلِّ جَلِيلٍ ؛۝؛ يَا أَعَزُّ مِنْ كُلِّ عَزِيزٍ ؛۝؛ يَا أَلْطَفُ مِنْ كُلِّ لَطِيفٍ ؛۝؛` ,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":35,
      "latin": `1. Yâ men hüve fî-ahdihî vefiyyun
      2. Yâ men hüve fî-vefâihî kaviyyun
      3. Yâ men hüve fî-kuvvetihî \'aliyyun
      4. Yâ men hüve fî-\'ulûvvihî karîbun
      5. Yâ men hüve fî-kurbihî lâtîfun
      6. Yâ men hüve fî-lûtfihî şerîfun
      7. Yâ men hüve fî-şerefihî \'azîzun
      8. Yâ men hüve fî-\'izzetihî \'azîmun
      9. Yâ men hüve fi-\'azametihî mecîdun
      10. Yâ men hüve fî-mecdihî hamîdun`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey ahdinde Vefalı,
      2. Ey vefasında Kuvvetli,
      3. Ey kuvvetinde Yüce,
      4. Ey yüceliğinde Yakın,
      5. Ey yakınlığında Latif,
      6. Ey lütfunda Şerif,
      7. Ey şerefinde Aziz,
      8. Ey izzetinde Azim,
      9. Ey azametinde Mecid,
      10. Ey yüceliğinde Hamid,`,
      "russian":`1. О, верный слову своему и обещанию,
  2. О, надежнейший в верности слову своему,
  3. О, высочайший в силе и мощи своей,
  4. О, Тот, чье величие не мешает ему быть близким ко всему и вся,
  5. О, Тот, чья близость невидима,
  6. О, Тот, кто славян в доброте своей,
  7. О, Тот, кто велик во славе своей,
  8. О, Тот, кто славен в величии своем и царственности,
  9. О, Тот, чье величие не мешает широте щедрости его и благородство,
  10. О, Владыка мой, которому возносится слава, хвала и благодарение за щедрость его и воздаяния благие,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He Who fulfils His promise,\nO He Who is Strong in His fulfillment,\nO He Who is great in His might,\nO He Who is near everyone in spite of His greatness,\nO He Who is benign in His weariness,\nO He Who is noble in His benignity,\nO He Who is powerful in His nobility,\nO He Who is great in His power,\nO He Who is exalted in His greatness,\nO He Who is praiseworthy in his exaltation.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ هُوَ فِي عَهْدِه۪ وَفِيٌّ ؛۝؛ يَا مَنْ هُوَ فِي وَفَائِه۪ قَوِيٌّ ؛۝؛ يَا مَنْ هُوَ فِي قُوَّتِه۪ عَلِيٌّ ؛۝؛ يَا مَنْ هُوَ فِي عُلُوِّه۪ قَرِيبٌ ؛۝؛ يَا مَنْ هُوَ فِي قُرْبِه۪ لَطِيفٌ ؛۝؛ يَا مَنْ هُوَ فِي لُطْفِه۪ شَرِيفٌ ؛۝؛ يَا مَنْ هُوَ فِي شَرَفِه۪ عَزِيزٌ ؛۝؛ يَا مَنْ هُوَ فِي عِزَّتِه۪ عَظِيمٌ ؛۝؛ يَا مَنْ هُوَ فِي عَظَمَتِه۪ مَجِيدٌ ؛۝؛ يَا مَنْ هُوَ فِي مَجْدِه۪ حَمِيدٌ ؛۝؛` ,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":36,
      "latin": `1. Yâ men hüve külli şey\'in hâdı\'ün leh
      2. Yâ men hüve külli şey\'in kâinün leh
      3. Yâ men hüve külli şey\'in mevcûdün leh
      4. Yâ men hüve külli şey\'in münîbün leh
      5. Yâ men hüve külli şey\'in hâifün minhu
      6. Yâ men hüve külli şey\'in müsebbihun leh
      7. Yâ men hüve külli şey\'in kâimün bih
      8. Yâ men hüve külli şey\'in hâşiun leh
      9. Yâ men hüve külli şey\'in sâirun ileyh
      10. Yâ men hüve külli şey\'in hâlikün illâ vecheh`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey her şeyin kendisine boyun eğdiği,
      2. Ey her şey kendisi için var olan,
      3. Ey her şey kendisi için mevcut olan,
      4. Ey her şeyin kendisine döndüğü,
      5. Ey her şeyin kendisinden korktuğu,
      6. Ey her şeyin kendisini tesbih ettiği,
      7. Ey her şey onunla ayakta olan,
      8. Ey her şeyin kendisine itaat ettiği,
      9. Ey her şeyin kendisine yöneldiği,
      10. Ey ona bakan yüzü müstesna her şeyin helak olduğu,`,
      "russian":`1. О, Тот, пред кем склоняется всё и вся в покорности беспрекословной,
  2. О, Тот, ради которого существует всё,
  3. О, Тот, кем всё сотворено и ради которого существует,
  4. О, Тот, к кому всё сущее обращается в мольбах своих,
  5. О, Тот, к кому всё сущее испытывает боязнь,
  6. О, Тот, кого всё сущее возносит в хвалах своих и славословиях,
  7. О, Тот, единственный, благодаря которому всё и вся продолжают существовать,
  8. О, Тот, которому всё в почтении повинуется,
  9. О, Тот, к которому всё возвратится по окончанию бытия своего,
  10. О, Владыка мой, кроме вечной сути которого всё обречено на тлен,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I beseech You in Your name:\nO Sufficient, \nO Restorer of health,\nO Faithful, \nO Forgiver\nO Guide, \nO Summoner,\nO Judge, \nO Agreeable,\nO High, \nO Eternal`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ هُوَ كُلُّ شَيْءٍ خَاضِعٌ لَهُ ؛۝؛ يَا مَنْ هُوَ كُلُّ شَيْءٍ كَائِنٌ لَهُ ؛۝؛ يَا مَنْ هُوَ كُلُّ شَيْءٍ مَوْجُودٌ لَهُ ؛۝؛ يَا مَنْ هُوَ كُلُّ شَيْءٍ مُنِـيبٌ لَـهُ ؛۝؛ يَا مَنْ هُوَ كُلُّ شَيْءٍ خَائِفٌ مِنْهُ ؛۝؛ يَا مَنْ هُوَ كُلُّ شَيْءٍ مُسَبِّحٌ لَـهُ ؛۝؛ يَا مَنْ هُوَ كُلُّ شَيْءٍ قَائِمٌ بِه۪ ؛۝؛ يَا مَنْ هُوَ كُلُّ شَيْءٍ خَاشِعٌ لَـهُ ؛۝؛ يَا مَنْ هُوَ كُلُّ شَيْءٍ صَائِرٌ إِلَيْهِ ؛۝؛ يَا مَنْ هُوَ كُلُّ شَيْءٍ هَالِكٌ إِلَّا وَجْهَهُ ؛۝؛` ,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":37,
      "latin": `Ve es\'elüke, bi-esmâike:
      1. Yâ Kâfî
      2. Yâ Şâfî
      3. Yâ Vâfî
      4. Yâ Mu\'âfî
      5. Yâ \'Alî
      6. Yâ Dâ\'î
      7. Yâ Râdî
      8. Yâ Kâdî
      9. Yâ Bâkî
      10. Yâ Hâdî`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey kullarına yeten Kâfî,
      2. Ey her türlü derde deva veren Şâfî,
      3. Ey vaadinde duran Vâfî,
      4. Ey maddi ve manevi dertlere afiyet veren Muâfî,
      5. Ey her şeyiyle yüce olan Alî,
      6. Ey kullarını iyiliğe ve Cennete davet eden Dâî,
      7. Ey iyi kullarından hoşnut olan Razî,
      8. Ey hikmet ve adaletle hükmeden Kâdî,
      9. Ey varlığının sonu olmayan Bakî,
      10. Ey dilediğini doğru yola ulaştıran Hadî,`,
      "russian":`Обращаюсь к тебе и молю;
  1. О, самодостаточный и удовлетворяющий все нужды созданий своих,
  2. О, целитель всех болезней - духовных и физических,
  3. О, верный слову своему и мудро исполняющий желания и потребности созданий своих,
  4. О, дарующий исцеление от недугов всяких,
  5. О, вознесшийся в мощи своей над всеми созданиями своими,
  6. О, призывающий рабов своих ко всему полезному, доброму, прекрасному и указующий им путь в Рай,
  7. О, довольный лучшими рабами своими,
  8. О, удовлетворяющий потребностям созданий своих и правящий мудро и справедливо,
  9. О, Тот, чье бытие неподвластно времени,
  10. О, направляющий на путь истинный всякого, кого пожелает направить,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He before Whom everything bows,\nO He before Whom everything is humbled,\nO He for Whom everything exists,\nO He to Whom everything owes its existence,\nO He to Whom everything returns,\nO He of Whom everything is afraid,\nO One to Whom everything owes its stability,\nO He towards Whom everything retreats,\nO He Whom everything glorifies with praise,\nO He besides Whom everything is perishable.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا كَافِي ؛۝؛ يَا شَافِي ؛۝؛ يَا وَافِي ؛۝؛ يَا مُعَافِي ؛۝؛ يَا عَالِي ؛۝؛ يَا دَاعِي ؛۝؛ يَا رَاضِي ؛۝؛ يَا قَاضِي ؛۝؛ يَا بَاقِي ؛۝؛ يَا هَادِي ؛۝؛` ,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },
    {
      "id":38,
      "latin": `1. Yâ men lâ meferre illâ ileyh
      2. Yâ men lâ mefze\'a illâ ileyh
      3. Yâ men lâ melcee illa ileyh
      4. Yâ men lâ yütevekkelü illâ \'aleyh
      5. Yâ men lâ maksade illâ ileyh
      6. Yâ men lâ mencee illâ ileyh
      7. Yâ men lâ yürğabü illâ ileyh
      8. Yâ men lâ yü\'bedu illâ ileyh
      9. Yâ men lâ yüste\'ânü illâ minh
      10. Yâ men lâ havle velâ kuvvete illâ bih`,
      "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
      "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
      "turkish": `1. Ey kendisinden başka kaçacak yer olmayan,
      2. Ey kendisinden başka sığınılacak yer olmayan,
      3. Ey kendisinden başka iltica edilecek yer olmayan,
      4. Ey kendisinden başka tevekkül edilecek kimse olmayan,
      5. Ey kendisinden başka maksud olmayan,
      6. Ey kendisinden başka kurtuluş yeri olmayan,
      7. Ey kendisinden baskaşına rağbet edilmeyen,
      8. Ey kendisinden başkasına ibadet edilmeyen,
      9. Ey kendisinden başkasından yardım istenilmeyen,
      10. Ey kendisinden başka güç ve kuvvet sahibi bulunmayan,`,
      "russian":`1. О, единственно настоящее прибежище,
  2. О, единственно настоящее убежище,
  3. О, единственно настоящий кров,
  4. О, единственный, кому можно довериться,
  5. О, единственно настоящая цель,
  6. О, единственный приют спасения,
  7. О, единственно предпочитаемый,
  8. О, единственно почитаемый и поклоняемый,
  9. О, единственный к кому обращаются за помощью,
  10. О, Владыка мой, единственный обладатель абсолютной силы и могущества,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He-there is no retreat but towards Him,\nO He-there is no place of protection except with Him,\nO He—there is no right path except that which leads to Him,\nO He-there is no shelter against Him but with Him,\nO He-there is no inclination towards anyone except Him,\nO He-there is no strength and vigour but from Him,\nO He-none is invoked for help but He.\nO He-trust is not reposed in anyone but He,\nO He-hope is not entertained from anyone except from He,\nO He-none is worshipped except He`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ لَا مَفَرَّ إِلَّا إِلَيْهِ ؛۝؛ يَا مَنْ لَا مَفْزَعَ إِلَّا إِلَيْهِ ؛۝؛ يَا مَنْ لَا مَلْجَأَ إِلَّا إِلَيْهِ ؛۝؛ يَا مَنْ لَا يُتَوَكَّلُ إِلَّا عَلَيْهِ ؛۝؛ يَا مَنْ لَا مَقْصَدَ إِلَّا إِلَيْهِ ؛۝؛ يَا مَنْ لَا مَنْجَى إِلَّا إِلَيْهِ ؛۝؛ يَا مَنْ لَا يُرْغَبُ إِلَّا إِلَيْهِ ؛۝؛ يَا مَنْ لَا يُعْبَدُ إِلَّا إِيَّاهُ ؛۝؛ يَا مَنْ لَا يُسْتَعَانُ إِلَّا مِنْهُ ؛۝؛ يَا مَنْ لَاحَوْلَ وَلَا قُوَّةَ إِلَّا بِـه۪ ؛۝؛` ,
      "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
    },{
    "id":39,
    "latin": `1. Yâ hayra\'l-merhûbîn
    2. Yâ hayra\'l-matlûbîn
    3. Yâ hayra\'l-merğubîn
    4. Yâ hayra\'l-mes\'ûlîn
    5. Yâ hayra\'l-maksûdîn
    6. Yâ hayra\'l-mezkûrîn
    7. Yâ hayra\'l-meşkûrîn
    8. Yâ hayra\'l-mahbûbîn
    9. Yâ hayra\'l-münzilîn
    10. Yâ hayra\'l-müste\'nisîn`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey kendisine kaçılanların en hayırlısı,
    2. Ey matlubların en hayırlısı,
    3. Ey rağbet edilenlerin en hayırlısı,
    4. Ey kendisinden dilekte bulunulanların en hayırlısı,
    5. Ey maksud olanların en hayırlısı,
    6. Ey zikredilenlerin en hayırlısı,
    7. Ey şükredilenlerin en hayırlısı,
    8. Ey sevilenlerin en hayırlısı,
    9. Ey indirenlerin en hayırlısı,
    10. Ey kendisine ünsiyet edilenlerin en hayırlısı,`,
    "russian":`1. О, наилучший из всех, кого боятся,
  2. О, наилучший из всех желаемых,
  3. О, наилучший из всех предпочитаемых,
  4. О, наилучший из всех, к кому обращаются с просьбой,
  5. О, наилучшая из всех целей,
  6. О, наилучший из упоминаемых,
  7. О, наилучший из всех, кого благодарят,
  8. О, наилучший из всех, кого любят,
  9. О, наилучший из тех, кто гостеприимен,
  10. О, Владыка мой, лучший из всех, к кому чувствуют близость,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Best of those who are feared,\nO Best of those who are liked,\nO Best of those who are sought,\nO Best of those who are entreated,\nO Best of those who are longed for,\nO Best of those who are remembered,\nO Best of those to whom thanks are offered,\nO Best of those who are loved,\nO Best of those who are called on,\nO Best of those who are held in affection.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا خَيْرَ الْمَرْهُوبِينَ ؛۝؛ يَا خَيْرَ الْمَطْلُوبِينَ ؛۝؛ يَا خَيْرَ الْمَرْغُوبِينَ ؛۝؛ يَا خَيْرَ الْمَسْؤُولِينَ ؛۝؛ يَا خَيْرَ الْمَقْصُودِينَ ؛۝؛ يَا خَيْرَ الْمَذْكُورِينَ ؛۝؛ يَا خَيْرَ الْمَشْكُورِينَ ؛۝؛ يَا خَيْرَ الْمَحْبُوبِينَ ؛۝؛ يَا خَيْرَ الْمُنْزِلِينَ ؛۝؛ يَا خَيْرَ الْمُسْتَأْنِسِينَ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":40,
    "latin": `1. Yâ men hüve halaka fesevvâ
    2. Yâ men hüve kaddera fehedâ
    3. Yâ men hüve yekşifü\'l-belvâ
    4. Yâ men hüve yesmeu\'n-necvâ
    5. Yâ men hüve yünkızü\'l-ğarka
    6. Yâ men hüve yünci\'l-helkâ
    7. Yâ men hüve yeşfi\'l-merdâ
    8. Yâ men hüve emâte ve ahyâ
    9. Yâ men hüve adhake ve ebkâ
    10. Yâ men hüve edalle ve ehdâ`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey yaratıp düzene koyan,
    2. Ey takdir edip hedefe götüren,
    3. Ey belayı kaldıran,
    4. Ey gizli yakarışı işiten,
    5. Ey batmışı kurtaran,
    6. Ey helak olana necat veren,
    7. Ey hastaya şifa veren,
    8. Ey öldüren ve dirilten,
    9. Ey güldüren ve ağlatan,
    10. Ey saptıran ve hidayete erdiren,`,
    "russian":`1. О, Тот, кто творит наилучшим образом и упорядочивает,
  2. О, Тот, кто определяет всё в границах меры и движет всё к его предназначению,
  3. О, Тот, кто останавливает беды,
  4. О, Тот, кто слышит разговоры тайные, мольбы и замыслы,
  5. О, Тот, кто спасает неизвергнувшихся в  беды духовные и физические,
  6. О, Тот, кто спасает гибнущих,
  7. О, Тот, кто исцеляет все болезни,
  8. О, Тот, кто убивает и воскрешает,
  9. О, Тот, кто заставляет плакать и смеяться,
  10. О, Владыка мой, могущие свести с пути истинного и перевести на него,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I entreat You in Your name:\nO Forgiver, \nO Concealer [of defects]\nO Mighty, \nO Supreme, \nO Creator,\nO Shatterer, \nO Joiner,\nO Rememberer, \nO Seeing, \nO Helper.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ هُوَ خَلَقَ فَسَوَّى ؛۝؛ يَا مَنْ هُوَ قَدَّرَ فَهَدَى ؛۝؛ يَا مَنْ هُوَ يَكْشِفُ الْبَلْوَى ؛۝؛ يَا مَنْ هُوَ يَسْمَعُ النَّجْوَى ؛۝؛ يَا مَنْ هُوَ يُنْقِذُ الْغَرْقَى ؛۝؛ يَا مَنْ هُوَ يُنْجِي الْهَلْكَى ؛۝؛ يَا مَنْ هُوَ يَشْفِي الْمَرْضَى ؛۝؛ يَا مَنْ هُوَ أَمَاتَ وأَحْيَا ؛۝؛ يَا مَنْ هُوَ أَضْحَكَ وَأَبْكَى ؛۝؛ يَا مَنْ هُوَ أَضَلَّ وَأَهْدَى ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":41,
    "latin": `Ve es\'elüke, bi-esmâike:
    1. Yâ Gâfir
    2. Yâ Sâtir
    3. Yâ Kâhir
    4. Yâ Kâdir
    5. Yâ Nâzır
    6. Yâ Fâtır
    7. Yâ Şâkir
    8. Yâ Zâkir
    9. Yâ Nâsır
    10. Yâ Câbir`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey dilediği kullarının günahlarını bağışlayan Gâfir,
    2. Ey ayıp ve kusurları örten Sâtir,
    3. Ey düşmanlarını mağlup eden Kâhir,
    4. Ey her şeye gücü yeten Kâdir,
    5. Ey bütün mahlukatının hallerini gören Nâzir,
    6. Ey bütün mahlukatı yoktan var eden Fâtir,
    7. Ey kendisine yapılan ibadet ve şükürlere bol mükafat veren Şâkir,
    8. Ey kendisini zikredenleri yad eden Zâkir,
    9. Ey dostlarına yardim eden Nâsir,
    10. Ey dilediğini zorla yaptıran Câbir,`,
    "russian":`Обращаюсь к тебе и молю;
  1. О, прощающий грехи рабов своих,
  2. О, скрывающий недостатки рабов своих и укрывающий их от позора,
  3. О, побеждающий властью своей и могуществом рабов своих и как угодно ему, рабами своими управляющий,
  4. О, всемогущий и бесконечно далекий от немощи,
  5. О, видящие всё и всегда,
  6. О, создавший и создающий всё из ничего,
  7. О, умеющий отплатить за малое добро добром великим,
  8. О, помнящий тех, кто не забывает его,
  9. О, помогающий,
  10. О, понуждающий делать, что пожелает, исправляющий испорченное, выправляющий дела и восстанавливающий неисправное,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He Who created and perfected,\nO He Who made everything to measure and guided,\nO He Who removes misfortunes,\nO He Who overhears secrets,\nO He Who rescues the drowning,\nO He Who saves the distressed,\nO He Who restores the sick to health,\nO He who makes [His slaves] laugh and weep,\nO He Who causes to dies and calls to life,\nO He Who has created pairs of male and female.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا غَافِـرُ ؛۝؛ يَا سَاتِـرُ ؛۝؛ يَا قَاهِـرُ ؛۝؛ يَا قَادِرُ ؛۝؛ يَا نَاظِرُ ؛۝؛ يَا فَاطِرُ ؛۝؛ يَا شَاكِرُ ؛۝؛ يَا ذَاكِرُ ؛۝؛ يَا نَاصِرُ ؛۝؛ يَا جَابِرُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":42,
    "latin": `1. Yâ men hüve fi\'l-berri ve\'l-bahri sebîlüh
    2. Yâ men hüve fi\'l-âfâki âyâtüh
    3. Yâ men hüve fi\'l-âyâti bürhânüh
    4. Yâ men hüve fi\'l-memâti kudretuh
    5. Yâ men hüve fi\'l-kubûri \'izzetüh
    6. Yâ men hüve fi\'l-kıyâmeti milketüh
    7. Yâ men hüve fi\'l-hisâbi heybetuh
    8. Yâ men hüve fi\'l-mîzani kadâüh
    9. Yâ men hüve fi\'l-cenneti rahmetüh
    10. Yâ men hüve fi\'n-nâri \'azâbüh`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey karada ve denizde yolu olan,
    2. Ey dış alemde ayetleri bulunan,
    3. Ey ayetlerinde delili olan,
    4. Ey ölümlerde kudreti tecelli eden,
    5. Ey kabirlerde izzeti olan,
    6. Ey Kıyamette saltanatı olan,
    7. Ey hisapta heybeti olan,
    8. Ey Mizanda hükmü olan,
    9. Ey Cennette rahmeti olan,
    10. Ey ateşte azabı olan,`,
    "russian":`1. О, Тот, к которому и к единству которого есть много путей на суше и воде,
  2. О, Тот, знаками и откровениями о существовании и единстве которого полны небо и земля,
  3. О, Тот, чьи знаки и откровения яснее ясного и неопровержимы,
  4. О, Тот, чья мощь проявляется в смертях,
  5. О, Тот, чье истинное величие проявляется после смерти нашей,
  6. О, Тот, чья власть и единодержавие явятся всем открыто в Судный день,
  7. О, Тот, чье величие внушающее страх и благоговение, явит себя в день Суда,
  8. О, Тот, кто будет выносить решения в день, когда будут взвешиваться дела праведные и грешные,
  9. О, Тот, чья милость проявиться в Раю,
  10. О, Владыка мой, чье возмездие проявится в Аду,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He Whose course is on land and in water,\nO He Whose signs are in the universe,\nO He in Whose signs are undeniable proofs,\nO He Whose; might is exhibited in causing death,\nO He Whose lesson is in graves,\nO He Whose kingdom will be on the Day of Judgement,\nO He in Whose reckoning of deeds is His dread,\nO He in Whose balance is His order,\nO He Whose paradise is the place of His good reward,\nO He Whose hell is the place of chastisement.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ هُوَ فِي الْبَرِّ وَالْبَحْرِ سَبِيلُهُ ؛۝؛ يَا مَنْ هُوَ فِي الْأٰفَاقِ أٰيَاتُهُ ؛۝؛ يَا مَنْ هُوَ فِي الْأٰيَاتِ بُـرْهَانُـهُ ؛۝؛ يَا مَنْ هُوَ فِي الْمَمَاتِ قُدْرَتُهُ ؛۝؛  يَا مَنْ هُوَ فِي الْقُبُورِ عِزَّتُهُ ؛۝؛ يَا مَنْ هُوَ فِي الْـقِـيَامَةِ مِلْكَـتُـهُ ؛۝؛ يَا مَنْ هُوَ فِي الْحِسَابِ هَيْبَتُهُ ؛۝؛ يَا مَنْ هُوَ فِي الْمِيزَانِ قَضَاؤُهُ ؛۝؛ يَا مَنْ هُوَ فِي الْجَـنَّـةِ رَحْمَـتُـهُ ؛۝؛ يَا مَنْ هُوَ فِي ؛النَّارِ ؛عَذَابُهُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":43,
    "latin": `1. Yâ men hüve ileyhi yehrebü\'l-hâifûn
    2. Yâ men hüve ileyhi yefze\'u\'l-müznibûn
    3. Yâ men hüve ileyhi yaksıdü\'l-münîbûn
    4. Yâ men hüve ileyhi yelceü\'l-âsûn
    5. Yâ men hüve ileyhi yerğabü\'z-zâhidûn
    6. Yâ men hüve fîhi yetmau\'l-hâtıûn
    7. Yâ men hüve yeste\'nisü bihi\'l-mürîdûn
    8. Yâ men hüve yeftehiru bihi\'l-muhsinûn
    9. Yâ men hüve \'aleyhi yetevekkelü\'l-mütevekkilûn
    10. Yâ men hüve yeskünü bihi\'l-mûkinûn`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey korkanların kendisine kaçtığı,
    2. Ey günahkarların kendisine sığındığı,
    3. Ey tövbe edenlerin kendisine yöneldiği,
    4. Ey asilerin kendisine iltica ettiği,
    5. Ey zahidlerin kendisine rağbet ettiği,
    6. Ey hatalıların kendisinden ümit beslediği,
    7. Ey kendisini arzulayanların onunla ünsiyet bulduğu,
    8. Ey iyilik yapanların kendisiyle iftihar ettiği,
    9. Ey tevekkül edenlerin kendisine güvendiği,
    10. Ey kuvvetle iman edenlerin kendisiyle huzur bulduğu,`,
    "russian":`1. О, Тот, кому прибегают испуганные,
  2. О, Тот, в ком укрываются грешные,
  3. О, Тот, кому обращаются кающиеся,
  4. О, Тот, у кого находят кров Ему непокорные,
  5. О, Тот, к кому тянутся аскеты,
  6. О, Тот, на кого надеются совершивший ошибку,
  7. О, Тот, в ком находят дружескую близость те кто ищет близости его,
  8. О, Тот, кем гордятся щедрые,
  9. О, Тот, кому доверяют те, кто уповает на божью милость,
  10. О, Владыка мой, в ком находят покой души - обладатели веры истинной,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He-the frightened flee to Him,\nO He-sinners take shelter with Him,\nO He-the repentant return to Him,\nO He-the pious incline towards Him,\nO He-the confounded seek shelter in Him,\nO He-the desirous have affliction for Him,\nO He-lovers are proud of Him,\nO He-transgressors have agreed for His forgiveness,\nO He-those who are sure in faith receive consolation from Him,\nO He-those who trust Him rely on Him.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ هُوَ إِلَيْهِ يَهْرَبُ الْخَائِـفُونَ ؛۝؛ يَا مَنْ هُوَ إِلَيْهِ يَـفْزَعُ الْمُذْنِـبُونَ ؛۝؛ يَا مَنْ هُوَ إِلَيْهِ يَـقْصِدُ الْمُـنِـيـبُونَ ؛۝؛ يَا مَنْ هُوَ إِلَيْهِ يَلْجَأُ الْعَاصُونَ ؛۝؛ يَا مَنْ هُوَ إِلَيْهِ يَـرْغَبُ الزَّاهِدُونَ ؛۝؛ يَا مَنْ هُوَ فِيهِ يَـطْمَعُ الْخَاطِئُونَ ؛۝؛ يَا مَنْ هُوَ يَسْتَأْنِسُ بِهِ الْمُرِيدُونَ ؛۝؛ يَا مَنْ هُوَ يَـفْـتَخِرُ بِهِ الْمُحْسِنُونَ ؛۝؛ يَا مَنْ هُوَ عَلَيْهِ يَـتَـوَكَّلُ الْمُتَـوَكِّلُونَ ؛۝؛ يَا مَنْ هُوَ يَـسْكُنُ بِهِ الْمُوقِـنُونَ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":44,
    "latin": `1. Yâ \'akrabü min-külli karîb
    2. Yâ ehabbü min-külli habîb
    3. Yâ a\'zamü min-külli \'azîm
    4. Yâ e\'azzü min-külli \'azîz
    5. Yâ akvâ min-külli kaviy
    6. Yâ ağnâ min-külli ğaniy
    7. Yâ ecvedü min-külli cevâd
    8. Yâ er\'efü min-külli ra\'ûf
    9. Yâ erhamü min-külli rahîm
    10. Yâ ecellü min-külli celîl`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey bütün yakınlardan daha yakın,
    2. Ey bütün sevilenlerden daha sevgili,
    3. Ey bütün büyüklerden daha büyük,
    4. Ey bütün izzet sahiplerinden daha aziz,
    5. Ey bütün kuvvetlilerden daha kavi,
    6. Ey bütün zenginlerden daha zengin,
    7. Ey bütün cömertlerden daha cömert,
    8. Ey bütün şefkatlilerden daha Rauf,
    9. Ey bütün merhametlilerden daha Rahim,
    10. Ey bütün yücelerden daha yüce,`,
    "russian":`1. О, Тот, ближе которого нет никого,
  2. О, Тот, любимее нет которого,
  3. О, Тот, кто в величии своем не имеет равных,
  4. O, Тот, величественнее которого нет никого,
  5. О, Тот, кто сильнее сильных,
  6. О, Тот, кто богаче богатых,
  7. О, Тот, кто щедрее щедрых,
  8. О, Тот, великодушнее которого нет никого,
  9. О, Тот, кто в милости своей не имеет равных себе,
  10. О, Владыка мой, выше которого нет никого,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I entreat You in Your name:\nO Friend, \nO physician,\nO Near, \nO Supervisor,\nO Reckoner to account, \nO Awful,\nO Rewarder, \nO Acceptor,\nO Aware, \nO All-Seeing.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا أَقْرَبُ مِنْ كُلِّ قَرِيبٍ ؛۝؛ يَا أَحَبُّ مِنْ كُلِّ حَبِيبٍ ؛۝؛ يَا أَعْظَمُ مِنْ كُلِّ عَظِيمٍ ؛۝؛ يَا أَعَزُّ مِنْ كُلِّ عَزِيزٍ ؛۝؛ يَا أَقْوَى مِنْ كُلِّ قَوِيٍّ ؛۝؛ يَا أَغْنَى مِنْ كُلِّ غَنِيٍّ ؛۝؛ يَا أَجْوَدُ مِنْ كُلِّ جَوَادٍ ؛۝؛ يَا أَرْأَفُ مِنْ كُلِّ رَؤُوفٍ ؛۝؛ يَا أَرْحَمُ مِنْ كُلِّ رَحِيمٍ ؛۝؛ يَا أَجَلُّ مِنْ كُلِّ جَلِيلٍ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":45,
    "latin": `Ve es\'elüke, bi-esmâike:
    1. Yâ Karîb
    2. Yâ Rakîb
    3. Yâ Habîb
    4. Yâ Mücîb
    5. Yâ Hasîb
    6. Yâ Tabîb
    7. Yâ Bâsir
    8. Yâ Habîr
    9. Yâ Münîr
    10. Yâ Mübîn`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey her şeye her şeyden daha yakın olan Karîb,
    2. Ey bütün mahlukatını gözetleyen Rakîb,
    3. Ey müminlerin sevgilisi olan Habîb,
    4. Ey kullarının dualarına cevap veren Mucîb,
    5. Ey kullarının bütün fiillerinin hesabını gören Hasîb,
    6. Ey bütün dertlere deva veren Tabîb,
    7. Ey her şeyi bütün incelikleriyle gören Basîr,
    8. Ey her şeyden haberdar olan Habîr,
    9. Ey her şeyi nuruyla aydınlatan Münîr,
    10. Ey kullarına gerekli her şeyi açıklayan Mübîn,`,
    "russian":`Обращаюсь к тебе и молю;
  1. О, Тот, ближе которого нет никого и ничего,
  2. О, следящий неусыпно за всеми созданиями своими,
  3. О, любящий и любимый,
  4. О, принимающий мольбы и просьбы всех создания своих и отвечающий на это их исполнением,
  5. О, берегущий создания свои, привлекающий к суду своему в Судный день, и тот, которого предостаточно,
  6. О, исцеляющий все недуги души и тела,
  7. О, всевидящий и всезнающий,
  8. О, Тот, от которого не утаится ни одно известие, знающий вплоть до мельчайшей частицы обо всём, что происходит в мироздании Его,
  9. О, озаряющий всё светом своим,
  10. О, выявляющий всю правду и существующий вне всякого сомнения,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Nearest of all,\nO Friendliest of all the friends,\nO Possessor Of greater insight than all others,\nO Most Aware of all\nO Noblest of all the nobles,\nO Most Exalted of all the exalted,\nO Mightiest of all mighty,\nO Most Independent of all,\nO Most Generous of all,\nO Kindest of all those who are kind`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا قَرِيبُ ؛۝؛ يَا رَقِيبُ ؛۝؛ يَا حَبِيبُ ؛۝؛ يَا مُجِيبُ ؛۝؛ يَا حَسِيبُ ؛۝؛ يَا طَبِيبُ ؛۝؛ يَا بَصِيرُ ؛۝؛ يَا خَبِيرُ ؛۝؛ يَا مُنِيرُ ؛۝؛ يَا مُبِينُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":46,
    "latin": `1. Yâ ğaliben gayra mağlûb
    2. Yâ sânian gayra masnû\'
    3. Yâ hâlikan gayra mahlûk
    4. Yâ mâliken gayra memlûk
    5. Yâ kâhiran gayra makhûr
    6. Yâ râfi\'an gayra merfu\'
    7. Yâ hâfizan gayra mahfûz
    8. Yâ nâsiran gayra mensûr
    9. Yâ şâhidan gayra ğaib
    10. Yâ karîben gayra ba\'îd`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey mağlup olmayan Galib,
    2. Ey yaratılmış olmayan Sanatkar,
    3. Ey mahluk olmayan Yaratıcı,
    4. Ey sahip olunamayan Mülk Sahibi,
    5. Ey kendisine üstün gelinemeyen Kahir,
    6. Ey yükseltilmekten münezzeh Yükseltici,
    7. Ey korunmayan Koruyucu,
    8. Ey yardım edilmeyen Yardım Edici,
    9. Ey gaib olmayan Şahid,
    10. Ey uzak olmayan Yakın,`,
    "russian":`1. О,  непобедимый,
  2. О, творец изначальный, сам никем не сотворенный,
  3. О, создатель, сам не созданный,
  4. О, обладающий всем, но не обладаемый никем и ничем,
  5. О, всепобеждающий и держащий все во власти своей,
  6. О, возвышающий, и чье возвышение ни от кого не зависит,
  7. О, охраняющий и не нуждающийся в чьей-то охране,
  8. О, помогающий и не нуждающийся в помощи,
  9. О, свидетель, от которого ничего не скроется, близкий ко всему ближе ближнего,
  10. О, Владыка мой, который совсем близко,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Dominant who is not overpowered,\nO Designer who is not made.\nO Creator who is not created,\nO Master and not the slave,\nO All-Dominant who is not dominated,\nO Exalter and the Exalted,\nO Protector who needs no protection,\nO Helper who needs no help,\nO Witness who is not absent,\nO Near who is not distant.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`  يَا غَالِبًا غَيْرَ مَغْلُوبٍ ؛۝؛ يَا صَانِعًا غَيْرَ مَصْنُوعٍ ؛۝؛ يَا خَالِقًا غَيْرَ مَخْلُوقٍ ؛۝؛ يَا مَالِكًا غَيْرَ مَمْلُوكٍ ؛۝؛ يَا قَاهِرًا غَيْرَ مَقْهُورٍ ؛۝؛ يَا رَافِعًا غَيْرَ مَرْفُوعٍ ؛۝؛ يَا حَافِظًا غَيْرَ مَحْفُوظٍ ؛۝؛ يَا نَاصِرًا غَيْرَ مَنْصُورٍ ؛۝؛ يَا شَاهِدًا غَيْرَ غَائِبٍ ؛۝؛ يَا قَـرِيـبًا غَـيْـرَ بَـعِيدٍ ؛۝؛`,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":47,
    "latin": `1. Yâ nûra\'n-nûr
    2. Yâ münevvira\'n-nûr
    3. Yâ musavvira\'n-nûr
    4. Yâ hâlika\'n-nûr
    5. Yâ mukaddira\'n-nûr
    6. Yâ müdebbira\'n-nûr
    7. Yâ nûran kable külli nûr
    8. Yâ nûran ba\'de külli nûr
    9. Yâ nûran fevka külli nûr
    10. Yâ nûran leyse mislehû nûr`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey nurların Nuru,
    2. Ey nurları Nurlandıran,
    3. Ey nurlara Suret ve Şekil Veren,
    4. Ey nurları Yaratan,
    5. Ey nurları Takdir Eden,
    6. Ey nurları İdare Eden,
    7. Ey bütün nurlardan evvel olan Nur,
    8. Ey bütün nurlardan sonra da var olan Nur,
    9. Ey bütün nurların üstünde olan Nur,
    10. Ey hiçbir nurun kendisine benzemediği Nur,`,
    "russian":`1. О, свет, ярче которого нет,
  2. О, свет, источник всякого света,
  3. О, придающий вид и форму всякому свету,
  4. О, творец всякого света,
  5. О, определяющи меру всякому свету,
  6. О, управляющий всяким светом,
  7. О, свет, бывший прежде всякого света,
  8. О, свет, который останется после того, как померкнет всякий свет,
  9. О, свет, который выше всякого света,
  10. О, свет, не имеющее равных себе,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Light of lights,\nO Illuminator of light,\nO Creator of light\nO Planner of light,\nO Estimator of light,\nO Light of all lights,\nO Light that precedes in existence every light,\nO Light that will survive all lights,\nO Light that is above every light,\nO Light like of which there is no light.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا نُورَ النُّورِ ؛۝؛ يَا مُنَوِّرَ النُّورِ ؛۝؛ يَا مُصَوِّرَ النُّورِ ؛۝؛ يَا خَالِقَ النُّورِ ؛۝؛ يَا مُقَدِّرَ النُّورِ ؛۝؛ يَا مُدَبِّرَ النُّورِ ؛۝؛ يَا نُورًا قَـبْلَ كُلِّ نُورٍ ؛۝؛ يَا نُورًا بَعْدَ كُلِّ نُورٍ ؛۝؛ يَا نُورًا فَـوْقَ كُلِّ نُورٍ ؛۝؛ يَا نُورًا لَيْسَ مِثْلَهُ نُورٌ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":48,
    "latin": `1. Yâ men \'atâuhû şerîf
    2. Yâ men fi\'lühû lâtîf
    3. Yâ men lûtfuhu mukîm
    4. Yâ men ihsâhuhû kadîm
    5. Yâ men kavlühû hak
    6. Yâ men va\'dühû sıdk
    7. Yâ men \'afvühû fadl
    8. Yâ men \'azâbühû \'adl
    9. Yâ men zikruhû hulv
    10. Yâ men ünsühû lezîz`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey bağış ve ihsanı şerefli olan,
    2. Ey fiili latif olan,
    3. Ey lütfu daim olan,
    4. Ey ihsanı kadim olan,
    5. Ey sözü hak olan,
    6. Ey vaadi doğru olan,
    7. Ey affı fazla olan,
    8. Ey azabı adalet olan,
    9. Ey zikri tatlı olan,
    10. Ey dostluğu lezzetli olan,`,
    "russian":`1. О, Тот, чьи дары и милости почетны,
  2. О, Тот, чье дела тонки и изящны,
  3. О, Тот, чьи щедроты и блага постоянны,
  4. О, Тот, чье воздаяние извечно,
  5. О, Тот, чье слово правдиво,
  6. О, Тот, чье обещания исполнится,
  7. О, Тот, чье прощение от величия его,
  8. О, Тот, чье возмездие справедливо,
  9. О, Тот, упоминание которого сладостно,
  10. О, Владыка, близость к которому и привычка быть в дружбе с которым - услада сердец,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He Whose gift is noble,\nO He Whose action is subtle,\nO He Whose kindness is persistent,\nO He Whose beneficence is eternal,\nO He Whose word is right,\nO He Whose promise is true,\nO He Whose forgiveness is a grace,\nO He Whose chastisement is justice,\nO He Whose remembrance is sweet,\nO He Whose grace is universal.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ عَطَاؤُهُ شَرِيفٌ ؛۝؛ يَا مَنْ فِعْلُهُ لَطِيفٌ ؛۝؛ يَا مَنْ لُطْفُهُ مُقِيمٌ ؛۝؛ يَا مَنْ إِحْسَانُهُ قَدِيمٌ ؛۝؛ يَا مَنْ قَوْلُهُ حَقٌّ ؛۝؛ يَا مَنْ وَعْدُهُ صِدْقٌ ؛۝؛ يَا مَنْ عَفْوُهُ فَضْلٌ ؛۝؛ يَا مَنْ عَذَابُهُ عَدْلٌ ؛۝؛ يَا مَنْ ذِكْرُهُ حُلْوٌ ؛۝؛ يَا مَنْ أُنْسُهُ لَذِيذٌ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":49,
    "latin": `Ve es\'elüke, bi-esmâike:
    1. Yâ Münevvil
    2. Yâ Mufassıl
    3. Yâ Mübeddil
    4. Yâ Müsehhil
    5. Yâ Müzellil
    6. Yâ Münezzil
    7. Yâ Muhavvil
    8. Yâ Mücemmil
    9. Yâ Mükemmil
    10. Yâ Mufaddıl`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey kullarına nimet ihsan eden Münevvil,
    2. Ey bütün müşkilleri halleden ve hak ile batılın arasını ayıran Mufassıl,
    3. Ey istediğini istediği şekilde değiştiren Mübeddil,
    4. Ey zorlukları kolaylaştıran Müsehhil,
    5. Ey istediğini zelil kılan ve mahlukatına boyun eğdiren Müzellil,
    6. Ey kitaplar ve bereketler indiren dilediğinin rütbesini alçaltan Münezzil,
    7. Ey kainatta bütün işleri döndüren ve kullarını halden hale sevkeden Mühavvil,
    8. Ey her şeyi münasip şekilde güzelleştiren Mücemmil,
    9. Ey her şeyi kemale erdiren Mükemmil,
    10. Ey istediğini istediğine üstün kılan Mufaddıl,`,
    "russian":`1. О дарующий всем по заслугам их,
  2. О, разрешающий все сложности и отделяющий верное от неверного,
  3. О, могущий всё и вся изменить по своему желанию,
  4. О, облегчающий трудности,
  5. О, низвергающий, кого пожелает и принуждающий к повиновению,
  6. О, ниспосылающий книги, ангелов, беды и благодати и понижающий в чине и положении, того, кого пожелает,
  7. О, изменяющий создания свои, переводя их из одного состояния в другое,
  8. О, дарующий красоту всякому творению своему по достоинству его,
  9. О, доводящий всё и вся до совершенства,
  10. О, возвышающий любого щедротами и благами своими,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I entreat You in Your name:\nO Facilitator, \nO Separator,\nO Alterer, \nO Humiliating of the proud,\nO Degrader, \nO Benefactor,\nO Munificent, \nO Giver of respite,\nO Grantor of respite, \nO Virtuous,`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا مُنَـوِّلُ ؛۝؛ يَا مُفَصِّلُ ؛۝؛ يَا مُبَدِّلُ ؛۝؛ يَا مُسَهِّلُ ؛۝؛ يَا مُذَلِّلُ ؛۝؛ يَا مُنَزِّلُ ؛۝؛ يَا مُحَوِّلُ ؛۝؛ يَا مُجَمِّلُ ؛۝؛ يَا مُكَمِّلُ ؛۝؛ يَا مُفَضِّلُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":50,
    "latin": `1. Yâ men yerâ velâ yürâ
    2. Yâ men yahluku velâ yuhlâk
    3. Yâ men yehdi velâ yühdâ
    4. Yâ men yuhyi velâ yuhyâ
    5. Yâ men yut\'imu velâ yut\'am
    6. Yâ men yücîru velâ yücâr
    7. Yâ men yakdî velâ yükdâ \'aleyh
    8. Yâ men yahkümu velâ yuhkemu \'aleyh
    9. Yâ men lem yelid velem yûled
    10. Ve lem yekün lehû küfüven ehad`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey her şeyi gören fakat kendisi görülmeyen,
    2. Ey her şeyi yaratan fakat kendisi yaratılmayan,
    3. Ey her şeye yol gösteren fakat kendisi yol gösterilmeye muhtaç olmayan,
    4. Ey hayat veren fakat kendisi hayat verilmeye muhtaç olmayan,
    5. Ey her şeyi doyuran fakat kendisi doyurulmaktan münezzeh olan,
    6. Ey her şeyi koruyan fakat kendisi korunmaya muhtaç olmayan,
    7. Ey her şey hakkında karar veren fakat kendisi hakkında hüküm verilmeyen,
    8. Ey hüküm veren fakat kendisi hakkında hüküm verilmeyen,
    9. Ey doğurmayan ve doğmayan,
    10. Ey hiçbir sey kendisine denk olmayan,`,
    "russian":`1. О, всевидящий и невидимый,
  2. О, творец всего и вся, но сам никем не сотворенный,
  3. О, указующий верный путь к спасению, но сам в ведущем не нуждающийся,
  4. О, вдыхающий жизнь во всё и вся, но сам не получивший от кого-то; тот, чья жизнь - от самого себя, и она извечна,
  5. О, насыщающие всё и вся, но сам не в какой пище не нуждающийся,
  6. О, оберегающий всё, но сам в охране не нуждающийся,
  7. О, Тот, кто управляет всем, но сам ничьему управлению не подчиняется,
  8. О, Тот, кто властен надо всем, но сам никому не подвластен,
  9. О, Тот, кто не рождает и сам не может быть рождён,
  10. О, Владыка мой, которому нет равных,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He Who sees but is not seen,\nO He Who creates and is not created,\nO He Who guides and is not guided,\nO He Who receives to life and is not brought to life,\nO He Who questions and is not questioned,\nO He Who feeds and does not eat,\nO He Who gives protection and is in no need of protection,\nO He Who judges and against Whom no judgement is passed,\nO He Who commands but is not commanded:\nO He Who begets not, nor is He begotten,\nAnd there is none like unto Him.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ يَرَى وَلَا يُرَى ؛۝؛ يَا مَنْ يَخْلُقُ وَلَا يُخْلَقُ ؛۝؛ يَا مَنْ يَهْدِي وَلَا يُهْدَى ؛۝؛ يَا مَنْ يُحْيِي وَلَا يُحْيَى ؛۝؛ يَا مَنْ يُطْعِمُ وَلَا يُطْعَمُ ؛۝؛ يَا مَنْ يُجِيرُ وَلَا يُجَارُ ؛۝؛ يَا مَنْ يَـقْضِي وَلَا يُـقْضَى عَلَيْهِ ؛۝؛ يَا مَنْ يَحْكُمُ وَلَا يُحْكَمُ عَلَيْهِ ؛۝؛ يَا مَنْ لَمْ يَلِدْ وَلَمْ يُولَدْ ؛۝؛ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":51,
    "latin": `1. Yâ ni\'mel-habîb
    2. Yâ ni\'me\'t-tabîb
    3. Yâ ni\'me\'l-hasîb
    4. Yâ ni\'me\'l-karîb
    5. Yâ ni\'mer-rakîb
    6. Yâ ni\'me\'l-mucîb
    7. Yâ ni\'me\'l-enîs
    8. Yâ ni\'me\'l-vekîl
    9. Yâ ni\'me\'l-mevlâ
    10. Yâ ni\'me\'n-nasîr`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey en güzel Sevgili,
    2. Ey en güzel Tabib,
    3. Ey en güzel Hesap Gören,
    4. Ey en güzel Yakin,
    5. Ey en güzel Gözetleyici,
    6. Ey en güzel Cevap Veren,
    7. Ey en güzel Dost,
    8. Ey en güzel Vekil,
    9. Ey en güzel Efendi,
    10. Ey en güzel Yardımcı,`,
    "russian":`1. О, наилучший из возлюбленных,
  2. О, наилучший из врачующих,
  3. О, наилучший из считающих и рассчитывающих,
  4. О, наилучший из ближайших,
  5. О, наилучший из наблюдающих,
  6. О, наилучший из отвечающих на мольбы,
  7. О, наилучший из внушающих чувство близости к себе и дарящих покой,
  8. О, наилучший из доверенных,
  9. О, наилучший из хозяев,
  10. О, Владыка мой, наилучший из помогающих,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Best reckoner,\nO Best physician,\nO Best guardian,\nO Best near one,\nO Best responder,\nO Best friend,\nO Best surety,\nO Best protector,\nO Best master,\nO Best helper.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا نِعْمَ الْحَبِيبُ ؛؛ يَا نِعْمَ الطَّبِيبُ ؛؛يَا نِعْمَ الْحَسِيبُ ؛؛ يَا نِعْمَ الْقَرِيبُ ؛؛ يَا نِعْمَ الرَّقِيبُ ؛؛ يَا نِعْمَ الْمُجِيبُ ؛؛ يَا نِعْمَ الْأَنِيسُ ؛؛ يَا نِعْمَ الْوَكِيلُ ؛؛ يَا نِعْمَ الْمَوْلَى ؛؛ يَا نِعْمَ النَّصِيرُ ؛؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":52,
    "latin": `1. Yâ sürûr\'el-\'ârifîn
    2. Yâ enîse\'l-mürîdîn
    3. Yâ muğîse\'l-müştâkîn
    4. Yâ habîbe\'t-tevvâbîn
    5. Yâ râzika\'l-mukıllîn
    6. Yâ recâe\'l-müznibîn
    7. Yâ kâşife\'l-mekrûbîn
    8. Yâ müneffisen \'ani\'l-mağmûmîn
    9. Yâ müferricen \'ani\'l-mahzûnîn
    10. Yâ ilâhe\'l-evvelîne ve\'l-âhirîn`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey kendisini tanıyanların sevinci,
    2. Ey kendisini arzulayanların dostu,
    3. Ey kendisine müştak olanların imdadına koşan,
    4. Ey tövbekarların sevgilisi,
    5. Ey ihtiyaç sahiplerine rızık veren,
    6. Ey günahkarların ümidi,
    7. Ey sıkıntıda olanların ferahlatıcısı,
    8. Ey gamlılara nefes aldıran,
    9. Ey mahzunlara kurtuluş yolu gösteren,
    10. Ey evvel ve ahirlerin İlahı,`,
    "russian":`1. О, источник радости и счастья для тех, кто Его знает,
  2. О, дарящий дружбу и покой тем, кто хочет угодить Ему и приблизиться к Нему,
  3. О, помогающий тем, кто жаждет Его и любит,
  4. О, возлюбленный теми, кто много кается,
  5. О, дарующий пищу тем, кто в нужде пребывает,
  6. О, врата надежды для тех, кто грешен,
  7. О, разрешающий все трудности тех, кто пребывает в затруднениях,
  8. О, дарящий покой тем, кто пребывает в горе и печали,
  9. О, Тот, кто обращает печаль горюющих в покой и радость,
  10. О, Владыка мой, Бог всех сущих в прошлом и будущем,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Joy of saints,\nO Desire of friends.\nO Friend of seekers,\nO Friend of penitents,\nO Provider of sustenance to the poor,\nO Hope of sinners,\nO Coolness of worshippers' eyes,\nO Remover Of sufferers' pain,\nO Dispeller of the sorrows of the sorrowful,\nO Allah of the first and the last generation.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا سُرُورَ الْعَارِفِينَ ؛۝؛ يَا أَنِيسَ الْمُرِيدِينَ ؛۝؛ يَا مُغِيثَ الْمُشْتَاقِينَ ؛۝؛ يَا حَبِيبَ التَّوَّابِينَ ؛۝؛ يَا رَازِقَ الْمُقِلِّينَ ؛۝؛ يَا رَجَاءَ الْمُذْنِبِينَ ؛۝؛ يَا كَاشِفَ الْمَكْرُوبِينَ ؛۝؛ يَا مُنَفِّسًا عَنِ الْمَغْمُومِينَ ؛۝؛ يَا مُفَرِّجًا عَنِ الْمَحْزُونِينَ ؛۝؛ يَا إِلٰهَ الْأَوَّلِينَ وَالْأٰخِرِينَ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":53,
    "latin": `1. Yâ Rabbe\'l-cenneti ve\'n-nâr
    2. Yâ Rabbe\'n-nebiyyîne ve\'l-ahyâr
    3. Yâ Rabbe\'s-sıddıkîne ve\'l-ebrâr
    4. Yâ Rabbe\'s-sığâri ve\'l-kibâr
    5. Yâ Rabbe\'l-hubûbi ve\'l-esmâr
    6. Yâ Rabbe\'l-enhâri ve\'l-eşcâr
    7. Yâ Rabbe\'s-sahara ve\'l-ğıfâr
    8. Yâ Rabbe\'l-\'abîdi ve\'l-ahrâr
    9. Yâ Rabbe\'l-i\'lâni ve\'l-isrâr
    10. Yâ Rabbe\'l-leyli ve\'n-nehâr`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey Cennet ve Cehennemin Rabbi,
    2. Peygamberlerin ve hayırlıların Rabbi
    3. Ey Sıddıkların ve iyilerin Rabbi,
    4. Ey küçüklerin ve büyüklerin Rabbi,
    5. Ey danelerin ve meyvelerin Rabbi,
    6. Ey nehirlerin ve ağaçların Rabbi,
    7. Ey sahraların ve çöllerin Rabbi,
    8. Ey kölelerin ve hürlerin Rabbi,
    9. Ey açığa çıkan ve gizlemelerin Rabbi,
    10. Ey gece ve gündüzün Rabbi,`,
    "russian":`1. О, Владыка Рая и Ада,
  2. О, Владыка пророков и людей блаженных,
  3. О, Владыка тех, кто верен и добр,
  4. О, Владыка малых и великих,
  5. О, Владыка семян, зерен и плодов,
  6. О, Владыка рек и деревьев,
  7. О, Владыка пустынь и степей,
  8. О, Владыка рабов и свободных,
  9. О, Владыка всего явного и тайного,
  10. О, Владыка дней и ночей,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I entreat You in Your name:\nO our Lord, \nO our Allah,\nO our Chief, \nO our Master,\nO our Helper, \nO our Protector,\nO our Guide, \nO our Aider,\nO our Friend, \nO our Physician.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا رَبَّ الْجَنَّةِ وَ؛النَّارِ ؛؛۝؛ يَا رَبَّ النَّبِيِّينَ وَالْأَخْيَارِ ؛۝؛ يَا رَبَّ الصِّدِّيقِينَ وَالْأَبْرَارِ ؛۝؛ يَا رَبَّ الصِّغَارِ وَالْكِبَارِ ؛۝؛ يَا رَبَّ الْحُبُوبِ وَالْأَثْمَارِ ؛۝؛ يَا رَبَّ الْأَنْهَارِ وَالْأَشْجَارِ ؛۝؛ يَا رَبَّ الصَّحَارَى وَالْقِفَارِ ؛۝؛ يَا رَبَّ الْعَبِيدِ وَالْأَحْرَارِ ؛۝؛ يَا رَبَّ الْإِعْلَانِ وَالْإِسْرَارِ ؛۝؛ يَا رَبَّ اللَّيْلِ وَالنَّهَارِ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":54,
    "latin": `1. Yâ men lahika fî-külli şey\'in ilmuh
    2. Yâ men nefeze bi-külli şey\'in basaruh
    3. Yâ men beleğat ilâ külli şey\'in kudretuh
    4. Yâ men lâ yuhsî\'l-\'ibâdü na\'mâeh
    5. Yâ men lâ teblüğu\'l-halâiku şükreh
    6. Yâ men lâ tüdrikü\'l-efhâmü celâleh
    7. Yâ men lâ tenâlü\'l-evhâmü künheh
    8. Yâ meni\'l-\'azemetü ve\'l-kibriyâü ridâuh
    9. Yâ meni\'l-heybetü ve\'s-sultânü behâuh
    10. Yâ men te\'azzeze bi\'l-\'izzi bekâuh`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey ilmi her şeye ulaşan,
    2. Ey basarı her şeye nüfus eden,
    3. Ey kudreti her şeye baliğ olan,
    4. Ey nimetleri sayılamayan,
    5. Ey mahlukatın gerçek şükrüne erişemediği,
    6. Ey zihinlerin yüceliğini idrak edemediği,
    7. Ey hayallerin hakikatına erişemediği,
    8. Ey azamet ve kibriya örtüsü olan,
    9. Ey heybet ve saltanat güzelliği olan,
    10. Ey bekası izzetle izzetlenen,`,
    "russian":`1. О, Тот, чье знание охватывает всё сущее,
  2. О, Тот, кому ничто не мешает увидеть и чей взор проникает во всё и вся,
  3. О, Тот, чье могущество всесильно,
  4. О, Тот, чьи блага не могут быть сосчитаны рабами Его,
  5. О, Тот, кого не могут возблагодарить достойно создание Его,
  6. О, Тот, чье величие и грозная блистательность неподвластны разуму,
  7. О, Тот, чья суть и истина не подвластна ни уму, не воображению,
  8. О, Тот, для которого величие и превосходство - мантия его,
  9. О, Тот, красота сути которого в единовластии и величественности Его,
  10. О, Владыка мой, чье бессмертие неприкосновенно велико,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Lord of the prophets and the virtuous,\nO Lord of the righteous and chosen one,\nO Lord of paradise and hell,\nO Lord of the small and the great,\nO Lord of grains and fruits,\nO Lord of canals and trees,\nO Lord of forest and desert,\nO Lord of lands and seas,\nO Lord of night and day,\nO Lord of the manifest and the hidden.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ لَحِقَ فِي كُلِّ شَيْءٍ عِلْمُهُ ؛۝؛ يَا مَنْ نَفَذَ بِكُلِّ شَيْءٍ بَصَرُهُ ؛۝؛ يَا مَنْ بَلَغَتْ إِلَى كُلِّ شَيْءٍ قُدْرَتُهُ ؛۝؛ يَا مَنْ لَا يُحْصِي الْعِبَادُ نَعْمَاءَهُ ؛۝؛ يَا مَنْ لَا تَـبْلُغُ الْخَلَائِقُ شُكْرَهُ ؛۝؛ يَا مَنْ لَا تُدْرِكُ الْأَفْهَامُ جَلَالَهُ ؛۝؛ يَا مَنْ لَا تَـنَالُ الْأَوْهَامُ كُـنْـهَهُ ؛۝؛ يَا مَنِ الْعَظَمَةُ وَالْكِـبْـرِيَاءُ رِدَاؤُهُ ؛۝؛ يَا مَنِ الْهَـيْـبَـةُ وَالسُّلْطَانُ بَهَاؤُهُ ؛۝؛ يَا مَنْ تَعَزَّزَ بِالْعِزِّ بَقَاؤُهُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":55,
    "latin": `1. Yâ men lehü\'l-meselü\'l-a\'lâ
    2. Yâ men lehü\'s-sıfâtü\'l-\'ulâ
    3. Yâ men lehü\'l-âhiretü ve\'l-ûlâ
    4. Yâ men lehü\'l-Cennetü\'l-Me\'va
    5. Yâ men lehü\'n-nârü ve\'l-lezâ
    6. Yâ men lehü\'l-âyâtü\'l-kübrâ
    7. Yâ men lehü\'l-esmâü\'l-hüsnâ
    8. Yâ men lehü\'l-hukmu ve\'l-kadâ
    9. Yâ men lehü\'s-semâvâtü\'l-\'ulâ
    10. Yâ men lehü\'l-\'arşu ve\'s-serâ`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey en yüce misaller kendisine ait olan,
    2. Ey en yüce sıfatlar kendisine ait olan,
    3. Ey ahiret ve dünya kendisine ait olan,
    4. Ey cennetül me\'vanın sahibi,
    5. Ey cehennem ve ateşin sahibi,
    6. Ey en büyük ayetler sahibi,
    7. Ey en güzel isimler sahibi,
    8. Ey hüküm ve kaza sahibi,
    9. Ey yüce göklerin sahibi,
    10. Ey arş ve yerin sahibi,`,
    "russian":`1. О, средоточие всех лучших состояний и качеств,
  2. О, единственный обладатель высочайших черт,
  3. О, единственный обладатель мира земного и того, что грядет после смерти,
  4. О, обладатель Обители райской (Джаннат’уль-мава)
  5. О, обладатель Ада и огня,
  6. О, Тот, бытию и единству которого есть великие знаки и доказательства,
  7. О, единственный обладатель прекраснейших имен и эпитетов,
  8. О, единственный обладатель права решать и судить,
  9. О, единственный обладатель небес высочайших,
  10. О, Владыка мой, которому принадлежит Земля и Арша (Трон божий),`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, Whose command operates in everything,\nO He, Whose knowledge encompasses everything,\nO He, Whose control extends to everything,\nO He, Whose bounties cannot be counted by His slaves,\nO He, Whom His creatures cannot adequately thank,\nO He, Whose grandeur cannot be comprehended by the intellect,\nO He, Whose reality cannot be acquired by the imagination,\nO He, Whose garb is majesty and greatness,\nO He, Whose judgement cannot be reversed by His slave,\nO He, Whose alone is the kingdom and no one else'\nO He, Whose alone is the gift and none else's,`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ لَهُ الْمَثَلُ الْأَعْلَى ؛۝؛ يَا مَنْ لَهُ الصِّفَاتُ الْعُلَى ؛۝؛ يَا مَنْ لَهُ الْأٰخِرَةُ وَالْأُولَى ؛۝؛ يَا مَنْ لَهُ الْجَنَّةُ الْمَأْوَى ؛۝؛ يَا مَنْ لَهُ النَّارُ وَاللَّظَى ؛۝؛ يَا مَنْ لَهُ الْأٰيَاتُ الْكُبْرَى ؛۝؛ يَا مَنْ لَهُ الْأَسْمَاءُ الْحُسْنَى ؛۝؛ يَا مَنْ لَهُ الْحُكْمُ وَالْقَضَا ؛۝؛ يَا مَنْ لَهُ السَّمَاوَاتُ الْعُلَى ؛۝؛ يَا مَنْ لَهُ الْعَرْشُ وَالثَّرَى ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":56,
    "latin": `Ve es\'elüke, bi-esmaîke:
    1. Yâ Afüvvü
    2. Yâ Gafûr
    3. Yâ Vedûd
    4. Yâ Şekûr
    5. Yâ Sabûr
    6. Yâ Raûf
    7. Yâ \'Atûf
    8. Yâ Kuddûs
    9. Yâ Hayyu
    10. Yâ Kayyûm`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey kullarını çok çok affeden Afüv,
    2. Ey kullarının günahlarını bağışlayan Gafur,
    3. Ey itaatkar kullarını çok seven Vedud,
    4. Ey rızası için yapılan işleri bol sevapla karşılayan Şekûr,
    5. Ey asileri hemen cezalandırmayıp çok sabreden Sabûr,
    6. Ey kullarına çok şefkat edip esirgeyen Rauf,
    7. Ey kullarına karşı pek merhametli olan Atûf,
    8. Ey bütün mahlukatı maddi ve manevi kirlerden arındıran Kuddüs,
    9. Ey gerçek hayat sahibi olan Hayy,
    10. Ey gökleri yeri ve bütün mahlukatı yerinde tutan Kayyum,`,
    "russian":`1. О, прощающий бессчетно,
  2. О, прощающий грехи рабов своих,
  3. О, более всех любимый и любящий всякого, кто придет к Нему и кто покается,
  4. О, воздающий рабам своим стократно за благие дела их малые,
  5. О, не спешащий наказать грешников и непокорных, и дарующий терпения тем, кто просит об этом,
  6. О, обладатель великодушия безмерного,
  7. О, обладатель милости бесконечной,
  8. О, наичистейший, бесконечно далекий от всех недостатков,
  9. О, вечносущий, сама жизнь,
  10. О, существующий благодаря самому себе, постоянный и поддерживающий жизнь во всём сущем,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, for Whom are noblest examples,\nO He, for Whom are high attributes,\nO He, Who is the Master of the beginning and the end,\nO He, Who is the Master of the abode of paradise,\nO He, for Whom are great signs,\nO He, for Whom are beautiful names,\nO He, for Whom is order and judgement,\nO He, Who rules over the atmosphere and the expanse,\nO He, Whose is the Lordship of the highest heaven and the earth,\nO He, Who is the Master of the high heavens.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا عَفُوُّ ؛۝؛ يَا غَفُورُ ؛۝؛ يَا وَدُودُ ؛۝؛ يَا شَكُورُ ؛۝؛ يَا صَبُورُ ؛۝؛ يَا رَؤُوفُ ؛۝؛ يَا عَطُوفُ ؛۝؛ يَا قُـدُّوسُ ؛۝؛ يَا حَـيُّ ؛۝؛ يَا قَـيُّومُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":57,
    "latin": `1. Yâ men hüve fi\'s-semâi \'azametüh
    2. Yâ men hüve fi\'l-ardi âyâtüh
    3. Yâ men hüve fî-külli şey\'in delâilüh
    4. Yâ men hüve fi\'l-bihâri acâibuh
    5. Yâ men yebdeu\'l-halka sümme yu\'îduh
    6. Yâ men hüve fi\'l-cibâli hazâinuh
    7. Yâ men ahsene külle şey\'in halakah
    8. Yâ men ileyhi yurce\'u\'l-emru küllüh
    9. Yâ men zahera fî-külli şey\'in lütfuh
    10. Yâ men yu\'arrifu\'l-halâika kudreteh`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey semada azameti görülen,
    2. Ey yerde ayetleri tecelli eden,
    3. Ey her şeyde delilleri bulunan,
    4. Ey denizde acayip sanatları bulunan,
    5. Ey mahlukatı ilk defa yaratıp öldükten sonra tekrar dirilten,
    6. Ey dağlarda hazineleri bulunan,
    7. Ey yarattığı her şeyi en güzel yapan,
    8. Ey bütün işler kendisine dönen,
    9. Ey her şeyde lütfu açıkca görünen,
    10. Ey mahlukatına kudretini tanıtan,`,
    "russian":`1. О, Тот, чье величие блещет в небесах,
  2. О, Тот, признаками бытия которого полна Земля,
  3. О, Тот, доказательствами бытия единства которого полны все создания,
  4. О, Тот, дивными созданиями которого полны моря,
  5. О, Тот, кто творит из ничего и после смерти возвращает к жизни,
  6. О, Тот, сокровищницами которого полны горы,
  7. О, Тот, кто творит только прекрасное,
  8. О, Тот, к кому возвращается всё,
  9. О, Тот, чьи блага и щедроты во всём проявляются,
  10. О, Владыка мой, возвещающий о себе всем созданиям своим,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I entreat You in Your name:\nO Pardoner, \nO Forgiver,\nO Patient, \nO Greatest appreciator(of good),\nO Kind, \nO Sympathetic,\nO Besought, \nO Friend,\nO Most Glorified, \nO Most Holy.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ هُوَ فِي السَّمَاءِ عَظَمَتُهُ ؛۝؛ يَا مَنْ هُوَ فِي الْأَرْضِ أٰيَاتُهُ ؛۝؛ يَا مَنْ هُوَ فِي كُلِّ شَيْءٍ دَلَائِلُهُ ؛۝؛ يَا مَنْ هُوَ فِي الْبِحَارِ عَجَائِـبُهُ ؛۝؛ يَا مَنْ هُوَ يَـبْدَؤُ الْخَلْقَ ثُمَّ يُعِيدُهُ ؛۝؛ يَا مَنْ هُوَ فِي الْجِبَالِ خَزَائِـنُهُ ؛۝؛ يَا مَنْ أَحْسَنَ كُلَّ شَيْءٍ خَلَقَهُ ؛۝؛ يَا مَنْ إِلَيْهِ يُرْجَعُ الْأَمْرُ كُلُّهُ ؛۝؛ يَا مَنْ ظَهَرَ فِي كُلِّ شَيْءٍ لُطْفُهُ ؛۝؛ يَا مَنْ يُـعَرِّفُ الْخَلَائِقَ قُدْرَتَـهُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":58,
    "latin": `1. Yâ habîbe men lâ habîbe leh
    2. Yâ tabîbe men lâ tabîbe leh
    3. Yâ mucîbe men lâ mucîbe leh
    4. Yâ şefîka men lâ şefika leh
    5. Yâ rafîka men lâ refîka leh
    6. Yâ şefî\'a men lâ şefî\'a leh
    7. Yâ muğise men lâ muğise leh
    8. Yâ delîle men lâ delîle leh
    9. Yâ kâide men lâ kâide leh
    10. Yâ râhime men lâ râhime leh`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey sevgilisi olmayanların sevgilisi,
    2. Ey tabibi olmayanların tabibi,
    3. Ey isteklerini dinleyip cevap verecek kimsesi olmayanların nasibi,
    4. Ey şefkat edecek kimsesi olmayanların şefkat edicisi,
    5. Ey arkadaşı olmayanların arkadaşı,
    6. Ey şefkat edecek kimsesi olmayanların şefiği,
    7. Ey imdadına koşacak kimsesi olmayanların imdad edicisi,
    8. Ey yol gösterecek kimsesi olmayanların yol göstericisi,
    9. Ey rehberi olmayanların rehberi,
    10. Ey merhamet edecek kimsesi olmayanların merhamet edicisi,`,
    "russian":`1. О, возлюбленный тех, у кого нет возлюбленного,
  2. О, исцеляющий тех, у кого нет целителя,
  3. О, отвечающие тем, кому никто не отвечает,
  4. О, великодушный к тому, с кем не великодушен никто,
  5. О, милостью и милосердием своим пожимающий руку тому, у кого нет друга и спутника,
  6. О, заступник тех, у кого нет заступника,
  7. О, спешащий на помощь к тому, к кому никто не спешит на помощь,
  8. О, ведущий к пути верному тех, кого некому вести,
  9. О, руководящий теми, кем некому руководить,
  10. О, Владыка мой, милосердный к тем, к кому никто не проявляет милосердие,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, Whose greatness is in the heavens,\nO He, Whose signs are on the earth,\nO He, Whose proofs are manifest in everything,\nO He, Whose wonders are in the seas,\nO He, Whose treasures are in the mountains,\nO He, Who originated Creation which then returns to Him,\nO He, towards Whom is the return of every matter,\nO, Whose Kindness is evident in everything,\nO He, Who makes best everything which He has created,\nO He, Whose authority is wielded over all creatures.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا حَبِيبَ مَنْ لَا حَبِيبَ لَهُ ؛۝؛ يَا طَبِيبَ مَنْ لَا طَبِيبَ لَهُ ؛۝؛ يَا مُجِيبَ مَنْ لَا مُجِيبَ لَهُ ؛۝؛ يَا شَفِيقَ مَنْ لَا شَفِيقَ لَهُ ؛۝؛ يَا رَفِيقَ مَنْ لَا رَفِيقَ لَهُ ؛۝؛ يَا شَفِيعَ مَنْ لَا شَفِيعَ لَهُ ؛۝؛ يَا مُغِيثَ مَنْ لَا مُغِيثَ لَهُ ؛۝؛ يَا دَلِيلَ مَنْ لَا دَلِيلَ لَهُ ؛۝؛ يَا قَائِدَ مَنْ لَا قَائِدَ لَهُ ؛۝؛ يَا رَاحِمَ مَنْ لَا رَاحِمَ لَهُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":59,
    "latin": `1. Yâ kâfiye meni\'s-tekfâh
    2. Yâ hâdiye meni\'s-tehdâh
    3. Yâ kâliye meni\'s-teklâh
    4. Yâ dâ\'iye meni\'s-ted\'âh
    5. Yâ şâfiye meni\'s-teşfâh
    6. Yâ kâdiye meni\'s-tekdâh
    7. Yâ muğniye meni\'s-teğnâh
    8. Yâ mûfiye meni\'s-tevfâh
    9. Yâ mukavviye meni\'s-takvâh
    10. Yâ veliyye meni\'s-tevlâh`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey kendisine her şeye bedel yeter görenlerin kafisi,
    2. Ey kendisinden hidayet isteyenlerin hidayet edicisi,
    3. Ey gizlenecek yer arayanların üstünü örten,
    4. Ey kendisini çağıranları cennetine davet eden,
    5. Ey kendisinden şifa isteyenlere şifa veren,
    6. Ey kendisine hükmetmesini isteyenler hakkında hükmeden,
    7. Ey maddi ve manevi zenginlik isteyenleri zenginleştiren,
    8. Ey kendisinden her ihtiyacını yerine getirilmesini isteyenlerin ihtiyaçlarına yeterli cevap veren,
    9. Ey kuvvet ve güç isteyenlere kafi kuvvet veren,
    10. Ey kendisinden dostluk ve sahiplik isteyenlerin dost ve sahibi,`,
    "russian":`1. О, достаточный для всех, кто считает Его достаточным для себя,
  2. О, спасающий души тех, кто ищет у Него спасения своей души,
  3. О, тот, кто исполняет нужды тех, кто приходит к Нему с нуждами своими,
  4. О, призывающий в Рай тех рабов своих, кто возносит к Нему молитвы свои,
  5. О, исцеляющий тех, кто молит Его об исцелении,
  6. О, исполняющий желания тех, кто обращается к Нему с нуждами своими,
  7. О, обогащающий тех, кто просит Его о богатстве,
  8. О, осуществляющий дела тех, кто просит у Него о благоприятном исходе дел своих,
  9. О, дарующий силу тем, кто просит Его о силе,
  10. О, Владыка мой, друг и покровитель тех, кто ищет дружбы Его и покровительства,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Friend of he who has no friend,\nO Physician of he who has no physician,\nO Responder to he who has no responder,\nO Affectionate One to he whom none hold in affection,\nO Friend of he who has no friend,\nO Helper of he who has no help,\nO Guide of he who has no guide,\nO Associate of the forlorn,\nO Merciful One towards he on whom no one has mercy,\nO Companion of he who has no companion.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا كَافِيَ مَنِ اسْتَـكْفَاهُ ؛۝؛ يَا هَادِيَ مَنِ اسْتَهْدَاهُ ؛۝؛ يَا كَالِيَ مَنِ اسْتَكْلَاهُ ؛۝؛ يَا دَاعِيَ مَنِ اسْتَدْعَاهُ ؛۝؛ يَا شَافِيَ مَنِ اسْتَشْفَاهُ ؛۝؛ يَا قَاضِيَ مَنِ اسْتَقْضَاهُ ؛۝؛ يَا مُغْنِيَ مَنِ اسْتَغْنَاهُ ؛۝؛ يَا مُوفِيَ مَنِ اسْتَوْفَاهُ ؛۝؛ يَا مُقَوِّيَ مَنِ اسْتَقْوَاهُ ؛۝؛ يَا وَلِـيَّ مَنِ اسْتَوْلَاهُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":60,
    "latin": `Ve es\'elüke, bi-esmâike:
    1. Yâ Evvel,
    2. Yâ Âhir,
    3. Yâ Zâhir,
    4. Yâ Bâtın,
    5. Yâ Hâlık,
    6. Yâ Râzık,
    7. Yâ Sâdık,
    8. Yâ Sâbık,
    9. Yâ Sâik,
    10. Yâ Fâlık`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, ecirnâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey her şeyden önce olan Evvel,
    2. Ey her şeyden sonra olan Ahir,
    3. Ey varlığı apaçık görünen Zahir
    4. Ey her şeyin içyüzünden haberdar olan Batın,
    5. Ey her şeyi yoktan yaratan Halık,
    6. Ey her şeyi münasip bir sekilde rızıklandıran Razık,
    7. Ey her işi doğru olan ve sözünü yerine getiren Sadık,
    8. Ey varlığı her şeyden önce olan Sabık,
    9. Ey her şeyi mukadder hedefine sevk eden Saik,
    10. Ey tohum ve çekirdekleri yarıp sünbüllendiren Falık,`,
    "russian":`Обращаюсь к тебе и молю;
  1. О, Тот, который был прежде всего сущего и у которого нельзя отнять первенство в бытии,
  2. О, Тот, который будет существовать и после того, когда всё окончит свое существование,
  3. О, Тот, который превосходит всё сущее,
  4. О, Тот, который скрыт от познаний и мнений созданий своих, кого не увидит ни один глаз и не постигнет ни одно воображение,
  5. О, творец всего сущего,
  6. О, гарантирующий пищу всему сущему и дающий необходимую пищу всем созданиям своим,
  7. О, Тот, каждое слово и дело которого верно,
  8. О, Тот, который впереди всех,
  9. О, ведущей все создания свои к цели их бытия и к вершинам их совершенства,
  10. О, рассекающий семена и зерна и выводящий из них ростки; выводящий из ночи - день и из тьмы - свет,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Sufficer for those who seek sufficiency,\nO Guide for those who seek guidance,\nO Protector for those who seek protection,\nO Granter for concession to those who seek concession,\nO Healer for those who seek cure,\nO Just One for those who seek justice,\nO Bestower of wealth for those who seek wealth,\nO Fulfiller of promises for those who seek fulfillment,\nO Granter of strength for those who seek strength,\nO Aider of those who seek aid.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا أَوَّلُ ؛۝؛ يَا أٰخِرُ ؛۝؛ يَا ظَاهِرُ ؛۝؛ يَا بَاطِنُ ؛۝؛ يَا خَالِقُ ؛۝؛ يَا رَازِقُ ؛۝؛ يَا صَادِقُ ؛۝؛ يَا سَابِقُ ؛۝؛ يَا سَائِقُ ؛۝؛ يَا فَالِقُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":61,
    "latin": `1. Yâ men yukallibü\'l-leyle ve\'n-nehâr,
    2. Yâ men halâka\'z-zulümati ve\'n-nûr,
    3. Yâ men ce\'ale\'z-zılle ve\'l-harûr,
    4. Yâ men sehhara\'ş-şemse ve\'l-kamer,
    5. Yâ men halâka\'l-mevte ve\'l-hayât,
    6. Yâ men lehü\'l-halku ve\'l-emru,
    7. Yâ men lem yettahiz sâhibeten velâ veledâ,
    8. Yâ men lem yekün lehü şerîkün fi\'l-mülki,
    9. Yâ men lem yekün lehü veliyyün min\'e-zzülli,
    10. Yâ men lehü\'l-havlü ve\'l-kuvveh`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey gece ve gündüzü peş peşe değiştiren,
    2. Ey karanlıkları ve nuru yaratan,
    3. Ey gölgeleri ve harareti meydana getiren,
    4. Ey güneş ve aya boyun eğdiren,
    5. Ey ölümü ve hayatı yaratan,
    6. Ey yaratmak ve emretmek kendisine ait olan,
    7. Ey eş ve evlat edinmeyen,
    8. Ey mülkünde hiçbir şeriki olmayan,
    9. Ey zilletten münezzeh olduğu için dosta ihtiyacı olmayan,
    10. Ey havi kuvvet kendisine ait olan,`,
    "russian":`1. О, чередующий дни и ночи,
  2. О, сотворивший мрак и свет,
  3. О, Тот, кто создал жару и тень,
  4. О, властвующий над солнцем и луной и заставляющий их служить созданиям своим,
  5. О, сотворивший смерть и жизнь,
  6. О, единственный обладатель права творить и повелевать,
  7. О, Тот, кто не обзаводиться семьей,
  8. О, Тот, кто правит сам,
  9. О, Тот, кто не нуждается в каком-либо помощнике,
  10. О, Владыка мой, единственный и истинный обладатель силы и мощи,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah , verily I entreat You in Your name:\nO Creator, \nO Provider of sustenance,\nO Creator of speech, \nO Truthful,\nO Splitter, \nO Separator,\nO Breaker, \nO Combiner,\nO Foremost, \nO Most High.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ يُقَلِّبُ اللَّيْلَ وَالنَّهَارَ ؛۝؛ يَا مَنْ خَلَقَ الظُّلُمَاتِ وَالنُّورَ ؛۝؛ يَا مَنْ جَعَلَ الظِّـلَّ وَالْحَرُورَ ؛۝؛ يَا مَنْ سَـخَّـرَ الشَّمْسَ وَالْقَمَرَ ؛۝؛ يَا مَنْ خَلَقَ الْمَوْتَ وَالْحَـيَاةَ ؛۝؛ يَا مَنْ لَهُ الْخَلْقُ وَالْأَمْرُ ؛۝؛ يَا مَنْ لَمْ يَـتَّخِذْ صَاحِبَةً وَلَا وَلَدًا ؛۝؛ يَا مَنْ لَمْ يَكُنْ لَهُ شَرِيكٌ فِي الْمُلْكِ ؛۝؛ يَا مَنْ لَمْ يَكُنْ لَهُ وَلِيٌّ مِنَ الذُّلِّ ؛۝؛ يَا مَنْ لَهُ الْحَوْلُ وَالْقُوَّةُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":62,
    "latin": `1. Yâ men yâ\'lemü mürâde\'l-mürîdîn
    2. Yâ men yemlikü havâice\'s-sâilîn
    3. Yâ men yesme\'u enîne\'l-vâlihîn
    4. Yâ men yerâ bükâe\'l-hâifîn
    5. Yâ men ya\'lemü zamîra\'s-sâmitîn
    6. Yâ men yerâ nedeme\'n-nâdimîn
    7. Yâ men yakbelü \'uzre\'t-tâibîn
    8. Yâ men lâ yuslihu amele\'l-mufsidîn
    9. Yâ men lâ yüdî\'u ecre\'l-muhsinîn
    10. Yâ men lâ yeb\'udû \'an kulûbi\'l-\'ârifîn`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey kendisini arzulayanların muradını bilen,
    2. Ey kendisinden dilekte bulunanların ihtiyaç duyduklarına sahip olan,
    3. Ey üzüntüsünden kendinden geçenlerin inlemelerini işiten,
    4. Ey kendisinden korkarak ağlayanların ağlayışını gören,
    5. Ey suskunların içinden geçenleri bilen,
    6. Ey günahlarından pişmanlık duyanların nedametini gören,
    7. Ey tövbekarların özürünü kabul eden,
    8. Ey fesatçıların işini düzeltmeyen,
    9. Ey iyilik yapanların mükafatını zayi etmeyen,
    10. Ey kendisini tanıyanların kalplerinden uzaklaşmayan`,
    "russian":`1. О, ведающий о желаниях тех, кто желает,
  2. О, Тот, кто в силах исполнить желания просящих,
  3. О, Тот, кто слышит стоны тех, кто потерял голову от горя,
  4. О, Тот, кто видит и знает плачущих в страхе перед возмездием его,
  5. О, Тот, кто знает мысли и желания тех, кто молчит,
  6. О, Тот, кто видит и знает раскаивающихся в грехах своих,
  7. О, принимающие покаяния кающихся,
  8. О, Тот, кто не исправляет дела тех, кто вселяет смуту и раздор,
  9. О, Тот, кто не оставляет без награды тех, кто творит добро,
  10. О, Тот, который не отдален от сердец тех, кто знает Его,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, Who changes night and day,\nO He, Who has created darkness and light,\nO He, Who has bestowed shade and heat,\nO He, Who has brought into subjection the sun and the moon,\nO He, Who has ordained virtue and vice,\nO He, Who has created death and life,\nO He, Who has made the body and the soul,\nO He, Who has neither taken a wife nor begotten any child,\nO He, Who has no partner in His sovereignty,\nO He, Who has no friend among the disgraced.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ يَعْلَمُ مُرَادَ الْمُرِيدِينَ ؛۝؛ يَا مَنْ يَمْلِكُ حَوَائِجَ السَّائِلِينَ ؛۝؛ يَا مَنْ يَسْمَعُ أَنِـينَ الْوَالِهِينَ ؛۝؛ يَا مَنْ يَرَى بُكَاءَ الْخَائِفِينَ ؛۝؛ يَا مَنْ يَعْلَمُ ضَمِيرَ الصَّامِتِينَ ؛۝؛ يَا مَنْ يَرَى نَدَمَ النَّادِمِينَ ؛۝؛ يَا مَنْ يَقْبَلُ عُذْرَ التَّائِبِينَ ؛۝؛ يَا مَنْ لَا يُصْلِحُ عَمَلَ الْمُفْسِدِينَ ؛۝؛ يَا مَنْ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ ؛۝؛ يَا مَنْ لَا يَـبْعُدُ عَنْ قُلُوبِ الْعَارِفِينَ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":63,
    "latin": `1. Yâ dâime\'l-bekâi
    2. Yâ ğâfira\'l-hatâi
    3. Yâ sâmi\'a\'d-du\'âi
    4. Yâ vâsi\'a\'l-\'atâi
    5. Yâ râfi\'a\'s-semâi
    6. Yâ kâşife\'l-belâi
    7. Yâ \'azîme\'s-senâi
    8. Yâ kadîme\'s-senâi
    9. Yâ kesîre\'l-vefâi
    10. Yâ şerîfe\'l-cezâi`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey bekası daim olan,
    2. Ey hataları bağışlayan,
    3. Ey duaları işiten,
    4. Ey ihsanı geniş olan,
    5. Ey gökleri yükselten,
    6. Ey belaları defeden,
    7. Ey medh ü senası büyük olan,
    8. Ey varlığının parıltısı kadim olan,
    9. Ey vefası çok olan,
    10. Ey mükafatı şerefli olan,`,
    "russian":`1. О, Тот, чья вечность постоянна,
  2. О, Тот, кто прощает ошибки,
  3. О, Тот, кто слышит и благосклонно внемлет мольбам,
  4. О, Тот, чья щедрость обильна,
  5. О, Тот, кто поднимает небеса,
  6. О, Тот, кто устраняет беды,
  7. О, Тот, кому хвала бесконечна,
  8. О, Тот, чье величие изначально,
  9. О, Тот, чья верность не имеет границ,
  10. O, Тот, кто вознаграждает достойнейшим образом рабов своих,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, Who knows the desire of the desirous,\nO He, Who knows the conscience of the silent,\nO He, who hears the cries of the weak,\nO He, Who sees the lamentation of the frightened,\nO He, Who satisfies the needs of the petitioner,\nO He, Who accepts the excuse of the repentant,\nO He, Who does not correct the actions of the mischievous,\nO He, Who does not waste the good reward of the virtuous,\nO He, Who is not absent from the mind of the saint,\nO the most Magnanimous of all those who show magnanimity.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا دَائِمَ الْبَقَاءِ ؛۝؛ يَا غَافِرَ الْخَطَاءِ ؛۝؛ يَا سَامِعَ الدُّعَاءِ ؛۝؛ يَا وَاسِعَ الْعَطَاءِ ؛۝؛ يَا رَافِعَ السَّمَاءِ ؛۝؛ يَا كَاشِفَ الْبَلَاءِ ؛۝؛ يَا عَظِيمَ الثَّنَاءِ ؛۝؛ يَا قَدِيمَ السَّنَاءِ ؛۝؛ يَا كَثِيرَ الْوَفَاءِ ؛۝؛ يَا شَرِيفَ الْجَزَاءِ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":64,
    "latin": `Ve es\'elüke, bi-esmâike:
    1. Yâ Gaffâr
    2. Yâ Settâr
    3. Yâ Kahhâr
    4. Yâ Cebbâr
    5. Yâ Sabbâr
    6. Yâ Rezzâk
    7. Yâ Fettâh
    8. Yâ \'Allâm
    9. Yâ Vehhâb
    10. Yâ Tevvâb`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey çok affeden Gaffar,
    2. Ey bütün ayıpları örten Settar,
    3. Ey her şeye galip gelen ve bütün düşmanlarını kahreden Kahhar,
    4. Ey istediğini zorla yaptıran Cebbar,
    5. Ey çok sabreden ve kullarına sabır gücü veren Sabbar,
    6. Ey bütün rızka muhtaç olanları rızıklandıran Rezzak,
    7. Ey her şeyi hikmetle açan Fettah,
    8. Ey her şeyi çok iyi bilen Allam,
    9. Ey bol bol hediyeler veren Vehhab,
    10. Ey bütün tevbeleri kabul eden Tevvab,`,
    "russian":`Обращаюсь к тебе и молю;
  1. О, прощающий многократно,
  2. О, укрывающий рабов своих от изъянов, ошибок и грехов,
  3. О, силой и властью своей преобладающий, и ведущий создания свои, куда пожелает, независимо от их воли,
  4. О, заставляющий покориться исполнить всё, что Он пожелает,
  5. О, не спешащий наказывать тех, кто упорствует в неповиновении, сверх меры терпеливый и дающий терпение рабам своим,
  6. О, питающий щедро и многократно,
  7. О, Тот, кто с мудростью все раскрывает и справедливо правит,
  8. О, сведущий во всём,
  9. О, щедро и многократно дарящий рабам своим желаемое, даже если они не достойны того,
  10. О, принимающий покаяния рабов своих,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Eternal Living,\nO Hearer of prayers,\nO Liberal Bestower\nO Forgiver of sins,\nO Creator of the sky,\nO Best tester of trials,\nO Most Praiseworthy,\nO Eternally Great,\nO Greatest fulfiller of promises,\nO Best Recompenser.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا غَـفَّارُ ؛۝؛ يَا سَـتَّارُ ؛۝؛ يَا قَـهَّارُ ؛۝؛ يَا جَـبَّارُ ؛۝؛ يَا صَبَّارُ ؛۝؛ يَا رَزَّاقُ ؛۝؛ يَا فَـتَّاحُ ؛۝؛ يَا عَلَّامُ ؛۝؛ يَا وَهَّابُ ؛۝؛ يَا تَـوَّابُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":65,
    "latin": `1. Yâ men halekanî ve sevvânî
    2. Yâ men razekanî ve rabbânî
    3. Yâ men \'et\'amenî ve sekânî
    4. Yâ men karrabenî ve ednânî
    5. Yâ men \'asamenî ve kefânî
    6. Yâ men hafizanî ve kelânî
    7. Yâ men veffakanî ve hedânî
    8. Yâ men e\'azzenî ve ağnânî
    9. Yâ men emâtenî ve ahyânî
    10. Yâ men ânesenî ve âvânî`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey beni yaratıp azalarımı düzene koyan,
    2. Ey bana rızk veren ve terbiye eden,
    3. Ey beni yedirip içiren,
    4. Ey beni kendisine yaklaştırıp yakın kılan,
    5. Ey beni günah tehlikelerinden koruyup bana kafi gelen,
    6. Ey beni muhafaza edip ayıplarımı örten,
    7. Ey bana tevfik edip hidayet eden,
    8. Ey beni aziz kılıp ihtiyaçlarımı gideren,
    9. Ey beni öldürüp dirilten,
    10. Ey bana ünsiyet verip rızıklandıran,`,
    "russian":`1. О, Тот, кто создал меня, даровал мне лучший из образов и устроил органы мои и упорядочил их работу,
  2. О, Тот, кто дает мне пищу и воспитывает меня,
  3. О, Тот, кто кормит меня и поит,
  4. О, Тот, кто приближает меня к себе и делает близким,
  5. О, Тот, кто ограждает меня от всего вредного, и Тот, кого мне достаточно,
  6. О, Тот, кто дает мне то, в чём нуждаюсь я, и Тот, кто хранит меня,
  7. О, Тот, кто направляет меня на путь спасения и дарует мне успех,
  8. О, Тот, кто дарует мне величие и богатство,
  9. О, Тот, кто обрекает меня на смерть и возвращает меня к жизни,
  10. О, Владыка мой, обнимающий великодушием своим и вселяющий в душу мою покой и благодать,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I entreat You in Your name:\nO Best concealer of defects, \nO Best forgiver,\nO Most dominant, \nO Supreme,\nO Most patient, \nO Most virtuous,\nO Most exalted, \nO Best opener,\nO Blower of winds, \nO Bestower of Happiness.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ خَلَقَنِي وَسَوَّانِي ؛۝؛ يَا مَنْ رَزَقَنِي وَرَبَّانِي ؛۝؛ يَا مَنْ أَطْعَمَنِي وَسَقَانِي ؛۝؛ يَا مَنْ قَرَّبَنِي وَأَدْنَانِي ؛۝؛ يَا مَنْ عَصَمَنِي وَكَفَانِي ؛۝؛ يَا مَنْ حَفِظَنِي وَكَلَانِي ؛۝؛ يَا مَنْ وَفَّقَنِي وَهَدَانِي ؛۝؛ يَا مَنْ أَعَزَّنِي وأَغْنَانِي ؛۝؛ يَا مَنْ أَمَاتَنِي وأَحْيَانِي ؛۝؛ يَا مَنْ أٰنَسَنِي وَأٰوَانِي ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":66,
    "latin": `1. Yâ men yuhikku\'l-hakka bi-kelimâtih
    2. Yâ men lâ muakkıbe li-hükmih
    3. Yâ men lâ râdde li-kadâih
    4. Yâ men yehûlü beyne\'l-mer\'i ve kalbih
    5. Yâ men yakbelü\'t-tevbete \'an \'ibâdih
    6. Yâ men lâ tenfe\'u\'ş-şefâ\'atü illâ bi-iznih
    7. Yâ meni\'s-semâvâtü matviyyâtüm-bi-yemînih
    8. Yâ men hüve a\'lemü bi-men dalle \'an-sebîlih
    9. Yâ men yüsebbihü\'r-ra\'dü bi-hamdihî vel-melâiketü min-hîfetih
    10. Yâ men yürsilü\'r-riyâha büşram-beyne yedey rahmetih`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey kelimeleriyle hakkın hak olduğunu gösteren,
    2. Ey hükmünü geri bıraktıracak kimse olmayan,
    3. Ey kazasını geri çevirecek kimse olmayan,
    4. Ey kişiye kalbinden daha yakın olan,
    5. Ey kullarından tevbeyi kabul eden,
    6. Ey izni olmadan hiçbir şefaat fayda vermeyen,
    7. Ey bütün gökler kudretiyle dürülmüş olan,
    8. Ey yolundan sapanları en iyi bilen,
    9. Ey gök gürültüsünün hamdederek, meleklerin de korkusuyla kendisini tesbih ettiği,
    10. Ey rahmetinin önünde rüzgarları müjdeci gönderen,`,
    "russian":`1. О, Тот, кто осуществляет верное и правоту словом своим,
  2. О, Тот, чье решение никто не изменит и не отменит,
  3. О, Тот, кого никто не сможет остановить, если Он захочет что-либо сделать,
  4. О, Тот, кто проникает между человеком и сердцем его и не отвечает на пожелания человека, пока этого не потребует Его мудрость,
  5. О, Тот, кто принимает покаяние рабов своих,
  6. О, Тот, без позволения которого ничье заступничество не принесет пользы,
  7. О, Тот, чьей мощью небеса свернуты,
  8. О, Тот, кто лучше всех знает тех, что сошли с пути истинного,
  9. О, Тот, кого славит гром небесный, и кому ангелы в страхе и трепете возносят восхваления свои,
  10. О, Владыка мой, посылающий впереди ветер-глашатай с благой вестью о милости своей,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, Who created me and perfected me,\nO He, Who provided me with sustenance and nurtured me,\nO He, Who provided food for me and quenched my thirst,\nO He, Who brought me near Him and brought me most nigh,\nO He, Who protected me and kept me in safety,\nO He, Who saved and guarded me,\nO He, Who honoured me and enriched me,\nO He, Who helped and guided me,\nO He, Who befriended me and sheltered me,\nO He, Who causes me to die and revivifies me.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ يُحِقُّ الْحَقَّ بِكَلِمَاتِه۪ ؛۝؛ يَا مَنْ لَا مُعَقِّبَ لِحُكْمِه۪ ؛۝؛ يَا مَنْ لَا رَادَّ لِقَضَائِه۪ ؛۝؛ يَا مَنْ يَحُولُ بَـيْنَ الْمَرْءِ وَقَـلْبِـه۪ ؛۝؛ يَا مَنْ يَـقْـبَلُ التَّـوْبَـةَ عَنْ عِـبَادِه۪ ؛۝؛ يَا مَنْ لَا تَـنْـفَعُ الشَّفَاعَةُ إِلَّا بِـإِذْنِه۪ ؛۝؛ يَا مَنِ السَّمَاوَاتُ مَطْوِيَّاتٌ بِيَمِينِه۪ ؛۝؛ يَا مَنْ هُوَ أَعْلَمُ بِمَنْ ضَلَّ عَنْ سَبِيلِه۪ ؛۝؛ يَا مَنْ يُسَبِّحُ الرَّعْدُ بِحَمْدِه۪ وَالْمَلَائِكَةُ مِنْ خِيفَتِه۪ ؛۝؛ يَا مَنْ يُـرْسِلُ الرِّيَاحَ بُشْرًا بَـيْنَ يَـدَيْ رَحْمَتِه۪ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":67,
    "latin": `1. Yâ men ce\'ale\'l-arda mihâdâ
    2. Yâ men ce\'ale\'l-cibâle evtâdâ
    3. Yâ men ce\'ale\'ş-şemse sirâcâ
    4. Yâ men ce\'ale\'l-kamera nûrâ
    5. Yâ men ce\'ale\'l-leyle libâsâ
    6. Yâ men ce\'ale\'n-nehâra me\'âşâ
    7. Yâ men ce\'ale\'n-nevme sübâtâ
    8. Yâ men ce\'ale\'s-semâe binâen
    9. Yâ men ce\'ale\'l-eşyâe ezvâcâ
    10. Yâ men ce\'ale\'n-nâre mirsâdâ`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey yeri beşik yapan,
    2. Ey dağları direk yapan,
    3. Ey güneşi kandil kılan,
    4. Ey ayı nur kılan,
    5. Ey geceyi örtü yapan,
    6. Ey gündüzü maişet zamanı yapan,
    7. Ey uykuyu huzur ve sükun vasıtası kılan,
    8. Ey semayı bina kılan,
    9. Ey eşyayı çift çift yaratan,
    10. Ey ateşi gözcü kılan,`,
    "russian":`1. О, Тот, кто сделал землю колыбелью для созданий своих,
  2. О, Тот, кто сделал горы мачтами корабля земного,
  3. О, Тот, кто сделал солнце светилом во дворце мироздания,
  4. О, Тот, кто сделал луну лампадой, к небесам подвешенной,
  5. О, Тот, кто сделал ночь покрывалом,
  6. О, Тот, кто сделал день временем труда и заработка,
  7. О, Тот, кто сделал сон средством отдыха,
  8. О, Тот, кто воздвиг небеса, как здание,
  9. О, Тот, кто создал все твари попарно и разнополыми,
  10. О, Владыка мой, который сделал Ад надсмотрщиков над теми, кто войдет туда,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, Who maintains truth by His words,\nO He, Who accepts repentance from His slaves,\nO He, Who stands between man and his heart,\nO He, without Whose permission intercession has no benefit,\nO He, Who knows well who is astray from His path,\nO He, Whose order no one can reverse,\nO He, Whose judgement no one can revoke,\nO He, Whose order is obeyed by everything,\nO He, in Whose Right Hand the heavens shall be rolled up,\nO He, Who has made earth a cradle,`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ جَعَلَ الْأَرْضَ مِهَادًا ؛۝؛ يَا مَنْ جَعَلَ الْجِبَالَ أَوْتَادًا ؛۝؛ يَا مَنْ جَعَلَ الشَّمْسَ سِرَاجًا ؛۝؛ يَا مَنْ جَعَلَ الْقَمَرَ نُورًا ؛۝؛ يَا مَنْ جَعَلَ اللَّيْلَ لِبَاسًا ؛۝؛ يَا مَنْ جَعَلَ النَّهَارَ مَعَاشًا ؛۝؛ يَا مَنْ جَعَلَ النَّوْمَ سُبَاتًا ؛۝؛ يَا مَنْ جَعَلَ السَّمَاءَ بِنَاءً ؛۝؛ يَا مَنْ جَعَلَ الْأَشْيَاءَ أَزْوَاجًا ؛۝؛يَا مَنْ جَعَلَ النَّارَ مِرْصَادًا ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":68,
    "latin": `Ve es\'elüke, bi-esmâike:
    1. Yâ Şefî\'u
    2. Yâ Semî\'u
    3. Yâ Rafî\'u
    4. Yâ Menî\'u
    5. Yâ Bedî\'u
    6. Yâ Serî\'u
    7. Yâ Beşîru
    8. Yâ Nezîru
    9. Yâ Kadîru
    10. Yâ Muktediru`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey gerçek şefaat sahibi Şefi,
    2. Ey gizli açık her sesi işiten Semi,
    3. Ey istediğini yükselten Rafi,
    4. Ey istediğini engelleyen Meni,
    5. Ey kainatı en güzel bir şekilde yoktan yaratan Bedi,
    6. Ey hesabı en süratli bir şekilde gören Seri,
    7. Ey sevdiklerini Cennet ve çeşitli mükafatlarla müjdeleyen Besir,
    8. Ey kullarını itaate sevk etmek için azabıyla korkutan Nezir,
    9. Ey sonsuz kudret sahibi olan Kadir,
    10. Ey her şeye gücü yeten Muktedir.`,
    "russian":`Обращаюсь к тебе и молю;
  1. О, источник истинного заступничества,
  2. О, всеслышащий,
  3. О, возвышающий, кого пожелает,
  4. О, запрещающий по усмотрению своему,
  5. О, искусно сотворивший из ничего всё и в наилучшей форме,
  6. О, творящий быстро и решающий мгновенно,
  7. О, наилучшим образом оповещающий о благе рабов своих покорных,
  8. О, предостерегающий рабов своих от непокорности и ее последствий,
  9. О, обладатель могущества безграничного,
  10. О, всесильный,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, Who sends forth the winds bearing good tiding before His mercy.\nO He, Who has made the mountains pegs,\nO He, Who has made the sun a lamp,\nO He, Who has made the moon a light,\nO He, Who has made the night a covering,\nO He, Who has made the day for seeking livelihood,\nO He, Who has made sleep a rest,\nO He, Who has made the sky a vault,\nO He, Who has created things in pairs,\nO He, Who has made hell an ambush, barking for sinners.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا شَفِيعُ ؛۝؛ يَا سَمِيعُ ؛۝؛ يَا رَفِيعُ ؛۝؛ يَا مَنِيعُ ؛۝؛ يَا بَدِيعُ ؛۝؛ يَا سَرِيعُ ؛۝؛ يَا بَشِيرُ ؛۝؛ يَا نَذِيرُ ؛۝؛ يَا قَدِيرُ ؛۝؛ يَا مُقْتَدِرُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":69,
    "latin": `1. Yâ hayyu kable külli hayyin
    2. Yâ hayyu ba\'de külli hayyin
    3. Yâ hayyü\'l-lezî lâ yüşbihuhû şey\'ün
    4. Yâ hayyü\'l-lezî leyse ke-mislihî hayyun
    5. Yâ hayyü\'l-lezî lâ yüşârikühû hayyun
    6. Yâ hayyü\'l-lezî lâ yahtâcü ilâ hayyin
    7. Yâ hayyü\'l-lezî yümîtu külle hayyin
    8. Yâ hayyü\'l-lezî yerzüku külle hayyin
    9. Yâ hayyü\'l-lezî yühyi\'l-mevtâ
    10. Yâ hayyü\'l-lezî lâ yemût`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey bütün dirilerden önce var olan gerçek hayat sahibi,
    2. Ey bütün dirilerden sonra baki kalacak gerçek hayat sahibi,
    3. Ey hiçbir şeyin kendisine benzemediği gerçek hayat sahibi,
    4. Ey hiçbir dirinin misli gibi olmadığı gerçek hayat sahibi,
    5. Ey hiçbir dirinin kendisine ortak olmadığı gerçek hayat sahibi,
    6. Ey hiçbir diriye muhtaç olmayan gerçek hayat sahibi,
    7. Ey bütün dirileri öldüren gerçek hayat sahibi,
    8. Ey bütün dirileri rızıklandıran gerçek hayat sahibi,
    9. Ey ölüleri dirilten gerçek hayat sahibi,
    10. Ey hiç ölmeyecek olan gerçek hayat sahibi`,
    "russian":`1. О, Живой, который был прежде всякого живого,
  2. О, Живой, который будет и после смерти всего живого,
  3. О, Живой, которому нет подобных,
  4. О, Живой, которому нет равных и похожих,
  5. О, Живой, которому нет сотоварища,
  6. О, Живой, который не нуждается ни в каком живом,
  7. О, Живой, который умерщвляет всё живое,
  8. О, Живой, который дает пищу всему живому,
  9. О, Живой, который воскресит всех мертвых,
  10. О, Владыка мой, обладатель жизни, который никогда не умрёт,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I entreat You in Your name:\nO All-hearer, \nO Mediator,\nO Sublime, \nO Invincible,\nO Swift, \nO Originator,\nO Great, \nO Omnipotent,\nO Knowing, \nO Supporter.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا حَيُّ قَبْلَ كُلِّ حَيٍّ ؛۝؛ يَا حَيُّ بَعْدَ كُلِّ حَيٍّ ؛۝؛ يَا حَيُّ الَّذِي لَا يُـشْبِهُهُ شَيْءٌ ؛۝؛ يَا حَيُّ الَّذِي لَيْسَ كَمِثْلِه۪ حَيٌّ ؛۝؛ يَا حَيُّ الَّذِي لَا يُشَارِكُهُ حَـيٌّ ؛۝؛ يَا حَيُّ الَّذِي لَا يَحْتَاجُ إِلَى حَيٍّ ؛۝؛ يَا حَيُّ الَّذِي يُمِيتُ كُلَّ حَيٍّ ؛۝؛ يَا حَيُّ الَّذِي يَرْزُقُ كُلَّ حَيٍّ ؛۝؛ يَا حَيُّ الَّذِي يُحْيِـي الْمَوْتَى ؛۝؛ يَا حَيُّ الَّذِي لَا يَمُوتُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":70,
    "latin": `1. Yâ men lehû zikrun lâ yünsâ
    2. Yâ men lehû nûrun lâ yutfâ
    3. Yâ men lehû senâun lâ yuhsa
    4. Yâ men lehû nü\'ûtün lâ tüğayyer
    5. Yâ men lehû ni\'amün lâ tu\'ad
    6. Yâ men lehû mülkün lâ yezûl
    7. Yâ men lehû celâlün la yükeyyef
    8. Yâ men lehû kadâun lâ yüred
    9. Yâ men lehû sıfâtün la tübeddel
    10. Yâ men lehû kemâlün lâ yüdrek`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey unutulmayan ve unutturulmayan zikrin sahibi,
    2. Ey söndürülemeyen nurun sahibi,
    3. Ey hadd ü hesaba gelmeyen medh ü sena sahibi
    4. Ey hiçbir şekilde değiştirilemeyen vasıflar sahibi,
    5. Ey sayılamayan nimetler sahibi,
    6. Ey zeval bulmayan saltanat sahibi,
    7. Ey gerçek keyfiyeti anlaşılamayan celal sahibi,
    8. Ey reddedilemeyen hüküm sahibi,
    9. Ey tebdil edilemeyen sıfatlar sahibi,
    10. Ey tam idrak edilemeyen kemal sahibi.`,
    "russian":`1. О, Тот, кто незабываем,
  2. О, обладатель света неугасимого,
  3. О, Тот, кому возносят славу и восхваления,
  4. О, Тот, чьи свойства неизменны,
  5. О, Тот, чьи блага несчетны,
  6. О, Тот, чье солнце всевластия никогда не зайдет,
  7. О, Тот, суть величия которого непостижима,
  8. О, Тот, чье решение бесповоротно,
  9. О, Тот, чье качества незаменимы,
  10. О, Владыка мой, обладающий совершенством непостижимым,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Everliving, preceding every living being,\nO Everliving, succeeding every living being,\nO Everliving, like unto Whom there is none,\nO Everliving, Who has no living partner,\nO Everliving, Who is not dependent on any living being,\nO Everliving, Who causes every living being to die,\nO Everliving, Who provides sustenance to every living being,\nO Everliving, Who has not inherited life from any living being,\nO Everliving, Who quickens the dead,\nO Everliving, O Self-Subsistent, Slumber seizeth Him not, nor sleep.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ لَهُ ذِكْرٌ لَا يُنْسَى ؛۝؛ يَا مَنْ لَهُ نُورٌ لَا يُطْفَى ؛۝؛ يَا مَنْ لَهُ ثَنَاءٌ لَا يُحْصَى ؛۝؛ يَا مَنْ لَهُ نُعُوتٌ لَا تُغَيَّرُ ؛۝؛ يَا مَنْ لَهُ نِعَمٌ لَا تُعَدُّ ؛۝؛ يَا مَنْ لَهُ مُلْكٌ لَا يَزُولُ ؛۝؛ يَا مَنْ لَهُ جَلَالٌ لَا يُكَيَّفُ ؛۝؛ يَا مَنْ لَهُ قَضَاءٌ لَا يُرَدُّ ؛۝؛ يَا مَنْ لَهُ صِفَاتٌ لَا تُبَدَّلُ ؛۝؛ يَا مَنْ لَهُ كَمَالٌ لَا يُدْرَكُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":71,
    "latin": `1. Yâ rabbe\'l-\'âlemîn
    2. Yâ mâlike yevmi\'d-dîn
    3. Yâ men yühibbü\'s-sâbirîn
    4. Yâ men yühibbü\'-tevvâbîn
    5. Yâ men yühibbü\'l-mütetahhirîn
    6. Yâ men yühibbü\'l-muhsinîn
    7. Yâ men hüve hayru\'n-nâsırîn
    8. Yâ men hüve hayrü\'l-fâsılîn
    9. Yâ men hüve hayru\'ş-şâkirîn
    10. Yâ men hüve a\'lemü bi\'l-müfsidîn`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey alemlerin Rabbi,
    2. Ey amellerin karşılıklarının verildiği kıyamet gününün Sahibi,
    3. Ey sabredenleri seven,
    4. Ey tevbe edenleri seven,
    5. Ey maddi ve manevi kirlerden temizlenenleri seven,
    6. Ey Allah\'ı görür gibi ibadet edenleri ve iyilik yapanları seven,
    7. Ey yardım edenlerin en hayırlısı,
    8. Ey müşkil meseleleri halledip hükme bağlayanların en hayırlısı,
    9. Ey iyi mallara bol karşılık verenlerin en hayırlısı,
    10. Ey ifsat edenleri en iyi bilen,`,
    "russian":`1. О, Владыка всех миров,
  2. О, Властелин дня Судного,
  3. О, любящий терпеливых,
  4. О, любящий кающихся,
  5. О, любящий очищающих плоть и душу свою,
  6. О, любящий тех, кто служит Ему и поклоняется так, словно видит его,
  7. О, наилучший из всех помогающих,
  8. О, наилучший из всех, кто отделяет правду от неправды, и лучший из всех, кто судит,
  9. О, наилучший из всех, кто воздает щедро за дела малые,
  10. О, Владыка мой, лучше всех знающий смутьянов,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, Whose remembrance is not forgotten,\nO He, Whose light is not extinguished\nO He, Whose bounties are countless,\nO He, Whose grandeur is perpetual,\nO He, Whose praise does not admit of alteration,\nO He, Whose glory is not framed,\nO He, Whose perfection cannot be comprehended,\nO He, Whose order is not rejected,\nO He, Whose attributes do not change,\nO He, Whose attributes do not alter,`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا رَبَّ الْعَالَمِينَ ؛۝؛ يَا مَالِكَ يَوْمِ الدِّينِ ؛۝؛ يَا مَنْ يُحِبُّ الصَّابِرِينَ ؛۝؛ يَا مَنْ يُحِبُّ التَّوَّابِينَ ؛۝؛ يَا مَنْ يُحِبُّ الْمُتَطَهِّرِينَ ؛۝؛ يَا مَنْ يُحِبُّ الْمُحْسِنِينَ ؛۝؛ يَا مَنْ هُوَ خَيْرُ النَّاصِرِينَ ؛۝؛ يَا مَنْ هُوَ خَيْرُ الْفَاصِلِينَ ؛۝؛ يَا مَنْ هُوَ خَيْرُ الشَّاكِرِينَ ؛۝؛ يَا مَنْ هُوَ أَعْلَمُ بِالْمُفْسِدِينَ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":72,
    "latin": `Ve es\'elüke, bi-esmâike:
    1. Yâ Mübdi\'u
    2. Yâ Mu\'îd
    3. Yâ Hafîz
    4. Yâ Muhît
    5. Yâ Hamîd
    6. Yâ Mecîd
    7. Yâ Mukît
    8. Yâ Muğîs
    9. Yâ Mu\'izzu
    10. Yâ Müzillu`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey mahlukatı örneksiz ve yoktan yaratan Mübdi,
    2. Ey mahlukatı öldükten sonra yeniden dirilten Muid,
    3. Ey herseyi muhafaza eden Hafîz,
    4. Ey herseyi ilim ve kudretiyle kusatan Muhit,
    5. Ey hamd ve senaya en çok layık olan ve çok övülen Hamid,
    6. Ey azamet, şeref ve hakimiyeti sonsuz Mecid,
    7. Ey her türlü mahlukata münasip rızık veren Mukit,
    8. Ey darda kalan çaresizlerin imdadına koşan Muğis,
    9. Ey istediğine izzet veren ve şereflendiren Muiz,
    10. Ey istediğini zelil kılan Müzil,`,
    "russian":`1. О, творящий без примера и из ничего,
  2. О, воскрешающий к жизни создания свои после их смерти,
  3. О, всеоберегающий,
  4. О, окружающий все именами своими и качествами, и от которого ничто не скроется,
  5. О, более всех достойный похвалы и славословий, и более всех прославляемый,
  6. О, великий, славный и недосягаемый, чья щедрость не имеет себе равных,
  7. О, дарующий пищу всякому кто в ней нуждается,
  8. О, устремляющийся на помощь всем, кому трудно,
  9. О, обладатель почёта и величия,
  10. О, низвергающий всякого, кого пожелает,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
   "english": `O Lord of all the worlds,\nO Master of the Day of Judgement,\nO Ultimate Goal of the seeker,\nO Refuge of the seeker of shelter,\nO Overtaker of the fugitive,\nO He Who loves the patient,\nO He, Who loves the repentant,\nO He, Who loves the pure,\nO He, Who loves the virtuous\nO He, Who knows best the guided,`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا مُبْدِئُ ؛۝؛ يَا مُعِيدُ ؛۝؛ يَا حَفِيظُ ؛۝؛ يَا مُحِيطُ ؛۝؛ يَا حَمِيدُ ؛۝؛ يَا مَجِيدُ ؛۝؛ يَا مُقِيتُ ؛۝؛ يَا مُغِيثُ ؛۝؛ يَا مُعِزُّ ؛۝؛ يَا مُذِلُّ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":73,
    "latin": `1. Yâ men hüve ehadün bilâ dıddin
    2. Yâ men hüve ferdün bilâ niddin
    3. Yâ men hüve samadün bilâ \'aybin
    4. Yâ men hüve vitrün bilâ şef\'in
    5. Yâ men hüve rabbün bilâ vezirin
    6. Yâ men hüve ganiyyün bilâ fakrin
    7. Yâ men hüve sultânün bilâ \'azlin
    8. Yâ men hüve melîkün bilâ \'aczin
    9. Yâ men hüve mevcûdün bilâ mislin`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey zıddı olmayan Ehad,
    2. Ey dengi bulunmayan Ferd,
    3. Ey kusur ve ihtiyaçtan münezzeh olan Samed,
    4. Ey çifti bulunmayan Vitr,
    5. Ey veziri bulunmayan Rab,
    6. Ey fakirliği bulunmayan Gani,
    7. Ey azledilemeyen Sultan,
    8. Ey aczden münezzeh olan Melik,
    9. Ey benzeri olmayan Mevcud,`,
    "russian":`1. О, абсолютно единый, не имеющий себе противоположного,
  2. О, абсолютно единственный, не имеющий себе равного,
  3. О, бесконечно далекий от недостатков и от того, чтобы в чём-то нуждаться,
  4. О, единственный и не имеющий себе равных,
  5. О, Владыка, не нуждающийся в помощниках,
  6. О, истинно богатый, бесконечно далекий от бедности,
  7. О, Султан, которого нельзя свергнуть,
  8. О, Царь, бесконечно далекий от немощи и бессилия,
  9. О, Владыка мой, Сущий, не имеющий себе ни равных, не подобных,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I beseech You in Your name:\nO Affectionate, \nO Companion,\nO Protector, \nO Encompasser,\nO Provider of sustenance, \nO Aider of seekers of aid,\nO Honourer, \nO Humiliating,\nO Creator, \nO He Who causes to return.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ هُوَ أَحَدٌ بِلَا ضِدٍّ ؛۝؛ يَا مَنْ هُوَ فَرْدٌ بِلَا نِدٍّ ؛۝؛ يَا مَنْ هُوَ صَمَدٌ بِلَا عَيْبٍ ؛۝؛ يَا مَنْ هُوَ وِتْرٌ بِلَا شَفْعٍ ؛۝؛ يَا مَنْ هُوَ رَبٌّ بِلَا وَزِيرٍ ؛۝؛ يَا مَنْ هُوَ غَنِيٌّ بِلَا فَقْرٍ ؛۝؛ يَا مَنْ هُوَ سُلْطَانٌ بِلَا عَزْلٍ ؛۝؛ يَا مَنْ هُوَ مَلِيكٌ بِلَا عَجْزٍ ؛۝؛ يَا مَنْ هُوَ مَوْجُودٌ بِلَا مِثْلٍ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":74,
    "latin": `1. Yâ men hüve zikruhû şerefün li\'z-zâkirîn
    2. Yâ men hüve şükrühü feyzün li\'ş-şâkirîn
    3. Yâ men hüve hamdühü fahrün li\'l-hâmidin
    4. Yâ men hüve tâ\'atühü necâtün li\'l-mutî\'în
    5. Yâ men hüve bâbühü meftûhün li\'t-tâlibin
    6. Yâ men hüve sebîlühü vâdıhun li\'l-mü\'minîn
    7. Yâ men hüve âyâtühü bürhânün li\'n-nâzırîn
    8. Yâ men hüve kitabühü tezkiretün li\'l-mûkınîn
    9. Yâ men hüve \'afvuhû melceün li\'l-müznibîn
    10. Yâ men hüve rahmetühû karîbün li\'l-muhsinîn`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey zikri kendisine zikredenlere büyük şeref olan,
    2. Ey şükrü kendisine şükredenlere büyük kurtuluş olan,
    3. Ey hamdi kendisine övenlere büyük iftihar vesilesi olan,
    4. Ey taati, kendisine itaat edenlere necat olan,
    5. Ey kapısı kendisini arayanlara açık olan,
    6. Ey yolu müminlere zahir ve belli olan,
    7. Ey ayetleri bakanlar için kesin delil olan,
    8. Ey kitabı kuvvetli iman sahipleri için öğüt olan,
    9. Ey affı günahkarlar için sığınak olan,
    10. Ey rahmeti Muhsinler için yakin olan,`,
    "russian":`1. О, Тот, упоминание которого - честь и слава тому, кто упоминает Его,
  2. О, Тот, благодарение которому - спасение для тех, кто благодарит Его,
  3. О, Тот, хвала и благодарность которому - источник гордости для тех, кто возносит Ему хвалу и благодарение,
  4. О, Тот, в повиновении которому - спасение для повинующихся Ему,
  5. О, Тот, чьи врата милости и счастья открыты тем, кто пытается угодить Ему,
  6. О, Тот, чьи пути открыты и полны ясности для тех, кто уверовал в Него,
  7. О, Тот, чьи аяты и чудеса тверды и неоспоримы для тех, кто умеет извлечь из них урок,
  8. О, Тот, чья Книга - наставление тем, кто уверовал твердо и сознательно,
  9. О, Тот, чье прощение - прибежище для грешников,
  10. О, Владыка мой, чья милость близка тем, кто творит добро,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, Who is single and without opposite,\nO He, Who is Unique, O He, Who is Peerless,\nO He, Who is Independent and without any defect,\nO He, Who is without changing state,\nO He, Who judges without injustice,\nO He, Who is the Lord Cherisher,\nO He, Who is Mighty without disgrace,\nO He, Who is Independent without any need,\nO He, Who is the King without any censure,\nO He, Whose attributes are matchless.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ هُوَ ذِكْرُهُ شَرَفٌ لِلذَّاكِرِينَ ؛۝؛ يَا مَنْ هُوَ شُكْرُهُ فَوْزٌ للِشَّاكِرِينَ ؛۝؛ يَا مَنْ هُوَ حَمْدُهُ فَخْرٌ لِلْحَامِدِينَ ؛۝؛ يَا مَنْ هُوَ طَاعَتُهُ نَجَاةٌ لِلْمُطِيعِينَ ؛۝؛ يَا مَنْ هُوَ بَابُهُ مَفْتُوحٌ لِلطَّالِبِينَ ؛۝؛ يَا مَنْ هُوَ سَبِيلُهُ وَاضِحٌ لِلْمُؤْمِنِينَ ؛۝؛ يَا مَنْ هُوَ أٰيَاتُهُ بُرْهَانٌ لِلنَّاظِرِينَ ؛۝؛ يَا مَنْ هُوَ كِتَابُهُ تَذْكِرَةٌ لِلْمُوقِنِينَ ؛۝؛ يَا مَنْ هُوَ عَفْوُهُ مَلْجَأٌ لِلْمُذْنِبِينَ ؛۝؛ يَا مَنْ هُوَ رَحْمَتُهُ قَرِيبٌ لِلْمُحْسِنِينَ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":75,
    "latin": `1. Yâ men tebârekesmuh
    2. Yâ men te\'âlâ ceddüh
    3. Yâ men celle senâüh
    4. Yâ men lâilâhe ğayruh
    5. Yâ men tekaddeset esmâuh
    6. Yâ men yedûmu bekâüh
    7. Yâ meni\'l-\'azametü behâüh
    8. Yâ meni\'l-kibriyâu ridâuh
    9. Yâ men lâ yuhsâ âlâuh
    10. Yâ men lâ yu\'addu na\'mâuh`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey ismi yüce ve mübarek olan,
    2. Ey şan ve makamı yüksek olan,
    3. Ey sena ve övgüsü büyük olan,
    4. Ey kendisinden başka ilah olmayan,
    5. Ey isimleri mukaddes olan,
    6. Ey bekası devam eden,
    7. Ey azameti, baha ve kadri olan,
    8. Ey büyüklük perdesi olan,
    9. Ey gizli nimetleri grup grup bile sayılamayan,
    10. Ey ihsan ve nimeti hesap ve sayıya gelmeyen,`,
    "russian":`1. О, Тот, чье имя полно величия и благословенно,
  2. О, Тот, чья слава и положение не имеют себе равных по высоте своей,
  3. О, Тот, кому возносят хвалы и славословия блистательные,
  4. О, Тот, кроме которого нет Бога,
  5. О, Тот, чьи имена священны и лишены каких-либо недостатков и изъянов,
  6. О, Тот, чье бытие и вечность постоянны и неизменны,
  7. О, Тот, чья красота в величие Его,
  8. О, Тот, чье безграничное и бесконечное величие не дает постичь Его во всей полноте,
  9. О, Тот, чьи блага не имеют счета,
  10. О, Владыка мой, чьи блага безграничны и неистощимы,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, Whose remembrance is an honour for those who remember Him,\nO He, Whose gratitude is success for the grateful,\nO He, Whose praise is the pride of the praiser,\nO He, the obedience to Whom is salvation for the obedient\nO He, Whose door is open to the seeker,\nO He, the path leading to Whom is clear for the repentant,\nO He, Whose signs are proofs for the observers,\nO He, Whose Book is advice to the pious,\nO He, Whose provision, is love the obedient and disobedient alike,\nO He, Whose mercy is close to the virtuous.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ تَبَارَكَ اسْمُهُ  ؛۝؛ يَا مَنْ تَعَالَى جَدُّهُ ؛۝؛ يَا مَنْ جَلَّ ثَنَاؤُهُ ؛۝؛ يَا مَنْ لَا إِلٰهَ غَيْرُهُ ؛۝؛ يَا مَنْ تَقَدَّسَتْ أَسْمَاؤُهُ ؛۝؛ يَا مَنْ يَدُومُ بَقَاؤُهُ ؛۝؛ يَا مَنِ الْعَظَمَةُ بَهَاؤُهُ ؛۝؛ يَا مَنِ الْكِبْرِيَاءُ رِدَاؤُهُ ؛۝؛ يَا مَنْ لَا يُحْصَى أٰلَاؤُهُ ؛۝؛ يَا مَنْ لَا يُـعَـدُّ نَعْمَاؤُهُ ؛۝؛`,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":76,
    "latin": `Ve es\'elüke, bi-esmâike:
    1. Yâ Mu\'în
    2. Yâ Mübîn
    3. Yâ Emîn
    4. Yâ Mekîn
    5. Yâ Metîn
    6. Yâ Şedîd
    7. Yâ Şehîd
    8. Yâ Raşîd
    9. Yâ Hamîd
    10. Yâ Mecîd`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey kullarına yardım eden Muin,
    2. Ey açıklanması gereken herşeyi beyan eden Mübin,
    3. Ey kullarına emniyet ve huzur veren Emin,
    4. Ey saltanatı muhkem, nüfuz ve iktidar sahibi Mekin,
    5. Ey hiçbir sey hükmünü sarsmayan ve kendisine güvenilen Metin,
    6. Ey azap ve ikabı şiddetli olan Şedid,
    7. Ey kullarının her yaptığını gören Şehid,
    8. Ey bütün işlerini ezeli takdirine göre en güzel bir şekilde neticeye ulaştıran Raşid,
    9. Ey en çok övülen ve en çok övgüye layık olan Hamid,
    10. Ey sonsuz şeref sahibi Mecid,`,
    "russian":`Обращаюсь к тебе и молю;
  1. О, помогающий нуждающимся,
  2. О, выявляющий все правдивое и существующий вне всякого сомнения,
  3. О, Тот, чье слово и обещание надежно, и который дарует созданиям своим покой и безопасность,
  4. О, властный и всемогущий, чья власть тверда и могуча,
  5. О, Тот, чья сила и могущество прочнее прочного,
  6. О, Тот, чье наказание и возмездие суровы,
  7. О, свидетель, от взора которого ничто не скроется, и который ничего не забывает,
  8. О, ведущий создания свои по наилучшему пути и приводящий их к наилучшим результатам,
  9. О, единственный, кому принадлежат все славословия и похвалы,
  10. О, великий и славный, чьи щедрость и благородство не имеют равных,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, Whose name is glorious,\nO He, Whose honour is exalted,\nO He-there is no deity except Him,\nO He-great is His praise,\nO He, Whose names are sacred,\nO He, Whose existence is eternal,\nO He, Whose glory is His ornament,\nO He, Whose greatness is His covering,\nO He, Whose favours are countless,\nO He, Whose bounties cannot be enumerated.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا مُعِينُ ؛۝؛ يَا مُبِينُ ؛۝؛ يَا أَمِينُ ؛۝؛ يَا مَكِينُ ؛۝؛ يَا مَتِينُ ؛۝؛ يَا شَدِيدُ ؛۝؛ يَا شَهِيدُ ؛۝؛ يَا رَشِيدُ ؛۝؛ يَا حَمِيدُ ؛۝؛ يَا مَجِيدُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":77,
    "latin": `1. Yâ ze\'l-arşi\'l-mecîd
    2. Yâ ze\'l-kavli\'s-sedîd
    3. Yâ ze\'l-fadli\'r-raşîd
    4. Yâ ze\'l-batşi\'ş-şedîd
    5. Yâ ze\'l-va\'di\'l-va\'îd
    6. Yâ karîben ğayra ba\'îd
    7. Yâ men hüve\'l-veliyyü\'l-hamîd
    8. Yâ men hüve \'alâ külli şey\'in şehîd
    9. Yâ men hüve leyse bi-zallâmin li\'l-\'abîd
    10. Yâ men hüve \'akrabü ileyhi min-habli\'l-verîd`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey yüce arşın sahibi,
    2. Ey dos dogru sözün sahibi,
    3. Ey yerli yerince yapılan fazl-u kerem sahibi,
    4. Ey kıs kıvrak yakalayan şiddetli azap sahibi,
    5. Ey vaad ve tehdit sahibi,
    6. Ey uzak olmayan yakın,
    7. Ey en fazla övgüye layık olan dost,
    8. Ey herşeyi mühadesi altında tutan,
    9. Ey kullarına hiçbir şekilde zulmedici olmayan,
    10. Ey kuluna şah damarından daha yakın olan,`,
    "russian":`1. О, Владыка высочайшего Арша,
  2. О, хозяин слова наивернейшего,
  3. О, обладатель щедрости уместной и своевременной,
  4. О, обладатель возмездия скорого и неизбежного,
  5. О, Тот, кто обещает Рай и угрожает Адом,
  6. О, Тот, который близок, а не отдален,
  7. О, великий Друг, достойный хвалы и благодарения,
  8. О, свидетель всего, во всякое время, во всяком состоянии,
  9. О, Тот, кто справедлив к рабам своим,
  10. О, Владыка мой, который к рабу своему ближе сердца его,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I beseech You in Your name:\nO Helper, \nO Trustworthy,\nO Manifest, \nO Powerful,\nO Firm, \nO True Guide,\nO Praiseworthy, \nO Glorious,\nO Strong, \nO Witness`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا ذَا الْعَرْشِ الْمَجِيدَ ؛۝؛ يَا ذَا الْقَوْلِ السَّدِيدِ ؛۝؛ يَا ذَا الْفَضْلِ الرَّشِيدِ ؛۝؛ يَا ذَا الْبَطْشِ الشَّدِيدِ ؛۝؛ يَا ذَا الْوَعْدِ وَالْوَعِيدِ ؛۝؛ يَا قَرِيبًا غَيْرَ بَعِيدٍ ؛۝؛ يَا مَنْ هُوَ الْوَلِيُّ الْحَمِيدُ ؛۝؛ يَا مَنْ هُوَ عَلَى كُلِّ شَيْءٍ شَهِيدٌ ؛۝؛ يَا مَنْ هُوَ لَيْسَ بِظَلَّامٍ لِلْعَبِيدِ ؛۝؛ يَا مَنْ هُوَ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":78,
    "latin": `1. Yâ men lâ şerîke lehû velâ vezîr
    2. Yâ men lâ şebîhe lehû velâ nazîr
    3. Yâ hâlika\'ş-şemsi ve\'l-kameri\'l-münîr
    4. Yâ muğniye\'l-bâ\'isi\'l-fakîr
    5. Yâ râzika\'t-tıfli\'s-sağir
    6. Yâ râhime\'ş-şeyhi\'l-kebîr
    7. Yâ \'ismete\'l-hâifi\'l-müstecîr
    8. Yâ men hüve bi-ibâdihî basîr
    9. Yâ men hüve bi-havâyici\'l-\'ibâdi habîr
    10. Yâ men hüve \'alâ külli şey\'in kadîr`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey hiçbir ortak ve veziri olmayan,
    2. Ey hiçbir benzeri ve dengi olmayan,
    3. Ey güneş ve nurlu ayın yaratıcısı
    4. Ey şiddetli sıkıntıya düşmüş fakirleri zenginleştiren,
    5. Ey küçük yavrulara rızık veren,
    6. Ey düşkün ihtiyarlara merhamet eden,
    7. Ey korku için kurtuluş isteyenlerin sığınağı,
    8. Ey kullarının her halini gören,
    9. Ey kullarının ihtiyaçlarından haberdar olan,
    10. Ey herşeye gücü yeten,`,
    "russian":`1. О, Тот, который не нуждается в сотоварище и советнике,
  2. О, Тот, которому нет ни пары, ни подобного Ему, ни равного Ему,
  3. О, Тот, кто сотворил солнце и луну лучезарную,
  4. О, Тот, кто обогащает нуждающихся,
  5. О, Тот, кто кормит малых детей и детенышей,
  6. О, Тот, кто великодушен к старым и немощным,
  7. О, Тот, кто берёт под свою охрану тех, кто прибег к нему в страхе,
  8. О, Тот, кто видит рабов своих,
  9. О, Тот, кто ведает о нуждах рабов своих,
  10. О, Владыка мой, всемогущий,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Lord of the Glorious Throne,\nO He, Whose words are right.\nO Master of great deeds,\nO He, Whose punishment is severe\nO Master of promise and threat,\nO He, Who is guardian and the most praised one,\nO He, Who is the mighty doer of whatever He wills,\nO He, Who is near and not far,\nO He, Who is Witness to everything,\nO He, Who is not the least cruel to his slaves,`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ لَا شَرِيكَ لَهُ وَلَا وَزِيرَ ؛۝؛ يَا مَنْ لَا شَبِيهَ لَهُ وَلَا نَظِيرَ ؛۝؛ يَا خَالِقَ الشَّمْسِ وَالْقَمَرِ الْمُنِيرِ ؛۝؛ يَا مُغْنِيَ الْبَائِسِ الْفَقِيرِ ؛۝؛ يَا رَازِقَ الطِّفْلِ الصَّغِيرِ ؛۝؛ يَا رَاحِمَ الشَّيْخِ الْكَبِيرِ ؛۝؛ يَا عِصْمَةَ الْخَائِـفِ الْمُسْتَجِيرِ ؛۝؛ يَا مَنْ هُوَ بِعِبَادِه۪ بَصِيرٌ ؛۝؛ يَا مَنْ هُوَ بِحَوَائِجِ الْعِبَادِ خَبِيرٌ ؛۝؛ يَا مَنْ هُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":79,
    "latin": `1. Yâ ze\'l-cûdi ve\'n-ni\'am
    2. Yâ ze\'l-fadli ve\'l-kerem
    3. Yâ ze\'l-be\'si ve\'n-nikam
    4. Yâ hâlika\'l-levhi ve\'l-kalem
    5. Yâ bârie\'z-zerri ve\'n-nesem
    6. Yâ mülhime\'l-\'arabi ve\'l-\'acem
    7. Yâ kâşife\'d-durri ve\'l-elem
    8. Yâ \'âlime\'s-sırrı ve\'l-himem
    9. Yâ men lehü\'l-beytü ve\'l-haram
    10. Yâ men yahluku\'l-eşyâe mine\'l-\'adem`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey cömertlik ve nimetler sahibi,
    2. Ey fazl ve kerem sahibi,
    3. Ey şiddetli bela ve çetin azaplar sahibi,
    4. Ey Levh- i Mahfuz ve Kalemi yaratan,
    5. Ey zerreyi, hoş rüzgarları ve nefesleri yaratan,
    6. Ey bütün kullarına ilhamda bulunan,
    7. Ey zarar ve elemi gideren,
    8. Ey gizli sır ve kaygıları bilen,
    9. Ey Kabe-i Muazzama ve Harem-i Şerifin sahibi,
    10. Ey eşyayı yoktan yaratan,`,
    "russian":`1. О, обладатель щедрости и благ всяческих,
  2. О, обладатель достоинств неисчислимых и благородства,
  3. О, властелин бедствий тяжких и возмездия тяжелейшего,
  4. О, создавший Лавха (Скрижали хранимые) и Калама (Перо могущества),
  5. О, творец всего и вся, от самого малого - до самого крупного,
  6. О, вдохновляющий арабов и не арабов,
  7. О, искореняющий горести и печали,
  8. О, знающий тайны и помыслы,
  9. О, обладатель Байта (Каабы великой) и Харама (священного места),
  10. О, Владыка мой, творящий всё и вся из ничего,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, Who has no partner and no adviser,\nO He, Who has no equal and no match,\nO Creator of the sun and the bright moon,\nO Enricher of the poverty stricken,\nO Provider of sustenance to small children,\nO Merciful to the very aged ones,\nO Joiner of broken bones,\nO Protector of the frightened shelter seekers,\nO He , Who is All-Aware and All-Seeing of his slaves,\nO He, Who is Powerful over everything.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا ذَا الْجُودِ وَالنِّعَمِ ؛۝؛ يَا ذَا الْفَضْلِ وَالْكَرَمِ ؛۝؛ يَا ذَا الْبَأْسِ وَالنِّقَمِ ؛۝؛ يَا خَالِقَ اللَّوْحِ وَالْقَلَمِ ؛۝؛ يَا بَارِئَ الذَّرِّ وَالنَّسَمِ ؛۝؛ يَا مُلْهِمَ الْعَرَبِ وَالْعَجَمِ ؛۝؛ يَا كَاشِفَ الضُّرِّ وَالْأَلَمِ ؛۝؛ يَا عَالِمَ السِّرِّ وَالْهِمَمِ ؛۝؛ يَا مَنْ لَهُ الْبَيْتُ وَالْحَرَمُ ؛۝؛ يَا مَنْ يَخْلُقُ الْأَشْيَاءَ مِنَ الْعَدَمِ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":80,
    "latin": `Ve es\'elüke bi-esmâike:
    1. Yâ \'Âdil
    2. Yâ Kâbil
    3. Yâ Fâdil
    4. Yâ Fâ\'il
    5. Yâ Kâfil
    6. Yâ Câ\'il
    7. Yâ Kâmil
    8. Yâ Fâtır
    9. Yâ Tâlib
    10. Yâ Matlûb`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey gerçek adalet sahibi Adil,
    2. Ey rızası için yapılan işleri kabul eden Kabil,
    3. Ey herşeyden üstün ve yüce olan Fadil,
    4. Ey her işin hakiki yapıcısı olan Fail,
    5. Ey yaratıkların her işini üzerine alan Kafil,
    6. Ey herşeyi meydana getiren Cail,
    7. Ey her bakımdan eksiksiz olan Kamil,
    8. Ey mahlukatı yokluk karanlıklarından varlık nuruna çıkaran Fatir,
    9. Ey kulları için hayır murad eden ve onları dergahına çağıran Talib,
    10. Ey kullarının, rızasına ermek ve cemalini görmek için can attığı Matlub,`,
    "russian":`Обращаюсь к тебе и молю;
  1. О, обладатель справедливости истинной,
  2. О, принимающий мольбы и молитвы, просьбы и покаяния рабов своих,
  3. О, достойнейший и высочайший, дарующий щедро, будучи не обязанным это делать,
  4. О, творец и истинная причина всех деяний и явлений,
  5. О, гарантирующий всему и вся их жизнь и пропитание,
  6. О, образующий всё и вся и придающий им форму,
  7. О, Тот, в сущности и делах которого нет никакого изъяна,
  8. О, творящий создания своей из ничего,
  9. О, желающий только добра созданиям своим и призывающий их к любви своей,
  10. О, Тот, к которому стремится всё и вся, чтобы удостоиться милости Его, угодить Ему и узреть красоту лика Его,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Master of generosity and the Bestower of the bounties,\nO Gracious and Magnanimous,\nO Creator of the Tablet and the Pen,\nO Creator of ants and men,\nO Inflictor of punishment and retaliator,\nO Inspirer of Arabs and non-Arabs,\nO Expeller of pain and grief,\nO He, Who knows the secrets and the mysteries,\nO Lord of the Kaaba and the Sacred Precinct,\nO He, Who has created everything out of nothingness,`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا عَادِلُ ؛۝؛ يَا قَابِلُ ؛۝؛ يَا فَاضِلُ ؛۝؛ يَا فَاعِلُ ؛۝؛ يَا كَافِلُ ؛۝؛ يَا جَاعِلُ ؛۝؛ يَا كَامِلُ ؛۝؛ يَا فَاطِرُ ؛۝؛ يَا طَالِبُ ؛۝؛ يَا مَطْلُوبُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":81,
    "latin": `1. Yâ men en\'ame bi-havlih
    2. Yâ men ekrame bi-tavlih
    3. Yâ men \'âde bi-lûtfih
    4. Yâ men te\'azzeze bi-kudretih
    5. Yâ men kaddera bi-hikmetih
    6. Yâ men hakeme bi-tedbîrih
    7. Yâ men debbera bi-\'ilmih
    8. Yâ men tecâveze bi-hilmih
    9. Yâ men denâ fî-\'ulûvvih
    10. Yâ men \'alâ fî-dünüvvih`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey güç ve havliyle nimet veren,
    2. Ey geniş ve bol imkanlarıyla ikram eden,
    3. Ey tekrar tekrar lütufta bulunan,
    4. Ey kudretiyle her yerde izzetini gösteren,
    5. Ey herşeyi hikmetiyle ölçüp biçen,
    6. Ey tedbiriyle hükmeden,
    7. Ey ilmiyle herşeyi idare eden,
    8. Ey hilim ve yumuşaklığıyla kullarını cezalandırmaktan vazgeçen,
    9. Ey yüceliğiyle beraber kullarına yakın olan,
    10. Ey yakınlığında yüceliği tezahür eden,`,
    "russian":`1. О, безграничной силой своею осыпающий благами,
  2. О, бесконечной щедростью своей и богатством несчетным дарящий блага созданиям своим,
  3. О, проявляющий щедрость и милость многократно,
  4. О, неограниченным могуществом являющий величие свое неприкосновенное и недостижимое,
  5. О, с мудростью своей все проверяющий, отмеряющий и планирующий,
  6. О, с мудрой распорядительностью своей правящий,
  7. О, со знанием управляющий,
  8. О, безграничным милосердием своим и великодушием отказывающийся наказывать грешников,
  9. О, при величии своём бесконечном чрезвычайно близкий к созданиям своим,
  10. О, Владыка мой, при чрезвычайной близости своей бесконечно великий и возвышающийся надо всем,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I beseech You in Your name:\nO Doer, \nO Creator\nO Acceptor, \nO Perfect,\nO Gracious, \nO Separator\nO Just, \nO Dominant,\nO Seeker, \nO Generous`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ أَنْعَمَ بِحَوْلِه۪ ؛۝؛ يَا مَنْ أَكْرَمَ بِطَوْلِه۪ ؛۝؛ يَا مَنْ عَادَ بِلُطْفِه۪ ؛۝؛ يَا مَنْ تَعَزَّزَ بِقُدْرَتِه۪ ؛۝؛ يَا مَنْ قَدَّرَ بِحِكْمَتِه۪ ؛۝؛ يَا مَنْ حَكَمَ بِتَدْبِيرِه۪ ؛۝؛ يَا مَنْ دَبَّرَ بِعِلْمِه۪ ؛۝؛ يَا مَنْ تَجَاوَزَ بِحِلْمِه۪ ؛۝؛ يَا مَنْ دَنَا فِي عُلُوِّه۪ ؛۝؛ يَا مَنْ عَلَا فِي دُنُوِّه۪ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":82,
    "latin": `1. Yâ men yahluku mâ yeşâu
    2. Yâ men yef\'alu mâ yeşâu
    3. Yâ men yehdî men yeşâu
    4. Yâ men yudıllü men yeşâu
    5. Yâ men yağfiru limen yeşâu
    6. Yâ men yu\'azzibü men yeşâu
    7. Yâ men yetûbü \'alâ men yeşâu
    8. Yâ men yusavvirü fi\'l-erhâmi keyfe yeşâu
    9. Yâ men yezîdü fi\'l-halki mâ yeşâu
    10. Yâ men yahtessu bi-rahmetihî men yeşâu`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey dilediğini yaratan,
    2. Ey dilediğini yapan,
    3. Ey dilediğine hidayet eden,
    4. Ey dilediğini saptıran,
    5. Ey dilediğini bagışlayan,
    6. Ey dilediğine azap eden,
    7. Ey dilediğinin tevbesini kabul eden,
    8. Ey anne rahimlerindeki yavruları dilediği gibi şekillendiren,
    9. Ey yaratıklarında dilediği şeyi ziyade kılan,
    10. Ey rahmetini dilediğine tahsis eden,`,
    "russian":`1. О, создающий всё, что пожелает,
  2. О, творящий всё, что пожелает,
  3. О, спасающий душу, чью пожелает,
  4. О, сводящий с пути истинного, кого пожелает,
  5. О, прощающий, кого пожелает,
  6. О, наказывающий, кого захочет,
  7. О, принимающий покаяние у кого захочет,
  8. О, дающий по выбору своему форму детям, что в чреве матерей,
  9. О, умножающий способности и блага всякого, кого пожелает,
  10. О, Владыка мой, назначающий милость свою, кому пожелает,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, Who graciously bestows His bounties on us,\nO He, Who honours us with His charity,\nO He, Who rewards us out of His beneficing,\nO He, Who makes us respectable with His might,\nO He, Who predestines with His wisdom,\nO He, Who judges with His planning,\nO He, Who decrees with His knowledge,\nO He, Who is forbearing with His forbearance,\nO He, Who is near us in spite of His exaltation,\nO He, Who is exalted despite His nearness.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ يَخْلُقُ مَا يَشَاءُ ؛۝؛ يَا مَنْ يَفْعَلُ مَا يَشَاءُ ؛۝؛ يَا مَنْ يَهْدِي مَنْ يَشَاءُ ؛۝؛ يَا مَنْ يُضِلُّ مَنْ يَشَاءُ ؛۝؛ يَا مَنْ يَغْفِرُ لِمَنْ يَشَاءُ ؛۝؛ يَا مَنْ يُعَذِّبُ مَنْ يَشَاءُ ؛۝؛ يَا مَنْ يَتُوبُ عَلَى مَنْ يَشَاءُ ؛۝؛ يَا مَنْ يُصَوِّرُ فِي الْأَرْحَامِ كَيْفَ يَشَاءُ ؛۝؛ يَا مَنْ يَزِيدُ فِي الْخَلْقِ مَا يَشَاءُ ؛۝؛ يَا مَنْ يَخْـتَـصُّ بِرَحْمَتِه۪ مَنْ يَشَاءُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":83,
    "latin": `1. Yâ men lem yettehiz sâhibeten velâ veledâ
    2. Yâ men lâ yüşrikü fî-hükmihî ehadâ
    3. Yâ men ce\'ale li-külli şey\'in kadrâ
    4. Yâ men lem yezel rahîmâ
    5. Yâ men câ\'ile\'l-melâiketi rusülâ
    6. Yâ men ce\'ale fi\'s-semâi burûcâ
    7. Yâ men ce\'ale\'l-arda karârâ
    8. Yâ men ce\'ale mine\'l-mâi beşerâ
    9. Yâ men ehsâ külle şey\'in \'adedâ
    10. Yâ men ehâta bi-külli şey\'in \'ilmâ`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey hiçbir eş ve evlat edinmeyen,
    2. Ey kimseyi hükmüne ortak kılmayan,
    3. Ey herşeye bir plan ve miktar tayin eden,
    4. Ey şefkat ve merhameti zeval bulmayıp devam eden,
    5. Ey melekleri elçi kılan,
    6. Ey semada burçlar meydana getiren,
    7. Ey yeryüzünü kararlı ve barınmaya müsait kılan,
    8. Ey insanı bir damla sudan yaratan,
    9. Ey herşeyi sayarak hesabını yapan,
    10. Ey herşeyi ilmiyle kuşatan,`,
    "russian":`1. О, Тот, кто не обзаводится супругой и детьми,
  2. О, Тот, кто не берёт себе в сотоварищи никого во власти своей и правлении,
  3. О, Тот, кто определяет всему меру и планирует,
  4. О, Тот, чье милосердие вечно,
  5. О, Тот, кто сделал ангелов гонцами своими,
  6. О, Тот, кто воздвиг в небесах созвездия,
  7. О, Тот, что сделал Землю для созданий своих обителью спокойной и безопасной,
  8. О, Тот, кто создал человека из капли жидкости,
  9. О, Тот, кто знает числа всего и вся, во всех временах,
  10. О, Тот, кто окружил всё знанием своим,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, Who creates whatever He wishes,\nO He, Who does whatever He wishes,\nO He, Who guides whomever He wishes,\nO He, Who leaves astray whomever He wishes,\nO He, Who punishes whomever He wishes,\nO He, Who forgives whomever He wishes,\nO He, Who honors whomever He wishes,\nO He, Who dishonors whomever He wishes,\nO He, Who fashions in the womb as He wishes,\nO He, Who chooses for His mercy whoever He wishes.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ لَمْ يَـتَّخِذْ صَاحِبَةً وَلَا وَلَدًا ؛۝؛ يَا مَنْ لَا يُشْرِكُ فِي حُكْمِه۪ أَحَدًا ؛۝؛ يَا مَنْ جَعَلَ لِكُلِّ شَيْءٍ قَدْرًا ؛۝؛ يَا مَنْ لَمْ يَزَلْ رَحِيمًا ؛۝؛ يَا جَاعِلَ الْمَلَائِكَةِ رُسُلًا ؛۝؛ يَا مَنْ جَعَلَ فِي السَّمَاءِ بُـرُوجًا ؛۝؛ يَا مَنْ جَعَلَ الْأَرْضَ قَرَارًا ؛۝؛ يَا مَنْ جَعَلَ مِنَ الْمَاءِ بَشَرًا ؛۝؛ يَا مَنْ أَحْصَى كُلَّ شَيْءٍ عَدَدًا ؛۝؛ يَا مَنْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":84,
    "latin": `Ve es\'elüke, bi-esmâike:
    1. Yâ Ferdü
    2. Yâ Vitru
    3. Yâ Ehadu
    4. Yâ Samedu
    5. Yâ Emcedu
    6. Yâ E\'azzu
    7. Yâ Ecellu
    8. Yâ Ehakku
    9. Yâ Eberru
    10. Yâ Ebed`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey eşi ve benzeri olmayan Ferd,
    2. Ey zat, sıfat ve fiilerinde çifti olmayan Vitr,
    3. Ey herbir şeyde birliğini gösteren Ehad,
    4. Ey hiçbir şeye muhtaç olmayan ve herşeyin kendisine muhtaç olduğu Samed,
    5. Ey şan, şeref ve yüceliği en büyük olan Emced,
    6. Ey izzet ve galibiyeti mukayeseye gelmeyen Eazz,
    7. Ey sonsuz azamet ve celal sahibi Ecell,
    8. Ey bütün gerçeklerden daha gerçek ve ibadete en çok layık olan Ehakk,
    9. Ey herkesten fazla iyilik yapan Eberr,
    10. Ey varlığının sonu olmayan Ebed,`,
    "russian":`Обращаюсь к тебе и молю;
  1. О, не имеющий ни равного себе, ни подобного,
  2. О, Тот, которому нет ни пары, ни равного Ему, ни в сущности Его, ни в свойствах, ни в именах Его, ни в делах,
  3. О, Тот, которому нет ни сотоварища, ни подобного Ему,
  4. О, Тот, в котором всё и вся нуждается, а Он ни в чём и ни в ком не нуждается,
  5. О, Тот, чьи слава, щедрость и благородство не имеют себе равных,
  6. О, Тот, чей почет огромен,
  7. О, Тот, чье величие безгранично велико,
  8. О, Тот, чья самость, свойства, имена и деяния реальны, и который не растопчет ничьего права, и всякая истина - лишь отблеск бытия его,
  9. О, самый верный и преданный,
  10. О, Тот, чье бытие бесконечно,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, Who has neither wife nor child,\nO He, Who creates everything in a fixed measure,\nO He, Who has no partner in His rule,\nO He, Who appointed angels as messengers,\nO He, Who made constellations in the heaven,\nO He, Who made the earth a place of abode,\nO He, Who created man from water,\nO He, Who fixed a period for everything,\nO He, Who knows the number and quantity of everything.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا فَرْدُ ؛۝؛ يَا وِتْرُ ؛۝؛ يَا أَحَدُ ؛۝؛ يَا صَمَدُ ؛۝؛ يَا أَمْجَدُ ؛۝؛ يَا أَعَزُّ ؛۝؛ يَا أَجَلُّ ؛۝؛ يَا أَحَقُّ ؛۝؛ يَا أَبَرُّ ؛۝؛ يَا أَبَدُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":85,
    "latin": `1. Yâ ma\'rufe men \'arefeh
    2. Yâ ma\'bude men \'abedeh
    3. Yâ meşkûra men şekerah
    4. Yâ mezkûra men zekerah
    5. Yâ mahmûde men hamideh
    6. Yâ mevcûde men talebeh
    7. Yâ mevsûfe men vehhadeh
    8. Yâ mahbûbe men ehabbeh
    9. Yâ merğube men erâdeh
    10. Yâ maksûde men enâbe ileyh`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey kendisini tanımak isteyenlerin marufu,
    2. Ey kendisine ibadet edenlerin mabudu,
    3. Ey kendisine şükredenlerin meşkuru,
    4. Ey Kendisini zikredenlerin mezkuru,
    5. Ey Kendisini övenlerin mahmudu,
    6. Ey Kendisini arayanlar için mevcut olan,
    7. Ey Kendisini bir tanıyanların mevsufu,
    8. Ey Kendisini sevenlerin sevgilisi,
    9. Ey Kendisini arzulayanların merğubu,
    10. Ey dergâhına dönenlerin maksudu,`,
    "russian":`1. О, известный лишь тому, кто знает Его по-настоящему,
  2. О, божество, единственно которому поклоняются и служат,
  3. О, Тот, кому возносят благодарения,
  4. О, Тот, кого помнят и упоминают,
  5. О, Тот, кого славят и благодарят,
  6. О, Тот, который всегда рядом с теми, кто ищет Его,
  7. О, известный тем, кто знает единство Его и знает Его по лучшим качеством Его,
  8. О, являющийся возлюбленным для тех, кто возлюбил Его,
  9. О, предпочитаемый теми, кто предпочитает Его,
  10. О, Владыка мой, единственная мечта и цель тех, кто, покаявшись, возвращается к Нему,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I beseech You in Your name:\nO First, \nO Last,\nO Manifest, \nO Hidden,\nO Virtuous, \nO Right,\nO He, \nO Unique,\nO Independent, \nO Eternal`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَعْرُوفَ مَنْ عَرَفَهُ ؛۝؛ يَا مَعْبُودَ مَنْ عَـبَدَهُ ؛۝؛ يَا مَشْكُورَ مَنْ شَكَرَهُ ؛۝؛ يَا مَذْكُورَ مَنْ ذَكَـرَهُ ؛۝؛ يَا مَحْمُودَ مَنْ حَمِدَهُ ؛۝؛ يَا مَوْجُودَ مَنْ طَـلَـبَهُ ؛۝؛ يَا مَوْصُوفَ مَنْ وَحَّدَهُ ؛۝؛ يَا مَحْبُوبَ مَنْ أَحَـبَّهُ ؛۝؛ يَا مَرْغُوبَ مَنْ أَرَادَهُ ؛۝؛يَا مَقْصُودَ مَنْ أَنابَ إِلَيْهِ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":86,
    "latin": `1. Yâ men lâ mülke illâ mülkeh
    2. Yâ men lâ yuhsî\'l-\'ibâdü senâüh
    3. Yâ men lâ tasifu\'l-halâiku celâleh
    4. Yâ men lâ yüdrikü\'l-ebsâru kemâleh
    5. Yâ men lâ yeblüğu\'l-efhâmü sıfâteh
    6. Yâ men lâ yenâlü\'l-efkâru kibriyâeh
    7. Yâ men lâ yuhsinü\'l-insânü nü\'ûteh
    8. Yâ men lâ yeruddü\'l-\'ibâdü kadâeh
    9. Yâ men zahara fî-külli şey\'in âyâtüh`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey saltanatından başka gerçek saltanat olmayan,
    2. Ey kulların senasını saymakla bitiremediği,
    3. Ey mahlukatın celalini vasfedemediği,
    4. Ey gözlerin kemalini idrak ve ihata edemediği,
    5. Ey zekaların, sıfatlarına ulaşmaktan aciz kaldığı,
    6. Ey fikirlerin kibriyasının hakikatine ulaşamadığı,
    7. Ey insanlarin, sıfatlarını güzelce tavsif edemediği,
    8. Ey kulların, hükmünü geri çeviremediği,
    9. Ey herşeyde kendisini tanıtan deliller açıkça görülen,`,
    "russian":`1. О, Тот, кроме царства и власти которого нет никакой иной власти и никакого иного царства,
  2. О, Тот, кого рабы его не в силах восхвалить достойно,
  3. О, Тот, чью царственность и блистательное величие не могут описать создание Его,
  4. О, Тот, чье совершенство не может быть увидено во всей полноте,
  5. О, Тот, чьи святые и невыразимые качества, коим нет числа, не могут быть поняты и постигнуты умами,
  6. О, Тот, чье величие не может быть постигнуто ни одной из мыслей,
  7. О, Тот, чьи качества не могут быть оценены достойно во всём их великолепии,
  8. О, Тот, чьи решения неотвратимы для рабов Его,
  9. О, Владыка мой, доказательствами и знаками бытия и единства которого переполнено всё сущее,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Best recognized of all the recognized,\nO Best of all to be worshipped,\nO Greatest of those to whom thanks are due,\nO Most remembered of all who are remembered,\nO Most praiseworthy of all those who are praised,\nO Eternal Existent who is sought,\nO Highest of those who are praised,\nO Greatest of the purposes which are striven for,\nO Most liberal giver who is requested,\nO Noblest Friend who is known.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ لَا مُلْكَ إِلَّا مُلْكُهُ ؛۝؛ يَا مَنْ لَا يُحْصِي الْعِبَادُ ثَـنَاءَهُ ؛۝؛ يَا مَنْ لَا تَصِفُ الْخَلَائِقُ جَلَالَهُ ؛۝؛ يَا مَنْ لَا يُدْرِكُ الْأَبْصَارُ كَمَالَهُ ؛۝؛ يَا مَنْ لَا يَـبْلُغُ الْأَفْهَامُ صِفَاتِه۪ ؛۝؛ يَا مَنْ لَا يَـنَالُ الْأَفكَارُ كِبْرِيَاءَهُ ؛۝؛ يَا مَنْ لَا يُحْسِنُ الْإِنْسَانُ نُعُوتَهُ ؛۝؛ يَا مَنْ لَا يَرُدُّ الْعِبَادُ قَضَاءَهُ ؛۝؛ يَا مَنْ ظَهَرَ فِي كُلِّ شَيْءٍ أٰيَاتُهُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":87,
    "latin": `1. Yâ habîbe\'l-bekkâin
    2. Yâ senede\'l-mütevekkilîn
    3. Yâ hâdiye\'l-mudıllîn
    4. Yâ veliyye\'l-mü\'minîn
    5. Yâ enîse\'z-zâkirîn
    6. Yâ akdera\'l-kâdirîn
    7. Yâ ebsara\'n-nâzırîn
    8. Yâ a\'leme\'l-\'âlimîn
    9. Yâ mefze\'a\'l-melhûfîn
    10. Yâ ensara\'n-nâsırîn`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey günahları için ve kendisine olan aşk ve muhabbetten dolayı ağlayanlarn sevgilisi,
    2. Ey kendisine tevekkül edenlerin dayanağı,
    3. Ey hak yoldan sapanları hidayete erdiren,
    4. Ey mü\'minlerin dost ve sahibi,
    5. Ey kendisini zikredenlerin can yoldaşı,
    6. Ey bütün güçlülerden daha güçlü,
    7. Ey bütün bakanlardan daha iyi gören,
    8. Ey bütün ilim sahiplerinden daha alim,
    9. Ey kederli biçarelerin kaçıp sığındığı,
    10. Ey bütün yardim edenlerden daha çok yardım eden,`,
    "russian":`1. О, возлюбленный теми, кто не перестает плакать от счастья и любви к Нему,
  2. О, опора тех, кто уповает на Него,
  3. О, спасение тех, кто оставил путь истинный,
  4. О, хранитель и помощник уверовавших в Него,
  5. О, близкий друг и возлюбленный тех, кто не забывает Его в сердце своем и в устах своих,
  6. О, могущественнейший из всех могучих,
  7. О, видящий бесконечно лучше всех зрячих,
  8. О, знающий бесконечно лучше всех знающих,
  9. О, прибежище беспомощных, пребывающих в печали,
  10. О, Владыка мой, лучший из всех помощников и чья помощь превыше чьей-либо иной помощи,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Friend of those who weep,\nO Refuge of those who trust in Him,\nO Guide of the misguided,\nO Master of the faithful,\nO Friend of worshippers,\nO Shelter of the sorrowful,\nO Redeemer of the truthful,\nO Mightiest of all,\nO the most Knowledgeable of all beings.\nO Allah of the entire Creation,`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا حَبِيبَ الْبَكَّائِينَ ؛۝؛ يَا سَنَدَ الْمُتَوَكِّلِينَ ؛۝؛ يَا هَادِيَ الْمُضِلِّينَ ؛۝؛ يَا وَلِيَّ الْمُؤْمِنِينَ ؛۝؛ يَا أَنِيسَ الذَّاكِرِينَ ؛۝؛ يَا أَقْدَرَ الْقَادِرِينَ ؛۝؛ يَا أَبْصَرَ النَّاظِرِينَ ؛۝؛ يَا أَعْلَمَ الْعَالِمِينَ ؛۝؛ يَا مَفْزَعَ الْمَلْهُوفِينَ ؛۝؛ يَا أَنْصَرَ النَّاصِرِينَ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":88,
    "latin": `Ve es\'elüke, bi-esmâike:
    1. Yâ Mükrim
    2. Yâ Mu\'azzım
    3. Yâ Müna\'im
    4. Yâ Mu\'tî
    5. Yâ Muğnî
    6. Yâ Muhyî
    7. Yâ Mübdi
    8. Yâ Murdî
    9. Yâ Müncî
    10. Yâ Muhsin`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey gerçek ikram sahibi Mükrim,
    2. Ey dilediğini büyüten ve eserleriyle büyüklügünü gösteren Muazzim,
    3. Ey mahlukatını çesit çesit nimetlere gark eden Münaim,
    4. Ey mahlukatina lazım olan herşeyi veren Muti,
    5. Ey mahlukatının ihtiyacını giderip zengin kılan Mugni,
    6. Ey canlılara hayat veren Muhyi,
    7. Ey mahlukatı maddesiz ve örneksiz ilk defa yaratan Mübdi,
    8. Ey mahlukatını nimetleriyle hoşnut kılan Murzi,
    9. Ey mahlukatı her türlü tehlikeden kurtaran Münci,
    10. Ey bol bol iyilikte bulunan Muhsin,`,
    "russian":`Обращаюсь к тебе и молю;
  1. О, обладатель истиной щедрости,
  2. О, постоянно превозносимый созданиями своими,
  3. О, дарящий блага несчетные,
  4. О, дающий созданиям своим всё, в чём они нуждаются,
  5. О, удовлетворяющий потребности нуждающихся, обогащающий их настолько, что они ни в чём более не нуждаются,
  6. О, одушевляющий неодушевленных, дарующий жизнь мертвым, подлинный источник жизни, продлевающие ее по своему усмотрению,
  7. О, искусно творящий из ничего, не обращаясь к примерам,
  8. О, дарующий удовлетворение созданиям своим,
  9. О, спасающий создания свои от всякой опасности,
  10. О, обладатель бесконечной щедрости и благородства,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, Who is high and dominant,\nO He, Who is masterful and powerful,\nO He, Who is hidden and aware,\nO He, Who is worshipped and who appreciates,\nO He, Who is disobeyed and yet forgives,\nO He, Whom thought cannot encompass,\nO He, Whom eyes cannot see,\nO He, from Whom nothing is concealed,\nO Provider of Sustenance to mankind,\nO He, Who ordained all destinies.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا مُكْرِمُ ؛۝؛ يَا مُعَظِّمُ ؛۝؛ يَا مُنَعِّمُ ؛۝؛ يَا مُعْطِي ؛۝؛ يَا مُغْنِي ؛۝؛ يَا مُحْيِي ؛۝؛ يَا مُبْدِئُ ؛۝؛ يَا مُرْضِي ؛۝؛ يَا مُنْجِي ؛۝؛ يَا مُحْسِنُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":89,
    "latin": `1. Yâ kâfiye külli şey\'in
    2. Yâ kâimen \'alâ külli şey\'in
    3. Yâ men lâ yüşbihuhû şey\'un
    4. Yâ men lâ yezîdu fî-mülkihî şey\'un
    5. Yâ men lâ yenkusu min-hazâinihî şey\'un
    6. Yâ men lâ yahfâ \'aleyhi şey\'un
    7. Yâ men leyse kemislihî şey\'un
    8. Yâ men bi-yedihî mekâlîdü külli şey\'in
    9. Yâ vesiat rahmetühû külle şey\'in
    10. Yâ men yebkâ ve yenfâ külli şey\'in`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey her şeye kafi,
    2. Ey herşeyi idare eden kaim,
    3. Ey hiçbirşey kendisine benzemeyen,
    4. Ey mülkünde, iradesi dışında hiçbir şey artmayan,
    5. Ey hazinelerinden hiçbir sey eksik olmayan,
    6. Ey hiçbir şey Kendisine gizli bulunmayan,
    7. Ey misli ve benzeri hiçbir sey bulunmayan,
    8. Ey her şeyin anahtarı elinde olan,
    9. Ey rahmeti herşeyi kuşatan,
    10. Ey her şey fani olduğu halde kendisi baki kalan,`,
    "russian":`1. О, предостаточно всему и вся и во всякое время,
  2. О, Тот, что поддерживает жизнь во всём и вся,
  3. О, Тот, которому нет подобных,
  4. О, Тот, в чьих владениях никто и ничто не может приумножить что-либо,
  5. О, Тот, чьи сокровищницы не иссякают от щедрости его,
  6. О, Тот, от которого ничто не может скрыться,
  7. О, Тот, кому нет равных и подобных,
  8. О, Тот, в чьей деснице ключи от всего и вся,
  9. О, Тот, чья милость всеохватна,
  10. О, Владыка мой, который останется навечно, даже когда всё остальное погибнет,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I beseech You in Your name:\nO Protector, \nO Maker,\nO Creator, \nO All-generous,\nO Revealer, \nO Victorious,\nO Disclosers, \nO Guarantor,\nO Commander, \nO Prohibiter.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا كَافِيَ كُلِّ شَيْءٍ ؛۝؛ يَا قَائِمًا عَلَى كُلِّ شَيْءٍ ؛۝؛ يَا مَنْ لَا يُشْبِهُهُ شَيْءٌ ؛۝؛ يَا مَنْ لَا يَـزِيـدُ فِي مُلْكِه۪ شَيْءٌ ؛۝؛ يَا مَنْ لَا يَـنْـقُصُ مِنْ خَزَائِـنِه۪ شَيْءٌ ؛۝؛ يَا مَنْ لَا يَخْفَى عَلَيْهِ شَيْءٌ ؛۝؛ يَا مَنْ لَيْسَ كَمِثْلِه۪ شَيْءٌ ؛۝؛ يَا مَنْ بِيَدِه۪ مَقَالِيدُ كُلِّ شَيْءٍ ؛۝؛ يَا مَنْ وَسِعَتْ رَحْمَتُهُ كُلَّ شَيْءٍ ؛۝؛ يَا مَنْ يَـبْقَى وَيَـفْنَى كُلُّ شَيْءٍ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":90,
    "latin": `1. Yâ men lâ ya\'lemü\'l-ğaybe illâ hû
    2. Yâ men lâ yasrifü\'s-sûe illâ hû
    3. Yâ men lâ yüdebbirü\'l-emre illâ hû
    4. Yâ men lâ yağfiru\'z-zünûbe illâ hû
    5. Yâ men lâ yukallibü\'l-kalbe illâ hû
    6. Yâ men lâ yahlüku\'l-halka illâ hû
    7. Yâ men lâ yüt\'immü\'n-ni\'mete illâ hû
    8. Yâ men lâ yünezzilü\'l-ğayse illâ hû
    9. Yâ men lâ yuhyî\'l-mevtâ illa hû
    10. Yâ men lâ yuğnî \'ale\'t-tahkîki illa hû`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ entel emânül emân, neccinâ minen nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey gaybı Kendisinden başka kimse bilemeyen,
    2. Ey kullarından kötülüğü Kendisinden başka kimse defedemeyen,
    3. Ey işleri Kendisinden başka kimse idare edemeyen,
    4. Ey günahları Kendisinden başka kimse mağfiret edemeyen,
    5. Ey kalbleri Kendisinden başkası değiştiremeyen,
    6. Ey mahlukatı Kendisinden başkası yaratamayan,
    7. Ey nimetleri Kendisinden başkası tamamlayamayan,
    8. Ey yağmuru Kendisinden baskası yağdıramayan,
    9. Ey ölüleri Kendisinden başkası diriltemeyen,
    10. Ey kullarını Kendisinden başkası gerçek zengin kılamayan,`,
    "russian":`1. О, единственный, кто знает сокровенное,
  2. О, единственный, кто может искоренить зло,
  3. О, единственный, кто распоряжается делами,
  4. О, единственный, кто прощает грехи,
  5. О, единственный, кто властен над сердцами,
  6. О, единственный, кто создает и творит,
  7. О, единственный, кто восполняет блага,
  8. О, единственный, кто посылает дожди,
  9. О, единственный, кто воскрешает мертвых,
  10. О, единственный, от кого настоящая польза,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He, besides Whom no one knows the secrets,\nO He, besides Whom no one drives away calamities,\nO He, besides Whom no one creates,\nO He, besides Whom no one forgives sins,\nO He, besides Whom no one perfects the bounties,\nO He, besides Whom no one transforms hearts,\nO He, besides Whom no one manages affairs,\nO He, besides Whom no one holds the reins,\nO He, besides Whom no one increases sustenance,\nO He, besides Whom no one revives the dead.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ لَا يَعْلَمُ الْغَـيْبَ إِلَّا هُوَ ؛۝؛ يَا مَنْ لَا يَـصْرِفُ السُّوءَ إِلَّا هُوَ ؛۝؛ يَا مَنْ لَا يُدَبِّرُ الْأَمْرَ إِلَّا هُوَ ؛۝؛ يَا مَنْ لَا يَـغْـفِـرُ الذُّنُوبَ إِلَّا هُوَ ؛۝؛ يَا مَنْ لَا يُـقَلِّبُ الْقُلُوبَ إِلَّا هُوَ ؛۝؛ يَا مَنْ لَا يَخْلُقُ الْخَلْقَ إِلَّا هُوَ ؛۝؛ يَا مَنْ لَا يُـتِـمُّ النِّـعْمَةَ إِلَّا هُوَ ؛۝؛ يَا مَنْ لَا يُـنَـزِّلُ الْغَـيْثَ إِلَّا هُوَ ؛۝؛ يَا مَنْ لَا يُحْيِـي الْمَوْتَى إِلَّا هُوَ ؛۝؛ يَا مَنْ لَا يُغْنِي عَلَى التَّحْقِيقِ إِلَّا هُوَ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":91,
    "latin": `Ve es\'elüke, bi-esmâike:
    1. Yâ Kâşif
    2. Yâ Fâric
    3. Yâ Fâtih
    4. Yâ Nâsır
    5. Yâ Dâmin
    6. Yâ Âmir
    7. Yâ Nâhî
    8. Yâ Recâ
    9. Yâ Mürtecâ
    10. Yâ \'Azîme\'r-racâ`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey belaları kaldıran ve güzellikleri açığa çıkaran Kaşif,
    2. Ey keder ve tasadan kurtarıp ferahlatan Faric,
    3. Ey her mevcuda münasip bir suret açan ve fetihler müyesser kılan Fatih,
    4. Ey kullarına yardım eden Nasır,
    5. Ey yaratıkların her türlü ihtiyacını üzerine alan Zamin,
    6. Ey her şeye fıtratının gayesini emreden Amir,
    7. Ey her türlü kötülükten sakındıran Nahi,
    8. Ey kullarının ümidi olan Reca,
    9. Ey kullarının ümid beslediği Mürteca,
    10. Ey kendisine büyük ümitler beslenen Azimü\`r Reca,`,
    "russian":`Обращаюсь к тебе и молю;
  1. О, открывающий созданиям своим все тайны мира и загадки, предотвращающий беды, избавляющий от печали и горечи, прекращающий страдания,
  2. О, освобождающий души от печалей и грусти и вселяющий в них покой и радость,
  3. О, открывающий врата милости своей, дарующий победы и успехи, судящий справедливо,
  4. О, оказывающий помощь,
  5. О, гарантирующий удовлетворение всех запросов созданий своих,
  6. О, изъявляющий свою волю без всяких ограничений,
  7. О, воспрещающий всё, что пожелает,
  8. О, надежда всех рабов своих, и внушающий созданиям своим надежду,
  9. О, Тот, на кого надеются создания Его,
  10. О, величайший из источников надежд,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Helper of the weak,\nO Companion of the strangers,\nO Helper of [His] friends,\nO Overpowerer of the enemies,\nO Elevator of the sky,\nO Genial to the chosen ones,\nO Friend of the pious,\nO Treasure of the indigent,\nO Lord of the rich,\nO Most benign of all.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا كَاشِفُ ؛۝؛ يَا فَارِجُ ؛۝؛ يَا فَاتِحُ ؛۝؛ يَا نَاصِرُ ؛۝؛ يَا ضَامِنُ ؛۝؛ يَا أٰمِرُ ؛۝؛ يَا نَاهِي ؛۝؛ يَا رَجَا ؛۝؛ يَا مُرْتَجَا ؛۝؛ يَا عَظِيمَ الرَّجَا ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":92,
    "latin": `1. Yâ mu\'îne\'d-du\'afâi
    2. Yâ kenze\'l-fukarâi
    3. Yâ sâhibe\'l-gurabâi
    4. Yâ nâsira\'l-evliyâi
    5. Yâ kâhira\'l-a\'dâi
    6. Yâ râfi\'a\'s-semâi
    7. Yâ kâşife\'l-belâi
    8. Yâ enîse\'l-evliyâi
    9. Yâ habibe\'l-etkiyâi
    10. Yâ ilahe\'l-ağniyâi`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey zayıfların yardımcısı,
    2. Ey fakirlerin hazinesi,
    3. Ey gariplerin sahibi,
    4. Ey dostların yardımcısı,
    5. Ey düsmanların kahredicisi,
    6. Ey gökleri yükselten,
    7. Ey belaları kaldıran,
    8. Ey dostların can yoldaşı,
    9. Ey takva sahiplerinin sevgilisi,
    10. Ey zenginlerin ma\`budu,`,
    "russian":`1. О, помогающий слабым,
  2. О, источник богатства для бедных,
  3. О, защитник и покровитель одиноких и слабых,
  4. О, помощник рабов, слуг своих святых,
  5. О, сокрушающий врагов,
  6. О, возвышающий небеса,
  7. О, предотвращающий беды,
  8. О, Тот, кто приносит покой в сердца слуг своих святых,
  9. О, возлюбленный теми, кто убоялся Его,
  10. О, Владыка мой, истинный бог всех богатых и всех богатств,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He Who is self-sufficient from everything,\nO He Who is established over everything,\nO He, nothing is like unto Him,\nO He, nothing extends His Kingdom,\nO He from Whom nothing is hidden,\nO He, nothing decreases His treasure,\nO He, nothing is like unto Him,\nO He, Whose Knowledge encompasses everything,\nO He, Who is All-Aware,\nO He, Whose mercy extends to everything.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مُعِينَ الضُّعَفَاءِ ؛۝؛ يَا كَنْزَ الْفُقَرَاءِ ؛۝؛ يَا صَاحِبَ الْغُرَبَاءِ ؛۝؛ يَا نَاصِرَ الْأَوْلِيَاءِ ؛۝؛ يَا قَاهِرَ الْأَعْدَاءِ ؛۝؛ يَا رَافِعَ السَّمَاءِ ؛۝؛ يَا كَاشِفَ الْبَلَاءِ ؛۝؛ يَا أَنِيسَ الْأَوْلِيَاءِ ؛۝؛ يَا حَبِيبَ الْأَتْقِيَاءِ ؛۝؛ يَا إِلٰهَ الْأَغْنِيَاءِ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":93,
    "latin": `1. Yâ evvele külli şey\'in ve âhirah
    2. Yâ ilâhe külli şey\'in ve sâni\'ah
    3. Yâ râzıka külli şey\'in ve hâlikah
    4. Yâ fâtıra külle şey\'in ve melîkeh
    5. Yâ kâbida külli şey\'in ve bâsıtah
    6. Yâ mübdie külli şey\'in ve mu\'îdeh
    7. Yâ müsebbibe külli şey\'in ve mukaddirah
    8. Yâ mürebbiye külli şey\'in ve müdebbirah
    9. Yâ mükevvira külli şey\'in ve muhavvileh
    10. Yâ muhyiye külli şey\'in ve mümîteh`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey her şeyin evveli ve ahiri,
    2. Ey her şeyin ilahı ve sanatkarı,
    3. Ey her şeyin razıkı ve halıkı,
    4. Ey her şeyin yaratıcısı ve sultanı,
    5. Ey herşeyi daraltan ve genişleten,
    6. Ey herşeyi ilk defa yaratan ve öldükten sonra tekrar iade eden,
    7. Ey her şeye gerekli sebepleri yaratan ve bir ölçü takdir eden,
    8. Ey herşeyi terbiye ve idare eden,
    9. Ey herşeyi döndüren ve değiştiren,
    10. Ey herşeyi dirilten ve öldüren,`,
    "russian":`1. О, тот, который всегда был и всегда будет,
  2. О, бог и искусный творец всего и вся,
  3. О, кормилец и творец всего сущего,
  4. О, творец и владыка всего,
  5. О, утяжеляющий и облегчающий, сужающий и расширяющий,
  6. О, сотворивший всё в первый раз и возвращающий к началу всё и вся после смерти,
  7. О, сотворивший для всего причины необходимые и определивший меру всему,
  8. О, воспитывающий всё и вся и распоряжающийся всем,
  9. О, вращающий всё и вся и вводящий из состояния в состояние,
  10. О, Владыка мой, дарующий жизнь всему и вся, и отнимающий у кого пожелает,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I beseech You in Your name:\nO Generous, \nO Provider,\nO Bestower of bounties, \nO Bestower of gifts,\nO Enricher, \nO Giver of Shelter\nO Destroyer, \nO Quickener,\nO Satisfier, \nO Who grants salvation,`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا أَوَّلَ كُلِّ شَيْءٍ وَأٰخِرَهُ ؛۝؛ يَا إِلٰهَ كُلِّ شَيْءٍ وَصَانِعَهُ ؛۝؛ يَا رَازِقَ كُلِّ شَيْءٍ وَخَالِقَهُ ؛۝؛ يَا فَاطِرَ كُلِّ شَيْءٍ وَمَلِيكَهُ ؛۝؛ يَا قَابِضَ كُلِّ شَيْءٍ وَبَاسِطَهُ ؛۝؛ يَا مُبْدِئَ كُلِّ شَيْءٍ وَمُعِيدَهُ ؛۝؛ يَا مُسَبِّبَ كُلِّ شَيْءٍ وَمُقَدِّرَهُ ؛۝؛ يَا مُرَبِّيَ كُلِّ شَيْءٍ وَمُدَبِّرَهُ ؛۝؛ يَا مُكَوِّرَ كُلِّ شَيْءٍ وَمُحَوِّلَهُ ؛۝؛ يَا مُحْيِيَ كُلِّ شَيْءٍ وَمُمِيتَهُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":94,
    "latin": `1. Yâ hayra zâkirin ve mezkûr
    2. Yâ hayra şâkirin ve meşkûr
    3. Yâ hayra hâmidin ve mahmûd
    4. Yâ hayra şâhidin ve meşhûd
    5. Yâ hayra dâ\'in ve med\'uv
    6. Yâ hayra mücîbin ve mücâb
    7. Yâ hayra mûnisin ve enîs
    8. Yâ hayra sâhibin ve celîs
    9. Yâ hayra maksûdin ve matlûb
    10. Yâ hayra habîbin ve mahbûb`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey yad edenlerin ve yad edilenlerin en hayırlısı,
    2. Ey şükrü kabul edenlerin ve şükredilenlerin en hayırlısı,
    3. Ey övenlerin ve övülenlerin en hayırlısı,
    4. Ey görenlerin ve görülenlerin en hayırlısı,
    5. Ey çağıranların ve çagrılanların en hayırlısı,
    6. Ey cevap verenlerin ve cevap verilenlerin en hayırlısı,
    7. Ey ünsiyet verenlerin ve Kendisiyle ünsiyet edilenlerin en hayırlısı,
    8. Ey bütün dostların ve meclis arkadaslarının en hayırlısı,
    9. Ey bütün maksud ve matlubların en hayırlısı,
    10. Ey sevenlerin ve sevilenlerin en hayırlısı,`,
    "russian":`1. О, лучший из всех, кто помнит, и лучший из всех, кого вспоминают,
  2. О, лучший из всех, кто принимает благодарность, и лучший из всех, кого благодарят,
  3. О, лучший из всех, кто принимает хвалу и благодарность, и лучший из всех, кого хвалят и благодарят,
  4. О, лучший из всех, кто видит, и лучший из всех, кого можно увидеть,
  5. О, лучший из всех, кто призывает, и лучший из всех, кого призывают,
  6. О, лучший из отвечающих, и лучший из всех, на чей призыв можно ответить,
  7. О, лучший из всех, с кем не одиноко, и лучший из всех, кто не даёт почувствовать одиночество,
  8. О, лучший из всех друзей и товарищей,
  9. О, лучшая из всех целей и лучшее из всех желаний,
  10. О, Владыка мой, лучший из всех, кто любит, и лучший из всех, кого любят,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O First and the Last,\nO Lord of everything and its Master,\nO Lord Cherisher of everything and its Fashioner\nO Creator of everything and its Maker,\nO Controller of everything and its Extender,\nO Origin of everything and its Return,\nO Originator of everything and its estimator,\nO Creator of everything and its destroyer,\nO Quickener of everything and Maker of its death,\nO Author of everything and its inheritor.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا خَيْرَ ذَاكِرٍ وَمَذْكُورٍ ؛۝؛ يَا خَيْرَ شَاكِرٍ وَمَشْكُورٍ ؛۝؛ يَا خَيْرَ حَامِدٍ وَمَحْمُودٍ ؛۝؛ يَا خَيْرَ شاهِدٍ وَمَشْهُودٍ ؛۝؛ يَا خَيْرَ دَاعٍ وَمَدْعُوٍّ ؛۝؛ يَا خَيْرَ مُجِيبٍ وَمُجَابٍ ؛۝؛ يَا خَيْرَ مُونِسٍ وَأَنِيسٍ ؛۝؛ يَا خَيْرَ صَاحِبٍ وَجَلِيسٍ ؛۝؛ يَا خَيْرَ مَقْصُودٍ وَمَطْلُوبٍ ؛۝؛ يَا خَيْرَ حَبِيبٍ وَمَحْبُوبٍ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":95,
    "latin": `1. Yâ men hüve li-men de\'âhü mücîb
    2. Yâ men hüve li-men etâ\'ahû habîb
    3. Yâ men hüve li-men ehabbehû kârib
    4. Yâ men hüve bi-men erâdehû \'alim
    5. Yâ men hüve li-men recâhü kerîm
    6. Yâ men hüve bi-men asâhü halîm
    7. Yâ men hüve fî-hılmihî hakîm
    8. Yâ men hüve fî-hukmihî \'azîm
    9. Yâ men hüve fî-\'azametihî rahîm
    10. Yâ men hüve fî-ihsânihî kadîm`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey kendisini çağıranlara cevap veren,
    2. Ey kendisine itaat edenleri seven,
    3. Ey kendisini sevenlere yakın olan,
    4. Ey kendisini arzulayanları çok iyi bilen,
    5. Ey kendisine ümit besleyenlere iyilik eden,
    6. Ey kendisine isyan edenlere yumuşak davranıp hemen cezalandrmayan,
    7. Ey yumuşaklığında hikmetli davranan,
    8. Ey hükmünde büyük olan,
    9. Ey azametinde merhametli olan,
    10. Ey ihsanında kadim olan,`,
    "russian":`1. О, отвечающий всем, кто обращает к нему мольбы свои,
  2. О, любящий тех, кто повинуется воле Его,
  3. О, отвечающий близостью тем, кто любит Его,
  4. О, прекрасно знающий тех, кто жаждет Его,
  5. О, отвечающий щедростью тем, кто надеется на Него,
  6. О, проявляющий мягкость и не торопящийся наказать тех, кто не повинуется Ему,
  7. О, Тот, в чьей мягкости к грешникам заключена мудрость,
  8. О, Тот, кто велик в решениях и власти Своей,
  9. О, Тот, кто и велик, и милосерден,
  10. О, Владыка мой, извечно щедрый и всеблагой,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Best Rememberer and Remembered,\nO Best Appreciator and Appreciated,\nO Best Praiser and Praised,\nO Best Witness and Witnessed,\nO Best Inviter and Invited,\nO Best Responder and Responded,\nO Best Comforter and Counselor,\nO Best Friend and Companion,\nO Most Desired and Sought,\nO Most Affectionate and Loved.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ هُوَ لِمَنْ دَعَاهُ مُجِيبٌ ؛۝؛ يَا مَنْ هُوَ لِمَنْ أَطَاعَهُ حَبِيبٌ ؛۝؛ يَا مَنْ هُوَ لِمَنْ أَحَبَّهُ قَرِيبٌ ؛۝؛ يَا مَنْ هُوَ بِمَنْ أَرَادَهُ عَلِيمٌ ؛۝؛ يَا مَنْ هُوَ لِمَنْ رَجَاهُ كَرِيمٌ ؛۝؛ يَا مَنْ هُوَ بِمَنْ عَصَاهُ حَلِيمٌ ؛۝؛ يَا مَنْ هُوَ فِي حِلْمِه۪ حَكِيمٌ ؛۝؛ يَا مَنْ هُوَ فِي حُكْمِه۪ عَظِيمٌ ؛۝؛ يَا مَنْ هُوَ فِي عَظَمَتِه۪ رَحِيمٌ ؛۝؛ يَا مَنْ هُوَ فِي إِحْسَانِه۪ قَدِيمٌ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":96,
    "latin": `Ve es\'elüke, bi-esmâike:
    1. Yâ Müsebbib
    2. Yâ Mukarrib
    3. Yâ Mu\'akkıb
    4. Yâ Mukallıb
    5. Yâ Mukaddir
    6. Yâ Mürettib
    7. Yâ Murağğıb
    8. Yâ Müzekkir
    9. Yâ Mükevvin
    10. Yâ Mütekebbir`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey sebepleri takdir eden Müsebbib,
    2. İtaatkar kullarını kendisine yaklaştıran Mukarrib,
    3. Ey esyayı hikmetle peş peşe getiren Muakkib,
    4. Ey kullarının kalblerini halden hale değiştiren Mukallib,
    5. Ey her şeye bir miktar tespit eden Mukaddir.
    6. Ey herşeyi düzene koyan Mürettib,
    7. Ey kullarını iyiliğe teşvik eden Murağğıb.
    8. Ey kullarına öğüt veren Müzekkir,
    9. Ey mahlukatı var eden Mükevvin,
    10. Ey sonsuz büyüklük ve azamet sahibi Mütekebbir,`,
    "russian":`Обращаюсь к тебе и молю;
  1. О, творец всех причин,
  2. О, приближающий к себе всякого, кого пожелает,
  3. О, наблюдающий за всем, что происходит, и мудро складывающий в один ряд все события,
  4. О, вращающий сердца в длани своей, как пожелает, и сменяющий день и ночь, лето и зиму,
  5. О, определяющий меру всему и вся и творящий соразмерно и планомерно,
  6. О, создающий всё упорядоченно,
  7. О, побуждающие всё и вся к любви и повиновению себе и побуждающий создания свои к тому, что для них полезно,
  8. О, наставляющий рабов своих отдаляться от зла и приобщаться к добру,
  9. О, творец всего из ничего,
  10. О, всевышний обладатель величия совершенного,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, the Answerer to him who calls Him,\nO Friend of him who obeys Him,\nO He, Who is close to him who loves Him,\nO Protector of one who seeks protection,\nO Allah Who is Generous to him who is hopeful of Him,\nO Allah, Who is Forbearing to one who disobeys Him,\nO Allah, Who is Merciful in spite of His Grandeur,\nO Allah, Who is Great in His Wisdom,\nO Allah, Who is Eternal in his Benevolence,\nO Allah, Who is Aware of one who seeks Him.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا مُسَبِّبُ ؛۝؛ يَا مُقَرِّبُ ؛۝؛ يَا مُعَقِّبُ ؛۝؛ يَا مُقَلِّبُ ؛۝؛ يَا مُقَدِّرُ ؛۝؛ يَا مُرَتِّبُ ؛۝؛ يَا مُرَغِّبُ ؛۝؛ يَا مُذَكِّرُ ؛۝؛ يَا مُكَوِّنُ ؛۝؛ يَا مُتَـكَـبِّـرُ ؛۝؛` ,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":97,
    "latin": `1. Yâ men lâ yüşgiluhû sem\'un an sem\'ın
    2. Yâ men lâ yemne\'uhû fi\'lün \'an fi\'lin
    3. Yâ men lâ yülhîhi kavlün \'an kavlin
    4. Yâ men lâ yüğallituhû suâlün \'an suâlin
    5. Yâ men lâ yübrimuhû ilhâhu\'l-mülihhîn
    6. Yâ men şeraha bi\'l-İslâmi sudûra\'l-mü\'minîn
    7. Yâ men etâbe bi-zikrihî kulûbe\'l-muhbitîn
    8. Yâ men lâ yağîbu \'an kulûbi\'l-müştâkin
    9. Yâ men hüve ğayetü murâdi\'l-mürîdîn
    10. Yâ men lâ yahfâ \'aleyhi şey\'ün fi\'l-\'âlemîn`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey bir işitme, kendisini diğer bir işitmeden ali koymayan,
    2. Ey kendisi için bir iş diğer bir işe mani olmayan,
    3. Ey bir söz, kendisini diğer bir sözden oyalamayan,
    4. Ey kullarının bir isteği diğerine cevap vermekte kendisini karışıklığa sevk etmeyen,
    5. Ey ısrarla istekte bulunanların ısrarı kendisini usandırmayan,
    6. Ey müminlerin kalplerini İslamla genişleten,
    7. Ey zikriyle mütevazi ve huşu sahiplerinin kalplerini hoş eden,
    8. Ey kendisine iştiyak duyanların kalblerinden kaybolmayan,
    9. Ey kendisini arzulayanların son arzusu,
    10. Ey alemde hiçbir şey kendisine gizli olmayan,`,
    "russian":`1. О, слышащий все голоса и звуки, не путая их,
  2. О, Тот, кому одно дело не мешает заниматься другими делами,
  3. О, Тот, который одновременно говорит со всем и вся в отдельности,
  4. О, Тот, который одновременно отвечает на все молитвы, не путай их друг с другом,
  5. О, Тот, кого не утомляет настойчивость просящих,
  6. О, Тот, который расширяет сердца правоверных, наполняя их Исламом,
  7. О, Тот, кто очищает сердца рабов своих, пребывающих в скромности и благоговении, когда они упоминают именно Его,
  8. О, Тот, кто никогда не покидает сердца тех, кто испытывает к нему любовь, полную воодушевления,
  9. О, высочайшее из желаний тех, кто ищет Его,
  10. О, Владыка мой, которому нет ничего таинственного во всей вселенной,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Allah, verily I entreat You in Your name:\nO Primal Cause, \nO Creator of desire,\nO Changer, \nO Inflictor, \nO Organizer,\nO Awful, \nO Saver, \nO Reminder,\nO Subjector, \nO Displacer.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ لَا يُشْغِلُهُ سَمْعٌ عَنْ سَمْعٍ ؛۝؛ يَا مَنْ لَا يَـمْـنَـعُهُ فِعْلٌ عَنْ فِعْلٍ ؛۝؛ يَا مَنْ لَا يُلْهِيهِ قَـوْلٌ عَنْ قَـوْلٍ ؛۝؛ يَا مَنْ لَا يُغَلِّطُهُ سُؤَالٌ عَنْ سُؤَالٍ ؛۝؛ يَا مَنْ لَا يُـبْرِمُهُ إِلْحَاحُ الْمُلِحِّينَ ؛۝؛ يَا مَنْ شَرَحَ بِالْإِسْلَامِ صُدُورَ الْمُؤْمِنِينَ ؛۝؛ يَا مَنْ أَطَابَ بِذِكْرِه۪ قُلُوبَ الْمُخْبِـتِينَ ؛۝؛ يَا مَنْ لَا يَغِيبُ عَنْ قُلُوبِ الْمُشْتَاقِينَ ؛۝؛ يَا مَنْ هُوَ غَايَـةُ مُرَادِ الْمُرِيدِينَ ؛۝؛ يَا مَنْ لَا يَخْفَى عَلَيْهِ شَيْءٌ فِي الْعَالَمِينَ ؛۝
  ؛`,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":98,
    "latin": `1. Yâ men hüve ilmühû sâbık
    2. Yâ men hüve va\'dühû sâdık
    3. Yâ men hüve lütfuhû zâhir
    4. Yâ men hüve emruhû gâlib
    5. Yâ men hüve kitâbuhû muhkem
    6. Yâ men hüve kadâuhû kâin
    7. Yâ men hüve kur\'ânühû mecîd
    8. Yâ men hüve mülkühû kadîm
    9. Yâ men hüve fazluhû mukîm
    10. Yâ men hüve \'arşuhû \'azîm`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey herşeyi var olmadan bilen,
    2. Ey vaadi doğru olan,
    3. Ey lütfu açık olan,
    4. Ey emri üstün ve galip olan,
    5. Ey kitabı sağlam olan,
    6. Ey kaza ve hükmü var olan,
    7. Ey Kur\`anı yüce olan,
    8. Ey saltanatı kadim olan,
    9. Ey fazl ü keremi daim olan,
    10. Ey Arşı büyük olan,`,
    "russian":`1. О, Тот, чье знание извечно,
  2. О, Тот, чье обещание будет исполнено,
  3. О, Тот, чья щедрость и благородство зримы повсюду,
  4. О, Тот, чья воля и повеления имеют власть надо всем,
  5. О, Тот, чья Книга не может быть подвержена изменениям,
  6. О, Тот, чья воля и чьи решения осуществляется без помех,
  7. О, Тот, чей Коран велик и блистателен,
  8. О, Тот, чья власть и владения вечны,
  9. О, Тот, чья щедрость и благородство непоколебимы,
  10. О, Владыка мой, чей высокий Арш неимоверно велик,`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He Whose Knowledge is eternal,\nO He Whose Promise is true,\nO He Whose Benignity is manifest,\nO He Whose Command is overruling,\nO He Whose Book is clear and final,\nO He Whose Judgement is inevitable,\nO He Whose Qur'an is glorious,\nO He Whose Rule is eternal,\nO He Whose Favour is common to all,\nO He Whose Throne is great.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا مَنْ هُوَ عِلْمُهُ سَابِقٌ ؛۝؛ يَا مَنْ هُوَ وَعْدُهُ صَادِقٌ ؛۝؛ يَا مَنْ هُوَ لُطْفُهُ ظَاهِرٌ ؛۝؛ يَا مَنْ هُوَ أَمْرُهُ غَالِبٌ ؛۝؛ يَا مَنْ هُوَ كِتَابُهُ مُحْكَمٌ ؛۝؛ يَا مَنْ هُوَ قَضَاؤُهُ كَائِنٌ ؛۝؛ يَا مَنْ هُوَ قُرْأٰنُهُ مَجِيدٌ ؛۝؛ يَا مَنْ هُوَ مُلْكُهُ قَدِيمٌ ؛۝؛ يَا مَنْ هُوَ فَضْلُهُ مُقِيمٌ ؛۝؛ يَا مَنْ هُوَ عَرْشُهُ عَظِيمٌ ؛۝`,
  "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":99,
    "latin": `1. Yâ rabbe\'l-erbâb
    2. Yâ müfettiha\'l-ebvâb
    3. Yâ müsebbibe\'l-esbâb
    4. Yâ mu\'tıye\'s-sevâb
    5. Yâ mülhime\'s-savâb
    6. Yâ münşie\'s-sehâb
    7. Yâ şedîde\'l-\'ikâb
    8. Yâ serî\'a\'l-hisâb
    9. Yâ men lehü\'l-iyâb
    10. Yâ ğafûru yâ tevvâb`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey Rablık iddia edenlerin ve bütün terbiyecilerin Rabbi,
    2. Ey bütün kapıları açan,
    3. Ey sebepler tasarrufunda bulunan,
    4. Ey sevapları veren,
    5. Ey doğruları ilham eden,
    6. Ey bulutları yoktan yaratan,
    7. Ey azab ve ikabı şiddetli olan,
    8. Ey hesabı sür\'atli gören,
    9. Ey dönüş kendisine olan,
    10. Ey bağışlayan ve tövbeleri kabul eden,`,
    "russian":`1. О, Господин всех господ,
  2. О, открывающий все двери,
  3. О, творец и причина всех причин,
  4. О, дарующий все блага и награды,
  5. О, внушающий верное и правдивое,
  6. О, творящий облака из ничего,
  7. О, Тот, чье возмездие беспощадно,
  8. О, Тот, кто судит без промедления,
  9. О, Тот, к кому вернётся всё и вся,
  10. О, Владыка мой, прощающий грехи и принимающий покаяния, `,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O He-listening to one individual does not prevent Him from listening to others simultaneously,\nO He-doing one thing does not prevent Him from doing other things simultaneously,\nO He-the speech of one person does not make Him needless of the simultaneous speech of others,\nO He-one request does not make Him forgetful of other requests,\nO He-the sight of one thing does not prevent him from seeing other things simultaneously,\nO He-the plaintive cries of those who weep and lament do not bother Him,\nO He Who is the ultimate Aim of the efforts of saints,\nO He Who is the Goal of Gnostics,\nO He Who is the Goal of seekers,\nO He from Whom not a single particle in the worlds is hidden.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`يَا رَبَّ الْأَرْبَابِ ؛۝؛ يَا مُفَتِّحَ الْأَبْوَابِ ؛۝؛ يَا مُسَبِّبَ الْأَسْبَابِ ؛۝؛ يَا مُعْطِيَ الثَّوَابِ ؛۝؛ يَا مُلْهِمَ الصَّوَابِ ؛۝؛ يَا مُنْشِئَ السَّحَابِ ؛۝؛ يَا شَدِيدَ الْعِقَابِ ؛۝؛ يَا سَرِيعَ الْحِسَابِ ؛۝؛ يَا مَنْ لَهُ الْإِيَابُ ؛۝؛ يَا غَفُورُ يَا تَوَّابُ ؛۝؛
  `,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":100,
    "latin": `Ve es\'elüke, bi-esmâike:
    1. Yâ Rabbenâ
    2. Yâ İlâhenâ
    3. Yâ Seyyidenâ
    4. Yâ Mevlânâ
    5. Yâ Nâsıranâ
    6. Yâ Hâfızanâ
    7. Yâ Kâdiranâ
    8. Yâ Râzıkanâ
    9. Yâ Delîlenâ
    10. Yâ Muğisenâ`,
    "latin_dua": `Sübhâneke yâ lâ ilâhe illâ ente\'l-emânü\'l-emânü hallisnâ mine\'n-nâr.`,
    "turkish_dua": `Sen bütün kusur ve noksan sıfatlardan münezzehsin, Senden baska İlah yok ki bize imdat etsin. Emân ver bize, emân diliyoruz. Bizi Cehennemden kurtar.`,
    "turkish": `1. Ey Rabbimiz,
    2. Ey İlahımız,
    3. Ey Seyyidimiz,
    4. Ey Mevlamız,
    5. Ey Yardımcımız,
    6. Ey Koruyucumuz,
    7. Ey Kadirimiz,
    8. Ey Razıkımız,
    9. Ey Delilimiz,
    10. Ey Mededkârımız,`,
    "russian":`1. О, Владыка наш!
  2. О, Господь наш!
  3. О, Господин наш!
  4. О, Хозяин наш!
  5. О, Помогающий нам!
  6. О, Охраняющий нас!
  7. О, Владыка наш всемогущий!
  8. О, Кормилец наш!
  9. О, Руководящий нами в делах наших!
  10. О, Прибежище наше во всех бедах наших и трудностях!`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "english": `O Forbearing Who does not make haste,\nO Generous Who is never a miser,\nO True Who never breaks the promise\nO Munificent Who never regrets,\nO Dominant Who is never overpowered,\nO Great Who is indescribable\nO Just Who is never oppressive,\nO Bounteous Who is never rapacious,\nO Great Who does not become small,\nO Protector Who does not neglect.`,
  "english_dua": `Praise be to Thee, there is no god but Thee, The Granter of all Succour, Protect us from the Fire, O Lord.`,
  "arabic":`وَأَسْأَلُكَ بِأَسْمَائِكَ يَا رَبَّـنَا ؛۝؛ يَا إِلٰهَنَا ؛۝؛ يَا سَيِّدَنَا ؛۝؛ يَا مَوْلَانَا ؛۝؛ يَا نَاصِرَنَا ؛۝؛ يَا حَافِظَـنَا ؛۝؛ يَا قَادِرَنا ؛۝؛ يَا رَازِقَـنَا ؛۝؛ يَا دَلِيلَنَا ؛۝؛ يَا مُغِيثَـنَا ؛۝`,
    "arabic_dua":`سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ خَلِّصْنَا مِنَ ؛النَّارِ ؛`
  },{
    "id":101,
    "latin": `Allâhümme Rabbenâ hallisnâ ve ecirnâ ve neccinâ mine\'n-nar. Ve \'âfinâ va\'fu \'annâ ve edhılne\'l-Cennete dâra kudsike ma\'a\'l-ebrâr. Bi-\'afvike yâ Mücîr, bi-fadlike yâ Gaffar. Ve es\'elüke bi-hakkı hâzihi\'l-esmâi\'l-kerîmeti\'ş-şerîfeti ve\'s-sıfâti\'l-celîleti\'l-latîfeti en tüsalliye \'alâ seyyidinâ Muhammedin ve \'alâ âlihî ve sahbihî bi-\'adedi hasenâti Muhammedin bismillah, hasbiyallah, lâ ilâhe illallah, şehidallâh, kulhüvallâh. mâşâallâh, Rabbiyallah, tebârekallâh, te\'âlallâh, tevekkeltü \'alallâh, feseyekfîkehümüllâh, ve hüve\'s-semî\'u\'l-\'alîm.
  
    Sübhâneke yâ lâ ilahe illâ ente\'l-emânü\'l-emânü
    Lâ uhsî şenâen \'aleyke ente kemâ esneyte \'alâ nefsike yâ Allah, yâ Rahman yâ Rahîm yâ Gafûr yâ Şekûr, es\'elüke bi-mâ ahseytehû \'aleyke min-esmâike\'l-hüsnâ ve sıfâtike\'l-\'ulyâ ve kelimâtike\'t-tâmmeti en-tağfire lî ve li-vâlideyye ve li-Üstâzî Sâ\'idi\'n-Nursî ve li-talebeti resâili\'n-nûr ve licemî\'i\'l-mü\'-minîne ve\'l-mü\'minâti ve\'l-müslimîne ve\'l-müslimâti el-ahyâi min-hüm ve\'l-emvâti. Ve terhamenâ rahmeten tüğnînâ bi-hâ \'an-rahmeti men sivâke min-halkıke ve en-takdıye havâicenâ ve tu\'tıyenâ suâlenâ fi\'d-dünyâ ve\'l-âhireti ve tahtime lenâ bi\'s-se\'âdeti ve\'ş-şehâdeti ve\'l-kerâmeti ve\'l-büşrâ \'inde fîraki\'d-dünyâ ve tecziye Muhammeden sallallâhü \'aleyhi veselleme \'annâ mâ hüve ehlühû ve müstehakkuh. Ve ellâ tekilenâ \'alâ enfüsinâ tarfete \'aynin velâ ilâ ehadin min halkık. Ve tusliha lenâ şe\'nenâ ve en tahrusenâ bi-\'aynike\'l-letî lâ tenâmu ve tahfezanâ bi-rüknike\'llezî lâ yürâmu ya ze\'l-celâli ve\'l-ikrâm. Ve en tasrife \'annâ ve ammen \'ullika \'aleyhi hâzihi\'l-esmâu âfete\'l-cinni ve\'l-insi ve\'ş-şeyâtîni. Ve zelzelete\'l-ardi ve dekdekete\'l-cibâli min haşyetih. Ve âfete\'t-tâ\'ûni ve\'l-vebâi ve \'ayne\'s-sûi ve vece\'a\'l-cevârihi ve sâira\'l-afât. Ve tahfezanâ min-külli şerrin ve suin. Ve terzukana\'s-selâmete ve\'l-\'âfıyete ve\'l-hayra fi\'d-dünyâ ve\'l-âhireti bi-rahmetike yâ erhâme\'r-râhimîn. Ve sallallâhü \'alâ seyyidinâ Muhammedin ve âlihî ve sahbihî ecma\'în. Ve\'l-hamdü lillâhi rabbi\'l-\'âlemîn.
    `,
    "latin_dua": ``,
    "turkish_dua": ``,
    "turkish": `Ya Allah! Ya Rabbimiz! Sen bizi ateşten; Cehennemden halâs eyle, kurtar, necât ver; bize âfiyet ver, bizi affet, iyilerle beraber, mukaddes memleketin olan Cennet’e bizi koy. Ey kurtaran, ey günahları affeden!
    Ey Allah’ım! Senin şu kerîm, şerefli isimlerin ve büyük, yüce, latif sıfatlarının hakkı için sana yalvarıyorum ki, Efendimiz Muhammed (S.A.V.) ve O’nun âl ve ashabına O’nun hasenâtı adedince salâvat ve rahmet indiresin.
    Allah’ın ismiyle ki, O bana yeterdir. O’ndan başka ilâh yoktur. Allah şahittir. O her yerde hâzır ve nâzırdır, beni terbiye eden O’dur. O’nun istediği olur. O’nun her şeyi güzeldir, hoştur, O yücedir. O’na tevekkül ettim. “Allah seni onlardan koruyacaktır. O işiten ve bilendir.”
    Allah’ım! Seni bütün kusurlardan tenzih ederim! Senden başka ilâh yoktur. Gerçek eman ve kurtuluş ancak sendedir. Seni senâ edecek gücüm yoktur. Sen seni senâ ettiğin gibisin.
    Ya Allah! Ya Rahman! Ya Rahim! Ya Ğafûr! Ya Şekûr! Kendi hakkında yâd ettiğin güzel isimlerin ve yüce sıfatların ve mükemmel sözlerin olan (Kur’an’ın) ile sana yalvarıyorum ki, beni, ana-babamı, üstadım Bediüzzaman Said Nursi’yi, Risale-i Nur talebelerini, bütün ölü-diri erkek-kadın tüm mü’minleri ve müslümanları mağfiret eyle, günahlarımızı sil, ibadetlerimizi kabul et. Bize başkalarının merhametine muhtaç etmeyecek şekilde merhamet et, ihtiyaçlarımızı gider. Dünya ve âhirette istediklerimizi ver. Dünyadan ayrılışımızda bize saadet, şehidlik, keramet ve müjde ile biten hüsn-ü hâtime (güzel sonuç) ver. Bizden Efendimiz Muhammed (S.A.V.)’e ehil ve müstehak olduğu ne varsa ver. Bir an bile olsa bizi, ne bize, ne de başka bir mahlûkatına bırakma. Durumumuzu ıslah et. Uyumayan gözünle bizi gözetle, görünmez dayanaklarınla bizi koru! Ey celal ve ikram sahibi!
    Bizi ve bu isimleri taşıyanı, ins, cin ve şeytanların âfetlerinden, arzın zelzelesinden, dağların senin korkundan dolayı dökülmesinden, taun ve vebadan, kötü gözlerden, ağrı ve saire âfetlerden uzak eyle. Bizi her türlü şer ve kötülüklerden koru. Bize dünya ve âhirette selamet, âfiyet, rızık ve hayır nasip eyle! Ey merhamet edenlerin en merhametlisi! Salât, salâvat ve dualarımız Efendimiz Hz. Muhammed (S.A.V.)’in O’nun âl ve ashabının tamamının üzerine olsun.
    Hamd âlemlerin rabbi olan Allah’a mahsustur.
    Âmin. Âmin. Âmin.`,
    "russian":`О, господь наш, Всевышний! Спаси нас, охрани и упаси от огня вечного!\n
  О, Владыка мой, хранящий слуг своих от мук вечных и прощающий много и часто! Прощением своим и благородством и от щедрот Твоих прости нас, даруя здоровья и силы, введи нас в ряды добрых слуг Твоих, в Сады Твои вечные, Твою обитель чистую.\n
  Во имя прекрасных и достославных имен и во имя высоких дивных качеств Твоих молю Тебя, Господи, осени милостями Твоими и осыпь благами Твоими Посланника Своего Мухаммада, семейство его и сподвижников его, по числу деяний его добрых и великих!\n
  Именем Аллаха. Предостаточно мне Всевышнего. Нет божества кроме Аллаха. Он - свидетель всему и вся. Скажи: Он - Творец. Бывает лишь то, что угодно Богу. Господь мой - Аллах. Велика слава Всевышнего. Превеликим Он. Уповаю я на Него. И предостаточно нам Тебя против врагов твоих. Он Всеслышащий, Всезнающий.\n
  Ты бесконечно далек от всяких недостатков и Ты - обладатель величайших достоинств. Нет кроме Тебя никакого другого бога. Ты даёшь покой и безопасность и мы просим Тебя об этом. Не в силах я возносить Тебе славу достойную Тебя, такую какую Сам Ты Себе вознести можешь. О, Боже. О, Милостивый. О, Милосердный. О, Прощающий. О, Воздающий за благие дела.\n
  О, Всевышний Творец! Во имя всех имен прекрасных, качеств великих и эпитетов, которые ты считаешь достойными самого себя, прошу тебя и обращаю к тебе мольбы мои: прости меня, родителей и близких моих и всех верующих людей.\n
  Господи! Будь к нам милосерден так, чтобы не нуждались мы более в чьем-либо ещё милосердии. Дай нам то, в чём мы нуждаемся и о чём просим для жизни земной и жизни вечной. Даруй нам прекрасный конец, счастливый, конец благостный и чудесный, полный вечной радости. \n
  Господи! Ради нас, ради всего того, что сделал для нас и ради того, чем мы ему обязаны, вознагради господина нашего, Мухаммада, благословенного в веках.\n
  Господи! Не оставляй нас в одиночестве, лицом к лицу с плотью нашей или с кем-либо из созданий твоих ни на минуту без присмотра Твоего. Исправь нас. И да хранит нас око Твое неусыпное. И храни нас денно и нощно, о, Владыка мой, грозный в величии своём и великий в Щедрости своей!\n
  Господи! храни нас и тех, кто носит при себе имена Твои благословенные, от злых джиннов и людей, от бедствий непредвиденных, от всяких болезней и недугов и от прочих зол!\n
  О, Владыка мой, наимилосердный из всех милосердных! По бесконечной милости Твоей даруй нам в жизни земной и вечной здравие и блага всяческие!\n
  Господи! Осени милостью Твоей и благословением всех посланников Своих, а также последнего из них высокочтимого Мухаммада, семейство и сподвижников его!\n
  Хвала и Слава Аллаху, Господу миров!`,
  "russian_dua":`Ты - само совершенство, Владыка наш, о, Аллах! Нет божества кроме Тебя. О милости просим Тебя, упаси нас от геенны огненной!`,
  "arabic":`اَللّٰهُمَّ رَبَّـنَا خَلِّصْنَا وَأَجِرْنَا وَنَجِّنَا مِنَ النَّارِ، وَعَافِنَا وَاعْفُ عَنَّا وَأَدْخِلْنَا الْجَنَّةَ دَارَ قُدْسِكَ مَعَ الْأَبْرَارِ، بِعَفْوِكَ يَا مُجِيرُ بِفَضْلِكَ يَا غَفَّارُ ؛۝؛ وَأَسْأَلُكَ بِحَقِّ هٰذِهِ الْأَسْمَاءِ الْكَرِيمَةِ الشَّرِيفَةِ، وَالصِّفَاتِ الْجَلِيلَةِ اللَّطِيفَةِ، أَنْ تُصَلِّيَ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى أٰلِه۪ وَصَحْبِه۪، بِعَدَدِ حَسَنَاتِ مُحَمَّدٍ  ؛۝؛ بِسْمِ اللهِ، حَسْبِيَ اللهُ، لَا إِلٰهَ إِلَّا اللهُ، شَهِدَ اللهُ، قُلْ هُوَ اللهُ، مَا شَاءَ اللهُ، رَبِّيَ اللهُ، تَـبَارَكَ اللهُ، تَعَالَى اللهُ، تَـوَكَّـلْتُ عَلَى اللهِ، فَسَيَكْفِيكَهُمُ اللهُۚ وَهُوَ السَّمِيعُ الْعَلِيمُۘ ؛۝؛ سُبْحَانَكَ يَا لَا إِلٰهَ إِلَّا أَنْتَ الْأَمَانَ الْأَمَانَ، لَا أُحْصِي ثَـنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْـنَـيْتَ عَلَى نَـفْسِكَ، يَا اَللهُ، يَا هُوَ، يَا رَحْمٰنُ، يَا رَحِيمُ، يَا غَفُورُ، يَا شَكُورُ؛ أَسْأَلُكَ بِمَا أَحْصَيْـتَـهُ عَلَيْكَ مِنْ أَسْمَائِكَ الْحُسْنَى، وَصِفَاتِكَ الْعُلْيَا، وَكَلِمَاتِكَ التَّامَّةِ، أَنْ تَغْفِرَ لِي وَلِوَالِدَيَّ وَلِأُسْتَاذِي وَلِجَمِيعِ الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ، وَالْمُسْلِمِينَ وَالْمُسْلِمَاتِ، اَلْأَحْـيَاءِ مِنْهُمْ وَالْأَمْوَاتِ؛ وَتَرْحَمَنَا رَحْمَةً تُغْنِينَا بِهَا عَنْ رَحْمَةِ مَنْ سِوَاكَ مِنْ خَلْقِكَ، وَأَنْ تَقْضِيَ حَوَائِجَنَا، وَتُعْطِيَنَا سُؤَالَنَا فِي الدُّنْـيَا وَالْأٰخِرَةِ، وَتَخْتِمَ لَـنَا بِالسَّعَادَةِ وَالشَّهَادَةِ وَالْكَرَامَةِ وَالْبُشْرَى عِنْدَ فِـرَاقِ الدُّنْـيَا، وَتَجْزِيَ مُحَمَّدًا  عَـنَّا مَا هُوَ أَهْلُهُ وَمُسْتَحَقُّهُ، وَأَنْ لَا تَكِلَـنَا إِلَى أَنْفُسِنَا طَرْفَـةَ عَيْنٍ وَلَا إِلَى أَحَدٍ مِنْ خَلْقِكَ، وَتُصْلِحَ لَـنَا شَأْنَـنَا،وَأَنْ تَحْرُسَنَا بِعَيْنِكَ الَّتِي لَا تَـنَامُ، وَتَحْفَظَنَا بِرُكْنِكَ الَّذِي لَا يُـرَامُ، يَا ذَا الْجَلَالِ وَالْإِكْرَامِ، وَأَنْ تَصْرِفَ عَنَّا وَعَمَّنْ عُلِّقَ عَلَيْهِ هٰذِهِ الْأَسْمَاءُ أٰفَـةَ الْجِنِّ وَالْإِنْسِ وَالشَّيَاطِينِ، وَزَلْزَلَـةَ الْأَرْضِ وَدَكْدَكَةَ الْجِـبَالِ مِنْ خَشْيَـتِه۪، وَأٰفَـةَ الطَّاعُونِ وَالْوَبَاءِ وَعَيْنَ السُّوءِ وَوَجَعَ الْجَوَارِحِ وَسَائِرَ الْأٰفَاتِ، وَتَحْفَظَنَا مِنْ كُلِّ شَرٍّ وَسُوءٍ، وَتَرْزُقَـنَا السَّلَامَةَ وَالْعَافِـيَةَ وَالْخَيْرَ فِي الدُّنْـيَا وَالْأٰخِرَةِ، بِرَحْمَتِكَ يَا أَرْحَـمَ الرَّاحِمِينَ ؛۝؛ وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَأٰلِه۪ وَصَحْبِه۪ أَجْمَعِينَ ؛۝؛ وَالْحَمْدُ لِلهِ رَبِّ الْعَالَمِينَ  `,
    "arabic_dua":``
  }
  ]
  ; 