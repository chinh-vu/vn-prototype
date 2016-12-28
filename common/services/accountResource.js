/**
 * Created by chinhvu on 12/17/16.
 */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("accountResource", ["$resource", accountResource]);

    function accountResource($resource) {
        return $resource("/api/accounts/:accountId")
    }

}());
