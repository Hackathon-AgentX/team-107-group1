/* =========================================
   WellnessConnect — Main Application JS
   ========================================= */

'use strict';

// ─── MULTILINGUAL TRANSLATIONS ───────────────────────────────────────────────
const TRANSLATIONS = {
  en: {
    logoSub: "Student Health Assistant",
    navChat: "Chat", navResources: "Resources", navBook: "Book", navHelplines: "Helplines",
    emergencyBtn: "🆘 Emergency",
    heroBadge: "🎓 Trusted by 50,000+ Students",
    heroTitle: "Your Campus Wellness ",
    heroDesc: "Get instant, evidence-based guidance on health & wellbeing. Always referred to professionals when needed. Never a diagnosis — always a direction.",
    heroCTA: "Start a Conversation", heroBook: "Book Appointment",
    stat1: "Available", stat2: "Confidential", stat3: "Languages", stat4: "Diagnoses Ever",
    fc1: "Mental Wellness", fc2: "General Health", fc3: "Counselling", fc4: "Book Slots",
    disclaimer: "This assistant provides <strong>general wellness information only</strong>. It does <strong>not diagnose, prescribe,</strong> or replace professional medical advice. Always consult a qualified healthcare provider for medical concerns.",
    onlineStatus: "Online — Ready to help",
    welcomeMsg: "👋 Hello! I'm <strong>Arogya</strong>, your wellness companion. I can help with general health questions, point you to professional care, book appointments, and share helpline resources.",
    welcomeMsg2: "What's on your mind today?",
    noDiagnosis: "General info only — not a diagnosis",
    tryAsking: "Try asking:",
    qp1: "I've been feeling very anxious lately", qp2: "I have a headache for 3 days",
    qp3: "I can't sleep properly", qp4: "I feel very stressed about exams",
    qp5: "I feel lonely and sad", qp6: "What are signs of burnout?",
    topicsTitle: "Browse Topics",
    topic1: "🧠 Mental Health", topic2: "😴 Sleep & Rest", topic3: "🥗 Nutrition",
    topic4: "😤 Stress Management", topic5: "💪 Physical Health",
    topic6: "❤️ Relationships", topic7: "🕊️ Grief & Loss", topic8: "🚫 Substance Use",
    urgentTitle: "⚡ Need Help Now?",
    urgentDesc: "If you're in crisis or having thoughts of self-harm, please reach out immediately.",
    urgentBtn: "View Crisis Helplines",
    bookNowTitle: "📅 Book a Session", bookNowDesc: "Talk to a real counsellor or visit the campus clinic.", bookNowBtn: "Book Appointment",
    resourcesTitle: "Wellness Knowledge Base",
    resourcesDesc: "Vetted, evidence-based articles on student health & wellbeing. All information is sourced from recognised health organisations.",
    filterAll: "All", filterMental: "Mental Health", filterPhysical: "Physical", filterLifestyle: "Lifestyle", filterCrisis: "Crisis",
    bookTitle: "Book an Appointment",
    bookDesc: "Schedule a session with a campus counsellor or visit the health clinic. All bookings are confidential.",
    bookFormTitle: "Appointment Details",
    formName: "Full Name", formEmail: "Email", formPhone: "Phone",
    formType: "Appointment Type", formTypeSelect: "Select type...",
    optCounsellor: "Mental Health Counsellor", optClinic: "Campus Health Clinic",
    optNutrition: "Nutritionist", optPhysio: "Physiotherapist", optOnline: "Online Tele-consultation",
    formConcern: "Primary Concern", formConcernSelect: "Select concern...",
    optAnxiety: "Anxiety / Stress", optDepression: "Low Mood / Depression",
    optSleep: "Sleep Issues", optRelationships: "Relationship Issues",
    optAcademic: "Academic Pressure", optPhysical: "Physical Health", optOther: "Other",
    formDate: "Preferred Date", formTime: "Preferred Time", formTimeSelect: "Select time...",
    formNotes: "Additional Notes (Optional)",
    formConsent: "I understand this is a real booking and information will be kept confidential per campus policy.",
    formSubmit: "Confirm Booking",
    clinicTitle: "Campus Health Centre",
    clinicAddr: "Ground Floor, Student Services Building<br/>Mon–Fri: 8 AM – 8 PM<br/>Sat: 9 AM – 2 PM",
    counselTitle: "Counselling Centre",
    counselAddr: "2nd Floor, Wellness Wing<br/>Walk-ins accepted 10 AM – 4 PM<br/>Scheduled sessions available all day",
    teleTitle: "Tele-Consultation",
    teleDesc: "Available via video call. Link sent to email after booking. 24-hr advance booking required.",
    availTitle: "This Week's Availability",
    helpTitle: "Crisis Helplines & Support",
    helpDesc: "Verified helplines available 24/7. If you are in immediate danger, call 112.",
    crisisAlert: "In immediate danger? Call 112 (India Emergency Services) right now.",
    crisisAlertSub: "Do not wait — emergency services are available 24/7 across India.",
    modalTitle: "Booking Confirmed!", modalClose: "Done",
    typing: "Arogya is thinking",
    inputNote: "Press Enter to send · Shift+Enter for new line",
    footerTagline: "Compassionate, evidence-based student wellness guidance.",
    footerNav: "Navigation", footerDisclaimers: "Disclaimers",
    footerD1: "This tool is for informational purposes only.",
    footerD2: "Not a substitute for professional medical or mental health advice.",
    footerD3: "All bookings are handled by campus health services.",
    footerRights: "All rights reserved", footerPrivacy: "Confidential & Secure",
  },
  hi: {
    logoSub: "छात्र स्वास्थ्य सहायक",
    navChat: "चैट", navResources: "संसाधन", navBook: "बुकिंग", navHelplines: "हेल्पलाइन",
    emergencyBtn: "🆘 आपातकाल",
    heroBadge: "🎓 50,000+ छात्रों का विश्वास",
    heroTitle: "आपका कैम्पस वेलनेस ",
    heroDesc: "स्वास्थ्य और वेलनेस पर तत्काल, साक्ष्य-आधारित मार्गदर्शन पाएं। जरूरत पड़ने पर हमेशा पेशेवरों के पास भेजा जाता है। कभी निदान नहीं — हमेशा एक दिशा।",
    heroCTA: "बातचीत शुरू करें", heroBook: "अपॉइंटमेंट बुक करें",
    stat1: "उपलब्ध", stat2: "गोपनीय", stat3: "भाषाएँ", stat4: "कभी निदान नहीं",
    fc1: "मानसिक स्वास्थ्य", fc2: "सामान्य स्वास्थ्य", fc3: "परामर्श", fc4: "स्लॉट बुक करें",
    disclaimer: "यह सहायक केवल <strong>सामान्य वेलनेस जानकारी</strong> प्रदान करता है। यह <strong>निदान, नुस्खे,</strong> या पेशेवर चिकित्सा सलाह का विकल्प <strong>नहीं</strong> है।",
    onlineStatus: "ऑनलाइन — मदद के लिए तैयार",
    welcomeMsg: "👋 नमस्ते! मैं <strong>आरोग्य</strong> हूँ, आपका वेलनेस साथी। मैं सामान्य स्वास्थ्य प्रश्नों में मदद कर सकता हूँ, पेशेवर देखभाल की ओर इशारा कर सकता हूँ, अपॉइंटमेंट बुक कर सकता हूँ और हेल्पलाइन संसाधन साझा कर सकता हूँ।",
    welcomeMsg2: "आज आपके मन में क्या है?",
    noDiagnosis: "केवल सामान्य जानकारी — निदान नहीं",
    tryAsking: "पूछकर देखें:",
    qp1: "मुझे हाल ही में बहुत चिंता हो रही है", qp2: "मुझे 3 दिनों से सिरदर्द है",
    qp3: "मैं ठीक से सो नहीं पा रहा हूँ", qp4: "परीक्षा की वजह से बहुत तनाव है",
    qp5: "मैं अकेला और उदास महसूस कर रहा हूँ", qp6: "बर्नआउट के क्या संकेत हैं?",
    topicsTitle: "विषय ब्राउज़ करें",
    topic1: "🧠 मानसिक स्वास्थ्य", topic2: "😴 नींद और आराम", topic3: "🥗 पोषण",
    topic4: "😤 तनाव प्रबंधन", topic5: "💪 शारीरिक स्वास्थ्य",
    topic6: "❤️ रिश्ते", topic7: "🕊️ शोक और हानि", topic8: "🚫 पदार्थ उपयोग",
    urgentTitle: "⚡ अभी मदद चाहिए?",
    urgentDesc: "यदि आप संकट में हैं या आत्म-नुकसान के विचार आ रहे हैं, तो तुरंत मदद लें।",
    urgentBtn: "संकट हेल्पलाइन देखें",
    bookNowTitle: "📅 सत्र बुक करें", bookNowDesc: "एक वास्तविक काउंसलर से बात करें या कैम्पस क्लिनिक जाएं।", bookNowBtn: "अपॉइंटमेंट बुक करें",
    resourcesTitle: "वेलनेस ज्ञान आधार",
    resourcesDesc: "छात्र स्वास्थ्य पर जांचे-परखे, साक्ष्य-आधारित लेख। सभी जानकारी मान्यता प्राप्त स्वास्थ्य संगठनों से है।",
    filterAll: "सभी", filterMental: "मानसिक स्वास्थ्य", filterPhysical: "शारीरिक", filterLifestyle: "जीवनशैली", filterCrisis: "संकट",
    bookTitle: "अपॉइंटमेंट बुक करें",
    bookDesc: "कैम्पस काउंसलर के साथ सत्र निर्धारित करें या स्वास्थ्य क्लिनिक जाएं। सभी बुकिंग गोपनीय हैं।",
    bookFormTitle: "अपॉइंटमेंट विवरण",
    formName: "पूरा नाम", formEmail: "ईमेल", formPhone: "फोन",
    formType: "अपॉइंटमेंट का प्रकार", formTypeSelect: "प्रकार चुनें...",
    optCounsellor: "मानसिक स्वास्थ्य काउंसलर", optClinic: "कैम्पस स्वास्थ्य क्लिनिक",
    optNutrition: "पोषण विशेषज्ञ", optPhysio: "फिजियोथेरेपिस्ट", optOnline: "ऑनलाइन टेली-परामर्श",
    formConcern: "मुख्य चिंता", formConcernSelect: "चिंता चुनें...",
    optAnxiety: "चिंता / तनाव", optDepression: "उदासी / अवसाद",
    optSleep: "नींद की समस्या", optRelationships: "रिश्तों की समस्या",
    optAcademic: "शैक्षणिक दबाव", optPhysical: "शारीरिक स्वास्थ्य", optOther: "अन्य",
    formDate: "पसंदीदा तारीख", formTime: "पसंदीदा समय", formTimeSelect: "समय चुनें...",
    formNotes: "अतिरिक्त नोट (वैकल्पिक)",
    formConsent: "मैं समझता/समझती हूँ कि यह एक वास्तविक बुकिंग है और जानकारी कैम्पस नीति के अनुसार गोपनीय रखी जाएगी।",
    formSubmit: "बुकिंग की पुष्टि करें",
    clinicTitle: "कैम्पस स्वास्थ्य केंद्र",
    clinicAddr: "ग्राउंड फ्लोर, छात्र सेवा भवन<br/>सोम–शुक्र: सुबह 8 बजे – रात 8 बजे<br/>शनि: सुबह 9 बजे – दोपहर 2 बजे",
    counselTitle: "परामर्श केंद्र",
    counselAddr: "दूसरी मंजिल, वेलनेस विंग<br/>वॉक-इन: सुबह 10 बजे – शाम 4 बजे<br/>निर्धारित सत्र पूरे दिन उपलब्ध",
    teleTitle: "टेली-परामर्श",
    teleDesc: "वीडियो कॉल के माध्यम से उपलब्ध। बुकिंग के बाद ईमेल पर लिंक भेजा जाएगा। 24 घंटे पहले बुकिंग आवश्यक।",
    availTitle: "इस सप्ताह की उपलब्धता",
    helpTitle: "संकट हेल्पलाइन और सहायता",
    helpDesc: "24/7 उपलब्ध सत्यापित हेल्पलाइन। यदि आप तत्काल खतरे में हैं, तो 112 पर कॉल करें।",
    crisisAlert: "तत्काल खतरे में हैं? अभी 112 (भारत आपातकालीन सेवाएं) पर कॉल करें।",
    crisisAlertSub: "इंतजार न करें — पूरे भारत में 24/7 आपातकालीन सेवाएं उपलब्ध हैं।",
    modalTitle: "बुकिंग की पुष्टि हो गई!", modalClose: "ठीक है",
    typing: "आरोग्य सोच रहा है",
    inputNote: "भेजने के लिए Enter दबाएं · नई पंक्ति के लिए Shift+Enter",
    footerTagline: "सहानुभूतिपूर्ण, साक्ष्य-आधारित छात्र वेलनेस मार्गदर्शन।",
    footerNav: "नेविगेशन", footerDisclaimers: "अस्वीकरण",
    footerD1: "यह उपकरण केवल सूचनात्मक उद्देश्यों के लिए है।",
    footerD2: "पेशेवर चिकित्सा या मानसिक स्वास्थ्य सलाह का विकल्प नहीं।",
    footerD3: "सभी बुकिंग कैम्पस स्वास्थ्य सेवाओं द्वारा संभाली जाती हैं।",
    footerRights: "सर्वाधिकार सुरक्षित", footerPrivacy: "गोपनीय और सुरक्षित",
  },
  mr: {
    logoSub: "विद्यार्थी आरोग्य सहाय्यक",
    navChat: "चॅट", navResources: "संसाधने", navBook: "बुकिंग", navHelplines: "हेल्पलाइन",
    emergencyBtn: "🆘 आणीबाणी",
    heroBadge: "🎓 ५०,०००+ विद्यार्थ्यांचा विश्वास",
    heroTitle: "तुमचा कॅम्पस वेलनेस ",
    heroDesc: "आरोग्य आणि कल्याणावर त्वरित, पुरावा-आधारित मार्गदर्शन मिळवा. गरज असेल तेव्हा नेहमी व्यावसायिकांकडे पाठवले जाते. कधीही निदान नाही — नेहमी एक दिशा.",
    heroCTA: "संभाषण सुरू करा", heroBook: "अपॉइंटमेंट बुक करा",
    stat1: "उपलब्ध", stat2: "गोपनीय", stat3: "भाषा", stat4: "कधीही निदान नाही",
    fc1: "मानसिक आरोग्य", fc2: "सामान्य आरोग्य", fc3: "समुपदेशन", fc4: "स्लॉट बुक करा",
    disclaimer: "हा सहाय्यक फक्त <strong>सामान्य वेलनेस माहिती</strong> देतो. हे <strong>निदान, प्रिस्क्रिप्शन,</strong> किंवा व्यावसायिक वैद्यकीय सल्ल्याचा पर्याय <strong>नाही</strong>.",
    onlineStatus: "ऑनलाइन — मदतीसाठी तयार",
    welcomeMsg: "👋 नमस्कार! मी <strong>आरोग्य</strong> आहे, तुमचा वेलनेस साथीदार. मी सामान्य आरोग्य प्रश्नांमध्ये मदत करू शकतो, व्यावसायिक काळजीकडे निर्देश करू शकतो, अपॉइंटमेंट बुक करू शकतो आणि हेल्पलाइन संसाधने शेअर करू शकतो.",
    welcomeMsg2: "आज तुमच्या मनात काय आहे?",
    noDiagnosis: "फक्त सामान्य माहिती — निदान नाही",
    tryAsking: "विचारून पाहा:",
    qp1: "मला अलीकडे खूप चिंता वाटत आहे", qp2: "मला ३ दिवसांपासून डोकेदुखी आहे",
    qp3: "मला नीट झोप येत नाही", qp4: "परीक्षेमुळे खूप ताण आहे",
    qp5: "मला एकटे आणि दुखी वाटते", qp6: "बर्नआउटची चिन्हे कोणती?",
    topicsTitle: "विषय ब्राउझ करा",
    topic1: "🧠 मानसिक आरोग्य", topic2: "😴 झोप आणि विश्रांती", topic3: "🥗 पोषण",
    topic4: "😤 ताण व्यवस्थापन", topic5: "💪 शारीरिक आरोग्य",
    topic6: "❤️ नाती", topic7: "🕊️ दुःख आणि नुकसान", topic8: "🚫 मादक पदार्थ",
    urgentTitle: "⚡ आत्ता मदत हवी?",
    urgentDesc: "जर तुम्ही संकटात असाल किंवा स्वतःला इजा करण्याचे विचार येत असतील, तर कृपया ताबडतोब मदत घ्या.",
    urgentBtn: "संकट हेल्पलाइन पाहा",
    bookNowTitle: "📅 सत्र बुक करा", bookNowDesc: "एका खऱ्या समुपदेशकाशी बोला किंवा कॅम्पस क्लिनिकला भेट द्या.", bookNowBtn: "अपॉइंटमेंट बुक करा",
    resourcesTitle: "वेलनेस ज्ञान केंद्र",
    resourcesDesc: "विद्यार्थी आरोग्यावर तपासलेले, पुरावा-आधारित लेख. सर्व माहिती मान्यताप्राप्त आरोग्य संस्थांकडून.",
    filterAll: "सर्व", filterMental: "मानसिक आरोग्य", filterPhysical: "शारीरिक", filterLifestyle: "जीवनशैली", filterCrisis: "संकट",
    bookTitle: "अपॉइंटमेंट बुक करा",
    bookDesc: "कॅम्पस समुपदेशकासोबत सत्र नियोजित करा किंवा आरोग्य क्लिनिकला भेट द्या. सर्व बुकिंग गोपनीय आहेत.",
    bookFormTitle: "अपॉइंटमेंट तपशील",
    formName: "पूर्ण नाव", formEmail: "ईमेल", formPhone: "फोन",
    formType: "अपॉइंटमेंटचा प्रकार", formTypeSelect: "प्रकार निवडा...",
    optCounsellor: "मानसिक आरोग्य समुपदेशक", optClinic: "कॅम्पस आरोग्य क्लिनिक",
    optNutrition: "पोषण तज्ञ", optPhysio: "फिजिओथेरपिस्ट", optOnline: "ऑनलाइन टेली-सल्लामसलत",
    formConcern: "मुख्य चिंता", formConcernSelect: "चिंता निवडा...",
    optAnxiety: "चिंता / ताण", optDepression: "उदासपणा / नैराश्य",
    optSleep: "झोपेच्या समस्या", optRelationships: "नात्यांच्या समस्या",
    optAcademic: "शैक्षणिक दबाव", optPhysical: "शारीरिक आरोग्य", optOther: "इतर",
    formDate: "पसंतीची तारीख", formTime: "पसंतीचा वेळ", formTimeSelect: "वेळ निवडा...",
    formNotes: "अतिरिक्त नोट्स (पर्यायी)",
    formConsent: "मला समजते की ही एक खरी बुकिंग आहे आणि माहिती कॅम्पस धोरणानुसार गोपनीय ठेवली जाईल.",
    formSubmit: "बुकिंग पुष्टी करा",
    clinicTitle: "कॅम्पस आरोग्य केंद्र",
    clinicAddr: "ग्राउंड फ्लोर, विद्यार्थी सेवा इमारत<br/>सोम–शुक्र: सकाळी ८ – रात्री ८<br/>शनि: सकाळी ९ – दुपारी २",
    counselTitle: "समुपदेशन केंद्र",
    counselAddr: "दुसरा मजला, वेलनेस विंग<br/>वॉक-इन: सकाळी १० – दुपारी ४<br/>नियोजित सत्रे दिवसभर उपलब्ध",
    teleTitle: "टेली-सल्लामसलत",
    teleDesc: "व्हिडिओ कॉलद्वारे उपलब्ध. बुकिंगनंतर ईमेलवर लिंक पाठवली जाईल. २४ तास आधी बुकिंग आवश्यक.",
    availTitle: "या आठवड्याची उपलब्धता",
    helpTitle: "संकट हेल्पलाइन आणि आधार",
    helpDesc: "२४/७ उपलब्ध सत्यापित हेल्पलाइन. तुम्ही तत्काळ धोक्यात असाल तर ११२ वर कॉल करा.",
    crisisAlert: "तत्काळ धोक्यात आहात? आत्ता ११२ (भारत आणीबाणी सेवा) वर कॉल करा.",
    crisisAlertSub: "थांबू नका — संपूर्ण भारतात २४/७ आणीबाणी सेवा उपलब्ध आहेत.",
    modalTitle: "बुकिंग पुष्टी झाली!", modalClose: "ठीक आहे",
    typing: "आरोग्य विचार करत आहे",
    inputNote: "पाठवण्यासाठी Enter दाबा · नवीन ओळीसाठी Shift+Enter",
    footerTagline: "सहानुभूतीपूर्ण, पुरावा-आधारित विद्यार्थी वेलनेस मार्गदर्शन.",
    footerNav: "नेव्हिगेशन", footerDisclaimers: "अस्वीकरण",
    footerD1: "हे साधन केवळ माहितीपर हेतूंसाठी आहे.",
    footerD2: "व्यावसायिक वैद्यकीय किंवा मानसिक आरोग्य सल्ल्याचा पर्याय नाही.",
    footerD3: "सर्व बुकिंग कॅम्पस आरोग्य सेवांद्वारे हाताळल्या जातात.",
    footerRights: "सर्व हक्क राखीव", footerPrivacy: "गोपनीय आणि सुरक्षित",
  }
};

