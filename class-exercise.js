class Person {
    constructor (fName, lName, bYear, location, country){
        this.fName = fName;
        this.lName = lName;
        this.bYear = bYear;
        this.location = location;
        this.country = country;
    }

    age() {
        return new Date().getFullYear() - this.bYear;
    }

    retirement () {
        return 65-this.age();
    }

    retirementYear () {
       
        return this.bYear > new Date().getFullYear()-65  ? this.bYear+65 : `already retired`;
    }

}


class Student extends Person{

        constructor(fName, lName, bYear, location, country, university, studentId){
            super(fName, lName, bYear, location, country);
            this.university = university;
            this.studentId = studentId;

        }

        pension () {
            return this.age()*1000;
        }
}

class UniversityStudent extends Student {
    constructor(fName, lName, bYear, location, country, university, studentId, universityLocation){
        super(fName, lName, bYear, location, country, university, studentId);
        this.universityLocation = universityLocation;
    }
}

const nasim = new Person("Nasim", "Reza", 1923, "Berlin", "Germany");

const lara = new Person ("lara", "cilia",1989, "qormi", "Malta");

const studentNasim = new Student("Nasim", "Reza", 1993, "Berlin", "Germany", "DCI Berlin", "#26101993");

const UniversityStudentNasim = new UniversityStudent("Nasim", "Reza", 1993, "Berlin", "Germany", "DCI Berlin", "#26101993", "Berlin,Germany");

console.log(lara, nasim, "Lara's remaining retirement years",lara.retirement(),",","Lara's age ",lara.age(),"Nasim's retirement update: ",nasim.retirementYear());


console.log(UniversityStudentNasim);