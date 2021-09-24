"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffairManager = void 0;
var AffairManager = (function () {
    function AffairManager() {
        this._members = [];
        this._affairs = [];
        this._orgs = [];
    }
    AffairManager.prototype.addMember = function (name, email) {
        var mem = new Member(name, email);
        this._members.push(mem);
    };
    AffairManager.prototype.addAffair = function (name, location, date) {
        var aff = new Affair(name, location, date);
        this._affairs.push(aff);
    };
    AffairManager.prototype.addOrganization = function (name) {
        var org = new Organization(name);
        this._orgs.push(org);
    };
    AffairManager.prototype.addMemberToAffair = function (name, aff) {
        for (var i = 0; i < this._affairs.length; i++) {
            if (this._affairs[i].affname == aff) {
                for (var j = 0; j < this._members.length; j++) {
                    if (this._members[j].name == name) {
                        this._affairs[j]._affairsMem.push(this._members[j]);
                    }
                }
            }
        }
    };
    AffairManager.prototype.addAffairToOrganization = function (aff, org) {
        for (var i = 0; i < this._orgs.length; i++) {
            if (this._orgs[i].orgName == org) {
                return 0;
            }
        }
    };
    AffairManager.prototype.findMemberNames = function (q) {
        for (var i = 0; i < this._members.length; i++) {
            if (this._members[i].name == q) {
                return [this._members[i].name];
            }
        }
    };
    AffairManager.prototype.findAffairNames = function (q) {
        for (var i = 0; i < this._affairs.length; i++) {
            if (this._affairs[i].name == q) {
                return [q];
            }
        }
    };
    AffairManager.prototype.findOrganizationNames = function (q) {
        for (var i = 0; i < this._orgs.length; i++) {
            if (this._orgs[i].orgName == q) {
                return [this._orgs[i].orgName];
            }
        }
    };
    AffairManager.prototype.modifyAffair = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0; i < this._affairs.length; i++) {
            if (this._affairs[i].name == args[0]) {
                if (args[1] != undefined) {
                    this._affairs[i].affname == args[1];
                }
                if (args[2] != null) {
                    this._affairs[i].afftime == args[2];
                }
            }
        }
    };
    AffairManager.prototype.getMembers = function (name) {
        this._members.filter(function (member) { return member.memName == name; });
        return this._members.map(function (member) { return member.memName; });
    };
    return AffairManager;
}());
exports.AffairManager = AffairManager;
var Affair = (function () {
    function Affair(name, location, time) {
        this._affairsInd = [];
        this._affairsMem = [];
        this.location = location;
        this.time = time;
        this.name = name;
        this._affairsMem = [];
    }
    Affair.prototype.addmember = function (name) {
        this.member.name = name;
        this._affairsMem.push(this.member);
    };
    Object.defineProperty(Affair.prototype, "affname", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Affair.prototype, "afftime", {
        set: function (time) {
            this.afftime = time;
        },
        enumerable: false,
        configurable: true
    });
    return Affair;
}());
var Organization = (function () {
    function Organization(oName) {
        this._members = [];
        this._affairs = [];
        this.orgName = oName;
    }
    Organization.prototype.addMember = function (mem) {
        this._members.push(mem);
    };
    Organization.prototype.addAffair = function (aff) {
    };
    Organization.prototype.displayMembers = function () {
        console.log(this._members.toString());
    };
    return Organization;
}());
var Member = (function () {
    function Member(name, email) {
        this.email = email;
        this.name = name;
    }
    Object.defineProperty(Member.prototype, "memName", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Member.prototype, "eMail", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    return Member;
}());
//# sourceMappingURL=manager.js.map