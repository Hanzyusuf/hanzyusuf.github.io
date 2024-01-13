const logoMap = {
    "Unreal Engine":    `<i class="dev-icon devicon-unrealengine-original"></i>                         `,
    "Unity":            `<i class="devicon-unity-original colored"></i>                                 `,
    "C++":              `<i class="dev-icon devicon-cplusplus-line"></i>                                `,
    "Blender":          `<i class="devicon-blender-original colored"></i>                               `,
    "Python":           `<i class="dev-icon devicon-python-plain colored"></i>                          `,
    "Android Studio":   `<i class="dev-icon devicon-android-plain-wordmark colored"></i>                `,
    "Java":             `<i class="dev-icon devicon-java-plain-wordmark colored"></i>                   `,
    "Flutter":          `<i class="dev-icon devicon-flutter-plain colored"></i>                         `,
    "PHP":              `<i class="dev-icon devicon-php-plain colored"></i>                             `,
    "AWS":              `<i class="dev-icon devicon-amazonwebservices-plain-wordmark colored"></i>      `,
    "NodeJS":           `<i class="dev-icon devicon-nodejs-plain-wordmark colored"></i>                 `,
    "Express":          `<i class="dev-icon devicon-express-original-wordmark colored"></i>             `,
    "HTML":             `<i class="dev-icon devicon-html5-plain-wordmark colored"></i>                  `,
    "CSS":              `<i class="dev-icon devicon-css3-plain-wordmark colored"></i>                   `,
    "JS":               `<i class="dev-icon devicon-javascript-plain colored"></i>                      `,
    "JQuery":           `<i class="dev-icon devicon-jquery-plain-wordmark colored"></i>                 `,
    "MySQL":            `<i class="dev-icon devicon-mysql-plain-wordmark colored"></i>                  `,
    "C#":               `<i class="dev-icon devicon-csharp-line colored"></i>                           `,
    ".NET":             `<i class="dev-icon devicon-dot-net-plain-wordmark colored"></i>                `,
    "Visual Studio":    `<i class="dev-icon devicon-visualstudio-plain colored"></i>                    `,
    "CMake":            `<i class="dev-icon devicon-cmake-plain-wordmark colored"></i>                  `,
    "Arduino":          `<i class="dev-icon devicon-arduino-plain-wordmark colored"></i>                `,
};

