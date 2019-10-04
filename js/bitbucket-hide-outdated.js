// ==UserScript==
// @name         Hide outdated comments
// @version      0.3
// @description  Enable hidding outdated comments
// @author       Yang Zhao
// @match        https://bitbucket.atlassian.com/projects/*/pull-requests/*
// @grant        none
// ==/UserScript==
'use strict';
setInterval(
    () =>
    {
        const comments = [];
        document.querySelectorAll('.file-toolbar .secondary').forEach( c => {if (c.innerText == 'OUTDATED') comments.push(c)})
        if (comments.length && comments[0].onclick == null){
            comments.forEach(comment => {
                comment.style.cursor = 'pointer';
                const contents = comment.parentElement.parentElement.querySelectorAll('.content-view, .file-comments');
                contents.forEach(content => {
                    content.hidden = true;
                });
                comment.onclick = () => {
                    contents.forEach(content => {
                        content.hidden = !content.hidden;
                    });
                };
            });
        }
    }, 3000);
