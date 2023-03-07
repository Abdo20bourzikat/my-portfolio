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
                <div class="col-lg-6 text-secondary shadow p-5">
                    <p class="text-secondary">Hello, i'm Abdo:)</p>
                    <h3 class="text-secondary pl-5">I'm a Full Stack Web Developer</h3><br>
                    <h6>
                        Extremely motivated to constantly develop my skills and grow professionally.
                        I am confident in my ability to come up with interesting ideas in the field of web development.
                    </h6>
                    <button type="submit" class="btn shadow-none mt-3 sendBtn" data-bs-toggle="modal" data-bs-target="#contactForm">Contact me >></button>
                </div>
                <div class="col-lg-6 BlogSwiper">
                    <swiper
                        :direction = "'vertical'"
                        :loop = true
                        :autoplay= true
                        :pagination = "{
                        clickable: true,
                        }"
                        :modules="modules"
                        class="mySwiper bg-white shadow p-4" style="max-height: 320px"
                    >
                        <swiper-slide class="mb-4">
                            <h3>Giantlink</h3>
                            <span class="badge bg-light text-secondary fs-6">
                                <h4>01-01-2023 to 01-03-2023</h4>
                            </span>
                            <p class="mt-3">
                                That training consists of two parts, The first is the development part, 
                                I build a medical appointment web application to manage an clinic 
                                appointments and services. <br>
                                The second part is the network, and it was about learning more 
                                Networking skills like configuring switches, routers, and computer maintenance.
                            </p>
                        </swiper-slide>
                        
                        <swiper-slide class="mb-4">
                            <h3>Geo de technologie et d'innovation</h3>
                            <span class="badge bg-light text-secondary fs-6">
                                <h4>03-10-2022 to 03-12-2022</h4>
                            </span>
                            <p class="mt-3">
                                Thit is the second training, where i created a bunch of full-stack projects,
                                this training was different, Because it was a bunch of projects already build
                                and you have to update somewhere, It was a new experience that this training gives to me
                                when you can knows other ways of developers code.
                            </p>
                        </swiper-slide>
                                                
                        <swiper-slide class="mb-4">
                            <h3>IFMOTICA</h3>
                            <span class="badge bg-light text-secondary fs-6">
                                <h4>07-03-2022 to 07-04-2022</h4>
                            </span>
                            <p class="mt-3">
                                That is the institute training, In fact it is my first training, <br>
                                I was afraid because i didn't have much experience at that time, <br>
                                They assigned me to build a large web application to manage the institute's activities.
                                It took from me about two months, But i learned a log even the quality of code and the
                                terrible mistakes. 
                            </p>
                        </swiper-slide>
                    </swiper>
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
                            <img src="../assets/images/projects/32818.png" alt="" class="card-img">
                        </div>
                    </div>

                    <div class="card-content p-4">
                        <h3 class="text-secondary">MISATOM</h3>
                        <div class="hr-line bg-secondary mb-3"></div>
                        <div class="description">
                            This is the MISATOM project, the goal of this project is
                            to manage the clients and their customers, and locate them on 
                            the maps for a business cause. i programmed it with Javascript using 
                            the maps Api, and Php for the backend.
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

                    <div class="card-content p-4">
                        <h3 class="text-secondary">Medal Appointment</h3>
                        <div class="hr-line bg-secondary mb-3"></div>
                        <div class="description">
                            This is the medical appointment web application for managing a clinic appointments and services.
                            i programmed it with php, javascript using bootstrap and some styles.
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

                    <div class="card-content p-4">
                        <h3 class="text-secondary">IFMOTICA ACTIVITIES</h3>
                        <div class="hr-line bg-secondary mb-3"></div>
                        <div class="description">
                            Thit is the institute's web app, i programmed it with Php,
                            and after i reprogrammed it with Laravel. <br>For the record i learned how to 
                            manage web application with Laravel, and how to plan ahead of the coding part.
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

                    <div class="card-content p-4">
                        <h3 class="text-secondary">Chourouk Fuel</h3>
                        <div class="hr-line bg-secondary mb-3"></div>
                        <div class="description">
                            Chourouk Fuel is a php program for updates automatically fuel
                            tank data after connecting to their server, 
                            and returns the updated data through the server.                        
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

                    <div class="card-content p-4">
                        <div class="hr-line bg-secondary mb-3"></div>
                        <h3 class="text-secondary">How Is The Weather?</h3>
                        <div class="description">
                            This is the weather's website, i programmed it with Vue.js,
                            using the weather Api.<br>
                            I learned how to use the Api and how to extract information from it. <br>
                            <a href="https://how-is-the-weather-3pu0tavix-abdo20bourzikat.vercel.app" class="btn btn-secondary">Visit website</a>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide class="mb-5">
                <div class="card shadow text-center swiper-slide">
                    <div class="image-content">
                        <div class="card-image">
                            <img src="../assets/images/projects/pizza.jpg" class="card-img">
                        </div>
                    </div>

                    <div class="card-content p-4">
                        <h3 class="text-secondary">The MOROCCO'S Best Pizza</h3>
                        <div class="hr-line bg-secondary mb-3"></div>
                        <div class="description">
                            This is the pizza's web app, the second what i made with Laravel, <br>
                            Honestly, i programmed it for more control over Laravel.
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
                <div class="col-md-1">
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/filetype-php.svg">
                        <h6 class="mt-3">Php</h6>
                    </div>
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/filetype-sql.svg">
                        <h6 class="mt-3">Sql</h6>
                    </div>
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/filetype-js.svg">
                        <h6 class="mt-3">Javascript</h6>
                    </div>
                </div>
                <div class="col-md-1">
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/filetype-py.svg">
                        <h6 class="mt-3">Python</h6>
                    </div>
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/filetype-java.svg">
                        <h6 class="mt-3">Java</h6>
                    </div>
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/c.png" height="43px">
                        <h6 class="mt-3">C#</h6>
                    </div>

                </div>

                <div class="col-md-1">
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/filetype-html.svg">
                        <h6 class="mt-3">Html</h6>
                    </div>
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/filetype-css.svg">
                        <h6 class="mt-3">Css</h6>
                    </div>
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/filetype-xml.svg">
                        <h6 class="mt-3">Xml</h6>
                    </div>
                </div>

                <div class="col-md-1">
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/jquery.svg">
                        <h6 class="mt-3">Jquery</h6>
                    </div>
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/filetype-json.svg">
                        <h6 class="mt-3">Json</h6>
                    </div>
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/ajax.png">
                        <h6 class="mt-3">Ajax</h6>
                    </div>
                </div>

                <div class="col-md-1">

                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/api.svg">
                        <h6 class="mt-3">Api</h6>
                    </div>
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/vuejs.png" height="43px">
                        <h6 class="mt-3">Vue.js</h6>
                    </div>
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/bootstrap.svg">
                        <h6 class="mt-3">Bootstrap</h6>
                    </div>
                </div>

                <div class="col-md-1">
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/laravel.png">
                        <h6 class="mt-3">Laravel</h6>
                    </div>
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/express.png" height="43px">
                        <h6 class="mt-3">Express</h6>
                    </div>
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/flask.jpg">
                        <h6 class="mt-3">Flask</h6>
                    </div>
                </div>

                <div class="col-md-1">
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/asp.png">
                        <h6 class="mt-3">Asp.net</h6>
                    </div>
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/ado.png">
                        <h6 class="mt-3">Ado.net</h6>
                    </div>
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/nodejs.png" height="43px">
                        <h6 class="mt-3">Node js</h6>
                    </div>
                </div>

                <div class="col-md-1">
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/git.svg">
                        <h6 class="mt-3">Git</h6>
                    </div>
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/github.svg">
                        <h6 class="mt-3">Github</h6>
                    </div>
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/mysql.svg">
                        <h6 class="mt-3">Mysql</h6>
                    </div>
                </div>
                <div class="col-md-1">
                    <div class="text-center bg-white rounded shadow p-2 my-3 border-top border-4 border-dark pop">
                        <img src="../assets/images/skills/mongodb.png" height="40px">
                        <h6 class="mt-3">Mongodb</h6>
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
    max-height: 360px;
}
.image-content{
    position: relative;
    row-gap: 5px;
    padding: 25px 0;
}
.card-image{
    position: relative;
    height: 150px;
    width: 150px;
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