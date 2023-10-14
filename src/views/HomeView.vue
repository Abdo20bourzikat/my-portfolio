<template>
    <section>
        <div class="modal fade" id="contactForm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <form action="https://formsubmit.co/abdoubourzikat3@gmail.com" method="POST">
                    <div class="modal-header">
                        <h5 class="modal-title d-flex align-items-center">
                            <i class="bi bi-person fs-3 me-2"></i> Enter your informations
                        </h5>
                        <button type="reset" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" class="form-control shadow-none" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input type="email" class="form-control shadow-none" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Subject</label>
                            <input type="text" class="form-control shadow-none" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Object</label>
                            <input type="text" class="form-control shadow-none" required> 
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <button type="submit" class="btn shadow-none sendBtn">Save</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row mt-4">
                <div class="col-lg-12 text-secondary shadow p-5">
                    <p class="text-secondary">Hello, i'm Abderrahmane:)</p>
                    <h3 class="text-secondary pl-5">I'm a Full Stack Web Developer</h3><br>
                    <h6>
                        A passionate full-stack web developer.
                        My journey in web development is driven by an insatiable appetite for learning and professional growth. 
                        I'm confident in my ability to conceptualize and bring captivating web development ideas to life
                    </h6>
                    <div class="d-flex">
                        <a href="blogs" class="btn shadow-none m-1 mt-3 sendBtn">About trainships >></a>
                        <button type="submit" class="btn shadow-none m-1 mt-3 sendBtn" data-bs-toggle="modal" data-bs-target="#contactForm">Contact me >></button>

                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section>
    <h2 class="mt-5 pb-3 text-secondary text-center h-font">PROJECTS</h2>
    <div class="hr-line bg-dark"></div>

        <!-- project swiper -->
        <swiper
            :breakpoints = "swiperOptions.breakpoints"
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :loop="true"
            :autoplay="true"
            :slidesPerView="3"
            :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }"
            :pagination="true"
            :modules="modules"
            class="mySwiper"
            style="min-height: 410px; margin-top: 20px;" 
        >

        <swiper-slide class="mb-5">
                <div class="card shadow text-center swiper-slide">
                    <div class="image-content">
                        <div class="card-image">
                            <img src="../assets/images/projects/cover-login.png" alt="" class="card-img">
                        </div>
                    </div>

                    <div class="card-content px-3 py-0">
                        <h3 class="text-secondary">Daily Reporting for Giantlink</h3>
                        <div class="hr-line bg-secondary mb-3"></div>
                        <div class="description">
                            Within the Giantlink project, I developed a daily reporting system consisting of two essential reports:<br>
                            1. DNC Report (Do Not Call) <br>
                            To respect customers' preferences, I created a program that generated an Excel blacklist of clients who requested not to be called. 
                            This ensured compliance and prevented inadvertent calls to these clients, improving satisfaction and regulatory compliance. <br>
                            2. Proximus Report Collaboration <br>
                            In collaboration with Belgium's Proximus, I designed the "Proximus Report" to track agent performance and provide daily insights. 
                            This report, sent to Giantlink's CIO, detailed agent activities, call metrics, and facilitated work hour and break management, 
                            enhancing operational efficiency and transparency. <br>
                            This daily reporting system played a vital role in optimizing call center operations and strengthening Giantlink's partnership with Proximus.
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide class="mb-5">
                <div class="card shadow text-center swiper-slide">
                    <div class="image-content">
                        <div class="card-image">
                            <img src="../assets/images/projects/cover-login.png" alt="" class="card-img">
                        </div>
                    </div>

                    <div class="card-content px-3 py-0">
                        <h3 class="text-secondary">Updated Sales Portal Web App</h3>
                        <div class="hr-line bg-secondary mb-3"></div>
                        <div class="description">
                            The Sales Portal web app, designed for Giantlink call center agents to efficiently manage their sales and customer interactions, 
                            received a significant update. This project catered to both the needs of the agents and the administration team at Giantlink. 
                            The primary focus of this update was to enhance the functionality and security of the application. <br>
                            Key Updates and Enhancements: <br>
                            Role-Based Access: I implemented a role-based access control system, allowing for more streamlined and secure user management. 
                            Now, agents and administrators have distinct roles and permissions within the application, ensuring data privacy and access control. <br>
                            Activity Tracking: Comprehensive activity tracking was introduced, providing meticulous logs of all actions and interactions within the app. 
                            This heightened transparency, accountability, and troubleshooting capabilities. <br>
                            Data Security: Robust security measures were added to protect sensitive customer data, ensuring compliance with data protection regulations and 
                            building trust with agents and customers.
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide class="mb-5">
                <div class="card shadow text-center swiper-slide">
                    <div class="image-content">
                        <div class="card-image">
                            <img src="../assets/images/projects/cover-login.png" alt="" class="card-img">
                        </div>
                    </div>

                    <div class="card-content px-3 py-0">
                        <h3 class="text-secondary">Multilingual Support Integration for ALE Interview Application</h3>
                        <div class="hr-line bg-secondary mb-3"></div>
                        <div class="description">
                            At Giantlink, I spearheaded a significant enhancement for the ALE Interview Application, 
                            a crucial tool managing clients and their corresponding customers. In response to the diverse linguistic 
                            needs of our clientele, I introduced multilingual support, extending the application's capabilities to accommodate 
                            languages such as Portuguese, Italian, and Spanish.
                            One of the key challenges addressed was the need for multilingual questionnaires. I seamlessly integrated 
                            questions in English, Portuguese, Italian, and Spanish to cater to a broader audience. This update empowered 
                            users to answer questions in their native languages, ensuring clarity and precision in their responses.
                            Additionally, I implemented a sophisticated algorithm that automatically mapped clients to their respective 
                            countries based on their language preferences. For instance, if a client preferred Italian, the system intelligently 
                            linked them to Italian companies, streamlining communication and ensuring a personalized experience.
                            This update not only expanded the application's reach but also significantly improved user engagement and satisfaction. 
                        </div>
                    </div>

                </div>
            </swiper-slide>

            <swiper-slide class="mb-5">
                <div class="card shadow text-center swiper-slide">
                    <div class="image-content">
                        <div class="card-image">
                            <img src="../assets/images/projects/32818.png" alt="" class="card-img">
                        </div>
                    </div>

                    <div class="card-content px-3 py-0">
                        <h3 class="text-secondary">MISATOM</h3>
                        <div class="hr-line bg-secondary mb-3"></div>
                        <div class="description">
                            MISATOM is a dynamic project aimed at facilitating seamless interactions between clients and their customers, coupled with the power 
                            of geolocation for strategic business insights. In my role as the developer, I crafted this solution using JavaScript for its frontend capabilities, 
                            utilizing mapping APIs for geospatial visualization, and PHP for a robust backend architecture. <br>

                            Key Features: <br>
                            - **Effortless Business Management:** MISATOM simplifies the intricate process of managing client relationships and their corresponding customer networks. <br>

                            - **Geospatial Insights:** Leveraging mapping APIs, the project empowers businesses with precise location tracking and visualization, 
                            unlocking valuable insights for strategic decision-making. <br>

                            This project not only showcases my expertise in web development but also underscores my commitment to creating practical solutions 
                            that drive business efficiency and success. <br>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide class="mb-5">
                <div class="card shadow text-center swiper-slide">
                    <div class="image-content">
                        <div class="card-image">
                            <img src="../assets/images/projects/appointment.png" class="card-img">
                        </div>
                    </div>

                    <div class="card-content px-3 py-0">
                        <h3 class="text-secondary">Medical Appointment</h3>
                        <div class="hr-line bg-secondary mb-3"></div>
                        <div class="description">
                            The "Medical Appointment" web application was conceived with the primary goal of streamlining the management of clinic appointments and services. <br>
                            Developed with a tech stack that includes PHP, JavaScript, Bootstrap, and custom styling, this project serves as a pivotal tool for healthcare 
                            professionals and patients alike. <br>
                            Key Features:<br>
                            - **Efficient Appointment Management:** This application simplifies the scheduling and organization of clinic appointments, 
                            optimizing the healthcare experience for both staff and patients.<br>
                            - **User-Friendly Interface:** Utilizing Bootstrap and custom styling, the user interface is designed for intuitive navigation 
                            and a seamless experience.<br>
                            - **Enhanced Patient Care:** By ensuring efficient service scheduling and management, the application contributes to improved 
                            patient care and satisfaction.<br>
                            As the developer behind this project, I'm proud to have contributed to the healthcare industry by providing a solution that enhances 
                            clinic operations and patient outcomes.
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide class="mb-5">
                <div class="card shadow text-center swiper-slide">
                    <div class="image-content">
                        <div class="card-image">
                            <img src="../assets/images/projects/institute.jpg" class="card-img">
                        </div>
                    </div>

                    <div class="card-content px-3 py-0">
                        <h3 class="text-secondary">IFMOTICA ACTIVITIES</h3>
                        <div class="hr-line bg-secondary mb-3"></div>
                        <div class="description">
                            "IFMOTICA ACTIVITIES" is the institute's dynamic web application meticulously designed to manage a diverse array of club activities, 
                            including music club, theater club, and sports club. Initially developed using PHP and subsequently enhanced with Laravel, 
                            this project stands as a testament to my journey in web development. <br>
                            Key Highlights:<br>
                            - **Comprehensive Club Management:** This application streamlines the administration of various clubs, 
                            ensuring efficient coordination and organization of activities within the institute. <br>

                            - **Technological Evolution:** The project's transformation from PHP to Laravel exemplifies my commitment to 
                            utilizing cutting-edge technologies, resulting in improved performance, scalability, and maintainability.<br>

                            - **Strategic Planning:** "IFMOTICA ACTIVITIES" imparted valuable insights into the art of strategic planning for web applications. <br>
                            It emphasized the importance of meticulous pre-coding preparations, ensuring the success of the development process.
                            This project embodies my dedication to delivering sophisticated, efficient solutions while continuously expanding my 
                            skill set in the realm of web development.
                        </div>
                    </div>


                </div>
            </swiper-slide>

            <swiper-slide class="mb-5">
                <div class="card shadow text-center swiper-slide">
                    <div class="image-content">
                        <div class="card-image">
                            <img src="../assets/images/projects/server.jpg" class="card-img">
                        </div>
                    </div>

                    <div class="card-content px-3 py-0">
                        <h3 class="text-secondary">Chourouk Fuel</h3>
                        <div class="hr-line bg-secondary mb-3"></div>
                        <div class="description">
                            "Chourouk Fuel" is a PHP-based program designed to automate the process of updating fuel tank data by establishing 
                            a seamless connection with the server. This project efficiently retrieves and transmits updated data through the server, 
                            streamlining fuel management operations.<br>
                            Key Features:<br>
                            - **Automated Data Updates:** The program excels in the automation of fuel tank data updates, reducing manual intervention 
                            and enhancing efficiency in fuel management.<br>
                            - **Real-time Connectivity:** Establishing a real-time connection with the server ensures that the most accurate 
                            and up-to-date information is readily accessible.<br>
                            "Chourouk Fuel" represents my commitment to developing practical solutions that optimize operations and contribute to improved 
                            data accuracy in the realm of fuel management.
                        </div>
                    </div>

                </div>
            </swiper-slide>

            <swiper-slide class="mb-5">
                <div class="card shadow text-center swiper-slide">
                    <div class="image-content">
                        <div class="card-image">
                            <img src="../assets/images/projects/weather.png" class="card-img">
                        </div>
                    </div>

                    <div class="card-content px-3 py-0">
                        <h3 class="text-secondary">How Is The Weather?</h3>
                        <div class="hr-line bg-secondary mb-3"></div>
                        <div class="description">
                            "How Is The Weather?" is a dynamic weather website that offers up-to-date daily weather information from across the globe. <br>
                            Powered by Vue.js and integrated with a weather API, this project delivers real-time weather data to users with ease.<br>
                            Key Highlights:<br>
                            - **Global Weather Insights:** The website provides users with convenient access to daily weather forecasts worldwide, 
                            ensuring they stay informed and prepared for changing weather conditions.<br>
                            - **Vue.js Framework:** Developed using Vue.js, the project offers a responsive and interactive user interface for a seamless user experience.<br>
                            - **Visit the Website:** Explore the website and experience the weather updates firsthand by 
                            visiting it <a href="https://how-is-the-weather-3pu0tavix-abdo20bourzikat.vercel.app">here</a>.<br>
                            "How Is The Weather?" demonstrates my commitment to creating user-friendly web applications that deliver valuable 
                            information effortlessly. It's a testament to my skills in web development and UI design.
                        </div>
                    </div>

                </div>
            </swiper-slide>
        </swiper>
    </section>

    <section>
        <h2 class="mt-5 pb-3 text-secondary text-center h-font">SKILLS & TOOLS</h2>
        <div class="hr-line bg-dark"></div>

        <div class="container mt-5">
            <div class="row justify-content-evenly px-lg-0 px-md-0 px-5">
                <div class="col-md-3 bg-white rounded shadow p-2 my-3">
                    <div class="text-center h-font">
                        <h5 class="d-center">Proficient Skills</h5>
                        <hr class="mx-auto" width="100px">
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                                    <img src="../assets/images/skills/filetype-php.svg">
                                    <h6 class="mt-3">Php</h6>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                                    <img src="../assets/images/skills/filetype-js.svg">
                                    <h6 class="mt-3">Javascript</h6>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                                    <img src="../assets/images/skills/laravel.png">
                                    <h6 class="mt-3">Laravel</h6>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                                    <img src="../assets/images/skills/vuejs.png" height="43px">
                                    <h6 class="mt-3">Vue.js</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                
                <div class="col-md-3 ">
                    <div class="row">
                        <div class="col">
                            <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                                <img src="../assets/images/skills/filetype-html.svg">
                                <h6 class="mt-3">Html</h6>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                                <img src="../assets/images/skills/filetype-css.svg">
                                <h6 class="mt-3">Css</h6>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                                <img src="../assets/images/skills/ajax.png">
                                <h6 class="mt-3">Ajax</h6>
                            </div>
                        </div>
                    
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                                <img src="../assets/images/skills/nodejs.png" height="43px">
                                <h6 class="mt-3">Node js</h6>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                                <img src="../assets/images/skills/react.png" height="43px">
                                <h6 class="mt-3">React js</h6>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                                <img src="../assets/images/skills/spring.jpeg" height="43px">
                                <h6 class="mt-3">Spring</h6>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                                <img src="../assets/images/skills/filetype-sql.svg">
                                <h6 class="mt-3">Sql</h6>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                                <img src="../assets/images/skills/mysql.svg">
                                <h6 class="mt-3">Mysql</h6>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                                <img src="../assets/images/skills/git.svg">
                                <h6 class="mt-3">Git</h6>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-3 bg-white rounded shadow p-2 my-3">
                    <div class="text-center h-font">
                        <h5 class="d-center">Skills Familiarity</h5>
                        <hr class="mx-auto" width="100px">
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                                    <img src="../assets/images/skills/filetype-py.svg">
                                    <h6 class="mt-3">Python</h6>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                                    <img src="../assets/images/skills/c.png" height="43px">
                                    <h6 class="mt-3">C#</h6>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                                    <img src="../assets/images/skills/asp.png">
                                    <h6 class="mt-3">Asp.net</h6>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                                    <img src="../assets/images/skills/ado.png">
                                    <h6 class="mt-3">Ado.net</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>
