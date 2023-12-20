# Top Secret

![Logo](https://github.com/sara-rioseco/DEV007-cipher/blob/main/src/assets/top-secret-logo-banner.png?raw=true)

## Contents

* [1. Project Overview](#1-project-overview)
* [2. Encoding and Decoding](#2-encoding-and-decoding)
* [3. Users](#2-users)
* [4. UI](#3-ui)
* [5. Unit tests](#4-unit-tests)

***

## 1. Project Overview

Top secret is a web application designed to encode and decode messages.
To accomplish this, it receives two inputs from the user: one as text in
string format and another as a positive integer called the _offset_.
The user is presented with two options through buttons:
Encode and Decode.

Also, after getting the result, the user can choose to copy the obtained
text to the clipboard through the COPY button, or to CLEAN the result box
by pressing the CLEAN button.

## 2. Encoding and Decoding

The encoding and decoding processes involve the use of the Caesar Cipher,
one of the simplest methods for encrypting a message. It entails replacing
each letter in a text with another letter located a defined number of
positions forward in the same alphabet. The same displacement number is
used within a single message. Decoding operates similarly, but it replaces
a letter with one found the same number of positions backward in
the alphabet.

For instance, if we go for an _offset_ of 3 positions:

* The letter A is encoded as D.
* The word "HOUSE" is encoded as "KRXVH".
* Regular alphabet: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Encoded alphabet: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

![Caesar Cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

To implement this encryption, an algorithm was used. This algorithm utilizes
the decimal ASCII code of each letter to calculate the appropriate position
based on the user-entered offset. Text input is restricted to accept only
uppercase letters, lowercase letters, and spaces, while the offset input
only accepts positive integers up to 130 and zero.

The result is displayed within the "Result" box.

## 2. Users

The primary users of this product are young individuals with internet/smartphone
access who wish to share information privately with friends. This is presented
as a sort of game, in which you can have a secret conversation with other users,
so it's all about entertainment and and having a fun time.

## 3. UI

The interface is simple and features red, white and grey tones. The logo
resembles a stamp, giving the appearance of a confidential document,
emphasizing the secrecy of the message to be encoded. A funny picture and
a modern responsive design were used.

Figma Prototype: [Go to Prototype](https://www.figma.com/proto/ga5NaXlrktuCNs8KaJJoFh/Top-Secret?type=design&node-id=2-2&t=4lY8rNv0jwZdmlgx-1&scaling=min-zoom&page-id=0%3A1&mode=design)

Original idea:

![Project Prototype](https://github.com/sara-rioseco/DEV007-cipher/blob/main/src/assets/first-prototype.png?raw=true)

First version design:

![First Version Design](https://github.com/sara-rioseco/DEV007-cipher/blob/main/src/assets/first-version.png?raw=true)

Final design:

![Final Design](https://github.com/sara-rioseco/DEV007-cipher/blob/main/src/assets/final-design.png?raw=true)

## 4. Unit Tests

Unit tests were implemented with the following results:

![Unit Tests](https://github.com/sara-rioseco/DEV007-cipher/blob/main/src/assets/unit-tests.png?raw=true)