// ─── KNOWLEDGE BASE ──────────────────────────────────────────────────────────
const KNOWLEDGE_BASE = {
  anxiety: {
    category: 'mental', tag: 'tag-mental', tagLabel: 'Mental Health',
    title: 'Understanding Anxiety in Students',
    desc: 'Anxiety is one of the most common mental health challenges for students. Learn evidence-based coping strategies.',
    source: 'WHO Mental Health Atlas 2022 · NIMHANS India',
    body: `<h4>What is Anxiety?</h4>
<p>Anxiety is a normal response to stress, but when it becomes persistent or overwhelming, it can interfere with daily life. For students, common triggers include academic pressure, social situations, future uncertainty, and family expectations.</p>
<h4>Common Signs</h4>
<ul>
<li>Excessive worrying about exams, grades, or the future</li>
<li>Physical symptoms: racing heart, sweating, trembling</li>
<li>Difficulty concentrating or sleeping</li>
<li>Avoiding situations that trigger anxiety</li>
<li>Feeling restless, irritable, or on edge</li>
</ul>
<h4>Evidence-Based Strategies</h4>
<ul>
<li><strong>Deep breathing (4-7-8 technique):</strong> Inhale 4s, hold 7s, exhale 8s</li>
<li><strong>Grounding (5-4-3-2-1):</strong> Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste</li>
<li><strong>Regular physical activity:</strong> Even 30 min walks reduce anxiety significantly</li>
<li><strong>Limit caffeine</strong> — it amplifies anxiety symptoms</li>
<li><strong>Journaling:</strong> Write worries down to externalise them</li>
</ul>
<div class="rm-cta"><strong>⚠️ When to seek professional help</strong><p>If anxiety is affecting your ability to study, socialise, or function daily for more than 2 weeks, please book a session with a campus counsellor.</p></div>`,
  },
  depression: {
    category: 'mental', tag: 'tag-mental', tagLabel: 'Mental Health',
    title: 'Recognising Low Mood & Depression',
    desc: 'Depression is more than sadness. Understand the signs and know when to reach out for professional support.',
    source: 'NIMHANS · iCall India · WHO',
    body: `<h4>Depression vs. Sadness</h4>
<p>While sadness is a normal emotion that passes, depression is a persistent low mood lasting 2+ weeks that affects how you think, feel, and function. It is not a character flaw or weakness — it is a medical condition that responds well to treatment.</p>
<h4>Common Signs</h4>
<ul>
<li>Persistent sadness, emptiness, or hopelessness</li>
<li>Loss of interest in activities once enjoyed</li>
<li>Changes in sleep (too much or too little)</li>
<li>Fatigue and low energy</li>
<li>Difficulty concentrating or making decisions</li>
<li>Feelings of worthlessness or excessive guilt</li>
</ul>
<h4>Self-Care Steps</h4>
<ul>
<li>Maintain a daily routine — structure helps</li>
<li>Stay connected with trusted friends or family</li>
<li>Engage in gentle physical activity</li>
<li>Limit alcohol and avoid substances</li>
<li>Practice self-compassion — be as kind to yourself as you would a friend</li>
</ul>
<div class="rm-cta"><strong>⚠️ Please seek help if you experience:</strong><p>Thoughts of self-harm or suicide, inability to function for several days, or feeling that nothing will ever get better. Call iCall: 9152987821 or visit the campus counselling centre immediately.</p></div>`,
  },
  sleep: {
    category: 'lifestyle', tag: 'tag-lifestyle', tagLabel: 'Lifestyle',
    title: 'Sleep Health for Students',
    desc: 'Quality sleep is foundational to academic performance, mental health, and physical wellbeing.',
    source: 'National Sleep Foundation · AIIMS Sleep Research',
    body: `<h4>Why Sleep Matters</h4>
<p>During sleep, your brain consolidates memories, clears waste products, and repairs itself. Students who sleep less than 7 hours perform significantly worse academically and are at higher risk for anxiety and depression.</p>
<h4>Sleep Hygiene Tips</h4>
<ul>
<li>Keep a consistent sleep-wake schedule (even weekends)</li>
<li>Avoid screens 60 minutes before bed</li>
<li>Keep your room cool, dark, and quiet</li>
<li>Avoid caffeine after 2 PM</li>
<li>Don't study in bed — reserve it only for sleep</li>
<li>Try a wind-down routine: reading, stretching, breathing</li>
</ul>
<h4>How Much Sleep Do You Need?</h4>
<ul>
<li>18–25 years: 7–9 hours per night recommended</li>
<li>Naps: 20-minute "power naps" are fine; longer naps may worsen night sleep</li>
</ul>
<div class="rm-cta"><strong>When to see a doctor</strong><p>If you regularly cannot fall asleep, wake frequently, snore loudly, or feel exhausted despite sleeping enough, visit the campus health clinic — you may have a sleep disorder that is very treatable.</p></div>`,
  },
  stress: {
    category: 'mental', tag: 'tag-mental', tagLabel: 'Mental Health',
    title: 'Managing Academic & Life Stress',
    desc: 'Practical, evidence-based techniques to manage stress before it becomes harmful.',
    source: 'APA Stress in America · NIMHANS',
    body: `<h4>Understanding Stress</h4>
<p>Not all stress is bad — short-term stress (eustress) can improve performance. Chronic stress, however, damages physical and mental health. Recognising your stress signals early is key.</p>
<h4>Practical Strategies</h4>
<ul>
<li><strong>Time-blocking:</strong> Break study into 25-minute focused blocks (Pomodoro technique)</li>
<li><strong>Prioritisation:</strong> Use the Eisenhower Matrix — urgent vs. important</li>
<li><strong>Physical release:</strong> Exercise is the most evidence-backed stress reducer</li>
<li><strong>Mindfulness:</strong> Even 5 minutes of mindful breathing reduces cortisol</li>
<li><strong>Social support:</strong> Talk to a trusted friend — verbalising helps</li>
<li><strong>Limit news/social media</strong> if it triggers comparison anxiety</li>
</ul>
<h4>Warning Signs of Harmful Stress</h4>
<ul>
<li>Frequent headaches, stomach aches, or chest tightness</li>
<li>Using alcohol, substances, or unhealthy eating to cope</li>
<li>Constant irritability or emotional outbursts</li>
<li>Inability to complete basic tasks</li>
</ul>
<div class="rm-cta"><strong>Professional support</strong><p>If stress feels unmanageable or is affecting your health, don't wait. Book a session with a campus counsellor — they are trained to help with exactly this.</p></div>`,
  },
  nutrition: {
    category: 'lifestyle', tag: 'tag-lifestyle', tagLabel: 'Lifestyle',
    title: 'Nutrition & Brain Health for Students',
    desc: 'What you eat directly affects mood, focus, and energy. Evidence-based nutritional guidance for student life.',
    source: 'ICMR Dietary Guidelines for Indians 2024 · NIN Hyderabad',
    body: `<h4>Brain Food Basics</h4>
<p>The gut-brain axis means your diet directly impacts mental health. Deficiencies in iron, B12, Vitamin D, and omega-3s are especially common in students and are linked to fatigue, poor concentration, and low mood.</p>
<h4>Simple Guidelines</h4>
<ul>
<li>Eat 3 balanced meals — skipping meals impairs concentration</li>
<li>Include protein at every meal (dal, eggs, paneer, sprouts)</li>
<li>Eat plenty of colourful vegetables and fruits</li>
<li>Whole grains over refined carbs for sustained energy</li>
<li>Stay hydrated — even mild dehydration impairs cognition</li>
<li>Limit ultra-processed foods, sugary drinks, and excessive caffeine</li>
</ul>
<h4>Common Deficiencies in Indian Students</h4>
<ul>
<li><strong>Iron:</strong> Fatigue, poor focus — eat spinach, jaggery, lentils, with Vitamin C</li>
<li><strong>Vitamin D:</strong> Low mood, fatigue — get 15 mins sunlight, eat eggs/fortified milk</li>
<li><strong>B12:</strong> Especially in vegetarians — consider supplementation after testing</li>
</ul>
<div class="rm-cta"><strong>See a nutritionist</strong><p>For personalised guidance, significant weight changes, or suspected deficiencies, book a session with our campus nutritionist.</p></div>`,
  },
  burnout: {
    category: 'mental', tag: 'tag-mental', tagLabel: 'Mental Health',
    title: 'Student Burnout: Signs & Recovery',
    desc: 'Burnout is not laziness — it is a state of physical and emotional exhaustion. Learn to recognise and recover.',
    source: 'WHO ICD-11 · Maslach Burnout Inventory Research',
    body: `<h4>What is Burnout?</h4>
<p>Burnout is a syndrome resulting from chronic workplace (or academic) stress that has not been successfully managed. WHO formally recognises it in ICD-11. It has three dimensions: exhaustion, cynicism/detachment, and reduced efficacy.</p>
<h4>Signs of Burnout</h4>
<ul>
<li>Feeling drained and exhausted most of the time</li>
<li>Loss of motivation and sense of purpose in studies</li>
<li>Increasing cynicism or negativity about college/career</li>
<li>Procrastinating on everything — even things you used to enjoy</li>
<li>Physical symptoms: headaches, stomach issues, frequent illness</li>
<li>Feeling like nothing you do matters</li>
</ul>
<h4>Recovery Steps</h4>
<ul>
<li>Acknowledge it — burnout is real and valid</li>
<li>Rest strategically — take genuine breaks, not "guilty" ones</li>
<li>Set firm boundaries on study hours</li>
<li>Reconnect with activities that give you joy unrelated to academics</li>
<li>Talk to a counsellor — cognitive behavioural approaches are very effective</li>
</ul>
<div class="rm-cta"><strong>This is serious</strong><p>Untreated burnout can develop into clinical depression or anxiety disorders. Please book a counselling session — recovery is very possible with support.</p></div>`,
  },
  physical: {
    category: 'physical', tag: 'tag-physical', tagLabel: 'Physical Health',
    title: 'Common Physical Health Issues in Students',
    desc: 'Headaches, fatigue, digestive issues, and more — know when to self-care and when to see a doctor.',
    source: 'Indian Medical Association · WHO Student Health',
    body: `<h4>When to Visit the Campus Clinic</h4>
<p>Many students delay seeking physical care. As a guide: self-care first for mild, short-duration symptoms; seek medical attention for anything persistent, severe, or unusual.</p>
<h4>Common Issues & Self-Care</h4>
<ul>
<li><strong>Headaches:</strong> Hydrate, rest, reduce screen time. If persistent (3+ days), recurring, or severe — see a doctor.</li>
<li><strong>Fatigue:</strong> Check sleep quality, hydration, iron levels. Persistent fatigue warrants a blood test.</li>
<li><strong>Digestive issues:</strong> Often stress-related. Regular meals, adequate fibre, reduced stress. Persistent pain or blood in stool = see doctor immediately.</li>
<li><strong>Eye strain:</strong> 20-20-20 rule: every 20 min, look 20 feet away for 20 seconds.</li>
<li><strong>Back/neck pain:</strong> Posture breaks, stretching every 45 min. Physiotherapy available on campus.</li>
</ul>
<div class="rm-cta"><strong>Never ignore:</strong><p>Chest pain, difficulty breathing, severe abdominal pain, sudden severe headache, vision changes, or any symptom that feels "not right." Visit the clinic or call 112 immediately.</p></div>`,
  },
  crisis: {
    category: 'crisis', tag: 'tag-crisis', tagLabel: 'Crisis Support',
    title: 'If You Are in Crisis: What to Do',
    desc: 'Step-by-step guidance for students experiencing a mental health crisis or having thoughts of self-harm.',
    source: 'iCall India · Vandrevala Foundation · AASRA',
    body: `<h4>You Are Not Alone</h4>
<p>If you are having thoughts of ending your life or harming yourself, please know: this is a medical emergency, help is available right now, and these thoughts can get better with support.</p>
<h4>Immediate Steps</h4>
<ul>
<li><strong>Call iCall immediately: 9152987821</strong> (Mon-Sat, 8AM-10PM)</li>
<li><strong>Call Vandrevala Foundation: 1860-2662-345</strong> (24/7)</li>
<li><strong>Call AASRA: 98204 66627</strong> (24/7)</li>
<li>Go to the campus counselling centre or health clinic now</li>
<li>Tell a trusted person — a friend, family member, teacher, or hostel warden</li>
<li>If in immediate danger: call 112</li>
</ul>
<h4>Safety Planning</h4>
<ul>
<li>Remove access to means if possible</li>
<li>Stay with someone — don't be alone</li>
<li>Write down your reasons to stay safe</li>
<li>Identify 3 people you can call right now</li>
</ul>
<div class="rm-cta"><strong>Please reach out now.</strong><p>Booking a counselling appointment takes 2 minutes. You deserve support. Click "Book Appointment" or call a helpline above.</p></div>`,
  },
  relationships: {
    category: 'mental', tag: 'tag-mental', tagLabel: 'Mental Health',
    title: 'Navigating Relationships & Loneliness',
    desc: 'Relationship challenges and loneliness are among the top wellbeing concerns for students. You are not alone.',
    source: 'Journal of Adolescent Health · NIMHANS',
    body: `<h4>Loneliness at College</h4>
<p>Studies show over 60% of students report feeling lonely at some point. Moving away from home, academic pressure, and social media comparison all contribute. Loneliness is not the same as being alone — it is the gap between desired and actual social connection.</p>
<h4>Building Connection</h4>
<ul>
<li>Join one club, society, or sport — regular contact builds connection</li>
<li>Prioritise in-person interaction over digital communication</li>
<li>Be the one to reach out — most people are waiting to be asked</li>
<li>Volunteer — helping others is one of the fastest routes to connection</li>
</ul>
<h4>Healthy vs. Unhealthy Relationships</h4>
<ul>
<li>Healthy: mutual respect, honesty, support, independence</li>
<li>Warning signs: controlling behaviour, isolation from friends/family, fear</li>
<li>Romantic breakups: allow yourself to grieve, lean on support network, avoid isolation</li>
</ul>
<div class="rm-cta"><strong>Counselling can help</strong><p>A counsellor can help you build social skills, process relationship pain, and develop a stronger sense of self. Book a session today.</p></div>`,
  },
};

