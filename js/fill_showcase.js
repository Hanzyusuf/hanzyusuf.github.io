document.addEventListener("touchstart", function() {}, true);

function generateLinkButton(icon, label){
    return `
        <button type="button" class="link-button">
            <span class="link-button-icon">
		        <i class="${icon}"></i>
	        </span>
	        <span class="link-button-text">
		        <span>${label}</span>
	        </span>
        </button>
    `;
}

const linkBtnGithub = generateLinkButton("fa fa-github-square", "View on GitHub");
const linkBtnDocs = generateLinkButton("fa fa-book", "Documentation");

const logoMap = {
    "Unreal Engine":    `<i class="dev-icon devicon-unrealengine-original"><span class="dev-tooltip">Unreal Engine</span></i>                         `,
    "Unity":            `<i class="dev-icon devicon-unity-original colored"><span class="dev-tooltip">Unity</span></i>                                 `,
    "C++":              `<i class="dev-icon devicon-cplusplus-line"><span class="dev-tooltip">C++</span></i>                                `,
    "Blender":          `<i class="dev-icon devicon-blender-original colored"><span class="dev-tooltip">Blender</span></i>                               `,
    "Python":           `<i class="dev-icon devicon-python-plain colored"><span class="dev-tooltip">Python</span></i>                          `,
    "Android Studio":   `<i class="dev-icon devicon-android-plain-wordmark colored"><span class="dev-tooltip">Android Studio</span></i>                `,
    "Java":             `<i class="dev-icon devicon-java-plain-wordmark colored"><span class="dev-tooltip">Java</span></i>                   `,
    "Flutter":          `<i class="dev-icon devicon-flutter-plain colored"><span class="dev-tooltip">Flutter</span></i>                         `,
    "PHP":              `<i class="dev-icon devicon-php-plain colored"><span class="dev-tooltip">PHP</span></i>                             `,
    "AWS":              `<i class="dev-icon devicon-amazonwebservices-plain-wordmark colored"><span class="dev-tooltip">Amazon Web Services</span></i>      `,
    "NodeJS":           `<i class="dev-icon devicon-nodejs-plain-wordmark colored"><span class="dev-tooltip">NodeJS</span></i>                 `,
    "Express":          `<i class="dev-icon devicon-express-original-wordmark colored"><span class="dev-tooltip">Express</span></i>             `,
    "HTML":             `<i class="dev-icon devicon-html5-plain-wordmark colored"><span class="dev-tooltip">HTML5</span></i>                  `,
    "CSS":              `<i class="dev-icon devicon-css3-plain-wordmark colored"><span class="dev-tooltip">CSS3</span></i>                   `,
    "JS":               `<i class="dev-icon devicon-javascript-plain colored"><span class="dev-tooltip">Javascript</span></i>                      `,
    "JQuery":           `<i class="dev-icon devicon-jquery-plain-wordmark colored"><span class="dev-tooltip">JQuery</span></i>                 `,
    "MySQL":            `<i class="dev-icon devicon-mysql-plain-wordmark colored"><span class="dev-tooltip">MySQL</span></i>                  `,
    "C#":               `<i class="dev-icon devicon-csharp-line colored"><span class="dev-tooltip">C#</span></i>                           `,
    ".NET":             `<i class="dev-icon devicon-dot-net-plain-wordmark colored"><span class="dev-tooltip">.NET</span></i>                `,
    "Visual Studio":    `<i class="dev-icon devicon-visualstudio-plain colored"><span class="dev-tooltip">Visual Studio</span></i>                    `,
    "CMake":            `<i class="dev-icon devicon-cmake-plain-wordmark colored"><span class="dev-tooltip">CMake</span></i>                  `,
    "Arduino":          `<i class="dev-icon devicon-arduino-plain-wordmark colored"><span class="dev-tooltip">Arduino IDE</span></i>                `,
};

