document.addEventListener('DOMContentLoaded', function () {
    // Define your showcase items
    const showcaseItems = [
        {
            "sectionTitle": "Completed Projects",
            "projects": [
                {
                    "title": "BullFighting 3D: Survival",
                    "description": "Bullfighting game for Android.",
                    "link": "https://play.google.com/store/apps/details?id=com.CreepyTickles.Bullfighting&pcampaignid=web_share",
                    "tech": "Unreal Engine, C++, Blender, Python, Android Studio, Java"
                },
                {
                    "title": "Simple Play Billing",
                    "description": "A code plugin for Unreal Engine to integrate Google Play Billing library in Unreal projects via blueprint nodes.",
                    "link": "https://hanzyusuf.gitbook.io/simple-play-billing/",
                    "tech": "Unreal Engine, C++, Android Studio, Java, JNI"
                },
                {
                    "title": "Google Play Utils",
                    "description": "A code plugin for Unreal Engine that exposes the 'unique id', 'nickname', and 'auth token' of the user from the user's Google Play account to blueprints and C++.",
                    "link": "https://github.com/Hanzyusuf/UE4-GooglePlayUtils",
                    "tech": "Unreal Engine, C++"
                },
                {
                    "title": "Android Vita Companion",
                    "description": "Send various commands to your PS Vita over the network using TCP. A useful utility for a PS Vita with broken (or constantly pressed) 'Power and PS Home button'.",
                    "link": "https://github.com/Hanzyusuf/Android-Vita-Companion",
                    "tech": "Android Studio, Java"
                },
                {
                    "title": "Arduino Led Memory Game (Firmware)",
                    "description": "Arduino Led Memory Game is a basic memory game built for Arduino made with the intention of helping newbies to get started with microcontrollers and serial communication over USB and Bluetooth Low Energy.",
                    "link": "https://github.com/Hanzyusuf/arduino_ledmem_fw",
                    "tech": "C++, Arduino"
                },
                {
                    "title": "Arduino Led Memory Game (Android App)",
                    "description": "This is the Android app for Arduino Led Memory Game.",
                    "link": "https://github.com/Hanzyusuf/arduino_ledmem_android",
                    "tech": "Android Studio, Java"
                },
                {
                    "title": "Easy Serial Com (Library)",
                    "description": "Easy Serial Com is a library for Arduino made to quickly get started with serial communication, and without getting the main code dirty by a bunch of incoming data parsing algorithms.",
                    "link": "https://github.com/Hanzyusuf/arduino_easy_serial_com",
                    "tech": "C++, Arduino"
                },
                {
                    "title": "Fill-A-Doc",
                    "description": "Fill-A-Doc is an open-source project created to eliminate the scarcity of a simple lightweight tool to fill in PDF fields. It was created mainly for the purpose of typing text into simple PDF form templates.",
                    "link": "https://github.com/Hanzyusuf/fill-a-doc",
                    "tech": "C#, .NET, Visual Studio"
                }
            ]
        },
        {
            "sectionTitle": "Forked Projects",
            "projects": [
                {
                    "title": "Blender Stairs (Ported for Blender 2.79)",
                    "description": "Adds a new mesh object to Blender for quickly creating staircases. Useful for blocking in scenes - or just quickly making a flight of basic stairs without having to fiddle with the Array modifier. The original Blender stairs addon was made for Blender 2.8+ which uses Python 3.7; this addon has been ported for Blender 2.79 which uses Python 3.5. This is just a port and not original work.",
                    "link": "https://github.com/Hanzyusuf/blenderStairs",
                    "tech": "Python"
                },
                {
                    "title": "Zelda Navi's Quest for PS Vita (Forked to support movement on 8-axis)",
                    "description": "Originally a Zelda fan game ported for PS Vita. Modified in this fork to allow 8-axis movement.",
                    "tech": "C++, Makefile, CMake"
                }
            ]
        },
        {
            "sectionTitle": "In Progress Projects",
            "projects": [
                {
                    "title": "Cluck n' Cut",
                    "description": "A butcher chicken cutting game for Android.",
                    "tech": "C#, Unity, Blender"
                },
                {
                    "title": "iKleen Laundry - WebPage, Mobile App, and Backend",
                    "description": "Solution for a local business which aims to provide features such as customer management, employee management, billing, tracking orders, order management, etc.",
                    "tech": "Frontend - Mobile and Web App - Android Studio, Flutter"
                },
                {
                    "title": "iKleen Laundry - Backend",
                    "description": "Solution for a local business which aims to provide features such as customer management, employee management, billing, tracking orders, order management, etc.",
                    "tech": "Backend - AWS - EC2, S3, MySQL, NodeJS, Express, PM2"
                },
                {
                    "title": "eLokr",
                    "description": "Our own startup that aims to provide end-to-end security for high-value item transport and transactions!",
                    "tech": "Frontend - Mobile App - Android Studio, Flutter"
                },
                {
                    "title": "eLokr - Backend",
                    "description": "Our own startup that aims to provide end-to-end security for high-value item transport and transactions!",
                    "tech": "Backend - AWS - EC2, S3, MySQL, NodeJS, Express, PM2"
                },
                {
                    "title": "DSO Reporting and Tracker - for Xpertek Distributors",
                    "description": "An app for a local distributorship business to track and manage DSO's (Distribution System Operators). Features - Track Location, Maintain Attendance, Collect Sales Data, Import/Export Sales Data to Excel and Tally.",
                    "tech": "Frontend - Android App - Android Studio, Java"
                },
                {
                    "title": "DSO Reporting and Tracker - Web App",
                    "description": "An app for a local distributorship business to track and manage DSO's (Distribution System Operators). Features - Track Location, Maintain Attendance, Collect Sales Data, Import/Export Sales Data to Excel and Tally.",
                    "tech": "Frontend - Web App - HTML, CSS, JS, JQuery"
                },
                {
                    "title": "DSO Reporting and Tracker - Backend",
                    "description": "An app for a local distributorship business to track and manage DSO's (Distribution System Operators). Features - Track Location, Maintain Attendance, Collect Sales Data, Import/Export Sales Data to Excel and Tally.",
                    "tech": "Backend - WAMP Server - PHP, MySQL"
                }
            ]
        }
    ];

    // Function to create HTML for a project
    function createProjectHTML(project) {
        return `
            <div class="app-container-outer">
                <div class="app-container">
                    <img class="app-image" src="${project.imageSrc}" alt="${project.title} Image">
                    <div class="app-details">
                        <h2>${project.title}</h2>
                        <p>${project.description}</p>
                        <a href="${project.link}" target="_blank">Learn More</a>
                    </div>
                </div>
            </div>
        `;
    }

    // Function to create HTML for a section
    function createSectionHTML(section) {
        const projectsHTML = section.projects.map(createProjectHTML).join('');
        return `
            <div class="showcase-section">
                <div class="section-title-holder">
                    <div class="section-title">
                        <h3>${section.sectionTitle}</h3>
                        <div class="divider"></div>
                    </div>
                </div>
                ${projectsHTML}
            </div>
        `;
    }

    // Get the showcase container
    const showcaseContainer = document.getElementById('showcase');

    // Dynamically create HTML for each section and add it to the showcase container
    showcaseItems.forEach(section => {
        showcaseContainer.innerHTML += createSectionHTML(section);
    });
});