const showcaseItems = [
    {
        "sectionTitle": "Completed Projects",
        "projects": [
            {
                "title": "BullFighting 3D: Survival",
                "description": "Bullfighting game for Android.",
                "imageSrc": "images/i_bullfighting.png",
                "link": "https://play.google.com/store/apps/details?id=com.CreepyTickles.Bullfighting&pcampaignid=web_share",
                "tech": "Unreal Engine, C++, Blender, Python, Android Studio, Java"
            },
            {
                "title": "Simple Play Billing",
                "description": "A code plugin for Unreal Engine to integrate Google Play Billing library in Unreal projects via blueprint nodes.",
                "imageSrc": "images/i_spb.png",
                "link": "https://hanzyusuf.gitbook.io/simple-play-billing/",
                "tech": "Unreal Engine, C++, Android Studio, Java"
            },
            {
                "title": "Google Play Utils",
                "description": "A code plugin for Unreal Engine that exposes the 'unique id', 'nickname', and 'auth token' of the user from the user's Google Play account to blueprints and C++.",
                "imageSrc": "https://via.placeholder.com/250",
                "link": "https://github.com/Hanzyusuf/UE4-GooglePlayUtils",
                "tech": "Unreal Engine, C++"
            },
            {
                "title": "Android Vita Companion",
                "description": "Send various commands to your PS Vita over the network using TCP. A useful utility for a PS Vita with broken (or constantly pressed) 'Power and PS Home button'.",
                "imageSrc": "https://via.placeholder.com/250",
                "link": "https://github.com/Hanzyusuf/Android-Vita-Companion",
                "tech": "Android Studio, Java"
            },
            {
                "title": "Arduino Led Memory Game </br> (Firmware)",
                "description": "Arduino Led Memory Game is a basic memory game built for Arduino made with the intention of helping newbies to get started with microcontrollers and serial communication over USB and Bluetooth Low Energy.",
                "imageSrc": "https://via.placeholder.com/250",
                "link": "https://github.com/Hanzyusuf/arduino_ledmem_fw",
                "tech": "C++, Arduino"
            },
            {
                "title": "Arduino Led Memory Game </br> (Android App)",
                "description": "This is the Android app for Arduino Led Memory Game.",
                "imageSrc": "https://via.placeholder.com/250",
                "link": "https://github.com/Hanzyusuf/arduino_ledmem_android",
                "tech": "Android Studio, Java"
            },
            {
                "title": "Easy Serial Com </br> (Library)",
                "description": "Easy Serial Com is a library for Arduino made to quickly get started with serial communication, and without getting the main code dirty by a bunch of incoming data parsing algorithms.",
                "imageSrc": "https://via.placeholder.com/250",
                "link": "https://github.com/Hanzyusuf/arduino_easy_serial_com",
                "tech": "C++, Arduino"
            },
            {
                "title": "Fill-A-Doc",
                "description": "Fill-A-Doc is an open-source project created to eliminate the scarcity of a simple lightweight tool to fill in PDF fields. It was created mainly for the purpose of typing text into simple PDF form templates.",
                "imageSrc": "https://via.placeholder.com/250",
                "link": "https://github.com/Hanzyusuf/fill-a-doc",
                "tech": "C#, .NET, Visual Studio"
            },
            {
                "title": "DSO Reporting and Tracker </br> (Mobile App)",
                "description": "An app for a local distributorship business (Xpertek Distributors) to track and manage DSO's (Distribution System Operators). Features - Track Location, Maintain Attendance, Collect Sales Data, Import/Export Sales Data to Excel and Tally.",
                "imageSrc": "https://via.placeholder.com/250",
                "tech": "Android Studio, Java"
            },
            {
                "title": "DSO Reporting and Tracker </br> (Web App)",
                "description": "An app for a local distributorship business (Xpertek Distributors) to track and manage DSO's (Distribution System Operators). Features - Track Location, Maintain Attendance, Collect Sales Data, Import/Export Sales Data to Excel and Tally.",
                "imageSrc": "https://via.placeholder.com/250",
                "tech": "HTML, CSS, JS, JQuery"
            },
            {
                "title": "DSO Reporting and Tracker </br> (Server)",
                "description": "An app for a local distributorship business (Xpertek Distributors) to track and manage DSO's (Distribution System Operators). Features - Track Location, Maintain Attendance, Collect Sales Data, Import/Export Sales Data to Excel and Tally.",
                "imageSrc": "https://via.placeholder.com/250",
                "tech": "PHP, MySQL"
            }
        ]
    },
    {
        "sectionTitle": "In Progress Projects",
        "projects": [
            {
                "title": "Cluck n' Cut",
                "description": "Be a butcher ! A chicken cutting game for Android.",
                "imageSrc": "https://via.placeholder.com/250",
                "tech": "C#, Unity, Blender"
            },
            {
                "title": "iKleen Laundry </br> Mobile And Web App",
                "description": "Solution for a local business which aims to provide features such as customer management, employee management, billing, tracking orders, order management, etc.",
                "imageSrc": "https://via.placeholder.com/250",
                "tech": "Android Studio, Flutter"
            },
            {
                "title": "iKleen Laundry </br> (Server)",
                "description": "Solution for a local business which aims to provide features such as customer management, employee management, billing, tracking orders, order management, etc.",
                "imageSrc": "https://via.placeholder.com/250",
                "tech": "AWS, MySQL, NodeJS, Express"
            },
            {
                "title": "eLokr </br> (Mobile And Web App)",
                "description": "Our own startup that aims to provide end-to-end security for high-value item transport and transactions!",
                "imageSrc": "https://via.placeholder.com/250",
                "tech": "Android Studio, Flutter"
            },
            {
                "title": "eLokr </br> (Server)",
                "description": "Our own startup that aims to provide end-to-end security for high-value item transport and transactions!",
                "imageSrc": "https://via.placeholder.com/250",
                "tech": "AWS, MySQL, NodeJS, Express"
            }
        ]
    },
    {
        "sectionTitle": "Forked Projects",
        "projects": [
            {
                "title": "Blender Stairs </br> (Ported for Blender 2.79)",
                "description": "Adds a new mesh object to Blender for quickly creating staircases. Useful for blocking in scenes - or just quickly making a flight of basic stairs without having to fiddle with the Array modifier. The original Blender stairs addon was made for Blender 2.8+ which uses Python 3.7; this addon has been ported for Blender 2.79 which uses Python 3.5. This is just a port and not original work.",
                "imageSrc": "https://via.placeholder.com/250",
                "link": "https://github.com/Hanzyusuf/blenderStairs",
                "tech": "Python"
            },
            {
                "title": "Zelda Navi's Quest for PS Vita </br> (Support 8-axis movement)",
                "description": "Originally a Zelda fan game ported for PS Vita. Modified in this fork to allow 8-axis movement.",
                "imageSrc": "https://via.placeholder.com/250",
                "tech": "C++, CMake"
            }
        ]
    }
  ];

