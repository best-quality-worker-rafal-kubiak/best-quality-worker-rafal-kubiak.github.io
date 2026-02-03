// Translations
const translations = {
    pl: {
        nav: {
            home: "Start",
            services: "Usługi",
            about: "O nas",
            contact: "Kontakt"
        },
        hero: {
            title: "Spawanie <span>Offshore</span>",
            subtitle: "Jako spawacz offshore w branży Oil & Gas, dostarczam najwyższej jakości spoiny tam, gdzie warunki są najtrudniejsze. Od morskich konstrukcji stalowych po zaawansowane systemy rurociągów – stawiam na trwałość, szczelność i bezpieczeństwo.",
            btn1: "Nasze Usługi",
            btn2: "Kontakt"
        },
        services: {
            title: "Nasze Usługi",
            subtitle: "Kompleksowe usługi spawalnicze",
            welding: {
                title: "Spawanie",
                desc: "Profesjonalne spawanie różnych metali metodami MIG/MAG, TIG oraz elektrodą. Precyzja i trwałość każdego spoiny."
            },
            gouging: {
                title: "Żłobienie",
                desc: "Żłobienie łukowe i plazmowe. Przygotowanie materiału do spawania oraz usuwanie wadliwych spoin."
            },
            grinding: {
                title: "Szlifowanie",
                desc: "Szlifowanie spoin i powierzchni metalowych. Wykończenie i przygotowanie elementów do dalszej obróbki."
            },
            offshore: {
                title: "Spawalnictwo Offshore",
                desc: "Spawanie bez kompromisów w branży Oil & Gas. Morskie konstrukcje stalowe i zaawansowane systemy rurociągów."
            }
        },
        about: {
            title: "O Firmie",
            heading: "Spawalnictwo Bez Kompromisów",
            text1: "Jako spawacz offshore w branży Oil & Gas, dostarczam najwyższej jakości spoiny tam, gdzie warunki są najtrudniejsze. Od morskich konstrukcji stalowych po zaawansowane systemy rurociągów.",
            text2: "Stawiam na trwałość, szczelność i bezpieczeństwo. Każde zlecenie traktuję z maksymalnym zaangażowaniem i profesjonalizmem - spawalnictwo bez kompromisów.",
            stat1: "Zaangażowania",
            stat2: "Specjalizacje",
            stat3: "Gwarancja Jakości"
        },
        contact: {
            title: "Kontakt",
            subtitle: "Skontaktuj się z nami",
            heading: "Dane Kontaktowe"
        },
        footer: {
            copyright: "&copy; 2026 Best Quality Worker Rafał Kubiak. Wszelkie prawa zastrzeżone."
        }
    },
    en: {
        nav: {
            home: "Home",
            services: "Services",
            about: "About",
            contact: "Contact"
        },
        hero: {
            title: "Offshore <span>Welding</span>",
            subtitle: "As an offshore welder in the Oil & Gas industry, I deliver the highest quality welds where conditions are toughest. From marine steel structures to advanced pipeline systems – I focus on durability, tightness and safety.",
            btn1: "Our Services",
            btn2: "Contact"
        },
        services: {
            title: "Our Services",
            subtitle: "Comprehensive welding services",
            welding: {
                title: "Welding",
                desc: "Professional welding of various metals using MIG/MAG, TIG and electrode methods. Precision and durability in every weld."
            },
            gouging: {
                title: "Gouging",
                desc: "Arc and plasma gouging. Material preparation for welding and removal of defective welds."
            },
            grinding: {
                title: "Grinding",
                desc: "Grinding of welds and metal surfaces. Finishing and preparation of elements for further processing."
            },
            offshore: {
                title: "Offshore Welding",
                desc: "No-compromise welding in the Oil & Gas industry. Marine steel structures and advanced pipeline systems."
            }
        },
        about: {
            title: "About Us",
            heading: "Welding Without Compromise",
            text1: "As an offshore welder in the Oil & Gas industry, I deliver the highest quality welds where conditions are toughest. From marine steel structures to advanced pipeline systems.",
            text2: "I focus on durability, tightness and safety. Every project is treated with maximum commitment and professionalism - welding without compromise.",
            stat1: "Commitment",
            stat2: "Specializations",
            stat3: "Quality Guarantee"
        },
        contact: {
            title: "Contact",
            subtitle: "Get in touch with us",
            heading: "Contact Details"
        },
        footer: {
            copyright: "&copy; 2026 Best Quality Worker Rafał Kubiak. All rights reserved."
        }
    },
    nl: {
        nav: {
            home: "Home",
            services: "Diensten",
            about: "Over ons",
            contact: "Contact"
        },
        hero: {
            title: "Offshore <span>Lassen</span>",
            subtitle: "Als offshore lasser in de Oil & Gas industrie lever ik de hoogste kwaliteit lassen waar de omstandigheden het zwaarst zijn. Van maritieme staalconstructies tot geavanceerde pijpleidingsystemen – ik focus op duurzaamheid, dichtheid en veiligheid.",
            btn1: "Onze Diensten",
            btn2: "Contact"
        },
        services: {
            title: "Onze Diensten",
            subtitle: "Uitgebreide lasdiensten",
            welding: {
                title: "Lassen",
                desc: "Professioneel lassen van diverse metalen met MIG/MAG, TIG en elektrode methoden. Precisie en duurzaamheid in elke las."
            },
            gouging: {
                title: "Gutsen",
                desc: "Boog- en plasmagutsen. Materiaalvoorbereiding voor lassen en verwijdering van defecte lassen."
            },
            grinding: {
                title: "Slijpen",
                desc: "Slijpen van lassen en metalen oppervlakken. Afwerking en voorbereiding van elementen voor verdere verwerking."
            },
            offshore: {
                title: "Offshore Lassen",
                desc: "Compromisloos lassen in de Oil & Gas industrie. Maritieme staalconstructies en geavanceerde pijpleidingsystemen."
            }
        },
        about: {
            title: "Over Ons",
            heading: "Lassen Zonder Compromissen",
            text1: "Als offshore lasser in de Oil & Gas industrie lever ik de hoogste kwaliteit lassen waar de omstandigheden het zwaarst zijn. Van maritieme staalconstructies tot geavanceerde pijpleidingsystemen.",
            text2: "Ik focus op duurzaamheid, dichtheid en veiligheid. Elk project wordt met maximale toewijding en professionaliteit behandeld - lassen zonder compromissen.",
            stat1: "Toewijding",
            stat2: "Specialisaties",
            stat3: "Kwaliteitsgarantie"
        },
        contact: {
            title: "Contact",
            subtitle: "Neem contact met ons op",
            heading: "Contactgegevens"
        },
        footer: {
            copyright: "&copy; 2026 Best Quality Worker Rafał Kubiak. Alle rechten voorbehouden."
        }
    }
};

function getTranslation(lang, key) {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return null;
        }
    }
    return value;
}

function setLanguage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(lang, key);
        if (translation) {
            element.innerHTML = translation;
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    localStorage.setItem('language', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});

const savedLang = localStorage.getItem('language') || 'en';
setLanguage(savedLang);

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