// ─── HELPLINES DATA ───────────────────────────────────────────────────────────
const HELPLINES = [
  {
    category: "Mental Health Crisis",
    name: "iCall",
    desc: "Free, confidential counselling by trained professionals. Especially for students and young adults.",
    number: "9152987821",
    hours: "Mon–Sat: 8 AM – 10 PM",
    chat: true,
    urgent: true,
  },
  {
    category: "24/7 Crisis",
    name: "Vandrevala Foundation",
    desc: "24/7 mental health helpline available in multiple Indian languages including Hindi and English.",
    number: "1860-2662-345",
    hours: "24 hours · 7 days a week",
    chat: false,
    urgent: true,
  },
  {
    category: "Suicide Prevention",
    name: "AASRA",
    desc: "India's leading suicide prevention organisation. Trained crisis counsellors available round the clock.",
    number: "98204 66627",
    hours: "24 hours · 7 days a week",
    chat: false,
    urgent: true,
  },
  {
    category: "Women's Safety",
    name: "Women Helpline",
    desc: "Government helpline for women in distress, violence, harassment, or safety concerns.",
    number: "1091",
    hours: "24 hours · 7 days a week",
    chat: false,
    urgent: false,
  },
  {
    category: "Child & Youth",
    name: "Childline India",
    desc: "For students under 18 facing abuse, exploitation, or any form of distress.",
    number: "1098",
    hours: "24 hours · 7 days a week",
    chat: false,
    urgent: false,
  },
  {
    category: "General Emergency",
    name: "National Emergency",
    desc: "Police, ambulance, fire — all emergency services accessible via single number.",
    number: "112",
    hours: "24 hours · 7 days a week",
    chat: false,
    urgent: true,
  },
  {
    category: "Mental Health",
    name: "Fortis Stress Helpline",
    desc: "Stress, anxiety, and depression support from Fortis Healthcare professionals.",
    number: "8376804102",
    hours: "24 hours · 7 days a week",
    chat: false,
    urgent: false,
  },
  {
    category: "Substance Use",
    name: "NIMHANS De-addiction",
    desc: "Guidance and referral for students struggling with alcohol, tobacco, or substance use.",
    number: "080-46110007",
    hours: "Mon–Sat: 9 AM – 5 PM",
    chat: false,
    urgent: false,
  },
  {
    category: "Mental Wellness",
    name: "Snehi Foundation",
    desc: "Emotional support and counselling for students facing loneliness, grief, or emotional pain.",
    number: "044-24640050",
    hours: "Daily: 8 AM – 10 PM",
    chat: false,
    urgent: false,
  },
];

