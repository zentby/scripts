// ==UserScript==
// @name         Jira Issue Ascending
// @version      0.1
// @description  try to take over the world!
// @author       Yang Zhao
// @match        https://jira.atlassian.com/browse/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (document.getElementsByClassName('aui-iconfont-down').length > 0){
        document.getElementsByClassName('issue-activity-sort-link')[0].click();
    }
})();
