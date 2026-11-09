import { Tolgee, FormatSimple } from "@tolgee/react";

function getSavedLanguage() {
    try {
        const language = localStorage.getItem("lang");
        return ["en", "hi"].includes(language) ? language : "en";
    } catch {
        return "en";
    }
}

export const tolgee = Tolgee()
    .use(FormatSimple())
    .init({
        availableLanguages: ["en", "hi"],
        language: getSavedLanguage(),
        fallbackLanguage: "en",
        staticData: {
            en: {
                "nav.home": "Home",
                "nav.bmi": "BMI",
                "home.title": "Welcome to HealthPro",
                "home.sub": "A simple BMI calculator with metric and imperial units, local history, and CSV export.",
                "home.why": "What you can do",
                "home.feature.units": "Calculate BMI using kg/cm or lb/ft + in.",
                "home.feature.range": "See an adult BMI category and a reference weight range.",
                "home.feature.history": "Keep up to 20 calculations in this browser and export them as CSV.",
                "home.feature.language": "Use the interface in English or Hindi.",
                "home.credit": "Created by",
                "footer.copy": "All rights reserved.",
                "bmi.title": "BMI Calculator",
                "bmi.desc":
                    "Calculate Body Mass Index with unit conversions, healthy range, and history.",
                "bmi.label.weight": "Weight",
                "bmi.label.height": "Height",
                "bmi.label.weightUnit": "Weight unit",
                "bmi.label.heightUnit": "Height unit",
                "bmi.label.heightFeet": "Height in feet",
                "bmi.label.heightInches": "Height in inches",

                "bmi.unit.kg": "kg",
                "bmi.unit.lb": "lb",
                "bmi.unit.cm": "cm",
                "bmi.unit.ftin": "ft + in",

                "bmi.ph.weight": "e.g., 72.5",
                "bmi.ph.height.cm": "e.g., 178",
                "bmi.ph.height.ft": "e.g., 5",
                "bmi.ph.height.in": "e.g., 10",

                "bmi.help.weight": "Input range: 20-300 kg (about 44-661 lb).",
                "bmi.help.height":
                    "Input range: 100-250 cm (about 3 ft 3 in to 8 ft 2 in).",

                "bmi.err.positive": "Please enter a positive value.",
                "bmi.err.range.weight":
                    "Weight seems out of range (20-300 kg).",
                "bmi.err.range.height": "Height seems out of range.",
                "bmi.err.inches": "Inches must be between 0 and 11.9.",
                "bmi.err.generic": "Invalid input. Check values and try again.",

                "bmi.action.calc": "Calculate BMI",
                "bmi.action.reset": "Reset",

                "bmi.result.title": "Result",
                "bmi.result.bmi": "Your BMI",
                "bmi.result.category": "Category",
                "bmi.result.healthyRange": "Healthy weight range",
                "bmi.disclaimer":
                    "For adults aged 20 and older. BMI is a screening measure, not a diagnosis; children and teens need age- and sex-specific percentiles.",

                "bmi.cat.underweight": "Underweight",
                "bmi.cat.normal": "Healthy",
                "bmi.cat.overweight": "Overweight",
                "bmi.cat.obese1": "Obesity (Class I)",
                "bmi.cat.obese2": "Obesity (Class II)",
                "bmi.cat.obese3": "Obesity (Class III)",

                "bmi.history.title": "History",
                "bmi.history.empty": "No records yet. Calculate to add one.",
                "bmi.history.export": "Export CSV",
                "bmi.history.clear": "Clear history",
                "bmi.history.delete": "Delete",
                "bmi.history.storageError": "History could not be saved in this browser. This change will be lost when you leave or reload.",

                "bmi.th.date": "Date",
                "bmi.th.weight": "Weight",
                "bmi.th.height": "Height",
                "bmi.th.bmi": "BMI",
                "bmi.th.category": "Category",

                "confirm.cancel": "Cancel",
                "confirm.clearHistory.title": "Clear all history?",
                "confirm.clearHistory.desc":
                    "This will permanently remove all saved BMI records from this device.",
                "confirm.clearHistory.confirm": "Yes, clear all",

                "confirm.deleteRow.title": "Delete this record?",
                "confirm.deleteRow.desc":
                    "BMI {bmi} on {date} will be removed.",
                "confirm.deleteRow.confirm": "Delete",
            },
            hi: {
                "nav.home": "होम",
                "nav.bmi": "बीएमआई",
                "home.title": "हेल्थप्रो में आपका स्वागत है",
                "home.sub": "मीट्रिक और इम्पीरियल इकाइयों, स्थानीय हिस्ट्री और CSV निर्यात वाला BMI कैलकुलेटर।",
                "home.why": "आप क्या कर सकते हैं",
                "home.feature.units": "kg/cm या lb/ft + in में BMI निकालें।",
                "home.feature.range": "वयस्क BMI श्रेणी और संदर्भ वज़न सीमा देखें।",
                "home.feature.history": "इस ब्राउज़र में 20 तक गणनाएँ रखें और CSV में निर्यात करें।",
                "home.feature.language": "इंटरफ़ेस अंग्रेज़ी या हिंदी में इस्तेमाल करें।",
                "home.credit": "निर्माता",
                "footer.copy": "सर्वाधिकार सुरक्षित।",
                "bmi.title": "बीएमआई कैलकुलेटर",
                "bmi.desc":
                    "यूनिट कन्वर्ज़न, हेल्दी रेंज और हिस्ट्री के साथ BMI निकालें।",
                "bmi.label.weight": "वज़न",
                "bmi.label.height": "कद",
                "bmi.label.weightUnit": "वज़न की इकाई",
                "bmi.label.heightUnit": "कद की इकाई",
                "bmi.label.heightFeet": "कद फ़ुट में",
                "bmi.label.heightInches": "कद इंच में",

                "bmi.unit.kg": "किलो",
                "bmi.unit.lb": "पाउंड",
                "bmi.unit.cm": "सेमी",
                "bmi.unit.ftin": "फुट + इंच",

                "bmi.ph.weight": "जैसे 72.5",
                "bmi.ph.height.cm": "जैसे 178",
                "bmi.ph.height.ft": "जैसे 5",
                "bmi.ph.height.in": "जैसे 10",

                "bmi.help.weight": "इनपुट सीमा: 20-300 किग्रा (लगभग 44-661 पाउंड)।",
                "bmi.help.height": "इनपुट सीमा: 100-250 सेमी (लगभग 3 फ़ुट 3 इंच से 8 फ़ुट 2 इंच)।",

                "bmi.err.positive": "कृपया पॉज़िटिव मान दर्ज करें।",
                "bmi.err.range.weight":
                    "वज़न सीमाओं से बाहर लगता है (20-300 किलो)।",
                "bmi.err.range.height": "कद सीमाओं से बाहर लगता है।",
                "bmi.err.inches": "इंच 0 से 11.9 के बीच होना चाहिए।",
                "bmi.err.generic":
                    "इनपुट सही नहीं है। मान जाँचें और पुनः प्रयास करें।",

                "bmi.action.calc": "BMI निकालें",
                "bmi.action.reset": "रीसेट",

                "bmi.result.title": "परिणाम",
                "bmi.result.bmi": "आपका BMI",
                "bmi.result.category": "श्रेणी",
                "bmi.result.healthyRange": "हेल्दी वज़न रेंज",
                "bmi.disclaimer":
                    "20 वर्ष और उससे अधिक आयु के वयस्कों के लिए। BMI केवल स्क्रीनिंग माप है, निदान नहीं; बच्चों और किशोरों के लिए आयु और लिंग के अनुसार पर्सेंटाइल ज़रूरी हैं।",

                "bmi.cat.underweight": "कम वज़न",
                "bmi.cat.normal": "स्वस्थ",
                "bmi.cat.overweight": "अधिक वज़न",
                "bmi.cat.obese1": "मोटापा (क्लास I)",
                "bmi.cat.obese2": "मोटापा (क्लास II)",
                "bmi.cat.obese3": "मोटापा (क्लास III)",

                "bmi.history.title": "इतिहास",
                "bmi.history.empty":
                    "अभी कोई रिकॉर्ड नहीं। कैलकुलेट करेंगे तो जुड़ जाएगा।",
                "bmi.history.export": "CSV निर्यात",
                "bmi.history.clear": "इतिहास साफ़ करें",
                "bmi.history.delete": "हटाएँ",
                "bmi.history.storageError": "इस ब्राउज़र में हिस्ट्री सेव नहीं हो सकी। पेज छोड़ने या रीलोड करने पर यह बदलाव मिट जाएगा।",

                "bmi.th.date": "तारीख",
                "bmi.th.weight": "वज़न",
                "bmi.th.height": "कद",
                "bmi.th.bmi": "BMI",
                "bmi.th.category": "श्रेणी",

                "confirm.cancel": "रद्द करें",
                "confirm.clearHistory.title": "सारा इतिहास मिटाएँ?",
                "confirm.clearHistory.desc":
                    "यह आपके डिवाइस से सभी सहेजे गए BMI रिकॉर्ड स्थायी रूप से हटा देगा।",
                "confirm.clearHistory.confirm": "हाँ, सब मिटाएँ",

                "confirm.deleteRow.title": "यह रिकॉर्ड हटाएँ?",
                "confirm.deleteRow.desc": "BMI {bmi} ({date}) हटाया जाएगा।",
                "confirm.deleteRow.confirm": "हटाएँ",
            },
        },
    });