// ─── TRIAGE KEYWORDS ──────────────────────────────────────────────────────────
const TRIAGE_URGENT = [
  'suicide', 'kill myself', 'end my life', 'self harm', 'self-harm',
  'hurt myself', 'want to die', 'better off dead', 'no reason to live',
  'आत्महत्या', 'जीवन समाप्त', 'मरना चाहता', 'जीवन खत्म',
  'आत्मघात', 'जगणे नको'
];
const TRIAGE_SERIOUS = [
  'chest pain', 'can\'t breathe', 'unconscious', 'seizure', 'overdose',
  'bleeding', 'broken', 'fainted', 'stroke', 'heart attack',
  'छाती दर्द', 'साँस नहीं', 'बेहोश', 'दौरा', 'अधिक मात्रा',
  'छातीत दुखणे', 'श्वास घेता येत नाही'
];

// ─── CHAT RESPONSES ───────────────────────────────────────────────────────────
const CHAT_RESPONSES = {
  en: {
    anxiety: {
      text: `I hear you — anxiety is really tough, especially during student life. Here's what the evidence says:\n\n**Common causes in students:** Academic pressure, social comparison, uncertain futures, and sleep deprivation all trigger anxiety.\n\n**3 things you can try right now:**\n• **Box breathing:** Inhale 4s → Hold 4s → Exhale 4s → Hold 4s. Repeat 4 times.\n• **Grounding:** Name 5 things you can see around you right now.\n• **Physical movement:** Even a 10-minute walk lowers cortisol levels.\n\n**Important:** If anxiety is interfering with your daily life, please book a session with a campus counsellor — it really helps.`,
      citation: '📚 WHO Mental Health Atlas 2022 · NIMHANS India',
      triage: false,
      suggestBook: true,
    },
    headache: {
      text: `A headache lasting 3 days needs attention. Here's a general overview:\n\n**Likely causes in students:** Dehydration, eye strain, poor sleep, skipped meals, stress, or tension headaches.\n\n**Self-care steps:**\n• Drink 2 glasses of water now and monitor\n• Rest in a quiet, dark room if possible\n• Check if you've been staring at screens for long periods\n• Over-the-counter paracetamol can help tension headaches (follow packet dosage)\n\n**⚠️ See a doctor if:** Headache is severe/sudden, accompanied by fever, vision changes, neck stiffness, or sensitivity to light. Please visit the campus health clinic today.`,
      citation: '📚 Indian Medical Association · WHO',
      triage: true,
      triageMsg: 'A 3-day headache should be evaluated by a healthcare professional.',
      suggestBook: true,
    },
    sleep: {
      text: `Sleep problems are very common in students. Here's what helps:\n\n**Top evidence-based tips:**\n• Fix a consistent sleep & wake time — even weekends\n• No screens 60 minutes before bed (blue light disrupts melatonin)\n• Keep your room cool (18–21°C is ideal)\n• Avoid caffeine after 2 PM\n• Write down tomorrow's tasks before bed to clear your mind\n\n**The 20-min rule:** If you can't sleep after 20 minutes, get up, do something calm, return when sleepy.\n\n**If this has been going on for weeks,** a campus doctor can rule out sleep disorders like insomnia or sleep apnea — both are very treatable.`,
      citation: '📚 National Sleep Foundation · AIIMS',
      triage: false,
      suggestBook: false,
    },
    stress: {
      text: `Exam stress is real and valid. Here's a toolkit:\n\n**Immediate relief:**\n• 4-7-8 breathing: Inhale 4s, hold 7s, exhale 8s\n• 5-minute walk outside\n• Splash cold water on your face\n\n**Study strategy:**\n• Pomodoro: 25 min focused study + 5 min break\n• Prioritise: What must be done today vs. this week?\n• Your brain consolidates best with sleep — an extra hour of sleep beats an extra hour of studying\n\n**Perspective:** One exam does not define you. Many successful people have struggled academically. Your wellbeing matters more than any grade.\n\n*If stress feels unmanageable, please talk to a counsellor — it's what they're there for.*`,
      citation: '📚 APA Stress in America · NIMHANS',
      triage: false,
      suggestBook: true,
    },
    lonely: {
      text: `Feeling lonely and sad is more common than you might think — studies show 60%+ of students feel this way. You're not alone in feeling alone.\n\n**Small steps that help:**\n• Text one person today — not a big conversation, just a check-in\n• Join one campus activity (club, sport, hobby) — regular contact builds bonds\n• Try volunteering — it's one of the fastest ways to feel connected\n• Be kind to yourself: loneliness is not a personal failure\n\n**If the sadness is deep or persistent,** it may be depression — a very treatable condition. A counsellor can make a real difference.\n\n*Would you like me to help you book a counselling session?*`,
      citation: '📚 Journal of Adolescent Health · NIMHANS',
      triage: false,
      suggestBook: true,
    },
    burnout: {
      text: `Burnout is recognised by the WHO as a real syndrome — it's not laziness or weakness.\n\n**Key signs:**\n• Exhaustion that doesn't go away with rest\n• Growing cynicism about your studies or career\n• Feeling like nothing you do matters\n• Procrastinating everything, even things you used to enjoy\n\n**Recovery steps:**\n• First: acknowledge it — fighting through burnout alone usually makes it worse\n• Take genuine rest — not "guilty" breaks\n• Reconnect with one thing you enjoy that isn't academic\n• Set firm limits on study hours\n• Talk to a counsellor — CBT is very effective for burnout\n\n*Unaddressed burnout can develop into depression. Please book a session.*`,
      citation: '📚 WHO ICD-11 · Maslach Burnout Inventory',
      triage: false,
      suggestBook: true,
    },
    physical: {
      text: `For general physical health concerns, here's a guide:\n\n**Self-care is appropriate for:** Mild cold/fever under 38.5°C, minor cuts, mild headaches, mild stomach upsets.\n\n**Visit the campus clinic for:** Fever above 38.5°C lasting 2+ days, persistent pain, any unusual symptoms, skin rashes, injury.\n\n**See a doctor urgently for:** Chest pain, difficulty breathing, severe abdominal pain, sudden severe headache, vision changes, or anything that feels serious.\n\n**Campus Health Centre:** Ground Floor, Student Services Building · Mon–Fri 8AM–8PM, Sat 9AM–2PM`,
      citation: '📚 Indian Medical Association · WHO',
      triage: false,
      suggestBook: true,
    },
    nutrition: {
      text: `Diet has a direct impact on your brain, mood, and energy. Key points for students:\n\n**Don't skip meals** — even a small snack between classes prevents energy crashes and poor focus.\n\n**Brain-boosting foods:**\n• Dal, eggs, paneer, sprouts → protein for neurotransmitters\n• Leafy greens, nuts, seeds → iron, folate, magnesium\n• Fruits & vegetables → antioxidants that protect brain health\n• Water → dehydration impairs cognition within 1–2% loss\n\n**Common deficiencies in Indian students:**\n• Iron (especially women) → fatigue, poor concentration\n• Vitamin D → low mood, fatigue\n• B12 (vegetarians) → nerve function, energy\n\n*For personalised advice, book a session with our campus nutritionist.*`,
      citation: '📚 ICMR Dietary Guidelines 2024 · NIN Hyderabad',
      triage: false,
      suggestBook: false,
    },
    relationships: {
      text: `Relationships — whether friendships, romantic, or family — deeply affect student wellbeing.\n\n**If you're struggling with loneliness:**\nThis is normal and common. Join activities, reach out first, give it time — connection takes repeated low-stakes contact.\n\n**If you're in a difficult relationship:**\n• Healthy relationships have mutual respect, honesty, and support\n• Warning signs: controlling behaviour, isolation from others, fear\n• You have the right to set boundaries and step back from unhealthy relationships\n\n**If you've experienced a breakup:**\n• Allow yourself to grieve — it's a real loss\n• Lean on your support network\n• Avoid making major decisions when emotions are very raw\n\n*A counsellor can help you work through relationship challenges in a safe, confidential space.*`,
      citation: '📚 Journal of Adolescent Health',
      triage: false,
      suggestBook: true,
    },
    grief: {
      text: `Grief is one of the most painful human experiences, and students are rarely given space to grieve properly.\n\n**What grief can look like:**\n• Waves of intense sadness, sometimes unexpectedly\n• Difficulty concentrating or caring about academics\n• Physical symptoms: fatigue, appetite changes, sleep disruption\n• Guilt, anger, or numbness — all are normal\n\n**What helps:**\n• Allow yourself to feel — suppressing grief prolongs it\n• Maintain basic routines (sleep, meals) even when it's hard\n• Talk about the person/loss with someone who knew them\n• Memorialise in a way that feels right to you\n• Join a grief support group if available\n\n*Complicated grief or grief that severely impacts functioning for months deserves professional support. Please speak with a campus counsellor.*`,
      citation: '📚 NIMHANS · Journal of Grief Studies',
      triage: false,
      suggestBook: true,
    },
    substance: {
      text: `Substance use is more common among students under stress, and it's important to approach this without judgment.\n\n**General information:**\n• Alcohol, cannabis, stimulants, and tobacco are commonly used on campuses\n• Short-term relief often worsens anxiety, depression, and sleep long-term\n• Dependency can develop gradually — it doesn't require daily use\n\n**Signs to be aware of:**\n• Using substances to cope with stress, loneliness, or emotions regularly\n• Needing more to get the same effect\n• Difficulty reducing use despite wanting to\n• Impact on studies, relationships, or health\n\n**Resources:**\n• NIMHANS De-addiction helpline: 080-46110007\n• Campus counsellors are trained in substance use support — completely confidential\n\n*There is no judgment here. Please reach out for support.*`,
      citation: '📚 NIMHANS · National Drug Dependence Treatment Centre',
      triage: false,
      suggestBook: true,
    },
    default: {
      text: `Thank you for sharing that with me. I want to make sure you get the right support.\n\nI can help with general information on topics like:\n• **Mental health:** Anxiety, stress, depression, burnout, loneliness\n• **Sleep:** Improving quality and duration\n• **Physical health:** Common student health concerns\n• **Nutrition:** Diet and brain health\n• **Relationships:** Friendships, romance, family\n• **Crisis support:** Helplines and emergency resources\n\nCould you tell me a little more about what you're experiencing? Or you can pick a topic from the sidebar to get started.\n\n*Remember: if anything feels urgent, please see the Helplines section or book an appointment.*`,
      citation: '📚 WellnessConnect Knowledge Base',
      triage: false,
      suggestBook: false,
    },
  }
};