</template>

<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { EffectCoverflow } from "swiper";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay]);
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
        modules: [EffectCoverflow, Pagination, Navigation],
        };
    },

    data() {
        return {
            swiperOptions: {
                breakpoints: { 
                    320: {       
                        slidesPerView: 1,
                        spaceBetween: 10     
                    },
                    750: {
                        slidesPerView: 2,
                        spaceBetween: 10  
                    },
                    1041: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    }
                },   
            },
        }
    },
    methods: {
        onSwiper(swiper) {
            console.log(swiper);
        },
        onSlideChange() {
            console.log('slide change');
        },
    },
};

</script>


<style scoped>
/*home heading part*/

h2.prjname {
    color: rgb(95, 94, 94);
}

/* skills styling part */
.pop:hover {
    border-top-color:  #2ec1ac !important;
    transform: scale(1.03);
    transition: all 0.4s;
}
.pop img {
    width: 40px;
}
/*heading and blogs*/
@media screen and (max-width: 993px) {
    .BlogSwiper {
        margin-top: 20px;
    }
    .swiper-slide {
        width: 380px;
        margin: 0 auto;
        padding: 10px;
    }
}


/*projects swiper*/
.card-content {
    min-height: 570px;
}
.image-content{
    position: relative;
    row-gap: 5px;
    padding: 25px 0;
}
.card-image{
    position: relative;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background: #FFF;
    margin: 0 auto;
    padding: 3px;
}
.card-image .card-img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid var(--gray);
}

</style>
