import { Tolgee, DevTools, FormatSimple } from "@tolgee/react";

export const tolgee = Tolgee()
    .use(DevTools())
    .use(FormatSimple())
    .init({
        availableLanguages: ["en", "hi"],
        language: localStorage.getItem("lang") || "en",
        fallbackLanguage: "en",
        staticData: {
            en: {
                "nav.home": "Home",
                "nav.bmi": "BMI",
                "home.title": "Welcome to HealthPro",
                "home.sub": "Advanced health tools - BMI, BMR & goals.",
                "footer.copy": "All rights reserved.",
                "bmi.title": "BMI Calculator",
                "bmi.desc":
                    "Calculate Body Mass Index with unit conversions, healthy range, and history.",
                "bmi.label.weight": "Weight",
                "bmi.label.height": "Height",
                "bmi.label.weightUnit": "Weight unit",
                "bmi.label.heightUnit": "Height unit",

                "bmi.unit.kg": "kg",
                "bmi.unit.lb": "lb",
                "bmi.unit.cm": "cm",
                "bmi.unit.ftin": "ft + in",

                "bmi.ph.weight": "e.g., 72.5",
                "bmi.ph.height.cm": "e.g., 178",
                "bmi.ph.height.ft": "e.g., 5",
                "bmi.ph.height.in": "e.g., 10",

                "bmi.help.weight": "Typical adult weight range: 20-300 kg.",
                "bmi.help.height":
                    "Typical adult height range: 100-250 cm or 3-8 ft.",

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
                    "This tool is informational and not a medical diagnosis.",

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
                "home.sub": "एडवांस्ड हेल्थ टूल्स - BMI, BMR व लक्ष्य।",
                "footer.copy": "सर्वाधिकार सुरक्षित।",
                "bmi.title": "बीएमआई कैलकुलेटर",
                "bmi.desc":
                    "यूनिट कन्वर्ज़न, हेल्दी रेंज और हिस्ट्री के साथ BMI निकालें।",
                "bmi.label.weight": "वज़न",
                "bmi.label.height": "कद",
                "bmi.label.weightUnit": "वज़न की इकाई",
                "bmi.label.heightUnit": "कद की इकाई",

                "bmi.unit.kg": "किलो",
                "bmi.unit.lb": "पाउंड",
                "bmi.unit.cm": "सेमी",
                "bmi.unit.ftin": "फुट + इंच",

                "bmi.ph.weight": "जैसे 72.5",
                "bmi.ph.height.cm": "जैसे 178",
                "bmi.ph.height.ft": "जैसे 5",
                "bmi.ph.height.in": "जैसे 10",

                "bmi.help.weight": "सामान्य वयस्क वज़न: 20-300 किलो।",
                "bmi.help.height": "सामान्य वयस्क कद: 100-250 सेमी या 3-8 फुट।",

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
                    "यह केवल सूचना हेतु है, चिकित्सकीय परामर्श नहीं।",

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
