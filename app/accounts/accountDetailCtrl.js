/**
 * Created by chinhvu on 12/18/16.
 */
(function () {
    "use strict";

    angular
        .module("schoolAppManagement")
        .controller("AccountDetailCtrl",
    ["account", AccountDetailCtrl]);

    function AccountDetailCtrl(account) {
        var vm = this;

        vm.account = account;
    }
}());