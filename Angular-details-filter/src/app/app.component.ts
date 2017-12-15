import { Component} from '@angular/core';
import {FilterPipe} from './filter.pipe';
import {studentI} from './studentlist';
import {HighDirective} from './high.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    p {
      color:purple;
      font-size:40px;
    }
    #op
    {
color:Red;
font-size:25px
    }
    table {
      border-collapse: collapse;
     
  }
  
  th, td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
  }
  `]
})
export class AppComponent {
  title:String;
  no:number=50;
    
stu: studentI[] = [];
/*ninjas=[{name:'srv',belt:'black'},{name:'kedar',belt:'yelow'},{name:'teja',belt:'brown'},];*/
get(tn,tp)
{
 this.title=tn+"'s"+" " +"percentage is"+" "+ tp;

  alert(this.title);
}
hey(n)
{
  return this.no=n;
}
  constructor(){

        
  }
  ngOnInit(): void {
    this.stu = this.getstudent();
    console.log(this.stu);
  }
  getstudent(): studentI[] {
    return [
      {



        "name": "anurag",

        "branch": "cse",

        "favlang": "java",
       "per":50,
       "state":"telangana",
       "jid":1020

      },

      {

        "name": "reddy",

        "branch": "cse",

        "favlang": "php",
        "per":68,
        "state":"telangana",
        "jid":1021

      },
      {
        
                "name": "Supraja",
        
                "branch": "cse",
        
                "favlang": "php",
                "per":62,
                "state":"telangana",
                "jid":1022
        
              },

      {

        "name": "Ganesh Srv",

        "branch": "cse",

        "favlang": "C",
        "per":25,
        "state":"telangana",
        "jid":1023

      },

      {

        "name": "Sriman",

        "branch": "cse",

        "favlang": "java",
        "per":70,
        "state":"telangana",
        "jid":1024

      },

      {

        "name": "miller",

        "branch": "cse",

        "favlang": "java",
        "per":70,
        "state":"telangana",
        "jid":1025

      },
      {

        "name": "akhil",

        "branch": "cse",

        "favlang": "java",
        "per":63,
        "state":"telangana",
        "jid":1026

      },
      {

        "name": "anu",

        "branch": "cse",

        "favlang": "Python",
        "per":70,
        "state":"telangana",
        "jid":1027

      },
      {

        "name": "Teja",

        "branch": "mech",

        "favlang": "C",
        "per":80,
        "state":"andhra pradesh",
        "jid":1028

      },
      {

        "name": "Ammaresh",

        "branch": "civil",

        "favlang": "php",
        "per":61,
        "state":"Mumbai",
        "jid":1029

      },
      {

        "name": "Ashish",

        "branch": "cse",

        "favlang": "Python",
        "per":75,
        "state":"pune",
        "jid":1030

      },
      {

        "name": "sravan",

        "branch": "ecm",

        "favlang": "Python",
        "per":85,
        "state":"telangana",
        "jid":1031

      },
      {

        "name": "nihal",

        "branch": "cse",

        "favlang": "java",
        "per":83,
        "state":"telangana",
        "jid":1032

      },
      {

        "name": "Swapna",

        "branch": "cse",

        "favlang": "perl",
        "per":98,
        "state":"karnataka",
        "jid":1033

      },
      {

        "name": "pavithra",

        "branch": "cse",

        "favlang": "Python",
        "per":66,
        "state":"telangana",
        "jid":1034

      },
      {

        "name": "sowjanya",

        "branch": "cse",

        "favlang": "Python",
        "per":68,
        "state":"telangana",
        "jid":1035

      },
      {

        "name": "ashwin gupta",

        "branch": "cse",

        "favlang": "c#",
        "per":75,
        "state":"mumbai",
        "jid":1036

      },
      {

        "name": "karthik",

        "branch": "cse",

        "favlang": "Python",
        "per":50,
        "state":"pune",
        "jid":1037

      },
      {

        "name": "jagdish",

        "branch": "it",

        "favlang": "perl",
        "per":62,
        "state":"delhi",
        "jid":1038

      },
      {

        "name": "vineela",

        "branch": "cse",

        "favlang": "java",
        "per":60,
        "state":"goa",
        "jid":1027

      },
      {

        "name": "kedar",

        "branch": "ecm",

        "favlang": ".NET",
        "per":68,
        "state":"telangana",
        "jid":1027

      }


    ];
  }

}


/*initial:number=20;

message="";
 
  myCount: number = 10;
  countChange(event) {
    this.myCount = event;
  }
  onNotify($event) {
    this.message=$event;
  }*/