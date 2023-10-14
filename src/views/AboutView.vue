<template>
    <div class="container">
    <div class="row mt-3">
        <div class="col-md-4">
            <div class="rounded shadow text-white p-3">
                <div class="child text-center">
                    <img class="pic" src="../assets/images/projects/IMG-20220810-WA0027.jpg" alt="">
                </div>
                <p><a href="https://github.com/Abdo20bourzikat"><i class="fa-brands fa-github"></i> Github</a></p>
                <p><a href="https://www.linkedin.com/in/abderrahmane-bourzikat-648104249?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGAlY%2BGo%2BSH2Ni3KrURHqIA%3D%3D"><i class="fa-brands fa-linkedin"></i> Linkedin</a></p>
                <p><a href="https://profile.indeed.com/?hl=en_MA&co=MA&from=gnav-passport--passport-webapp&_ga=2.161646584.574569220.1671630347-708396068.1660642372"><i class="fa-brands fa-pagelines"></i> Indeed</a></p>
                <p><a href="https://instagram.com/abdobourzikat"><i class="fa-brands fa-instagram"></i> Instagram</a></p>
                <p><a href="https://twitter.com/AbDo24919180"><i class="fa-brands fa-twitter"></i> Twitter</a></p>
            </div>
        </div>
        <div class="col-md-8">
            <div class="rounded shadow">
                <div class="content p-3">
                    Hello, I'm Abderrahmane, a 23-year-old junior full-stack web developer hailing from Morocco and currently residing in Fes. <br>
                    I embarked on my programming journey during the summer of 2020, and my initial foray into this world began with the intricate world of algorithms. 
                    While it demanded significant time and effort, it proved to be an invaluable foundation for developing logical thinking. <br> <br>
                    When it comes to my favorite programming language, I have a strong affinity for <i>PHP</i>. 
                    Perhaps it's because I lean towards server-side development, and PHP has a robust reputation.
                    Speaking of projects, we all have those memorable moments when we look back at our first endeavors and chuckle at the mistakes and <i>DRY</i> 
                    principles we once grappled with. <strong>Just kidding!</strong> Those very mistakes have shaped us into the developers we are today. <br>
                    My inaugural project was centered around documenting the activities of the institute I was attending. Admittedly, 
                    it wasn't a masterpiece, but it worked – and I learned immeasurable lessons along the way. <br><br>
                    For aspiring beginners out there, I wholeheartedly recommend diving into numerous projects. 
                    Each one brings a sense of accomplishment, heightened confidence, and increased productivity.
                    In my spare time, I'm constantly expanding my skillset, indulging in my favorite series, and immersing myself in music. <br><br>
                    Thank you for taking the time to get to know me.
                </div>
            </div>
        </div>
        
    </div>
</div>

</template>


<style scoped>
.box-content p:hover {
    padding-left: 2px;
}
.content {
    color: rgb(128, 128, 128);
}
.pic{
    clip-path: circle();
    width: 200px;
    height: 200px;
}
p, p a {
    text-decoration: none;
    color: rgb(128, 128, 128);
}
p a:hover {
    color:rgba(128, 128, 128, 0.603);
    padding-left: 5px;
    transform: scale(1.03);
    transition: all 0.3s;

}

</style>