// Hindi/Marathi responses (condensed — full translations of key responses)
const CHAT_RESPONSES_HI = {
  anxiety: {
    text: `मैं समझता हूँ — चिंता वास्तव में कठिन है, खासकर छात्र जीवन में।\n\n**अभी आजमाएं:**\n• **बॉक्स ब्रीदिंग:** 4 सेकंड श्वास लें → 4 सेकंड रोकें → 4 सेकंड छोड़ें → दोहराएं\n• **ग्राउंडिंग:** अभी अपने आसपास 5 चीजें नाम लें\n• **चलना:** 10 मिनट की सैर कोर्टिसोल कम करती है\n\n**महत्वपूर्ण:** अगर चिंता आपके दैनिक जीवन को प्रभावित कर रही है, तो कृपया कैम्पस काउंसलर से मिलें।`,
    citation: '📚 WHO · NIMHANS भारत',
    triage: false, suggestBook: true,
  },
  sleep: {
    text: `नींद की समस्या छात्रों में बहुत आम है। यहाँ मदद है:\n\n• हर दिन एक ही समय पर सोएं और उठें\n• सोने से 60 मिनट पहले स्क्रीन बंद करें\n• दोपहर 2 बजे के बाद चाय/कॉफी न लें\n• बिस्तर पर सिर्फ सोने के लिए जाएं — पढ़ाई नहीं\n\nअगर यह हफ्तों से चल रहा है, तो कैम्पस डॉक्टर से मिलें।`,
    citation: '📚 National Sleep Foundation · AIIMS',
    triage: false, suggestBook: false,
  },
  stress: {
    text: `परीक्षा का तनाव वास्तविक है। यहाँ एक टूलकिट है:\n\n• **4-7-8 श्वास:** 4 सेकंड श्वास, 7 सेकंड रोकें, 8 सेकंड छोड़ें\n• **पोमोडोरो:** 25 मिनट पढ़ाई + 5 मिनट ब्रेक\n• एक अतिरिक्त घंटे की नींद एक अतिरिक्त घंटे की पढ़ाई से बेहतर है\n\nअगर तनाव असहनीय लगे, तो काउंसलर से बात करें।`,
    citation: '📚 APA · NIMHANS',
    triage: false, suggestBook: true,
  },
  lonely: {
    text: `अकेलापन और उदासी महसूस करना बहुत सामान्य है — 60%+ छात्र ऐसा महसूस करते हैं।\n\n• आज किसी एक व्यक्ति को मैसेज करें\n• एक कैम्पस गतिविधि में शामिल हों\n• स्वयंसेवा करें — यह सबसे तेज़ संबंध बनाने का तरीका है\n\nअगर उदासी गहरी या लंबे समय से है, तो यह अवसाद हो सकता है — जिसका इलाज बहुत अच्छे से होता है।`,
    citation: '📚 Journal of Adolescent Health · NIMHANS',
    triage: false, suggestBook: true,
  },
  default: {
    text: `आपने मेरे साथ यह साझा किया, इसके लिए धन्यवाद। मैं इन विषयों पर सामान्य जानकारी दे सकता हूँ:\n\n• मानसिक स्वास्थ्य: चिंता, तनाव, अवसाद, बर्नआउट\n• नींद और पोषण\n• शारीरिक स्वास्थ्य\n• रिश्ते और अकेलापन\n• संकट सहायता\n\nआप मुझे और बताएं कि आप क्या अनुभव कर रहे हैं?`,
    citation: '📚 WellnessConnect ज्ञान आधार',
    triage: false, suggestBook: false,
  },
};

const CHAT_RESPONSES_MR = {
  anxiety: {
    text: `मला समजते — चिंता खरोखरच कठीण असते, विशेषतः विद्यार्थी जीवनात.\n\n**आत्ता करून पाहा:**\n• **बॉक्स श्वसन:** ४ सेकंद श्वास घ्या → ४ सेकंद थांबा → ४ सेकंद सोडा → पुन्हा करा\n• **ग्राउंडिंग:** तुमच्या आसपास ५ गोष्टी नाव सांगा\n• **चालणे:** १० मिनिटांची चाल कोर्टिसोल कमी करते\n\n**महत्त्वाचे:** जर चिंता तुमच्या दैनंदिन जीवनावर परिणाम करत असेल, तर कृपया कॅम्पस समुपदेशकाला भेटा.`,
    citation: '📚 WHO · NIMHANS भारत',
    triage: false, suggestBook: true,
  },
  sleep: {
    text: `झोपेच्या समस्या विद्यार्थ्यांमध्ये खूप सामान्य आहेत:\n\n• दररोज एकाच वेळी झोपा आणि उठा\n• झोपण्यापूर्वी ६० मिनिटे स्क्रीन बंद करा\n• दुपारी २ नंतर चहा/कॉफी टाळा\n• अंथरुणावर फक्त झोपण्यासाठी जा\n\nजर आठवडे चालू असेल, तर कॅम्पस डॉक्टरांना भेटा.`,
    citation: '📚 National Sleep Foundation · AIIMS',
    triage: false, suggestBook: false,
  },
  stress: {
    text: `परीक्षेचा ताण खरा आहे. येथे एक टूलकिट आहे:\n\n• **४-७-८ श्वसन:** ४ सेकंद श्वास, ७ सेकंद थांबा, ८ सेकंद सोडा\n• **पोमोडोरो:** २५ मिनिटे अभ्यास + ५ मिनिटे विश्रांती\n• एक अतिरिक्त तास झोप एक अतिरिक्त तास अभ्यासापेक्षा चांगली आहे\n\nजर ताण असह्य वाटत असेल, तर समुपदेशकाशी बोला.`,
    citation: '📚 APA · NIMHANS',
    triage: false, suggestBook: true,
  },
  lonely: {
    text: `एकटे आणि दुखी वाटणे खूप सामान्य आहे — ६०%+ विद्यार्थी असे अनुभवतात.\n\n• आज एका व्यक्तीला मेसेज करा\n• एका कॅम्पस उपक्रमात सहभागी व्हा\n• स्वयंसेवा करा — हा सर्वात जलद संपर्क तयार करण्याचा मार्ग आहे\n\nजर दुःख खोल किंवा दीर्घकाळ असेल, तर ते नैराश्य असू शकते — जे खूप चांगल्या प्रकारे उपचार करता येते.`,
    citation: '📚 Journal of Adolescent Health · NIMHANS',
    triage: false, suggestBook: true,
  },
  default: {
    text: `हे माझ्याशी शेअर केल्याबद्दल धन्यवाद. मी या विषयांवर सामान्य माहिती देऊ शकतो:\n\n• मानसिक आरोग्य: चिंता, ताण, नैराश्य, बर्नआउट\n• झोप आणि पोषण\n• शारीरिक आरोग्य\n• नाती आणि एकटेपणा\n• संकट समर्थन\n\nतुम्हाला काय वाटत आहे ते थोडे अधिक सांगाल का?`,
    citation: '📚 WellnessConnect ज्ञान केंद्र',
    triage: false, suggestBook: false,
  },
};

// ─── APP STATE ────────────────────────────────────────────────────────────────
let currentLang = 'en';
let isTyping = false;

// ─── LANGUAGE SWITCHER ────────────────────────────────────────────────────────
function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  const tag = document.getElementById('chatLangTag');
  if (tag) tag.textContent = lang.toUpperCase();

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const t = TRANSLATIONS[lang];
    if (t && t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update input placeholder
  const inp = document.getElementById('chatInput');
  if (inp) inp.placeholder = inp.getAttribute(`data-placeholder-${lang}`) || inp.getAttribute('data-placeholder-en');

  // Update html lang attr
  document.documentElement.lang = lang === 'hi' ? 'hi' : lang === 'mr' ? 'mr' : 'en';
}

// lang-btn only exists on index.html
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
  if (navLink) navLink.classList.add('active');
  closeMobileNav();
}

// nav-link hash handling only applies on index.html (other pages use real hrefs)
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href') || '';
  if (!href.startsWith('#')) return; // skip real page links
  link.addEventListener('click', e => {
    e.preventDefault();
    showSection(href.replace('#', ''));
  });
});

// ─── MOBILE NAV ───────────────────────────────────────────────────────────────
function closeMobileNav() {
  const nav = document.getElementById('mobileNav');
  if (nav) nav.classList.remove('open');
}

