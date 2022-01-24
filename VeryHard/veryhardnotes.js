class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age); //automates info
        this.languages = languages;
        this.busy = true;
    }
    