# Lab 5 - Starter

**Name:** Yu Wu

## GitHub Pages

- [expose.html](https://wuyudaxia.github.io/Lab5_Starter/expose.html)
- [explore.html](https://wuyudaxia.github.io/Lab5_Starter/explore.html)

## Check Your Understanding

**1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? Assume the feature lets a user write and send a message to another user.**

No, not really for the *whole* “send a message” part. Messaging is complicated. Typing text is simple, but sending it involves many things hooked together—the app screen, Wi‑Fi/network, servers, storing data, letting the other user see it, logging in, handling errors, and more. Unit tests fit best when a part is **small**, has **few moving parts**, is **easy to debug alone**, runs **fast**, and changing other parts of the app usually **won’t break** that test easily. Sending a whole message is the opposite kind of situation: lots of connections and bigger moving parts.

**2) Would you use a unit test to test the “max message length” feature? Why or why not? Assume it prevents more than 80 characters.**

Yes. This rule is obvious for unit tests—it is basically a **small local check**: count the letters (or typed characters), allow up to 80, block more than 80. There is nothing huge or many parts here, so a unit test matches the advantages we read about (simple, fast, easy to separate from other features).
