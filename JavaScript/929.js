/*
* /\+.*$|\./g
*
* 其中 \+.*$ 匹配以+开头的后续任意连接的子串
* \. 匹配所有 . 字符串
* */

const numUniqueEmails = emails => new Set(emails.map(email => `${email.split('@')[0].replace(/\+.*$|\./g, '')}@${email.split('@')[1]}`)).size;
