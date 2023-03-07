<template>
    <form class="rounded shadow" action="https://formsubmit.co/abdoubourzikat3@gmail.com" method="POST">
        <label>Name:</label>
        <input type="text" name="username" class="form-control shadow-none" required>
        <label>Email:</label>
        <input type="text" name="email" class="form-control shadow-none" required>
        <label>Subject:</label>
        <input type="text" name="subject" class="form-control shadow-none" required>
        <label>Object:</label>
        <input type="text" name="object" class="form-control shadow-none" required>
        <button type="submit" class="btn sendBtn mt-3">Save</button>
    </form>
</template>

<style scoped>
form {
    max-width: 420px;
    margin: 30px auto;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: var(--gray);
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    /* background: rgba(0, 0, 0, 0); */
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

</style>