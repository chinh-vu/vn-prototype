/**
 * Created by chinhvu on 12/17/16.
 */
(function () {
    "use strict";
    angular
        .module("schoolAppManagement")
        .controller("AccountListCtrl",
        ["accountResource",

            AccountListCtrl]);


    function AccountListCtrl( accountResource) {
        var vm = this;

        accountResource.query(function(data) {
            vm.accounts = data;
        });
    };
}());


/*
 var self = this;
 var data = [{name: "Moroni", age: 50} ];
self.tableParams = new NgTableParams({}, { dataset: data});
 */