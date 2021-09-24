//Logan Grisham
//CSCI 4602-12 
//Assignment 2
//This program manages events, the organizations that run them, and the members that attend them!

//It sucks, and works sometimes, but it was a great attempt at typescript!
// The logic is solid, but definitely not SOLID :D    ... principles D:
//Im going to lose alot of points, so enjoy the humor

export class AffairManager {
    //merbers: Members;
    //affairs: Affairs;
    //

    //make facade per class example? too hard with current experience.
    //this.members: new Members() <- leaves ambigiuous 
   
    _members: Array<Member> = [];//members list in an organizaiton
    _affairs: Array < Affair > =[];//list of affairs
    _orgs: Array<Organization> = [];// list of organizations
    affairTemp: Affair
  
   

    public addMember(name: string, email: string) { //Works! Woo!
        var mem = new Member(name, email)
        this._members.push(mem)
    }
    public addAffair(name: string, location: string, date: string) { //Also works! 
        var aff = new Affair(name, location, date)
        this._affairs.push(aff)
    }
    public addOrganization(name: string) { //Okay the 3 adds are trivial, no back patting. 
        var org = new Organization(name)
        this._orgs.push(org)
    }
    public addMemberToAffair(name: string, aff: string) { // The logic of this works, it appears to work 
        for (let i = 0; i < this._affairs.length; i++) {  // Listing this out seems to be broken so i'll never know 
            if (this._affairs[i].affname == aff) {
                for (let j = 0; j < this._members.length; j++) {
                    if (this._members[j].name == name) {
                        this._affairs[j]._affairsMem.push(this._members[j]);
                    }
                }
            }
        }
    }
    public addAffairToOrganization(aff: string, org: string) { 
        for (let i = 0; i < this._orgs.length; i++) {
            if (this._orgs[i].orgName == org) {
                for (let j = 0; j < this._affairs.length; j++) {
                    if (this._affairs[j].affname == aff) {
                        this.affairTemp.affname = aff
                        this.affairTemp.afftime = this._affairs[j].afftime
                        this.affairTemp.location = this._affairs[j].location
                        return this._orgs[i].addAffair(this.affairTemp) //copies the affair at current location based off name. adds to organization

                    }
                }
            }
        }
    }
    public findMemberNames(q: string): string[] {
        for (let i = 0; i < this._members.length; i++) {
            if (this._members[i].name == q) { //if the name is found
                return [this._members[i].name] //return it
                //this._members[i].name
            }
        }
    }
    public findAffairNames(q: string): string[] {
        for (let i = 0; i < this._affairs.length; i++) {
            if (this._affairs[i].name == q) {
                return [q];
            }
        }
    }
    public findOrganizationNames(q: string): string[] {
        for (let i = 0; i < this._orgs.length; i++) {
            if (this._orgs[i].orgName == q) {
                return [this._orgs[i].orgName]
            }
        }
    }
    public modifyAffair(affname: string, newTitle: string, newDate?: string) {//...args: any[]              //multiple attempts, I like the idea of this one
        for (let i = 0; i < this._affairs.length; i++) {
            if (this._affairs[i].name == affname) { //if ther is an affair of the given name
                this._affairs[i].affname = newTitle; //set that name to the new one
            }
            if (this._affairs[i].name == affname) {
                this._affairs[i].time = newDate;
            }
        }
    }

    public getMembers(name: string) {                                 //Alot of attempts, took inspiration from class. Works occasionally based on outside weather.
        this._members.filter((member) => member.memName == name)
        return this._members.map((member) => member.memName)
        /*for (let i = 0; i < this._affairs.length; i++) {
            if (this._affairs[i].affname == name) {
                return [this._affairs[i]._affairsMem[i].name];
            }
        }*/
        //this._members.filter((member) => member.name == name)
        //return this._affairs.
        //this._members.filter(member => this._affairs[].)
       
    }
 
}
class Affair {
    location: string
    time: string
    private _affairsInd: Array<Affair> = [];// list of affairs not in an organization
    _affairsMem: Array<Member> = [];// List of members in an affair
    name: string;
    member: Member;

    constructor(name: string, location: string, time: string) {
        this.location = location
        this.time = time
        this.name = name
        this._affairsMem = []
    }
    addmember(name: string) {
        this.member.name = name;
        this._affairsMem.push(this.member);
    }

    public set affname(name: string) {
        this.name = name
    }
    public set afftime(time: string) { //other single method for both
        this.afftime = time
    }

}

class Organization {
    //Add affairs or members
    //can host affair
    private _members: Array<Member> = []//members list in an organizaiton
    private _affairs: Array<Affair> = []//list of affairs in an organization
    orgName: string

    constructor(oName: string) {
        this.orgName = oName
    }

    private addMember(mem: Member): void {
        this._members.push(mem)
    }
    addAffair(aff: Affair): void {
        this._affairs.push(aff);
    }

    displayMembers(): void {
        console.log(this._members.toString())
    }


}
class Member {
    email: string
    name: string


    constructor(name: string, email: string) {
        this.email = email;
        this.name = name
    }

    public set memName(name: string) {
        this.name = name
    }

    public get memName(): string {
        return this.name
    }
    public get eMail(): string {
        return this.email
    }


    // Brain storming! but done stupid!


    //getmem :string[]
    //both finds
    //search function, identical name 
    // find member name
    //.filtry ( (member) => member.getName() == query )
    // .map( (member) => member.getName() )
    //
    //
    //get meme(affarittitlr: string) : string[]{
    //.filtry ( (member) => member.getName() == affairtittle )
    // .map( (member) => member.getName() )
    //}
    //
    //
    //
}