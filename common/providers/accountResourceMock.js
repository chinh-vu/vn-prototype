/**
 * Created by chinhvu on 12/17/16.
 */
(function () {
    "use strict";

    var app = angular
        .module("accountResourceMock",
        ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var accounts = [
            {
                "accountId": 1,
                "firstName": "Han",
                "middleName": "Bao",
                "lastName": "VuTran",
                "role":"Student",
                "dob": "09/14/2003"
            },
            {
                "accountId": 2,
                "firstName": "Tam",
                "middleName": "Bao",
                "lastName": "VuTran",
                "role":"Student",
                "dob": "06/11/2005"
            },
            {
                "accountId": 3,
                "firstName": "Han",
                "middleName": "Bao",
                "lastName": "Bui",
                "role":"Teaching Assistant",
                "dob": "10/14/2000"
            },
            {
                "accountId": 4,
                "firstName": "Sa",
                "middleName": "Thuy",
                "lastName": "Truong",
                "role":"Student",
                "dob": "10/14/2004"
            },
            {
                "accountId": 5,
                "firstName": "San",
                "middleName": "Hoang",
                "lastName": "Truong",
                "role":"Student",
                "dob": "10/03/2006"
            }
        ];

        var accountUrl = "/api/accounts";

        $httpBackend.whenGET(accountUrl).respond(accounts);


        var editingRegex = new RegExp(accountUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var account = {"accountId": 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < accounts.length; i++) {
                    if (accounts[i].accountId == id) {
                        account = accounts[i];
                        break;
                    }
                }
            }
            return [200, account, {}];
        });

        $httpBackend.whenPOST(accountUrl).respond(function (method, url, data) {
            var account = angular.fromJson(data);

            if (!account.accountId) {
                // new product Id
                account.accountId = accounts[accounts.length - 1].accountId + 1;
                accounts.push(account);
            }
            else {
                // Updated account
                for (var i = 0; i < accounts.length; i++) {
                    if (accounts[i].accountId == account.accountId) {
                        accounts[i] = account;
                        break;
                    }
                }
            }
            return [200, account, {}];
        });

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();


    })
}());
