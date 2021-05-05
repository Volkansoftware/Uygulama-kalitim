let Person = function(name)
{
    this.name=name;
}
let student = function(name,number)
{
    Person.call(this,name);
    this.number=number;
}
student.prototype.study=function()
{
    console.log("bugün ders çalıştım");
}

let teacher = function(name,branch)
{
    Person.call(this,name);
    this.branch=branch;
}
teacher.prototype.teach=function()
{
    console.log("bir şeyler öğretmek");
}
let headmaster = function(name,branch)
{
    teacher.call(this,name,branch);
}
headmaster.prototype = Object.create(teacher.prototype);
headmaster.prototype.constructor= headmaster;
headmaster.prototype.shareTask= function()
{
    console.log("gorev paylaşımı yapıldı");
}
let volkan = new headmaster("volkan","software");
let begüm = new student("begüm",13);
let battal = new teacher("battal","software");
battal.teach();
begüm.study();
console.log(volkan);
volkan.shareTask();

