export class StudentRegistrationModel{
    FullName:string;
    FatherName:string;
    MotherName:string;
    RollNo:string;
    PhoneNo :string;
    Address:string;
    Standerd:string;
    SchoolName:string;
    Password:any;
}

export class StudentLogin{
    RollNo:string;
    Password:any;
}
export class teacherRegistrationModel{
    FullName:string;
   
    PhoneNo :string;
    Address:string;
    Standerd:string;
    SchoolName:string;
    Password:any;
}
export class TeacherLogin{
    FullName:string;
    Password:any;
}
export class questions{
    option1:any;
    option2:any;
    option3:any;
    option4:any;
    problem:any;
    answer:any;
    
}