// Function to get the logo for a given tech
function getTechLogo(tech) {
    return logoMap[tech] || "logo-err.png";
}

// Function to replace placeholders in the template with actual data
function populateTemplate(template, data) {
    let populatedTemplate = template;

    // Replace placeholders with actual data
    for (const key in data) {
        const placeholder = `{{ ${key} }}`;
        const value = data[key];

        // If the key is 'tech', use the getTechLogo function to get logos dynamically
        if (key === 'tech') {
            const techLogos = value.split(',').map(tech => getTechLogo(tech.trim()));
            populatedTemplate = populatedTemplate.replace('{{ techLogos }}', techLogos.join(''));
        } else {
            populatedTemplate = populatedTemplate.replace(new RegExp(placeholder, 'g'), value);
        }
    }

    return populatedTemplate;
}

function getTemplateHTML() {
    return `
        <!-- Showcase Item Template -->
        <div class="app-container-outer">
            <div class="app-container">
                <img class="app-image" src="{{ imageSrc }}" alt="{{ title }} Image">
                <div class="app-details">
                    <h2 class="app-title">{{ title }}</h2>
                    <p>{{ description }}</p>
                    <div class="tech-logos">
                        {{ techLogos }}
                    </div>
                    <a href="{{ link }}" target="_blank">Learn More</a>
                </div>
            </div>
        </div>
        <!-- End Showcase Item Template -->
    `;
}

// Load the template HTML from the file or use another method to get the template content
const templateHTML = getTemplateHTML(); // You need to implement this function

// Get the container element where you want to append the showcase items
const showcaseContainer = document.getElementById('showcase');

// Loop through showcase items and append the populated template to the container
/* showcaseItems.forEach(section => {
    section.projects.forEach(project => {
        const populatedTemplate = populateTemplate(templateHTML, project);
        showcaseContainer.innerHTML += populatedTemplate;
    });
}); */

showcaseItems.forEach(section => {
    // Add the section title and divider once for each section
    showcaseContainer.innerHTML += `
        <div class="section-title-holder">
            <div class="section-title">
                <h3>${section.sectionTitle}</h3>
                <div class="divider"></div>
            </div>
        </div>
    `;

    // Loop through projects within the section and append the populated template to the container
    section.projects.forEach(project => {
        const populatedTemplate = populateTemplate(getTemplateHTML(), project);
        showcaseContainer.innerHTML += populatedTemplate;
    });
});