const showcaseItems = [
    {
        "sectionTitle": "Completed Projects",
        "projects": [
            {
                "title": "BullFighting 3D: Survival",
                "description": "A 3D Bullfighting game for Android.</br>Be a matador and traverse the arena. Complete daily quests to win coins and unlock new bulls. Compete around the world and rise to the leaderboards.",
                "imageSrc": "images/i_bullfighting.png",
                "links": "<a href='https://play.google.com/store/apps/details?id=com.CreepyTickles.Bullfighting&pcampaignid=web_share&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>",
                "tech": "Unreal Engine, C++, Blender, Python, Android Studio, Java"
            },
            {
                "title": "Simple Play Billing",
                "description": "A code plugin for Unreal Engine to integrate Google Play Billing library in Unreal projects via blueprint nodes.",
                "imageSrc": "images/i_spb.png",
                "links": "<a href='https://hanzyusuf.gitbook.io/simple-play-billing/'>"+linkBtnDocs+"</a>",
                "tech": "Unreal Engine, C++, Android Studio, Java"
            },
            {
                "title": "Google Play Utils",
                "description": "A code plugin for Unreal Engine that exposes the 'unique id', 'nickname', and 'auth token' of the user from the user's Google Play account to blueprints and C++.",
                "imageSrc": "images/i_googleplayutils.png",
                "links": "<a href='https://github.com/Hanzyusuf/UE4-GooglePlayUtils'>"+linkBtnGithub+"</a>",
                "tech": "Unreal Engine, C++"
            },
            {
                "title": "Android Vita Companion",
                "description": "Send various commands to your PS Vita over the network using TCP. A useful utility for a PS Vita with broken (or constantly pressed) 'Power and PS Home button'.",
                "imageSrc": "images/i_vitacompanion.png",
                "links": "<a href='https://github.com/Hanzyusuf/Android-Vita-Companion'>"+linkBtnGithub+"</a>",
                "tech": "Android Studio, Java"
            },
            {
                "title": "Arduino Led Memory Game </br> (Firmware)",
                "description": "Arduino Led Memory Game is a basic memory game built for Arduino made with the intention of helping newbies to get started with microcontrollers and serial communication over USB and Bluetooth Low Energy.",
                "imageSrc": "images/i_ledmem.png",
                "links": "<a href='https://github.com/Hanzyusuf/arduino_ledmem_fw'>"+linkBtnGithub+"</a>",
                "tech": "C++, Arduino"
            },
            {
                "title": "Arduino Led Memory Game </br> (Android App)",
                "description": "This is the Android app for Arduino Led Memory Game.",
                "imageSrc": "images/i_ledmem.png",
                "links": "<a href='https://github.com/Hanzyusuf/arduino_ledmem_android'>"+linkBtnGithub+"</a>",
                "tech": "Android Studio, Java"
            },
            {
                "title": "Easy Serial Com </br> (Library)",
                "description": "Easy Serial Com is a library for Arduino made to quickly get started with serial communication without getting the main code dirty by a bunch of incoming data parsing algorithms.",
                "imageSrc": "images/i_easyserial.png",
                "links": "<a href='https://github.com/Hanzyusuf/arduino_easy_serial_com'>"+linkBtnGithub+"</a>",
                "tech": "C++, Arduino"
            },
            {
                "title": "Fill-A-Doc",
                "description": "Fill-A-Doc is an open-source project created to eliminate the scarcity of a simple lightweight tool to fill in PDF fields. It was created mainly for the purpose of typing text into simple PDF form templates.",
                "imageSrc": "images/i_filladoc.jpg",
                "links": "<a href='https://github.com/Hanzyusuf/fill-a-doc'>"+linkBtnGithub+"</a>",
                "tech": "C#, .NET, Visual Studio"
            },
            {
                "title": "DSO Reporting and Tracker </br> (Mobile App)",
                "description": "An app for a business (Xpertek Distributors) to track and manage DSO's (Distribution System Operators).</br>Features - Track Location, Maintain Attendance, Collect Sales Data, Export Sales Data for Excel/Tally.",
                "imageSrc": "images/i_dso_track.png",
                "links": "<a class='mail' href='mailto:hanzyusuf@gmail.com'> <button class='mail-btn' type='button' data-hover='hanzyusuf@gmail.com' data-active='hanzyusuf@gmail.com'><span><i class='fa fa-envelope'></i>Contact Me</span></button></a>",
                "tech": "Android Studio, Java"
            },
            {
                "title": "DSO Reporting and Tracker </br> (Web App)",
                "description": "Web app for Xpertek Distributors.</br>Features - Manage Sales Data, Manage Employees, etc.",
                "imageSrc": "images/i_dso_staff.png",
                "links": "<a class='mail' href='mailto:hanzyusuf@gmail.com'> <button class='mail-btn' type='button' data-hover='hanzyusuf@gmail.com' data-active='hanzyusuf@gmail.com'><span><i class='fa fa-envelope'></i>Contact Me</span></button></a>",
                "tech": "HTML, CSS, JS, JQuery"
            },
            {
                "title": "DSO Reporting and Tracker </br> (Server)",
                "description": "The backend for DSO Reporting And Tracker mobile app and web app.",
                "imageSrc": "images/i_dso_admin.png",
                "links": "<a class='mail' href='mailto:hanzyusuf@gmail.com'> <button class='mail-btn' type='button' data-hover='hanzyusuf@gmail.com' data-active='hanzyusuf@gmail.com'><span><i class='fa fa-envelope'></i>Contact Me</span></button></a>",
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
                "imageSrc": "images/i_cluckncut.png",
                "links": "<a class='mail' href='mailto:hanzyusuf@gmail.com'> <button class='mail-btn' type='button' data-hover='hanzyusuf@gmail.com' data-active='hanzyusuf@gmail.com'><span><i class='fa fa-envelope'></i>Contact Me</span></button></a>",
                "tech": "C#, Unity, Blender, Python"
            },
            {
                "title": "iKleen Laundry </br> (Mobile And Web App)",
                "description": "Solution for a local business which aims to provide features such as customer management, employee management, billing, tracking orders, order management, etc.",
                "imageSrc": "images/i_ikleen.png",
                "links": "<a class='mail' href='mailto:hanzyusuf@gmail.com'> <button class='mail-btn' type='button' data-hover='hanzyusuf@gmail.com' data-active='hanzyusuf@gmail.com'><span><i class='fa fa-envelope'></i>Contact Me</span></button></a>",
                "tech": "Android Studio, Flutter"
            },
            {
                "title": "iKleen Laundry </br> (Server)",
                "description": "Backend for iKleen Laundry.",
                "imageSrc": "images/i_ikleen.png",
                "links": "<a class='mail' href='mailto:hanzyusuf@gmail.com'> <button class='mail-btn' type='button' data-hover='hanzyusuf@gmail.com' data-active='hanzyusuf@gmail.com'><span><i class='fa fa-envelope'></i>Contact Me</span></button></a>",
                "tech": "AWS, MySQL, NodeJS, Express"
            },
            {
                "title": "eLokr </br> (Mobile And Web App)",
                "description": "Our own startup that aims to provide end-to-end security for high-value item transport and transactions!",
                "imageSrc": "images/i_elokr.jpeg",
                "links": "<a class='mail' href='mailto:hanzyusuf@gmail.com'> <button class='mail-btn' type='button' data-hover='hanzyusuf@gmail.com' data-active='hanzyusuf@gmail.com'><span><i class='fa fa-envelope'></i>Contact Me</span></button></a>",
                "tech": "Android Studio, Flutter"
            },
            {
                "title": "eLokr </br> (Server)",
                "description": "Backend for eLokr!",
                "imageSrc": "images/i_elokr.jpeg",
                "links": "<a class='mail' href='mailto:hanzyusuf@gmail.com'> <button class='mail-btn' type='button' data-hover='hanzyusuf@gmail.com' data-active='hanzyusuf@gmail.com'><span><i class='fa fa-envelope'></i>Contact Me</span></button></a>",
                "tech": "AWS, MySQL, NodeJS, Express"
            }
        ]
    },
    {
        "sectionTitle": "Forked Projects",
        "projects": [
            {
                "title": "Blender Stairs </br> (Ported for Blender 2.79)",
                "description": "Quickly create staircases in Blender. Useful for blocking in scenes - or just quickly making a flight of basic stairs without having to fiddle with the Array modifier.",
                "imageSrc": "images/i_blenderstairs.png",
                "links": "<a href='https://github.com/Hanzyusuf/blenderStairs'>"+linkBtnGithub+"</a>",
                "tech": "Python"
            },
            {
                "title": "Zelda Navi's Quest for PS Vita </br> (Support 8-axis movement)",
                "description": "Originally a Zelda fan game ported for PS Vita. Modified in this fork to allow 8-axis movement.",
                "imageSrc": "images/i_zeldansq.png",
                "links": "<a href='https://github.com/Hanzyusuf/ZeldaNSQ'>"+linkBtnGithub+"</a>",
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
            populatedTemplate = populatedTemplate.replaceAll('{{ techLogos }}', techLogos.join(''));
        } else if (key === 'links') {
            const links = value.split(',').map(link => link.trim());
            if(links.length <= 0){
                links[0] = "";
            }
            populatedTemplate = populatedTemplate.replace('{{ links }}', links.join(''));
        } else {
            populatedTemplate = populatedTemplate.replace(new RegExp(placeholder, 'g'), value);
        }
    }

    return populatedTemplate;
}

function getTemplateHTML() {
    return `
        <!-- Showcase Item Template -->
        <div class="showcase-item">

            <img class="app-image" src="{{ imageSrc }}" alt="{{ title }} Image">

            <div class="card">
            
                <div class="card-inner">

                    <div class="card-front">
                        <div class="app-details">
                            <h2 class="app-title">{{ title }}</h2>
                            <p>{{ description }}</p>
                            <div class="dev-logos">
                                {{ techLogos }}
                            </div>
                        </div>
                    </div>

                    <div class="card-back">
                        <div class="app-details">
                            <h2 class="app-title">{{ title }}</h2>
                            <div class="links">
                                {{ links }}
                            </div>
                            <div class="dev-logos">
                                {{ techLogos }}
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        <!-- End Showcase Item Template -->
    `;
}

// Load the template HTML from the file or use another method to get the template content
// const templateHTML = getTemplateHTML(); // You need to implement this function

// Get the container element where you want to append the showcase items
const showcaseContainer = document.getElementById('showcase');

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