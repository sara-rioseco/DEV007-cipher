# Top Secret

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
"Codificar" (Encode) and "Decodificar" (Decode).

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

![Caeser Cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

To implement this encryption, an algorithm was used. This algorithm utilizes
the decimal ASCII code of each letter to calculate the appropriate position
based on the user-entered offset. Text input is restricted to accept only
uppercase letters, lowercase letters, and spaces, while the offset input
only accepts positive integers.

The result is displayed below the "Codificar" and "Decodificar" buttons.

Original design prototype:

![Project Prototype](https://github.com/sara-rioseco/DEV007-cipher/blob/main/src/assets/Prototipo1.png?raw=true)

## 2. Users

The primary users of this product are young individuals with internet/smartphone
access who wish to share information privately with friends. This is presented
as a sort of game, in which you can have a secret conversation with other users,
so it's all about entertainment and and having a fun time.

## 3. UI

The interface is simple and features light tones. The background aims to
resemble a sheet of paper, and the logo resembles a stamp, giving the
appearance of a confidential document, emphasizing the secrecy of the
message to be encoded. Also, a handwriting-style font was used, simulating
a message being written on a sheet of paper.

Final Design

![Final Design](https://github.com/sara-rioseco/DEV007-cipher/blob/main/src/assets/Proyecto1.png?raw=true)

## 4. Unit Tests

Unit tests were executed with the following results:

![Unit Tests](https://github.com/sara-rioseco/DEV007-cipher/blob/main/src/assets/tests.png?raw=true)