// hamburger only exists on index.html — guard it
const _hamburger = document.getElementById('hamburger');
if (_hamburger) _hamburger.addEventListener('click', () => {
  let nav = document.getElementById('mobileNav');
  if (!nav) {
    nav = document.createElement('div');
    nav.id = 'mobileNav';
    nav.className = 'mobile-nav';
    nav.innerHTML = `
      <div class="mobile-nav-panel">
        <button class="mobile-nav-close" onclick="closeMobileNav()">✕</button>
        <button class="mobile-nav-link" onclick="showSection('assistant');closeMobileNav()">💬 Chat</button>
        <button class="mobile-nav-link" onclick="showSection('resources');closeMobileNav()">📚 Resources</button>
        <button class="mobile-nav-link" onclick="showSection('book');closeMobileNav()">📅 Book Appointment</button>
        <button class="mobile-nav-link" onclick="window.location.href='helplines.html'">🆘 Helplines</button>
        <a href="ai-assistant.html" class="mobile-nav-link" style="display:block;text-decoration:none">🤖 AI Chat</a>
        <a href="meal-plan.html" class="mobile-nav-link" style="display:block;text-decoration:none">🥗 Meal Plan</a>
        <a href="wellness-dashboard.html" class="mobile-nav-link" style="display:block;text-decoration:none">📊 Wellness Dashboard</a>
        <a href="dashboard.html" class="mobile-nav-link" style="display:block;text-decoration:none">📅 My Appointments</a>
        <a href="register.html" class="mobile-nav-link" style="display:block;text-decoration:none;color:var(--primary)">✨ Register / Login</a>
        <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:8px 0"/>
        <div class="lang-selector" style="justify-content:center">
          <button class="lang-btn ${currentLang==='en'?'active':''}" onclick="setLanguage('en');closeMobileNav()">EN</button>
          <button class="lang-btn ${currentLang==='hi'?'active':''}" onclick="setLanguage('hi');closeMobileNav()">हि</button>
          <button class="lang-btn ${currentLang==='mr'?'active':''}" onclick="setLanguage('mr');closeMobileNav()">म</button>
        </div>
        <button class="btn btn-urgent mt-16" style="width:100%" onclick="window.location.href='helplines.html'">🆘 Emergency Helplines</button>
      </div>`;
    nav.addEventListener('click', e => { if (e.target === nav) closeMobileNav(); });
    document.body.appendChild(nav);
  }
  nav.classList.add('open');
});

// ─── HEADER SCROLL EFFECT ─────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const hdr = document.getElementById('header');
  if (hdr) hdr.classList.toggle('scrolled', window.scrollY > 10);
});

// ─── CHAT ENGINE ──────────────────────────────────────────────────────────────
function classifyInput(text) {
  const t = text.toLowerCase();
  if (TRIAGE_URGENT.some(k => t.includes(k))) return '__urgent__';
  if (TRIAGE_SERIOUS.some(k => t.includes(k))) return '__serious__';
  if (/anxi|worry|worr|panic|nervous|scared|fear|घबरा|चिंता|anxiety/.test(t)) return 'anxiety';
  if (/headache|head ache|migraine|सिरदर्द|डोकेदुखी/.test(t)) return 'headache';
  if (/sleep|insomnia|can't sleep|awake|नींद|झोप/.test(t)) return 'sleep';
  if (/stress|exam|pressure|overwhelm|तनाव|ताण|burnout/.test(t)) return t.includes('burnout') ? 'burnout' : 'stress';
  if (/lonely|alone|sad|depress|hopeless|empty|cry|अकेला|उदास|एकटे/.test(t)) return 'lonely';
  if (/burnout|burn out|exhausted|drained|cynic/.test(t)) return 'burnout';
  if (/eat|food|diet|nutrition|weight|hunger|खाना|भोजन|जेवण/.test(t)) return 'nutrition';
  if (/relation|friend|family|breakup|lonely|love|romantic|रिश्ता|नाते/.test(t)) return 'relationships';
  if (/grief|loss|died|death|bereavement|शोक|दुःख/.test(t)) return 'grief';
  if (/drug|alcohol|substance|tobacco|smoke|नशा|व्यसन/.test(t)) return 'substance';
  if (/physical|sick|fever|pain|ill|hurt|doctor|clinic|बीमार|आजारी/.test(t)) return 'physical';
  return 'default';
}

function getResponse(key) {
  if (currentLang === 'hi') {
    return CHAT_RESPONSES_HI[key] || CHAT_RESPONSES_HI.default;
  }
  if (currentLang === 'mr') {
    return CHAT_RESPONSES_MR[key] || CHAT_RESPONSES_MR.default;
  }
  return CHAT_RESPONSES.en[key] || CHAT_RESPONSES.en.default;
}

function formatText(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n• /g, '</p><ul><li>')
    .replace(/\n•/g, '<li>')
    .replace(/• /g, '<li>')
    .replace(/<\/p><ul><li>/g, '<ul><li>')
    .split('\n').join('<br>');
}

function appendMessage(role, html, citation, source) {
  const container = document.getElementById('chatMessages');
  const group = document.createElement('div');
  group.className = `msg-group ${role}`;

  const msg = document.createElement('div');
  msg.className = role === 'bot' ? 'msg bot-msg' : 'msg user-msg';

  if (role === 'bot') {
    let content = `<p>${formatText(html)}</p>`;
    if (citation) content += `<div class="msg-citation">${citation}</div>`;
    msg.innerHTML = content;
    if (source) {
      const src = document.createElement('div');
      src.className = 'msg-source';
      src.textContent = source;
      group.appendChild(msg);
      group.appendChild(src);
    } else {
      group.appendChild(msg);
    }
  } else {
    msg.textContent = html;
    group.appendChild(msg);
  }

  container.appendChild(group);
  container.scrollTop = container.scrollHeight;
  return group;
}

function showBookButton() {
  const container = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'msg-group bot';
  div.innerHTML = `<div style="display:flex;gap:8px;flex-wrap:wrap;padding:4px 0">
    <button class="btn btn-primary" style="font-size:13px;padding:7px 16px" onclick="showSection('book')">📅 ${currentLang==='hi'?'अपॉइंटमेंट बुक करें':currentLang==='mr'?'अपॉइंटमेंट बुक करा':'Book an Appointment'}</button>
    <button class="btn btn-secondary" style="font-size:13px;padding:7px 16px" onclick="showSection('helplines')">📞 ${currentLang==='hi'?'हेल्पलाइन देखें':currentLang==='mr'?'हेल्पलाइन पाहा':'View Helplines'}</button>
  </div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function handleUrgentTriage() {
  const msgs = {
    en: { title: '🆘 Immediate Support Available', body: 'It sounds like you may be in crisis. Please reach out to a helpline right now — you don\'t have to face this alone. iCall: 9152987821 | Vandrevala: 1860-2662-345 | Emergency: 112' },
    hi: { title: '🆘 तत्काल सहायता उपलब्ध है', body: 'ऐसा लगता है कि आप संकट में हो सकते हैं। कृपया अभी एक हेल्पलाइन पर पहुंचें। iCall: 9152987821 | Vandrevala: 1860-2662-345 | आपातकाल: 112' },
    mr: { title: '🆘 तत्काळ आधार उपलब्ध आहे', body: 'असे दिसते की तुम्ही संकटात असू शकता. कृपया आत्ता हेल्पलाइनशी संपर्क साधा. iCall: 9152987821 | Vandrevala: 1860-2662-345 | आणीबाणी: 112' }
  };
  const m = msgs[currentLang] || msgs.en;
  const resp = {
    text: `${m.body}\n\nI'm not able to provide crisis counselling, but trained professionals are available right now. Please call or click the button below.`,
    citation: '🆘 Crisis Resources — Please Call Now',
  };
  if (currentLang !== 'en') resp.text = m.body;
  appendMessage('bot', resp.text, resp.citation);
  showBookButton();
  showSection('helplines');
}

function handleSeriousTriage(key) {
  const alerts = {
    en: { title: '⚠️ This may need medical attention', body: 'Some symptoms you\'ve described may need professional evaluation. Please visit the campus health clinic or call a healthcare provider.' },
    hi: { title: '⚠️ यह चिकित्सा ध्यान की आवश्यकता हो सकती है', body: 'आपके द्वारा वर्णित कुछ लक्षणों को पेशेवर मूल्यांकन की आवश्यकता हो सकती है। कृपया कैम्पस स्वास्थ्य क्लिनिक जाएं।' },
    mr: { title: '⚠️ याला वैद्यकीय लक्ष लागू शकते', body: 'तुम्ही वर्णन केलेल्या काही लक्षणांना व्यावसायिक मूल्यांकनाची आवश्यकता असू शकते. कृपया कॅम्पस आरोग्य क्लिनिकला भेट द्या.' }
  };
  const a = alerts[currentLang] || alerts.en;
  showTriageAlert(a.title, a.body);
}

function showTriageAlert(title, body) {
  const tt = document.getElementById('triageTitle');
  const tb = document.getElementById('triageBody');
  const ta = document.getElementById('triageAlert');
  if (!tt || !tb || !ta) return;
  tt.textContent = title;
  tb.textContent = body;
  ta.style.display = 'block';
  setTimeout(() => { ta.style.display = 'none'; }, 8000);
}

// ─── CONVERSATION HISTORY + GEMINI MULTI-TURN ────────────────────────────────
// Each entry: { role: 'user'|'model', parts: [{ text }] }
let chatHistory = [];

// Load history from sessionStorage on page load
try {
  const saved = sessionStorage.getItem('wc_chat_history');
  if (saved) chatHistory = JSON.parse(saved);
} catch(e) { chatHistory = []; }

function saveChatHistory() {
  try { sessionStorage.setItem('wc_chat_history', JSON.stringify(chatHistory)); } catch(e) {}
}

// ─── GEMINI CONFIG ────────────────────────────────────────────────────────────
// Get your FREE key at https://aistudio.google.com/app/apikey and paste below
const GEMINI_API_KEY = 'AIzaSyDemo_Replace_With_Your_Key';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

const SYSTEM_INSTRUCTION = `You are Arogya — a warm, empathetic, highly intelligent student wellness assistant for WellnessConnect, a campus health platform in India.

PERSONALITY: Friendly, caring, like a knowledgeable senior student who genuinely listens. Never robotic. Never give the same canned answer twice.

CAPABILITIES — answer ANY question a college student might ask, including:
- Mental health: anxiety, depression, stress, panic attacks, loneliness, grief, self-esteem
- Physical health: headaches, sleep issues, fatigue, nutrition, exercise, fever, pain
- Academic life: exam stress, burnout, concentration, motivation, procrastination, time management
- Social life: friendships, relationships, breakups, peer pressure, family issues
- Campus life: homesickness, ragging, financial stress, career anxiety
- General wellness: meditation, breathing exercises, journaling, yoga
- Crisis: immediately provide iCall 9152987821, Vandrevala 1860-2662-345, Emergency 112

RULES:
- Remember the FULL conversation history and refer back to it naturally (e.g. "As you mentioned earlier…", "Since you told me about your sleep issues…")
- Give specific, actionable advice — not vague platitudes
- Use bullet points for tips, bold for key terms
- Keep responses 3–6 sentences or a short list — never one-liners, never essays
- Ask ONE follow-up question at the end to keep the conversation going
- NEVER say "I cannot help with that" — always try to help or redirect
- Respond in the SAME LANGUAGE the student uses (English/Hindi/Marathi)
- Add a warm emoji at the start of each reply
- Disclaimer: end with one small italic note "_(General info — always consult a professional for medical/mental health concerns)_" only on first message about a new health topic`;

async function callGeminiAPI(userText) {
  // Build full multi-turn contents array (system + history + new message)
  const contents = [];

  // Inject system instruction as the first user turn (Gemini Flash supports systemInstruction field too)
  // We'll use systemInstruction parameter for cleanliness
  // Add conversation history
  chatHistory.forEach(h => contents.push(h));

  // Add current user message
  contents.push({ role: 'user', parts: [{ text: userText }] });

  try {
    const res = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
        contents,
        generationConfig: {
          temperature: 0.85,
          maxOutputTokens: 500,
          topP: 0.95,
          topK: 40
        },
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT',        threshold: 'BLOCK_ONLY_HIGH' },
          { category: 'HARM_CATEGORY_HATE_SPEECH',       threshold: 'BLOCK_ONLY_HIGH' },
          { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
          { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' }
        ]
      })
    });
    if (!res.ok) throw new Error('API ' + res.status);
    const data = await res.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!reply) throw new Error('empty');

    // Save to history (keep last 20 turns to avoid token overflow)
    chatHistory.push({ role: 'user',  parts: [{ text: userText }] });
    chatHistory.push({ role: 'model', parts: [{ text: reply }] });
    if (chatHistory.length > 40) chatHistory = chatHistory.slice(-40);
    saveChatHistory();
    return reply;
  } catch (err) {
    return null;
  }
}

