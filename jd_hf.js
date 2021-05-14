const $ = new Env("合肥旗舰店开业");
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
const cp = $.isNode() ? require('child_process') : '';
let cookiesArr = [], cookie = '', message = '';
let shareCode = [];
 var _0xodX='jsjiami.com.v6',_0x1f9c=[_0xodX,'w6jCl0LDsFA=','ecKqwpjDvVM=','5Lqx5LiZ6L2a5Zi95Lqc56qj5peI5o6J','JMKMwrY1wok/wrsyw5F5wqfDrDBqUBt1w6xCwqbDjAdSBsKaJ8O7w4zCrEo6e8K6wp4Jw7I7BsK9wpdZSWHDhsK7NV1MwpAhw7Qwwoo9','IcKdw68kwopswrp3w5gyw6nDoi0=','OybCm0HDnMKXBMOSwrHDjTheIsKhYMOYYcOFwq7CsMOgw6l0Dkonw4ZhZMKbwqzCpR5yQMOWHHrDkMOvwojCpHxgViLCoMOfwpfDnAjCpgEwPzU7fTkuw6I1XsKtJcOXMUoNGRpNwpkCw7HDul1UJzRCwq3CnsOiw4Zlw6NqaWjDuXkaw5w8LMOwcQUvw4HDjg5fI1nCrmXDlMKZX8ONw4p4QcOKwppqOMKHwojCuik4wpN5CWXDh8Kiw7FLe8OKYcOswok=','w4zDlcORG8O2','wo0tw4TDhRY=','XGbDiw==','wrrCgHTCkGnDisKaDkvCsA==','w4BZSy3Cvw==','OygKwrNR','w5jDosKZIVQ=','6YCJ6KaP5L6R5puQ5LqE56S556ax5rKn','YsORwrQ=','wqfCgXd8wr7CoA==','PgbCtHDDlw==','H8Ogw7A=','QsKHwqfD