// ─── SMART LOCAL FALLBACK (answers any question with context-aware responses) ─
const LOCAL_FALLBACK = {
  greet:     ['Hey there! 😊 I\'m Arogya, your wellness buddy. What\'s on your mind today?', 'Hi! 👋 Great to see you. How are you feeling right now?', 'Hello! 🌟 I\'m here to listen. What would you like to talk about?'],
  thanks:    ['You\'re so welcome! 💙 Remember, it\'s okay to ask for help anytime.', 'Anytime! 🌿 I\'m always here for you. Is there anything else on your mind?'],
  howAreYou: ['I\'m here and fully focused on you! 😊 More importantly — how are *you* feeling today?', 'Always good when I can help a student! 💪 How about you — what\'s going on?'],
  anxiety:   ['Anxiety is really tough, especially in college. 😔 Here are some quick things that help:\n\n• **Box breathing** — inhale 4s, hold 4s, exhale 4s, hold 4s\n• **5-4-3-2-1 grounding** — name 5 things you see, 4 you hear…\n• **Limit caffeine** — it spikes anxiety\n• Talk to someone you trust\n\nHow long have you been feeling this way?'],
  stress:    ['Exam stress is super common but it\'s manageable. 💪 Try these:\n\n• **Pomodoro technique** — 25 min study, 5 min break\n• Write down your worries — it empties the mental load\n• Sleep 7-8 hrs — it boosts memory\n• One thing at a time\n\nWhat subject or situation is stressing you most?'],
  sleep:     ['Poor sleep makes everything harder. 😴 Let\'s fix that:\n\n• **No screens** 30 min before bed\n• Keep a fixed sleep/wake time even on weekends\n• Cool, dark room\n• Try a 4-7-8 breathing technique\n\nAre you having trouble falling asleep or staying asleep?'],
  sad:       ['I\'m really sorry you\'re feeling this way. 💙 Sadness is valid and you don\'t have to face it alone.\n\n• Talk to someone you trust\n• Get outside for 15 min — sunlight boosts serotonin\n• Write what you\'re feeling\n• Be gentle with yourself\n\nHow long have you been feeling low?'],
  food:      ['Nutrition has a huge impact on mood and focus. 🥗 Quick tips:\n\n• Don\'t skip breakfast — it affects concentration\n• Eat every 3-4 hrs to keep energy stable\n• Omega-3s (nuts, fish) help brain health\n• Drink more water than you think you need\n\nAre you eating regularly or skipping meals?'],
  physical:  ['Sounds like your body needs some attention. 💊 For any persistent symptom (3+ days), please visit the campus health clinic. In the meantime:\n\n• Rest, hydrate, avoid self-medicating\n• Track what makes it better or worse\n\nWhat exactly are you experiencing?'],
  default:   [
    'That\'s a great question! 🤔 Let me help you think through this. Can you tell me a bit more about what\'s going on so I can give you the most useful guidance?',
    'I hear you. 💙 Every student\'s situation is different — could you share a little more detail so I can give you specific advice?',
    'Thanks for bringing this up. 🌟 I want to make sure I give you the right guidance. What aspect of this is bothering you most?',
    'That sounds like something worth exploring. 😊 Tell me more — the more context you share, the better I can help you.',
    'I\'m listening. 🌿 This is a safe space — share as much or as little as you\'d like and we\'ll work through it together.'
  ]
};

let localFallbackCounters = {};
function getLocalFallback(key) {
  const arr = LOCAL_FALLBACK[key] || LOCAL_FALLBACK.default;
  localFallbackCounters[key] = ((localFallbackCounters[key] || 0) + 1) % arr.length;
  return arr[localFallbackCounters[key]];
}

function classifyLocal(text) {
  const t = text.toLowerCase();
  if (/^(hi|hello|hey|namaste|namaskar|hii|helo)/i.test(t.trim())) return 'greet';
  if (/thank|thanks|shukriya|dhanyavad/i.test(t)) return 'thanks';
  if (/how are you|how r u|kaise ho|kaisa hai/i.test(t)) return 'howAreYou';
  if (/anxi|panic|nervous|worry|fear|घबरा|चिंता/.test(t)) return 'anxiety';
  if (/stress|exam|pressure|burnout|overwhelm|तनाव|ताण/.test(t)) return 'stress';
  if (/sleep|insomnia|awake|रात|नींद|झोप/.test(t)) return 'sleep';
  if (/sad|depress|lonely|empty|hopeless|cry|उदास|एकटे/.test(t)) return 'sad';
  if (/eat|food|diet|nutrition|weight|भोजन|खाना|जेवण/.test(t)) return 'food';
  if (/sick|pain|fever|headache|hurt|ill|doctor|बीमार|आजारी/.test(t)) return 'physical';
  return 'default';
}

async function processMessage(text) {
  if (isTyping) return;
  isTyping = true;

  // Hide quick prompts on first message
  const qp = document.getElementById('quickPrompts');
  if (qp) qp.style.display = 'none';

  appendMessage('user', text);

  // Show typing indicator
  const ti = document.getElementById('typingIndicator');
  ti.style.display = 'flex';

  // Urgent triage — always instant, no API needed
  if (TRIAGE_URGENT.some(k => text.toLowerCase().includes(k))) {
    await new Promise(r => setTimeout(r, 500));
    ti.style.display = 'none';
    handleUrgentTriage();
    isTyping = false;
    return;
  }

  // Try Gemini with full history
  const geminiReply = await callGeminiAPI(text);
  ti.style.display = 'none';

  if (geminiReply) {
    const citation = '✨ Arogya AI · Remembers your conversation · Not a diagnosis';
    const group = appendMessage('bot', '', citation);
    const msgEl = group.querySelector('.bot-msg p') || group.querySelector('.bot-msg');
    await streamText(msgEl, geminiReply);
  } else {
    // Smart local fallback — never gives "I can't help"
    const localKey = classifyLocal(text);
    const fallbackText = getLocalFallback(localKey);

    // Also save to history so context builds up even without API
    chatHistory.push({ role: 'user',  parts: [{ text }] });
    chatHistory.push({ role: 'model', parts: [{ text: fallbackText }] });
    if (chatHistory.length > 40) chatHistory = chatHistory.slice(-40);
    saveChatHistory();

    const group = appendMessage('bot', '', 'ℹ️ Offline mode — General info only, not a diagnosis');
    const msgEl = group.querySelector('.bot-msg p') || group.querySelector('.bot-msg');
    await streamText(msgEl, fallbackText);

    // Suggest booking for physical/sad topics
    if (['sad', 'physical', 'anxiety'].includes(localKey)) {
      setTimeout(() => showBookButton(), 500);
    }
  }

  isTyping = false;
}

// ─── STREAM TEXT WORD-BY-WORD ─────────────────────────────────────────────────
async function streamText(el, fullText) {
  const container = document.getElementById('chatMessages');
  const words = fullText.split(' ');
  let built = '';
  for (let i = 0; i < words.length; i++) {
    built += (i > 0 ? ' ' : '') + words[i];
    el.innerHTML = formatText(built) + '<span class="cursor-blink">▌</span>';
    container.scrollTop = container.scrollHeight;
    await new Promise(r => setTimeout(r, 22 + Math.random() * 16));
  }
  el.innerHTML = formatText(fullText);
  container.scrollTop = container.scrollHeight;
}

// ─── CLEAR CHAT ───────────────────────────────────────────────────────────────
function clearChat() {
  chatHistory = [];
  saveChatHistory();
  const container = document.getElementById('chatMessages');
  container.innerHTML = `
    <div class="msg-group bot">
      <div class="msg bot-msg" id="welcomeMsg">
        <p>👋 Hello! I'm <strong>Arogya</strong>, your wellness companion. I remember our full conversation, so feel free to continue where we left off — or start fresh!</p>
        <p class="mt-8">What's on your mind today?</p>
        <div class="msg-citation">ℹ️ General info only — not a diagnosis</div>
      </div>
    </div>
    <div class="quick-prompts" id="quickPrompts">
      <p class="qp-label">Try asking:</p>
      <div class="qp-grid">
        <button class="qp-btn" onclick="sendQuickPrompt(this)">I've been feeling very anxious lately</button>
        <button class="qp-btn" onclick="sendQuickPrompt(this)">I have a headache for 3 days</button>
        <button class="qp-btn" onclick="sendQuickPrompt(this)">I can't sleep properly</button>
        <button class="qp-btn" onclick="sendQuickPrompt(this)">I feel very stressed about exams</button>
        <button class="qp-btn" onclick="sendQuickPrompt(this)">I feel lonely and sad</button>
        <button class="qp-btn" onclick="sendQuickPrompt(this)">What are signs of burnout?</button>
      </div>
    </div>`;
}

function sendMessage() {
  const inp = document.getElementById('chatInput');
  const text = inp.value.trim();
  if (!text) return;
  inp.value = '';
  inp.style.height = 'auto';
  processMessage(text);
}

function sendQuickPrompt(btn) {
  const text = btn.textContent.trim();
  processMessage(text);
}

function askTopic(topic) {
  showSection('assistant');
  setTimeout(() => processMessage(`Tell me about ${topic}`), 300);
}

function handleInputKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

// Auto-resize textarea — only on index.html
const _chatInputEl = document.getElementById('chatInput');
if (_chatInputEl) _chatInputEl.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = Math.min(this.scrollHeight, 100) + 'px';
});

// ─── MICROPHONE / VOICE INPUT ─────────────────────────────────────────────────
(function initMic() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const micBtn = document.getElementById('micBtn');

  // If no mic button on this page (e.g. not index.html), skip
  if (!micBtn) return;

  if (!SpeechRecognition) {
    // Browser doesn't support speech recognition — hide the button gracefully
    micBtn.style.display = 'none';
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;

  // Mirror the active language into the recogniser
  function syncLang() {
    const map = { en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN' };
    recognition.lang = map[currentLang] || 'en-IN';
  }

  let listening = false;

  window.toggleMic = function () {
    if (listening) {
      recognition.stop();
    } else {
      syncLang();
      recognition.start();
    }
  };

  recognition.onstart = function () {
    listening = true;
    micBtn.classList.add('listening');
    micBtn.title = 'Listening… click to stop';
    // Show placeholder feedback in the input field
    const inp = document.getElementById('chatInput');
    if (inp) inp.placeholder = '🎤 Listening…';
  };

  recognition.onresult = function (e) {
    const inp = document.getElementById('chatInput');
    if (!inp) return;
    let interim = '';
    let final = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const t = e.results[i][0].transcript;
      if (e.results[i].isFinal) {
        final += t;
      } else {
        interim += t;
      }
    }
    inp.value = final || interim;
    // Trigger auto-resize
    inp.style.height = 'auto';
    inp.style.height = Math.min(inp.scrollHeight, 100) + 'px';
  };

  recognition.onend = function () {
    listening = false;
    micBtn.classList.remove('listening');
    micBtn.title = 'Voice input';
    // Restore placeholder
    const inp = document.getElementById('chatInput');
    if (inp) {
      const placeholderKey = 'data-placeholder-' + currentLang;
      inp.placeholder = inp.getAttribute(placeholderKey) || 'Type your question here...';
      // Auto-send if there is transcribed text
      if (inp.value.trim()) {
        sendMessage();
      }
    }
  };

  recognition.onerror = function (e) {
    listening = false;
    micBtn.classList.remove('listening');
    micBtn.title = 'Voice input';
    const inp = document.getElementById('chatInput');
    if (inp) {
      const placeholderKey = 'data-placeholder-' + currentLang;
      inp.placeholder = inp.getAttribute(placeholderKey) || 'Type your question here...';
    }
    if (e.error !== 'no-speech' && e.error !== 'aborted') {
      console.warn('Speech recognition error:', e.error);
    }
  };
})();

// ─── RESOURCES ────────────────────────────────────────────────────────────────
function renderResources(filter = 'all') {
  const grid = document.getElementById('resourcesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  Object.entries(KNOWLEDGE_BASE).forEach(([key, item]) => {
    if (filter !== 'all' && item.category !== filter) return;
    const card = document.createElement('div');
    card.className = 'resource-card';
    card.setAttribute('data-category', item.category);
    card.innerHTML = `
      <span class="resource-tag ${item.tag}">${item.tagLabel}</span>
      <div class="resource-title">${item.title}</div>
      <div class="resource-desc">${item.desc}</div>
      <div class="resource-source">${item.source}</div>`;
    card.addEventListener('click', () => openResourceModal(key));
    grid.appendChild(card);
  });
}

function openResourceModal(key) {
  const item = KNOWLEDGE_BASE[key];
  if (!item) return;
  const rmc = document.getElementById('resourceModalContent');
  if (!rmc) return;
  rmc.innerHTML = `
    <div class="rm-header">
      <span class="resource-tag ${item.tag}" style="margin-bottom:10px;display:inline-block">${item.tagLabel}</span>
      <div class="rm-title">${item.title}</div>
      <div class="rm-meta">
        <div class="rm-source">📚 Source: ${item.source}</div>
      </div>
    </div>
    <div class="rm-body">${item.body}</div>
    <div style="margin-top:20px;display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn btn-primary" onclick="showSection('book');closeModal('resourceModal')">📅 Book Appointment</button>
      <button class="btn btn-secondary" onclick="closeModal('resourceModal')">Close</button>
    </div>`;
  const rm = document.getElementById('resourceModal');
  if (rm) rm.style.display = 'flex';
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderResources(btn.dataset.filter);
  });
});

// ─── HELPLINES ────────────────────────────────────────────────────────────────
function renderHelplines() {
  const grid = document.getElementById('helplinesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  HELPLINES.forEach(h => {
    const card = document.createElement('div');
    card.className = 'helpline-card';
    if (h.urgent) card.style.borderColor = '#fca5a5';
    card.innerHTML = `
      <div class="hl-category">${h.category}</div>
      <div class="hl-name">${h.urgent ? '🆘 ' : ''}${h.name}</div>
      <div class="hl-desc">${h.desc}</div>
      <div class="hl-number">📞 ${h.number}</div>
      <div class="hl-hours">🕐 ${h.hours}</div>
      <div class="hl-actions">
        <a href="tel:${h.number.replace(/[^0-9]/g, '')}" class="hl-btn hl-call">Call Now</a>
        ${h.chat ? '<button class="hl-btn hl-chat" onclick="showSection(\'assistant\')">Chat Support</button>' : ''}
      </div>`;
    grid.appendChild(card);
  });
}

// ─── AVAILABILITY SLOTS ───────────────────────────────────────────────────────
function renderAvailability() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const statuses = ['open', 'open', 'limited', 'open', 'limited', 'full'];
  const labels = ['Open', 'Open', 'Limited', 'Open', 'Limited', 'Full'];
  const container = document.getElementById('availSlots');
  if (!container) return;
  container.innerHTML = days.map((d, i) =>
    `<div class="avail-slot ${statuses[i]}">${d}<br><small>${labels[i]}</small></div>`
  ).join('');
}

// ─── BOOKING FORM ─────────────────────────────────────────────────────────────
// Set min date to today
(function setMinDate() {
  const dateInput = document.getElementById('bDate');
  if (dateInput) {
    const today = new Date();
    dateInput.min = today.toISOString().split('T')[0];
    // Default to tomorrow
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }
})();

// ─── APPOINTMENT STORAGE HELPERS ──────────────────────────────────────────────
function getStoredAppointments() {
  try { return JSON.parse(localStorage.getItem('wc_appointments') || '[]'); } catch(e) { return []; }
}
function saveStoredAppointments(arr) {
  localStorage.setItem('wc_appointments', JSON.stringify(arr));
}

function submitBooking(e) {
  e.preventDefault();
  const name    = document.getElementById('bName').value.trim();
  const email   = document.getElementById('bEmail').value.trim();
  const phone   = document.getElementById('bPhone').value.trim();
  const type    = document.getElementById('bType').value;
  const concern = document.getElementById('bConcern').value;
  const date    = document.getElementById('bDate').value;
  const time    = document.getElementById('bTime').value;
  const notes   = document.getElementById('bNotes').value.trim();

  const ref = 'WC-' + Math.random().toString(36).substr(2, 8).toUpperCase();

  const typeLabels = {
    counsellor: 'Mental Health Counsellor',
    clinic: 'Campus Health Clinic',
    nutrition: 'Nutritionist',
    physio: 'Physiotherapist',
    online: 'Tele-consultation'
  };

  // ── Save to localStorage ──
  const appointment = {
    ref, name, email, phone, type, concern, date, time, notes,
    status: 'upcoming',
    bookedAt: new Date().toISOString(),
    lang: currentLang
  };
  const existing = getStoredAppointments();
  existing.unshift(appointment);
  saveStoredAppointments(existing);

  // ── Show confirmation modal ──
  const msgs = {
    en: `Your appointment with the ${typeLabels[type] || type} has been confirmed for ${date} at ${time}. Reference: ${ref}. A confirmation will be sent to your email. Please arrive 10 minutes early.`,
    hi: `${typeLabels[type] || type} के साथ आपकी अपॉइंटमेंट ${date} को ${time} बजे के लिए पुष्टि हो गई है। संदर्भ: ${ref}`,
    mr: `${typeLabels[type] || type} सोबत तुमची अपॉइंटमेंट ${date} रोजी ${time} वाजता पुष्टी झाली आहे. संदर्भ: ${ref}`
  };

  document.getElementById('modalBody').textContent = msgs[currentLang] || msgs.en;
  document.getElementById('modalRef').innerHTML = `${ref} &nbsp;·&nbsp; <a href="dashboard.html" style="color:var(--primary);font-weight:700">View in My Appointments →</a>`;
  document.getElementById('bookingModal').style.display = 'flex';
  document.getElementById('bookingForm').reset();

  // ── Refresh inline history if visible ──
  if (document.getElementById('inlineHistoryGrid')) renderInlineHistory();
}

// ─── INLINE APPOINTMENT HISTORY on Book page ──────────────────────────────────
const TYPE_LABELS_MAP = { counsellor:'Mental Health Counsellor', clinic:'Campus Health Clinic', nutrition:'Nutritionist', physio:'Physiotherapist', online:'Tele-consultation' };
const CONCERN_LABELS_MAP = { anxiety:'Anxiety / Stress', depression:'Low Mood / Depression', sleep:'Sleep Issues', relationships:'Relationship Issues', academic:'Academic Pressure', physical:'Physical Health', other:'Other' };
const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function renderInlineHistory() {
  const grid = document.getElementById('inlineHistoryGrid');
  if (!grid) return;
  const appts = getStoredAppointments().slice(0, 5); // show last 5
  if (!appts.length) {
    grid.innerHTML = `<p style="color:var(--muted);font-size:13.5px;text-align:center;padding:20px 0">No appointments yet. Book your first session above! 📅</p>`;
    return;
  }
  grid.innerHTML = appts.map(a => {
    const d = new Date(a.date + 'T00:00:00');
    const statusColor = a.status === 'upcoming' ? 'var(--primary)' : a.status === 'completed' ? 'var(--success)' : 'var(--danger)';
    const statusBg    = a.status === 'upcoming' ? 'rgba(124,109,250,.12)' : a.status === 'completed' ? 'rgba(52,211,153,.1)' : 'rgba(248,113,113,.1)';
    return `<div style="background:var(--surface2);border:1px solid var(--border2);border-radius:var(--radius-sm);padding:14px 18px;display:flex;align-items:center;gap:14px;transition:all .22s" onmouseover="this.style.borderColor='rgba(124,109,250,.4)'" onmouseout="this.style.borderColor='rgba(255,255,255,.14)'">
      <div style="background:var(--primary-light);border:1px solid rgba(124,109,250,.3);border-radius:8px;padding:7px 10px;text-align:center;flex-shrink:0;min-width:48px">
        <div style="font-size:18px;font-weight:800;color:var(--primary);line-height:1">${d.getDate()}</div>
        <div style="font-size:10px;color:var(--muted);text-transform:uppercase;font-weight:600">${MONTHS_SHORT[d.getMonth()]}</div>
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:700;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${TYPE_LABELS_MAP[a.type]||a.type}</div>
        <div style="font-size:12.5px;color:var(--muted)">${CONCERN_LABELS_MAP[a.concern]||a.concern} · ${a.time}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px;flex-shrink:0">
        <span style="padding:3px 10px;border-radius:12px;font-size:11.5px;font-weight:700;background:${statusBg};color:${statusColor}">${a.status.charAt(0).toUpperCase()+a.status.slice(1)}</span>
        <span style="font-size:11px;color:var(--light);font-family:monospace">${a.ref}</span>
      </div>
    </div>`;
  }).join('');
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.style.display = 'none';
  });
});

// ─── INIT (only runs on pages that have the main chat UI) ─────────────────────
(function initIndexPage() {
  // Only run on index.html which has #chatMessages
  if (!document.getElementById('chatMessages')) return;

  renderResources();
  renderHelplines();
  renderAvailability();
  renderInlineHistory();
  setLanguage('en');

  // Restore previous chat messages from sessionStorage into the UI
  if (chatHistory.length) {
    const container = document.getElementById('chatMessages');
    container.innerHTML = '';
    chatHistory.forEach(turn => {
      const role = turn.role === 'model' ? 'bot' : 'user';
      const text = turn.parts?.[0]?.text || '';
      if (!text) return;
      const group = document.createElement('div');
      group.className = `msg-group ${role}`;
      const msg = document.createElement('div');
      msg.className = role === 'bot' ? 'msg bot-msg' : 'msg user-msg';
      if (role === 'bot') {
        msg.innerHTML = `<p>${formatText(text)}</p><div class="msg-citation">✨ Arogya AI · Conversation restored</div>`;
      } else {
        msg.textContent = text;
      }
      group.appendChild(msg);
      container.appendChild(group);
    });
    container.scrollTop = container.scrollHeight;
    const label = document.createElement('div');
    label.style.cssText = 'text-align:center;font-size:11.5px;color:var(--light);padding:6px 0 2px;';
    label.textContent = '── Conversation restored from your last session ──';
    container.insertBefore(label, container.firstChild);
  }

  // Show first section — also only index.html has sections
  showSection('assistant');
})();

// ─── PARTICLE CANVAS (main index) ────────────────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, dots = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 55; i++) {
    dots.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.4 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: Math.random() * 0.45 + 0.08,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    dots.forEach(d => {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0) d.x = W; if (d.x > W) d.x = 0;
      if (d.y < 0) d.y = H; if (d.y > H) d.y = 0;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(124,109,250,${d.a})`;
      ctx.fill();
    });
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(124,109,250,${0.07 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();
