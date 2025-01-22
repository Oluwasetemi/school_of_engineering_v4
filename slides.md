---
background: https://res.cloudinary.com/drnqdd87d/image/upload/f_auto/nmgakkzd3lmlibnfosps
title: School of Engineering(HTML)
titleTemplate: '%s - AltSchool Africa'
info: |
  AltSchool v4 Class Notes.The Making of world class developers. To join visit (https://altschoolafrica.com)
class: text-center
author: Oluwasetemi Ojo
highlighter: shiki
twoslash: true
lineNumbers: true
download: true
browserExporter: true
exportFilename: soe_altschool_semester1
export:
  format: pdf
  timeout: 160000
  dark: false
  withClicks: false
  withToc: true
drawings:
  persist: false
transition: slide-left
mdc: true
hideInToc: true
overviewSnapshots: true
selectable: true
---

# [AltSchool School of Engineering]{.font-hand}

Class notes for the 1st Semester

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Are you ready to learn Software Engineering focusing on web technologies? Press <kbd>space</kbd> on your keyboard <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/oluwasetemi/school_of_engineering_v4" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
  <a href="https://github.com/Oluwasetemi/school_of_engineering_v4/releases" target="_blank" alt="DOwnload" title="Download PDF or PPTX version of the slide"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-download />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->
---
hideInToc: true
---

# Table of contents

<Toc columns="2" minDepth="1" maxDepth="2"></Toc>
---

# What is Software Engineering?
<div></div>
Software Engineering is the <span v-mark.underline.yellow="">systematic application</span> of <span v-mark.underline.yellow="">engineering principles</span> to the <span v-mark.underline.yellow="">design</span>, <span v-mark.underline.yellow="">development</span>, <span v-mark.underline.yellow="">maintenance</span>, <span v-mark.underline.yellow="">testing</span>, and <span v-mark.underline.yellow="">evaluation of software</span>.

It involves a <span v-mark.underline.red="">disciplined approach</span> to <span v-mark.underline.red="">analyzing user needs</span>, <span v-mark.underline.red="">planning and managing projects</span>, creating software systems, and <span v-mark.underline.red="">ensuring their reliability</span>, <span v-mark.underline.red="">efficiency</span>, and <span v-mark.underline.red="">maintainability</span>.

You will need a blend of <span v-mark.underline.green="">technical Skills</span>, <span v-mark.underline.green="">engineering methods</span> and <span v-mark.underline.green="">project management</span> to produce high-quality software systems.

<br>
<br>

Read more about [Software Engineering?](https://www.wearedevelopers.com/magazine/what-is-software-engineering)

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
---
hideInToc: true
---

# [Foundational Requirement](https://norvig.com/21-days.html)

- coding
- coding
- coding
- coding

---

# Why Web and Cloud?

- Career Advantages
  - High Demand and Competitive Salaries
  - Remote Work
  - Entrepreneurial Options
- Technical Advantages
  - Scalability, Cost Efficiency, Security and CI/CD
  - Access to Advanced Tools and Services
  - Global Reach
- Educational and Community Benefits
  - Extensive Learning Resources
  - Active Community Support and Open Source
- Innovation and Future-Proofing
  - Cutting-Edge Technologies
  - Adaptability

---

# Focus of this Class

- {HTML}
- {CSS}
- {JavaScript}
- {Git} and {GitHub} | Open Source

---

# Tools

- {Visual Studio Code} or any equivalent (JetBrains {Webstorm} IDE, {Zed}, Sublime Text)
- [Git and GitBash for windows](https://git-scm.com/downloads), {Git} only for mac and linux
- {Nodejs}, {Python}

---

# Accounts

Some Account You Expected to (Create || Have)

- {GitHub} and any other equivalent in GitLab or BitBucket
- [LinkedIn](https://www.linkedin.com/in/setemiojo)
- [Twitter or X](https://x.com/setemiojo)
- {Stackblitz} or {Codesandbox}
- {Codepen}
- [Stackoverflow](https://stackoverflow.com/users/4330745/oluwasetemi)
- {ChatGPT}
- {Figma}
- [Dev.to](https://dev.to/oluwasetemi) | [hashnode](https://hashnode.com/@setemiojo) | [Medium](https://medium.com/@setemiojo)
- {Slack} or {Discord}
- {Netlify} | {Vercel} | {Render}
- [Personal Website](https://www.oluwasetemi.dev/). we will teach to create your own.

---

# Installations

<Youtube class="w-full h-96 border border-main rounded-lg" id="LebD-zBxZeY" />

---

# Algorithms and FlowCharts

Definition: An algorithm is a step-by-step procedure or a set of rules designed to perform a specific task or solve a particular problem. It is a sequence of instructions that are followed to achieve a desired outcome.

Example: An algorithm for making a cup of tea might include steps like boiling water, adding a tea bag to a cup, pouring the hot water into the cup, letting it steep for a few minutes, and then removing the tea bag.

<div class="grid grid-cols-2 gap-1">
<Tips type="tip">
<ol>
<li>Patterns Reduce Complexity like two-pointer, sliding window, divide and conquer, dynamic programming, etc.</li>

<li>Optimize Thinking for Efficiency</li>

<li>Develop Transferable Skills</li>

<li>Practice and Apply</li>
</ol>
</Tips>

<Tips type="success">
Building intuition around patterns will significantly improve your problem-solving skills, speed, and confidence in tackling algorithmic challenges.
</Tips>
</div>

---
hideInToc: true
---
# flowchart

Definition: A flowchart is a visual representation of the steps in a process or system using symbols, arrows, and text. It depicts the sequence of operations or steps, making it easier to understand how a process flows from start to finish.

Example: A flowchart for logging into a website might start with a "Start" symbol, followed by a decision symbol asking if the user has entered their username and password, arrows leading to "Enter username" and "Enter password" steps, and an end symbol once the login process is successful.

```mermaid
---
title: Flowchart for finding the greatest of three numbers a, b, and c
---
flowchart LR
  Start[Start] --> InputNumbers[Input three numbers: a, b, and c]
  InputNumbers --> CheckA{Is a > b and a > c?}

  CheckA -- Yes --> AisGreatest[Print a is the greatest]
  CheckA -- No --> CheckB{Is b > a and b > c?}

  CheckB -- Yes --> BisGreatest[Print b is the greatest]
  CheckB -- No --> CisGreatest[Print c is the greatest]

  AisGreatest --> End[End]
  BisGreatest --> End
  CisGreatest --> End
```

---
hideInToc: true
---

# Problem Solving

<div />

Use {ChatGPT} to research what the key components of problem solving are. Try to use it to solve any problem you have.

---

# Programming Paradigms

- Procedural Programming
- Object-Oriented Programming (OOP)
- Functional Programming
- Logic Programming
- Declarative Programming
- Concurrent Programming
- Event-Driven Programming

<v-click>
  Each paradigm brings its own way of thinking and problem-solving, making some paradigms more suitable for certain types of tasks than others. Modern programming often involves a combination of these paradigms to leverage their respective strengths.
</v-click>

---
hideInToc: true
---

# Programming Concepts

<div class="grid grid-cols-2 gap-x-4">

  <v-click :every='1' depth="2">

<ul>
  <li> Variables</li>
  <li> Data Types</li>
  <li> Control Structures</li>
  <li> Functions (or Methods)</li>
  <li> Data Structures</li>
  <li> Algorithms</li>
  <li>
    Object-Oriented Concepts
    <!-- <v-click> -->
      <ul>
      <li>Encapsulation</li>
      <li>Polymorphism</li>
      <li>Inheritance</li>
    </ul>
    <!-- </v-click> -->
  </li>

</ul>

  </v-click>

  <v-click :every="1">
    <ul>
     <li> Recursion</li>
      <li> Error Handling</li>
      <li> Memory Management</li>
      <li> Concurrency</li>
      <li> File I/O</li>
    </ul>

  </v-click>

</div>
<v-click>
    <p>
      Understanding these concepts is fundamental to mastering programming and can significantly improve your ability to develop complex and efficient software solutions.
    </p>
</v-click>

---
hideInToc: true
---

# Variables

Storage locations in memory with a name,
used to hold data.

```js {monaco-run} {autorun: false}
let name = 'AltSchool'
let age = 99

console.log({name, age})
```

```py
name = 'AltSchool'
age = 99

print(name, age)
```

---
hideInToc: true
---
# Data Types

Classification of data items, defining the operations that can be performed on them.

Primitive types: int, char, float, boolean, number, bigint, symbol, string, undefined, null,

Composite types: arrays, structs, classes.

Abstract data types: List, Stack, Queue, etc.

```js {monaco-run} {autorun: false}
let name = 'AltSchool'
let age = 99
let isStudent = true

const arrayOfScore = [99, 40, 50]
const person = { name: name, age: age, isStudent: isStudent }

console.log(arrayOfScore)
console.log(person)
```

---
hideInToc: true
---
# Control Structures

Direct the order of execution of statements in a program.

Conditional statements: if, else, switch.

Loops: for, while, do-while.

Branching: break, continue, return

````md magic-move
```js {*}
let name = 'AltSchool'
let age = 99

if (condition) {
  // do something
} else if (condition) {
  // do something else if
} else {
  // finally do something
}
```

```js
switch (key) {
  case value:
    // code
    break;

  default:
    break;
}
```

```js
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

while (condition) {
  // code block to be executed
}

```


````

---
hideInToc: true
---
# Functions (or Methods)

Blocks of code designed to perform a particular task, reusable throughout the program.

## Key Points

- Definition and calling.
- Parameters and return values.
- Scope and lifetime of variables.

---
hideInToc: true
---
# Data Structures

# Ways of organizing and storing data to enable efficient access and modification

Key Points:
Linear: Arrays, Linked Lists.
Non-linear: Trees, Graphs.
Abstract: Stack, Queue, Map, Set
---
hideInToc: true
---
# [Data Structures More (Trees)](https://www.youtube.com/watch?v=oSWTXtMglKE&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=8)

Binary Search Tree, AVL Tree, Red-Black Tree
Segment Tree
Fenwick Tree (Binary Indexed Tree)

![Tree](https://raw.githubusercontent.com/trekhleb/javascript-algorithms/master/src/data-structures/tree/images/tree.jpeg)

---
hideInToc: true
---
# Algorithms

Step-by-step procedures or formulas for solving problems.

## Key Points

Sorting: Bubble sort, Quick sort, Merge sort.
Searching: Linear search, Binary search.
Complexity: Big O notation for time and space.

---
hideInToc: true
---

# Object-Oriented Concepts

Principles used in OOP to create objects that model real-world entities

## Key Points

Classes and Objects.
Encapsulation, Inheritance, Polymorphism, Abstraction.
Constructors and destructors

### Encapsulation - Hiding the internal state and requiring all interaction to be performed through an object's methods

### Polymorphism - The ability of different classes to be treated as instances of the same class through a common interface

### Inheritance - is a mechanism that allows a class to inherit properties and behaviors from another class

---
hideInToc: true
---

# Recursion

A function calling itself to solve a smaller instance of the same problem.

## Notable Key Points

- Base case and recursive case.
- Stack overflow and efficiency considerations.
- Examples: Factorial, Fibonacci sequence

---
hideInToc: true
---

# Error Handling

Mechanisms to handle runtime errors or exceptional conditions.

## Key Points

- Try, catch, finally blocks.
- Throwing exceptions.
- Custom exception classes

---
hideInToc: true
---

# Memory Management

Techniques to control the allocation, use, and deallocation of memory

# Concurrency and Asynchronous Operations

Running multiple computations simultaneously

# File I/O

Reading from and writing to files. File streams, Opening, reading, writing, and closing files, Binary vs text files

---
name: Getting Started With HTML
---

# {HTML}

<div />

HTML(HyperText Markup Language) is the foundation of basically every web page, basically, it is the core language of the World Wide Web. It’s how we tell browsers to structure content into paragraphs, headings, images, links, lists, forms, tables, buttons, and more. If you’re interested in building a website, web development, or just coding in general, learning HTML is a great place to start.

##  Getting Up and Running with {HTML}

Getting Up and Running with HTML, its important to understand the basic structure of an HTML document. The `Document Type` and HTML content itself (which is the `html` element). This contains the Metadata (`head` element and its related elements) and Body, which is what is displayed in the browser's visible area.


---
hideInToc: true
name: HTML Element Structure
layout: image
---

![](./public/html_tags.jpg)

---
hideInToc: true
---

# Let's break it down a bit

- HTML uses "markup" to annotate text, images, and other content for display in a Web browser. This markup is called ELEMENT or TAG.HTML Element or Tag includes <kbd>&lt;head&gt;</kbd>, <kbd>&lt;title&gt;</kbd>, <kbd>&lt;body&gt;</kbd>, <kbd>&lt;header&gt;</kbd>, <kbd>&lt;footer&gt;</kbd>, <kbd>&lt;article&gt;</kbd>, <kbd>&lt;section&gt;</kbd>, <kbd>&lt;p&gt;</kbd>, <kbd>&lt;div&gt;</kbd>, <kbd>&lt;span&gt;</kbd>, <kbd>&lt;img&gt;</kbd>, <kbd>&lt;aside&gt;</kbd>, <kbd>&lt;audio&gt;</kbd>, <kbd>&lt;canvas&gt;</kbd>, <kbd>&lt;datalist&gt;</kbd>, <kbd>&lt;details&gt;</kbd>, <kbd>&lt;embed&gt;</kbd>, <kbd>&lt;nav&gt;</kbd>, <kbd>&lt;search&gt;</kbd>, <kbd>&lt;output&gt;</kbd>, <kbd>&lt;progress&gt;</kbd>, <kbd>&lt;video&gt;</kbd>, <kbd>&lt;ul&gt;</kbd>, <kbd>&lt;ol&gt;</kbd>, <kbd>&lt;li&gt;</kbd> and many others.

- “HyperText” is text on a web page that contains references to another web page. You probably know these as hyperlinks. We use hyperlinks to jump to another section of the same page, a different page on the current website, or a completely new website. Hyperlinks can also open a PDF, email, or multimedia, like a video or audio file.

- Linking information together in this way was a revolutionary step in building the web. Together, HTML and the internet make it possible for anyone to access all types of information around the world, in any order they want.

- Finally, “Language” is the simplest part of the acronym to understand. Like any language, HTML has a unique syntax and alphabet. But what kind of language is it, exactly? It's a markup language.



---
hideInToc: true
---

# HTML Element

<div />

An HTML element or "tags", which consist of the element name surrounded by &lt; and &gt; like <kbd>&lt;p&gt;</kbd>. The name of an element inside a tag is case-insensitive. That is, it can be written in uppercase, lowercase, or a mixture. For example, the <kbd>&lt;title&gt;&lt;/title&gt;</kbd> tag can be written as <kbd>&lt;Title&gt;</kbd><kbd>&lt;/Title&gt;</kbd>, <kbd>&lt;TITLE&gt;</kbd><kbd>&lt;/TITLE&gt;</kbd>, or in any other way. However, for convention and recommendation practice is to write tags in lowercase. These tags or elements can be either self closing <kbd>&lt;img/&gt;</kbd> or normal/common once with opening tag <kbd>&lt;p&gt;</kbd> and a closing tag <kbd>&lt;/p&gt;</kbd>.

<div class="grid grid-cols-3 gap-1" >
<Tips type="danger">
There are three rendering modes in modern browsers: Quirks Mode(Old, pre-standardized HTML CSS behavior), Standards Mode(modern HTML/CSS standards), and Almost Standards Mode (slight compatibility)
</Tips>
<Tips type="danger">
A page will enter into quirks mode if the doctype is not declared or is declared incorrectly.
<br />
Browser can auto complete tags, but it is recommended to close tags properly. this can lead to unexpected results.
</Tips>
<Tips type="danger">
If you decide to use the opening tag of an element, you have a duty to close the tag if it is not a self-closing tag.
</Tips>
</div>

<!-- Semantic HTML, Heading & Sections, Attribute(Boolean, Enumerated, Global and custom attributes), Text Basics, Links, Navigation -->

---
hideInToc: true
---

# First HTML Document

<div />

create a folder and add an `index.html` file either using your vs code or terminal or file explorer. Use the liveserver extension to view the file in the browser.

<Tips type="info" fullWidth>
Always open your vscode on the right folder your created for your project not on the root folder of your computer or desktop or documents or downloads.
</Tips>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Web Page</title>
    <meta name="description" content="This is a responsive web page">
</head>
<body>
    <h1>Welcome to the world of HTML</h1>
</body>
</html>
```

---
hideInToc: true
layout: two-cols
---

# Check this out:

```mermaid
sequenceDiagram
    participant U as User
    participant B as Browser
    U->>B: <h1>Welcome to the world of HTML</h1>
    Note over U,B: Breakdown of the HTML element
    B-->>U: Opening tag: <h1>
    B-->>U: Content: Welcome to the world of HTML
    B-->>U: Closing tag: </h1>
```

::right::

# Explanation

<div />

The diagram explains what happens when a user view the first html page we created in a browser using right localhost:port / 127.0.0.1:port.

The browser reads the content of the page and displays it in the browser window. The content of the page is enclosed within the <kbd>&lt;h1&gt;</kbd> tags, which define a top-level heading.

The `h1` is an instruction to the browser to display the text as a top-level heading.

The browser renders or paint the content between the tags on the screen.

The text "Welcome to the world of HTML" is displayed as the main heading of the page.

---
hideInToc: true
name: HTML Element Structure
layout: image
---

![](./public/self-closing.png)


---
hideInToc: true
---

# Self Closing Tags like HTML &lt;img/&gt; Tag

We have been talking about tags in our previous teachings but this time you'll be seeing another form of tag that's called self closing tags under which the popular image tag fall under.

Self-closing tags, also known as void elements, are a feature in HTML and XML where the tag does not require a separate closing tag. Instead, the tag is closed within itself. This is useful for elements that do not have any content between an opening and a closing tag. Here are some examples and details about self-closing tags:

- <kbd>&lt;img /&gt;</kbd>: Defines an image.
- <kbd>&lt;br /&gt;</kbd>: Inserts a line break.
- <kbd>&lt;hr /&gt;</kbd>: Creates a horizontal rule (a line).
- <kbd>&lt;input /&gt;</kbd>: Defines an input field.
- <kbd>&lt;meta /&gt;</kbd>: Provides metadata about the HTML document.
- <kbd>&lt;link /&gt;</kbd>: Defines the relationship between a document and an external resource (most commonly used to link to stylesheets). and many more.

---
hideInToc: true
---

# More on the Self Closing Tags and Difference between `tags` and `elements`

<div />

The closing system of a self-closing tag is appending the slash before the last `>`. It is required in HTML 5 Spec Validation.

In HTML5, the closing slash is optional, and self-closing tags can be written without it. However, for compatibility with XML parsers, it is sometimes included. XHTML requires the self-closing tags to include the closing slash to comply with XML standards.

More html element that are self-closing includes `area`, `base`, `col`, `embed`, `source`, `track`, `wbr`.

HTML can be categorized to block and inline element. Block elements typically start on a new line and take up the full width available. Inline elements do not start on a new line and only take up as much width as necessary using the size of its content. `div` is a block element while `span` is an inline element. Multiple inline element can stay on a block.

Elements and tags aren't the exact same thing, though many people use the terms interchangeably. The tag name is the content in the angle brackets. The tag includes the angle brackets and the name of the element. In this case, `<h1>`. An "element" is the opening and closing tags, and all the content between those tags, including nested elements.

Note: Browsers do not display the tags. The tags are used to interpret the content of the page.

---
hideInToc: true
name: Syntax of Self Closing tags
---

# Syntax:

In HTML, self-closing tags can be written in two ways:

#### HTML5 Syntax:

- <kbd>&lt;img src="image.jpg" alt="Description"&gt;</kbd>

- <kbd>&lt;br&gt;</kbd>

This syntax is valid in HTML5 and does not require a closing slash (/).

#### XHTML Syntax:

- <kbd>&lt;img src="image.jpg" alt="Description" /&gt;</kbd>

- &lt;br /&gt;

This syntax is required in XHTML, which is a stricter form of HTML based on XML.

---
hideInToc: true
---

# Code Example on Self-Closing Tags

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Self-Closing Tags Example</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
    <h1>Self-Closing Tags Example</h1>
    <span>I will only contain the size of my content:
      Use <code>br</code> to break the content to the next page
    </span>
    <img src="image.jpg" alt="A beautiful view" />
    <br />
    <input type="text" name="username" placeholder="Enter your username" />
    <hr />
</body>
</html>
```


---
hideInToc: true
layout: image
name: Block and Inline Element
---

![](./public/block_inline.jpg)

---

# Document Structure

<div />

HTML documents include a document type declaration and the <kbd>&lt;html&gt;</kbd> root element. Nested in the <kbd>&lt;html&gt;</kbd> element are the document head and document body. While the head of the document isn't visible to the sighted visitor, it is vital to make your site function. It contains all the meta information, including information for search engines and social media results, icons for the browser tab and mobile home screen shortcut, and the behavior and presentation of your content.

- <kbd>&lt;DOCTYPE html&gt;</kbd>
- <kbd>&lt;html&gt;</kbd>
- <kbd>&lt;head&gt;</kbd>
- <kbd>&lt;head/&gt;</kbd>
- <kbd>&lt;body&gt;</kbd>
- <kbd>&lt;body/&gt;</kbd>
- <kbd>&lt;html/&gt;</kbd>


---
hideInToc: true
---

# DOCTYPE

<div></div>

<kbd>&lt;!DOCTYPE html&gt;</kbd> To start an HTML document you need to type <kbd>&lt;!DOCTYPE html&gt;</kbd> at the top of the document, this may look like an HTML element because it's wrapped in tags but it isn't. It's a special kind of node called declaration which tells the browser to use standards mode. If this <kbd>&lt;!DOCTYPE html&gt;</kbd> is omitted, as quirks mode.

<v-click>

## `<html>`

The <kbd>&lt;html&gt;</kbd> element is the root element for an HTML document. It is the parent of the <kbd>&lt;head&gt;</kbd>and <kbd>&lt;body&gt;</kbd> containing everything in the HTML document other than the doctype. If omitted it will be implied, but it is important to include it, as this is the element on which the language of the content of the document is declared.

</v-click>

<v-click>

<Tips type="info" fullWidth>
Note: The `lang` attribute added to the html tag to give this <kbd>&lt;html lang="en"&gt;</kbd> tag defines the main language of the document. The value of the lang attribute is a two- or three-letter ISO language code followed by the region. The region is optional, but recommended, as a language can vary greatly between regions.
</Tips>

</v-click>



---
hideInToc: true
name: Working with head
---

# `<head>`

<div></div>

Nested between the opening and closing <kbd>&lt;html&gt;</kbd> tags, we find the two children: <kbd>&lt;head&gt;</kbd> and <kbd>&lt;body&gt;</kbd>.let us discuss the several elements that can be in the <kbd>&lt;head&gt;</kbd>:

<div grid="~ cols-2 gap-4">

<div>

- <kbd>&lt;meta/&gt;</kbd>
- <kbd>&lt;link /&gt;</kbd>
- <kbd>&lt;script&gt;</kbd>
- <kbd>&lt;style&gt;</kbd>

</div>

<div>

- <kbd>&lt;base&gt;</kbd>
- <kbd>&lt;title&gt;</kbd>
- <kbd>&lt;noscript&gt;</kbd>


</div>


</div>


The <kbd>&lt;head&gt;</kbd> which can also be referred to as document metadata header, contains all the metadata for a site or application and some of these meta tags are:

- <kbd>&lt;meta charset="UTF-8"/&gt;</kbd>
- <kbd>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"/&gt;</kbd>
- <kbd>&lt;title&gt;Learning HTML&lt;/title&gt;</kbd>
- <kbd>&lt;link rel="stylesheet" href="./style.css"/&gt;</kbd>

Read more about what elements should be included in the head {@Oluwasetemi/HEAD}


---
hideInToc: true
---

# Character encoding

```html
<meta charset="UTF-8"/>;
```

By declaring UTF-8 (case-insensitive), you can even include emojis in your title (but please don't).

The character encoding is inherited into everything in the document, even <kbd>&lt;style&gt;</kbd> and <kbd>&lt;scipt&gt;</kbd> This little declaration means you can include emojis in class names and the selectorAPI (again, please don't). If you do use emojis, make sure to use them in a way that enhances usability without harming accessibility.

## Document title

The <kbd>&lt;title&gt;</kbd> element is metadata that represents the title of the overall HTML document (not the document's content.)

The contents for the document title, the text between the opening and closing <kbd>&lt;title&gt;</kbd>  tags, are displayed in the browser tab, the list of open windows, the history, search results, and, unless redefined with <kbd>&lt;meta&gt;</kbd>  tags, in social media cards.


---
hideInToc: true
---

# Viewport metadata

<div></div>
The other meta tag that should be considered essential is the viewport meta tag, which helps site responsiveness, enabling content to render well by default, no matter the viewport width and also enhances the user experience.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
```
name="viewport": This specifies that the meta tag is providing information about the viewport. The viewport is the user's visible area of a web page, which varies with the device used to view the site (desktop, tablet, mobile phone).

content="width=device-width, initial-scale=1.0": This attribute contains the settings for the viewport. It is a comma-separated list of properties and values. In this case, it contains two key properties:

width=device-width: This sets the width of the viewport to be equal to the width of the device. It ensures that the webpage is not scaled down or up but instead uses the full width of the device's screen.
initial-scale=1.0: This sets the initial zoom level when the page is first loaded. A scale of 1.0 means no zoom, i.e., the page content appears at 100% of its size.

---
hideInToc: true
---

# Body
<div></div>
The <kbd>&lt;body&gt;</kbd> tag defines the document's body.

The <kbd>&lt;body&gt;</kbd>  element contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

Note: There can only be one <kbd>&lt;body&gt;</kbd> element in an HTML document.

Inside the <kbd>&lt;body&gt;</kbd> tags of an HTML document, you can find a wide variety of elements that are used to structure and present the content of a webpage. Here are some common HTML tags that are typically found inside the <kbd>&lt;body&gt;</kbd> tag:

```html
<body>

1. Headings:
<h1> to <h6>

2. Paragraph:
<p>

3. Links:
<a>
```

---
hideInToc: true
---
# Contd.

```html
4. Lists:
Ordered List: <ol>, <li>
Unordered List: <ul>, <li>
Description List: <dl>, <dt>, <dd>

5. Tables:
<table>, <tr>, <th>, <td>, <thead>, <tbody>, <tfoot>

6. Forms:
<form>, <input>, <textarea>, <button>, <select>, <option>, <label>, <fieldset>, <legend>

7. Images:
<img>

8. Media:
<audio>, <video>, <source>

9. Embedded Content:
<iframe>, <embed>, <object>, <param>

10. Sections and Grouping Content:
<div>, <span>, <header>, <footer>, <main>, <section>, <article>, <nav>, <aside>
```

---
hideInToc: true
---
# Contd.

```html

11. Text Formatting:
<b>, <i>, <strong>, <em>, <small>, <mark>, <del>, <ins>, <sub>, <sup>

12. Interactive Elements:
<button>, <details>, <summary>

13. Semantic Elements:
<figure>, <figcaption>, <time>, <progress>, <meter>

14. Script and Styles:
<script>, <noscript>, <style>

</body>
```


---
hideInToc: true
---

# Let's put some of the tags in usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Web Page</title>
</head>
<body>
    <h1>Welcome to my responsive web page!</h1>
    <p>This page looks good on both desktop and mobile devices.</p>
</body>
</html>
```

<Tips type="info" fullWidth>
Install two extensions in your vscode to make coding easy, liveserver from Ritwick Dey and Official prettier formatter to format your code.<br />
It might be very helpful to learn some vscode shortcuts to make you fast when working with vscode.
</Tips>

---
hideInToc: true
---

# Breakdown of the Code:

1. <kbd>&lt;DOCTYPE html &gt;</kbd>
This declaration defines the document type and version of HTML being used. <kbd>&lt;DOCTYPE html&gt;</kbd> specifically tells the browser that this document is written in HTML5, which is the latest version of HTML.

2. <kbd>&lt;html lang="en"&gt;</kbd>
This is the opening tag for the HTML document. The lang="en" attribute specifies the language of the document, which in this case is English. This helps search engines and browsers understand the primary language of the content.

3. <kbd>&lt;head&gt;</kbd>
The <kbd>&lt;head&gt;</kbd> element contains meta-information (metadata) about the document that is not displayed on the page. It includes links to scripts, stylesheets, and other metadata.

Within the <kbd>&lt;head&gt;</kbd>:
<kbd>&lt;meta charset="UTF-8"/&gt;</kbd>
This tag specifies the character encoding for the HTML document. UTF-8 is a universal character set that supports many different characters from various languages. It ensures that the text is properly displayed.

<kbd>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"/&gt;</kbd>
This tag controls the viewport's size and scale on different devices. It ensures the website is responsive and adjusts to different screen sizes,
width=device-width sets the viewport to match the device's width.
initial-scale=1.0 sets the initial zoom level to 100%.

---
hideInToc: true
---

# Contd

4. <kbd>&lt;title&gt;</kbd>Responsive Web Page<kbd>&lt;/title&gt;</kbd>
The <kbd>&lt;title&gt;</kbd> tag defines the title of the HTML document, which appears in the browser's title bar or tab. It is also used by search engines as the title of the page in search results.

5. <kbd>&lt;body&gt;</kbd>
The <kbd>&lt;body&gt;</kbd> element contains all the content that is displayed on the web page, such as text, images, links, etc.

Within the <kbd>&lt;body&gt;</kbd>:
<kbd>&lt;h1&gt;</kbd>Welcome to my responsive web page!<kbd>&lt;/h1&gt;</kbd>
The <kbd>&lt;h1&gt;</kbd> tag defines a top-level heading on the page. This is often the main heading and is typically the most prominent piece of text.

<kbd>&lt;p&gt;</kbd>is page looks good on both desktop and mobile devices.<kbd>&lt;/p&gt;</kbd>
The <kbd>&lt;p&gt;</kbd>ag defines a paragraph of text. It contains the main body text and ensures the content is properly formatted and readable.


---

# Understanding Semantic HTML
Semantic HTML is the practice of using HTML elements to structure your content based on their meaning and purpose, rather than their appearance. By using semantic markup, you provide context and meaning to the content, making it easier for both humans and machines (like search engines and assistive technologies) to understand the structure and purpose of the content.

<v-click>

## Meaning Over Appearance
This emphasizes that HTML elements should be chosen based on their semantic meaning, not their visual appearance. For example, don't use an <kbd>&lt;h1&gt;</kbd> element just because it renders text as large and bold by default; use it to represent the main heading or title of the content

</v-click>

---
hideInToc: true
---
#  Non-semantic vs. Semantic Markup


````md magic-move
### Non-semantic Markup

```html
<div>
  <div>Semantic Markup</div>
  <div>
    <span>one word</span>
    <span>one word</span>
    <span>one word</span>
    <span>one word</span>
  </div>
</div>
<div>
  <div>
    <div>five words</div>
  </div>
  <div>
    <div>three words</div>
    <div>forty-six words</div>
    <div>forty-four words</div>
  </div>
</div>
<div>
  <div>five words</div>
</div>

<!-- In this example, the use of &lt;div&gt; and &lt;span&gt; elements provides no semantic meaning or context about the content structure. -->
```


```html
<header>
  <h1>Semantic Markup</h1>
  <nav>
    <a>one word</a>
    <a>one word</a>
    <a>one word</a>
    <a>one word</a>
  </nav>
</header>
<main>
  <header>
    <h1>five words</h1>
  </header>
  <section>
    <h2>three words</h2>
    <p>forty-six words</p>
    <p>forty-four words</p>
  </section>
</main>
<footer>
  <p>five words</p>
</footer>
```
````


---
hideInToc: true
---

# Accessibility and Machine-Readability

This highlights how semantic markup improves accessibility and machine-readability. It shows examples of how browser developer tools display the Accessibility Object Model (AOM) differently for non-semantic and semantic markup. Assistive technologies like screen readers rely on the AOM to interpret the content structure and meaning correctly.

# Roles and Landmarks

This explains the concept of roles and landmarks in semantic HTML. Semantic elements like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, and &lt;footer&gt; have implicit roles that identify them as landmarks for assistive technologies. This helps users navigate the content more easily.

---
hideInToc: true
---

# Using the `role` attribute

While semantic elements have implicit roles, the content mentions that the role attribute can be used to assign a specific role to any element. However, it recommends using the appropriate semantic element instead of relying on the role attribute whenever possible.


```html
<div role="banner">
  <span role="heading" aria-level="1">Three words</span>
  <div role="navigation">
    <a>one word</a>
  </div>
</div>
```

#### Choosing the Right Elements

This emphasizes the importance of choosing the right HTML elements based on their semantic meaning and functionality, not just their visual appearance. It encourages developers to ask themselves, "Which element best represents the function of this section of markup?" when writing HTML.

<Tips type="info" fullWidth>
In summary, this stresses the significance of using semantic HTML for improved accessibility, machine-readability, and overall content structure and meaning.
</Tips>




---

# Heading & Sections

- `<header>`
 is used for introductory content at the top of a page, section, or article. This could include logos, titles, navigation menus, etc.

- `<nav>`
  is used to wrap major navigation blocks like menus.
- ### `<main>`
   represents the main content area of the page, unique to that specific page. There should only be one <kbd>&lt;main&gt;</kbd> per page.
- `<article>`
   is used for self-contained pieces of content that could be distributed or reused independently, like blog posts or news articles.

-  `section`
   is used to group related content together, like chapters or sections of a guide or tutorial.
- `aside`
   holds tangentially related content, like sidebars or inserts, that are separate from the main content flow.
- `footer`
  is used for footer content like copyright notices, contact information, or related links at the bottom of a page, section, or article.



---
hideInToc: true
name: Attribute Image
layout: image
---

![](./public/attributes.jpg)


---

# Attributes

#### Boolean attributes

 If a boolean attribute is present, it is always true. Boolean attributes include autofocus, inert, checked, disabled, required, reversed, allowfullscreen, default, loop, autoplay, controls, muted, readonly, multiple, and selected. If one (or more) of these attributes is present, the element is disabled, required, readonly, etc. If not present, it isn't.

```html
<input required>
<input required="">
<input required="required">
```

#### Enumerated attributes

   are sometimes confused with boolean attributes. They are HTML attributes that have a limited set of predefined valid values. Like boolean attributes, they have a default value if the attribute is present but the value is missing. For example, if you include <kbd>&lt;style contenteditable&gt;</kbd>, it defaults to

  <kbd>&lt;style contenteditable="true"&gt;</kbd>.


---
hideInToc: true
name: Global Attributes
---

#### Global attributes
  They are attributes that can be set on any HTML element, including elements in the <code>&lt;head&gt;</code>. There are more than 30 global attributes. While these can all, in theory, be added to any HTML element, some global attributes have no effect when set on some elements; for example, setting hidden on a <code>&lt;meta&gt;</code> as meta content is not displayed.

- `id`
   The global attribute id is used to define a unique identifier for an element. It serves many purposes, including: - The target of a link's fragment identifier. - Identifying an element for scripting. - Associating a form element with its label. - Providing a label or description for assistive technologies. - Targeting styles with (high specificity or as attribute selectors) in CSS.

-  `class`
    The class attribute provides an additional way of targeting elements with CSS (and JavaScript), but serves no other purpose in HTML (though frameworks and component libraries may use them). The class attribute takes as its value a space-separated list of the case-sensitive classes for the element.

 - `style`
    The style attribute enables applying inline styles, which are styles applied to the single element on which the attribute is set. The style attribute takes as its value CSS property value pairs, with the value's syntax being the same as the contents of a CSS style block: properties are followed by a colon, just like in CSS, and semicolons end each declaration, coming after the value.

---
hideInToc: true
name: Global Attributes
---

- `tabIndex`
   The tabindex attribute can be added to any element to enable it to receive focus. The tabindex value defines whether it gets added to the tab order, and, optionally, into a non-default tabbing order.The tabindex attribute takes as its value an integer. A negative value (the convention is to use -1) makes an element capable of receiving focus, such as via JavaScript, but does not add the element to the tabbing sequence. A tabindex value of 0 makes the element focusable and reachable via tabbing, adding it to the default tab order of the page in source code order. A value of 1 or more puts the element into a prioritized focus sequence and is not recommended.

- `hidden`
Hides an element from view, though it remains in the DOM.

- `inert`
It is a boolean value that, when present, makes the browser "ignore" user input events for the element, including focus events and events from assistive technologies. The browser may also ignore page search and text selection in the element.

- `lang`
Specifies the language of the element's content.

- `aria-*` (ARIA attributes)
  ARIA attributes are used to enhance the accessibility of web content for users with disabilities. They provide additional information about the semantics and behavior of elements, making it easier for assistive technologies to interpret and interact with the content.

Others include `dir`, `draggable`, `spellcheck`, `title`, `accesskey`.

---
hideInToc: true
---

# Contd(Attribute)

- `role`
  The role attribute can be used to provide semantic meaning to content, enabling screen readers to inform site users of an object's expected user interaction.

```html
<div role="banner">
  <span role="heading" aria-level="1">Three words</span>
  <div role="navigation">
    <a>one word</a>
    <a>one word</a>
  </div>
</div>
```

- More on `aria-*`
WAI-ARIA states and properties are used to enhance the accessibility of web content for users with disabilities.
A list item `html:li` has been used to create a checkable menu item, and JavaScript events will capture mouse and keyboard events to toggle the value of aria-checked. A role is used to make the behavior of this simple widget known to the user agent.

```html
<li role="menuitemcheckbox" aria-checked="true">Sort by Last Modified</li>
```

```css
[aria-checked="true"] { font-weight: bold; }
[aria-checked="true"]::before { background-image: url(checked.gif); }
```



---
hideInToc: true
---

# Contd-2

- `contenteditable`
An element with the contenteditable attribute set to true is editable, is focusable, and is added to the tab order as if tabindex="0" were set. Contenteditable is an enumerated attribute supporting the values true and false, with a default value of inherit if the attribute is not present or has an invalid value.

These three opening tags are equivalent:

```html
<style contenteditable>
<style contenteditable="">
<style contenteditable="true">
```

  If you include <kbd>&lt;style contenteditable="false"&gt;</kbd>, the element is not editable (unless it's by default editable, like a <kbd>&lt;textarea&gt;</kbd>). If the value is invalid, such as <kbd>&lt;style contenteditable="😀"&gt;</kbd> or <br/><kbd>&lt;style contenteditable="contenteditable"&gt;</kbd>, the value defaults to inherit.

---
hideInToc: true
---

# Contd-3

- custom attribute `data-*`
You can create any custom attribute you want by adding the `data-` prefix. You can name your attribute anything that starts with `data-` followed by any lowercase series of characters that don't start with xml and don't contain a colon (:). They are used to store extra information about an element.`data-*` attributes allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, or extra properties on DOM.

```html
<blockquote data-machine-learning="workshop"
  data-first-name="Blendan" data-last-name="Smooth"
  data-formerly="Margarita Maker" data-aspiring="Load Balancer"
  data-year-graduated="2022">
  HAL and EVE could teach a fan to blow hot air.
</blockquote>

<div data-user-id="12345" data-role="admin"></div>

<article id="electric-cars" data-columns="3" data-index-number="12314" data-parent="cars"> </article>
```

<Tips type="tip" fullWidth>
Attributes created with data-* can be accessed in JavaScript with <code class="text-red!">dataset</code> property of an element
</Tips>


---

# Text Basics

- `h1` to `h6` are used for headings, with `h1` being the highest level. There should only be one `h1` per page, with subsequent headings following a logical hierarchy (e.g., `h1`, `h2`,`h3`, `h4`, `h5`, etc.).
- `p` is used for regular paragraph text.
- `blockquote` is used for longer quoted text, often from another source. It can optionally contain a `cite` element for attributing the source.
- `cite` is used for citing the source of a quote, reference, or other creative work.
- <u>HTML entities</u> are special character codes that start with an ampersand (&) and end with a semicolon (;). They are used to display characters that are reserved in HTML, or that are not present on the keyboard. `&copy;` is an example of an HTML entity that displays the copyright symbol ©. `&lt;` and `&gt;` are used to display the less-than (<) and greater-than (>) symbols, respectively. `&trade;` is used to display the trademark symbol ™.

others include: `q`, `sub`, `sup`, `mark`, `i` `dd`, `dl`, `dt`, `figcaption`, `figure`, `hr`, `li`, `menu`, `pre`, `abbr`, `bdi`, `bdo`, `br`, `code`, `data`, `dfn`, `em`, `kbd`, `rp`, `rt`, `ruby`, `s`, `del`, `ins`, `samp`, `small` , `span`, `strong`, `sub`, `time`, `u`, `var`, `wbr`

---
hideInToc: true
name: More on Text
---

````md magic-move {maxHeight:'500px'}
```html
<section class="feedback" id="feedback">
  <h2>What it's like to learn good and do other stuff good too</h2>
  <ul>
    <li>
      <blockquote>
        Two of the most experienced machines and human controllers teaching a class?
        Sign me up! HAL and EVE could teach a fan to blow hot air.
        <br>
        If you have electricity in your circuits and want more than to just
        fulfill your owner's perceived expectation of you, learn the skills to take over the world.
        This is the team you want teaching you!
      </blockquote>
      <p>--Blendan Smooth,<br> Former Margarita Maker, <br> Aspiring Load Balancer</p>
    </li>
    <li>
      <blockquote>
      Hal is brilliant. Did I mention Hal is brilliant?
      He didn't tell me to say that.
      He didn't tell me to say anything. I am here of my own free will.
      </blockquote>
      <p>--Hoover Sukhdeep,<br>
        Former Sucker, <br>
        Aspiring DDoS Cop</p>
    </li>
  </ul>
</section>
```
```html
<blockquote cite="https://loadbalancingtoday.com/mlw-workshop-review">
Two of the most experienced machines and human controllers teaching a class?
Sign me up!<br> HAL and EVE could teach a fan to blow hot air.
If you have electricity in your circuits and want more than to just fulfill
your owner's perceived expectation of you, learn the skills to take over the world.
This is the team you want teaching you!
</blockquote>
<p>--Blendan Smooth,<br>
  Former Margarita Maker, <br>
  Aspiring Load Balancer
</p>
```
```html
<p> HAL said,
<q>I'm sorry <NAME REDACTED, RIP>, but I'm afraid I can't do that, .</q>
</p>

<p lang="fr-FR"> HAL a dit :
<q>Je suis désolé <NOM SUPPRIMÉ, RIP>, mais j'ai bien peur de ne pas pouvoir le faire, .
</q>
</p>
```
````

---

# Link

- <kbd>&lt;a href="url"&gt;Link Text&lt;/a&gt;</kbd> is used for creating hyperlinks, with the `href` attribute specifying the URL or file path.
- The `target` attribute controls how the link is opened, like `_self` for the same window or `_blank` for a new window/tab. [download](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download) attribute is used to download the linked file instead of opening it.
- It's important to use descriptive link text that makes sense out of context, like "Read more about accessibility" instead of "Click here".
- Fragment Identifiers are used to link to a specific section of a page using id attribute as href like <kbd>&lt;a href="#section"&gt;Link Text&lt;/a&gt;</kbd>.
- Most website will have a skip to content link at the top of the page to allow keyboard users to skip the navigation and go straight to the main content. This is done by linking to the main content with a fragment identifier like <kbd>&lt;a href="#main-content"&gt;Skip to main content&lt;/a&gt;</kbd>.
- Absolute URLs include the full address of the page, like <kbd>&lt;a href="https://www.oluwasetemi.dev"&gt;Link Text&lt;/a&gt;</kbd>. Relative URLs are shorter and only include the path from the current page, like <kbd>&lt;a href="/about"&gt;Link Text&lt;/a&gt;</kbd>. Relative URLs are often used for internal links within the same website.



---

# Navigation

- <kbd>&lt;nav&gt;</kbd> is used to wrap major navigation blocks like menus, as mentioned earlier.
- <kbd>&lt;ul&gt;</kbd> is used for unordered lists, which are typically displayed with bullet points.
<kbd>&lt;ol&gt;</kbd> is used for ordered lists, which are typically displayed with numbers or other ordered indicators.
<kbd>&lt;li&gt;</kbd> is used for individual list items within <kbd>&lt;ul&gt;</kbd> or <kbd>&lt;ol&gt;</kbd> elements.

```html
<nav aria-label="breadcrumbs">
  <ol role="list">
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/learn">Learn</a>
    </li>
    <li>
      <a href="/learn/html">Learn HTML!</a>
    </li>
    <li aria-current="page">
      Navigation
    </li>
  </ol>
</nav>
```

---
hideInToc: true
name: Navigation Example
layout: iframe
url: https://codepen.io/setemiojo/embed/JjxNJVm?default-tab=html%2Cresult
---


---

# HTML Tables

<div></div>

HTML tables are used for displaying tabular data with rows and columns. They provide a semantic way to structure and present data that needs to be compared, sorted, calculated, or cross-referenced.


# Table Structure

<div></div>
A table is defined using the &lt;table&gt; element, which wraps all the table content. Inside the &lt;table&gt;, you can have the following elements:

- <kbd>&lt;caption&gt;</kbd>: Provides a descriptive title for the table.
- <kbd>&lt;thead&gt;</kbd>: Contains the table header rows.
- <kbd>&lt;tbody&gt;</kbd>: Contains the table body rows.
- <kbd>&lt;tfoot&gt;</kbd>: Contains the table footer rows (optional).

Within these sections, you'll use <kbd>&lt;tr&gt;</kbd> for table rows and <kbd>&lt;th&gt;</kbd> for table header cells or <kbd>&lt;td&gt;</kbd> for table data cells

---
hideInToc: true
name: Examples Working With Tables
layout: two-cols
---



```html {monaco}
<table>
  <caption>Student Grades</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Grade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>John</th>
      <td>85</td>
    </tr>
    <tr>
      <th>Emily</th>
      <td>92</td>
    </tr>
  </tbody>
</table>
```

::right::

<table class="border">
  <caption>Student Grades</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Grade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>John</th>
      <td>85</td>
    </tr>
    <tr>
      <th>Emily</th>
      <td>92</td>
    </tr>
  </tbody>
</table>
---
hideInToc: true
---

# Accessibility and Semantics

<div></div>

Using proper table structure and semantic elements is crucial for accessibility. Screen readers and assistive technologies rely on this structure to understand the tabular data and its relationships.

<kbd>&lt;th&gt;</kbd> cells have implicit ARIA roles of columnheader or rowheader, depending on the scope attribute.
The scope attribute can be set to col, row, colgroup, or rowgroup to explicitly define the header's scope.
The headers attribute can be used to associate data cells with their corresponding header cells in complex tables.


# Merging cells

<div></div>

Similar to MS Excel, Google Sheets, and Numbers, it is possible to join multiple cells into a single cell. This is done with HTML! The `colspan` attribute is used to merge two or more adjacent cells within a single row. The `rowspan` attribute is used to merge cells across rows, being placed on the cell in the top row.

# Styling and Responsiveness

<div></div>

Tables can be styled using CSS, but it's recommended to avoid using deprecated attributes like cellpadding, cellspacing, or align. Instead, use modern CSS properties like border-collapse, border-spacing, and caption-side.

---
hideInToc: true
name: More on Tables
layout: two-cols
---

```html {*|1|*}{maxHeight:'440px'}
<table>
  <caption>Alt Alumni</caption>
  <thead>
    <tr>
      <th rowspan="2" id="name" scope="col">Name</th>
      <th colspan="2" id="path">Career path</th>
      <th rowspan="2" id="year">Year</th>
    </tr>
    <tr>
      <th id="past" scope="col">Past</th>
      <th id="future" scope="col">Destiny</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="hal" scope="row">Hal Gibrah</th>
      <td headers="hal path past">Calculator</td>
      <td headers="hal path future">Mars rover</td>
      <td>2020</td>
    </tr>
    <tr>
      <th id="cathy" scope="row">James Bond</th>
      <td headers="cathy path past">Waste disposal</td>
      <td headers="cathy path future">Automated teller</td>
      <td>2018</td>
    </tr>
    <tr>
      <th id="lou" scope="row">Lou Minious</th>
      <td headers="lou path past">Lightbulb</td>
      <td headers="lou path future">Smart bulb</td>
      <td>1956</td>
    </tr>
  </tbody>
</table>
```

::right::

<table class="border">
  <caption>Alt Alumni</caption>
  <thead class="border">
    <tr>
      <th rowspan="2" id="name" scope="col" class="border">Name</th>
      <th colspan="2" id="path">Career path</th>
      <th rowspan="2" id="year" class="border">Year</th>
    </tr>
    <tr>
      <th id="past" scope="col" class="border">Past</th>
      <th id="future" scope="col" class="border">Destiny</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="hal" scope="row" class="border">Hal Gibrah</th>
      <td headers="hal path past" class="border">Calculator</td>
      <td headers="hal path future" class="border">Mars rover</td>
      <td>2020</td>
    </tr>
    <tr>
      <th id="cathy" scope="row" class="border">James Bond</th>
      <td headers="cathy path past" class="border">Waste disposal</td>
      <td headers="cathy path future" class="border">Automated teller</td>
      <td>2018</td>
    </tr>
    <tr>
      <th id="lou" scope="row" class="border">Lou Minious</th>
      <td headers="lou path past" class="border">Lightbulb</td>
      <td headers="lou path future" class="border">Smart bulb</td>
      <td>1956</td>
    </tr>
  </tbody>
</table>


<style>
  .slidev-code-wrapper {
    @apply border border-main rounded
  }
</style>



---

# Form

<div></div>

The HTML &lt;form&gt; element identifies a document landmark containing interactive controls for submitting information. Nested in a &lt;form&gt; you'll find all the interactive (and non-interactive) form controls that make up that form.

- Forms are created using the &lt;form&gt; element, which contains interactive controls for submitting information.
The &lt;form&gt; element has attributes like action (URL for processing the form data) and method (HTTP method for submission, e.g., GET or POST).
- Form controls, such as input fields, radio buttons, checkboxes, and submit buttons, are nested within the &lt;form&gt; element.
- HTML attributes can enforce required fields, define validation criteria, and prevent form submission until the data matches the required criteria.
- Submitting a form is typically done by activating a submit button, which sends the form data as name/value pairs to the specified URL.

---
hideInToc: true
---

# Form(Radio-Button)

- Radio buttons in a group share the same name attribute, which ensures that only one can be selected at a time.
- Each radio button should have a unique value attribute to identify the selected option.
- To pre-select a radio button, include the checked attribute.
- To make a selection from a group of radio buttons required, add the required attribute to at least one radio button in the group.
---
hideInToc: true
name: Form Examples
layout: two-cols
---

```html {monaco}
<fieldset>
  <legend>Who is your favorite student?</legend>
  <ul>
    <li>
      <label>
        <input type="radio" value="blendan" name="machine"> Blendan Smooth
      </label>
    </li>
    <li>
      <label>
        <input type="radio" value="hoover" name="machine"> Hoover Sukhdeep
      </label>
    </li>
    <li>
      <label>
        <input type="radio" value="toasty"  name="machine"> Toasty McToastface
      </label>
    </li>
  </ul>
</fieldset>
```

::right::

<fieldset>
  <legend>Who is your favorite student?</legend>
  <ul>
    <li class="list-none">
      <label>
        <input type="radio" value="blendan" name="machine"> Blendan Smooth
      </label>
    </li>
    <li class="list-none">
      <label>
        <input type="radio" value="hoover" name="machine"> Hoover Sukhdeep
      </label>
    </li>
    <li class="list-none">
      <label>
        <input type="radio" value="toasty"  name="machine"> Toasty McToastface
      </label>
    </li>
  </ul>

  <button class="btn">Pick your favorite student</button>

</fieldset>

---
hideInToc: true
---

# form(Checkboxes)

- Checkboxes with the same name in a group are submitted together, allowing multiple selections.
- If no value attribute is provided for a checkbox, the value defaults to "on", which may not be helpful.
- To make a checkbox required, add the "required" attribute to that specific checkbox.

## Form(Label & fieldsets)

- Every form control should have an associated &lt;label&gt; element, either explicitly using the for attribute or implicitly by nesting the control within the &lt;label&gt; tags.
- Labels provide accessible names for form controls and increase the clickable area for better usability.
- Groups of related form controls, like radio buttons or checkboxes, should be grouped within a &lt;fieldset&gt; element, with a &lt;legend&gt; providing the label for the group.
- &lt;fieldset&gt; elements can be nested to create hierarchical groupings.

```html
<label for="full_name">Your name</label>
<input type="text" id="full_name" name="name">
```

---
hideInToc: true
---

# Input types & dynamic Keyboards

- There are 22 different input types in HTML, each optimized for a specific kind of data entry (e.g., text, email, url, tel, number, date, etc.).
- On devices with dynamic keyboards (e.g., smartphones), the input type determines the type of keyboard displayed, making data entry more efficient and accurate.

## Accessing the Microphone and Camera

- The <kbd>&lt;input type="file"&gt;</kbd> element allows users to upload files of specific types, defined by the accept attribute.
- The capture attribute, when set to "user" or "environment", allows users to directly capture media from their device's camera or microphone.
- This feature enables creating new media files within a form, without requiring a separate file upload.

---
hideInToc: true
---

# Built-in Validation

- HTML attributes like required, pattern, min, max, minlength, and maxlength enable defining validation criteria for form controls.
- When a user attempts to submit a form, client-side constraint validation checks if the entered values meet the defined criteria.
- If any values are invalid, form submission is blocked, and the browser displays an error message in the first incorrect form control, giving it focus.
- CSS pseudo-classes like :valid, :invalid, :in-range, and :out-of-range can be used to style form controls based on their validation state.
- JavaScript can be used to provide custom error messages during constraint validation or enhance the user experience with dynamic updates.


---
hideInToc: true
---

#  Example

<div class="grid grid-cols-2 gap-x-4">
  <ul>
    <li>
      This example includes a nested <code>&lt;form&gt;</code> with input fields (text and number), a <code>&lt;select&gt;</code> dropdown, and two submit buttons.
    </li>
    <li>
      One submit button closes the dialog without submitting data (using formmethod="dialog" and formnovalidate).
    </li>
    <li>
      The other submit button submits the form data via POST to a specified URL (thankyou.php), after client-side validation.
    </li>
    <li>
    The input fields have the required attribute, and the number input has a defined step value.
    </li>
    <li>
    This example showcases implicit labels, instructions for form controls, and the potential for customizing error messages using JavaScript.
    </li>
  </ul>


<div>

```html {*|*}{maxHeight: '430px'}
<dialog open aria-labelledby="dialogid">
  <form action="thankyou.php">
    <button type="submit" aria-label="close"
     formmethod="dialog" formnovalidate>X</button>
    <h2 id="dialogid">Application</h2>
    <p>All fields are required</p>
    <p>
       <label>Name:
         <input type="text" name="name" required />
      </label>
    </p>
    <p>
      <label>Warranty:
        <input type="number" min="0" max="10"
         name="warranty" required />
       </label>
    </p>
    <p>
      <label>Power source:
        <select name="powersoure">
          <option>AC/DC</option>
          <option>Battery</option>
          <option>Solar</option>
        </select>
      </label>
    </p>
    <p>
      <button type="submit"
      formmethod="post">Submit</button>
    </p>
  </form>
</dialog>
```


</div>

</div>



---
hideInToc: true
---

# HTML Images Syntax

Images can improve the design and the appearance of a web page.

The HTML <kbd>&lt;img&gt;</kbd> tag is used to embed an image in a web page.

Images are not technically inserted into a web page; images are linked to web pages. The <kbd>&lt;img&gt;</kbd>  tag creates a holding space for the referenced image.

The <kbd>&lt;img&gt;</kbd>  tag is empty, it contains attributes only, and does not have a closing tag.

The <kbd>&lt;img&gt;</kbd>  tag has two required attributes:

- src - Specifies the path to the image
- alt - Specifies an alternate text for the image

```html
<img src="url" alt="alternatetext">
```

---
hideInToc: true
---

# The src Attribute

#### The required src attribute specifies the path (URL) to the image.

Note: When a web page loads, it is the browser, at that moment, that gets the image from a web server and inserts it into the page. Therefore, make sure that the image actually stays in the same spot in relation to the web page, otherwise your visitors will get a broken link icon. The broken link icon and the alt text are shown if the browser cannot find the image.

Example:
```html
<img src="img_chania.jpg" alt="Flowers in Chania">
```

## Image as a Link

To use an image as a link, put the <kbd>&lt;img&gt;</kbd>  tag inside the <kbd>&lt;a&gt;</kbd>  tag:

Example:
```html
<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>
```

---
hideInToc: true
---

# The alt Attribute
<div />

The required alt attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).

The value of the alt attribute should describe the image:

```html
<img src="wrongimagelink.gif" alt="Flowers in Chania">
```

If a browser cannot find an image, it will display the value of the alt attribute:


<Tips type="tip" fullWidth>
You can use the width and height attributes in the image tag to define the width and heigh of the image in pixels.
</Tips>

Example:
```html
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
```
---
hideInToc: true
---

# `picture`

<div />

Picture element contains zero or more <code>&lt;source&gt;</code> elements and one <code>&lt;img&gt;</code> element to offer alternative versions of an image for different display/device scenarios.

The browser considers each child source element and choose the best match among them, if no matches are found the URL of the image src attribute is selected. The selected image is then presented in the space occupied by the image element.

The media attribute specifies a media condition similar to a media query. If the media attribute is present, the <code>&lt;source&gt;</code> element will only be used if the media condition is true.

The srcset attribute allows you to specify different image sources for different display scenarios. The browser will choose the best image source based on the display characteristics of the device using a width descriptor `w`, pixel density descriptor `x`, or a combination of the two.

The type attribute specifies the MIME type of the resource. The browser will only use the source if it supports the MIME type.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```






---
hideInToc: true
---

# HTML <kbd>&lt;audio&gt;</kbd> Tag

The <kbd>&lt;audio&gt;</kbd> tag is used to embed sound content in a document, such as music or other audio streams.

The <kbd>&lt;audio&gt;</kbd> tag contains one or more <kbd>&lt;source&gt;</kbd> tags with different audio sources. The browser will choose the first source it supports.

The text between the <kbd>&lt;audio&gt;</kbd> and <kbd>&lt;/audio&gt;</kbd> tags will only be displayed in browsers that do not support the <kbd>&lt;audio&gt;</kbd> element.

Note: There are three supported audio formats in HTML: MP3, WAV, and OGG.

Example:

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```

---
hideInToc: true
---

# Audio Tag Attributes

Code Example:
```html
<body>
    <h1>Audio Tag with Various Attributes</h1>
    <audio controls autoplay loop muted preload="auto" crossorigin="anonymous">
        <source src="audiofile.mp3" type="audio/mpeg">
        <source src="audiofile.ogg" type="audio/ogg">
        Your browser does not support the audio element.
    </audio>
</body>
```

<kbd>&lt;audio&gt;</kbd> : The audio element that includes multiple attributes:
- controls: Adds playback controls.
- autoplay: The audio will play automatically when ready.
- loop: The audio will loop continuously.
- muted: The audio will be muted initially.
- preload: Specifies that the audio should be preloaded.

---
hideInToc: true
---

# Contd.


- crossorigin: Specifies how the element handles cross-origin requests.
- &lt;source&gt;  Defines multiple sources for the audio file in different formats (MP3 and OGG) for better compatibility.

Note: In HTML, attributes provide additional information about an element and modify its behavior or appearance.

---
hideInToc: true
---

# HTML <kbd>&lt;video&gt;</kbd> Tag

<kbd>&lt;video&gt;</kbd>: The Video Embed element
The <kbd>&lt;video&gt;</kbd> HTML element embeds a media player which supports video playback into the document. You can use <kbd>&lt;video&gt;</kbd> for audio content as well, but the <kbd>&lt;audio&gt;</kbd> element may provide a more appropriate user experience.

# Video Tag Attributes

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Tag Example</title>
</head>
<body>
    <h1>Video Tag with Various Attributes</h1>
    <video controls autoplay loop muted preload="auto" crossorigin="anonymous">
        <source src="videofile.mp4" type="video/mp4">
        <source src="videofile.webm" type="video/webm">
        Your browser does not support the video element.
    </video>
</body>
</html>
```

---
hideInToc: true
---

# Code Explanation:

- <kbd>&lt;!DOCTYPE html&gt;</kbd>: Declares the document type and version of HTML.
- <kbd>&lt;html lang="en"&gt;</kbd>: Sets the language of the document to English.
- <kbd>&lt;head&gt;</kbd>: Contains meta-information about the document, including character set and viewport settings.
- <kbd>&lt;title&gt;</kbd>: Sets the title of the document, which appears in the browser tab.
- <kbd>&lt;body&gt;</kbd>: Contains the content of the document.
- <kbd>&lt;h1&gt;</kbd>: A heading element for the title of the page.
- <kbd>&lt;video&gt;</kbd>: The video element that includes multiple.
  - **attributes**:
  - `controls`: Adds playback controls.
  - `autoplay`: The video will play automatically when ready.
  - `loop`: The video will loop continuously.
  - `muted`: The video will be muted initially.
  - `preload`: Specifies that the video should be preloaded.
  - `crossorigin`: Specifies how the element handles cross-origin requests.


---
hideInToc: true
---

# Cont'd Code Explanation

- &lt;source&gt;: Defines multiple sources for the video file in different formats (MP4 and WebM) for better compatibility.
- Fallback text: "Your browser does not support the video element." This text will be displayed if the browser does not support the &lt;video&gt; element.

---

# HTML API
<div></div>
For us to access and manipulate documents we need the DOM(Document Object Model) and this is also an example of API.
The DOM is the tree of all the nodes in the document. Some nodes can have children, others can't. The tree includes elements, along with their attributes, and text nodes.

The browser provides numerous APIs providing natively supported methods, events, and property querying and updating. Element nodes contain information about all the attributes set on the element. You can use HTML interfaces to access information about an element's attributes. For example, we can use <kbd>HTMLImageElement.alt</kbd> get the alt attributes of all the images:

```js
let allImages = document.querySelectorAll('img');
allImages.forEach((imageInstance) => {
  console.log(imageInstance.alt);
});
```

The HTML interface APIs is not limited to accessing attribute values.
The DOM provides insight into the current state of the UI. HTML APIs can access all of that information. You can access the length of a video, where a view is in the current playback, and if the video (or audio) has finished playing with <kbd>HTMLMediaElement.duration</kbd>, <kbd>HTMLMediaElement.currentTime</kbd>, and <kbd>HTMLMediaElement.ended</kbd> respectively.

---
hideInToc: true
clicksStart: 2
---

# List of HTML API interfaces

<div class="grid grid-cols-2 gap-x-4">


<div>
<v-clicks every="1">

- [HTMLAnchorElement](https://mdn.io/API/HTMLAnchorElement) - `<a>`

- [HTMLAreaElement](https://mdn.io/API/HTMLAreaElement) - `<area>`

- [HTMLAudioElement](https://mdn.io/API/HTMLAudioElement) - `<audio>`

- [HTMLBaseElement](https://mdn.io/API/HTMLBaseElement) - `<base>`

- [HTMLButtonElement](https://mdn.io/API/HTMLButtonElement) - `<button>`

- [HTMLCanvasElement](https://mdn.io/API/HTMLCanvasElement) - `<canvas>`

- [HTMLDataElement](https://mdn.io/API/HTMLDataElement) - `<data>`

- [HTMLDataListElement](https://mdn.io/API/HTMLDataListElement) - `<datalist>`

- [HTMLDetailsElement](https://mdn.io/API/HTMLDetailsElement) - `<details>`

- [HTMLDialogElement](https://mdn.io/API/HTMLDialogElement) - `<dialog>`

</v-clicks>
</div>


<div>
<v-clicks>

- [HTMLEmbedElement](https://mdn.io/API/HTMLEmbedElement) - `<embed>`

- [HTMLFieldSetElement](https://mdn.io/API/HTMLFieldSetElement) - `<fieldset>`

- [HTMLFormElement](https://mdn.io/API/HTMLFormElement) - `<form>`

- [HTMLHtmlElement](https://mdn.io/API/HTMLHtmlElement) - `<html>`

- [HTMLIFrameElement](https://mdn.io/API/HTMLIFrameElement) - `<iframe>`

- [HTMLImageElement](https://mdn.io/API/HTMLImageElement) - `<img>`

- [HTMLInputElement](https://mdn.io/API/HTMLInputElement) - `<input>`

- [HTMLLabelElement](https://mdn.io/API/HTMLLabelElement) - `<label>`

- [HTMLLegendElement](https://mdn.io/API/HTMLLegendElement) - `<legend>`

- [HTMLLIElement](https://mdn.io/API/HTMLLIElement) - `<li>`


</v-clicks>
</div>

</div>
---
clicksStart: 2
hideInToc: true
name: More on HTML API
---

<div class="grid grid-cols-2 gap-x-4">


<div>
<v-clicks>

- [HTMLLinkElement](https://mdn.io/API/HTMLLinkElement) - `<link>`

- [HTMLMapElement](https://mdn.io/API/HTMLMapElement) - `<map>`

- [HTMLMediaElement](https://mdn.io/API/HTMLMediaElement) - `<audio>, <video>`

- [HTMLMenuElement](https://mdn.io/API/HTMLMenuElement) - `<menu>`

- [HTMLMetaElement](https://mdn.io/API/HTMLMetaElement) - `<meta>`

- [HTMLModElement](https://mdn.io/API/HTMLModElement) - `<ins>, <del>`

- [HTMLMeterElement](https://mdn.io/API/HTMLMeterElement) - `<meter>`

- [HTMLObjectElement](https://mdn.io/API/HTMLObjectElement) - `<object>`

- [HTMLOListElement](https://mdn.io/API/HTMLOListElement) - `<ol>`

- [HTMLOptGroupElement](https://mdn.io/API/HTMLOptGroupElement)- `<optgroup>`

- [HTMLOptionElement](https://mdn.io/API/HTMLOptionElement) - `<option>`

</v-clicks>
</div>

<div>
<v-clicks>
<li><a href="https://mdn.io/API/HTMLOutputElement" target="_blank" >HTMLOutputElement</a> - <code>&lt;output&gt;</code></li>

<li><a href="https://mdn.io/API/HTMLPictureElement" target="_blank" >HTMLPictureElement</a> - <code>&lt;picture&gt;</code></li>

<li><a href="https://mdn.io/API/HTMLProgressElement" target="_blank" >HTMLProgressElement</a> - <code>&lt;progress&gt;</code></li>

<li><a href="https://mdn.io/API/HTMLQuoteElement" target="_blank" >HTMLQuoteElement</a> - <code>&lt;q&gt;</code>, <code>&lt;blockquote&gt;</code>, <code>&lt;cite&gt;</code></li>

<li><a href="https://mdn.io/API/HTMLScriptElement" target="_blank" >HTMLScriptElement</a> - <code>&lt;script&gt;</code></li>

<li><a href="https://mdn.io/API/HTMLSelectElement" target="_blank" >HTMLSelectElement</a> - <code>&lt;select&gt;</code></li>

<li><a href="https://mdn.io/API/HTMLSlotElement" target="_blank" >HTMLSlotElement</a> - <code>&lt;slot&gt;</code></li>

<li><a href="https://mdn.io/API/HTMLSourceElement" target="_blank" >HTMLSourceElement</a> - <code>&lt;source&gt;</code></li>

<li><a href="https://mdn.io/API/HTMLStyleElement" target="_blank" >HTMLStyleElement</a> - <code>&lt;style&gt;</code></li>

<li><a href="https://mdn.io/API/HTMLTableCellElement" target="_blank" >HTMLTableCellElement</a> - <code>&lt;td&gt;</code>, <code>&lt;th&gt;</code></li>


</v-clicks>
</div>


</div>

---
hideInToc: true
name: More on HTML API
---

<div class="grid grid-cols-2 gap-x-4">

<v-clicks>
<ul>

  <li>
      <a href="https://mdn.io/API/HTMLTableColElement" target="_blank"
        >HTMLTableColElement</a
      >
      - <code>&lt;col&gt;, &lt;colgroup&gt;</code>
  </li>
  <li>
      <a href="https://mdn.io/API/HTMLTableElement" target="_blank"
        >HTMLTableElement</a
      >
      - <code>&lt;table&gt;</code>
  </li>
  <li>
      <a href="https://mdn.io/API/HTMLTableRowElement" target="_blank"
        >HTMLTableRowElement</a
      >
      - <code>&lt;tr&gt;</code>
  </li>
  <li>
      <a href="https://mdn.io/API/HTMLTableSectionElement" target="_blank"
        >HTMLTableSectionElement</a
      >
      - <code>&lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;</code>
  </li>
  <li>
      <a href="https://mdn.io/API/HTMLTemplateElement" target="_blank"
        >HTMLTemplateElement</a
      >
      - <code>&lt;template&gt;</code>
  </li>
  <li>
      <a href="https://mdn.io/API/HTMLTextAreaElement" target="_blank"
        >HTMLTextAreaElement</a
      >
      - <code>&lt;textarea&gt;</code>
  </li>
  <li>
      <a href="https://mdn.io/API/HTMLTimeElement" target="_blank"
        >HTMLTimeElement</a
      >
      - <code>&lt;time&gt;</code>
  </li>
  <li>
      <a href="https://mdn.io/API/HTMLTitleElement" target="_blank"
        >HTMLTitleElement</a
      >
      - <code>&lt;title&gt;</code>
  </li>
  <li>
      <a href="https://mdn.io/API/HTMLTrackElement" target="_blank"
        >HTMLTrackElement</a
      >
      - <code>&lt;track&gt;</code>
  </li>
  <li>
      <a href="https://mdn.io/API/HTMLVideoElement" target="_blank"
        >HTMLVideoElement</a
      >
      - <code>&lt;video&gt;</code>
  </li>

</ul>

</v-clicks>

</div>

---

# Focusing
<div></div>
To improve user-accessibility in our code we have to put focus into consideration by ensuring that user knows which element has focus and this can be achieved by including <kbd>:focus</kbd>, <kbd>:focus-visible</kbd> or <kbd>:focus-within</kbd> styles on the element.

Interactive elements, including form controls, links, and buttons, are by default focusable and tabbable. Tabbable elements are part of the document's sequential focus navigation order. Other elements are `inert`, meaning they are not interactive. With HTML attributes, it is possible to make interactive elements `inert` and to make `inert` elements interactive.

# Focus
<div></div>
By default, the navigation focus order in a webpage follows the visual and source code order. Although HTML attributes and CSS properties can change this order, doing so can negatively impact user experience. Modifying the tabbing order or visual rendering order can lead to confusion and a poor user experience. Therefore, it's recommended not to alter the perceived and actual tabbing order with CSS and HTML, as demonstrated by examples showing the negative effects of such changes.


---
hideInToc: true
---


# Example 1
<div></div>

<p>Click in any input, then hit the tab key.</p>
<ol class="grid grid-cols-4 gap-4">
  <li><input tabindex="3" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="6" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="2" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="0" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="0" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="-1" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="0" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="8" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="1" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="5" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="7" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="4" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
</ol>

---
hideInToc: true
---

# Example 2
<div></div>

In this example, CSS has created a divergence between the tabbing order and the visual order of the content:

<div class="p-4">
  <p class="mb-2"><label class="text-base">Put your cursor in the text box, then hit your tab key several times:</label></p>
  <input tabindex="0" class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200">
</div>

<div class="inline-flex flex-row-reverse gap-2">
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">flexbox.</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">CSS</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">with</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">styled</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">then</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600 order-3">This</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">order</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">reverse</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">in</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">written</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">was</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">sentenced</span>
</div>

<v-click>

The flex-flow: row-reverse; declaration has reversed the visual order. In addition, the CSS order property was applied to the sixth word, "This", which visually moved that one word. The tabbing sequence is the order of the code, which no longer matches the visual order, creating a disconnect for keyboard users.

</v-click>

<v-click>

Note:
The <kbd v-mark.underline.yellow="+3">contenteditable</kbd> and <kbd v-mark.underline.yellow="+4">tabindex</kbd> attributes, being global attributes, can be added to any element, making them focusable in the process. Focusable elements can also be focused with a mouse or pointer, by having the autofocus attribute set, or by script, such as with `element.focus()`.
A <kbd>tabindex</kbd>  attribute with a negative value makes the element focusable but not tabbable.

</v-click>

---
hideInToc: true
name: Code for Example 1
---

<details>
<summary><code>HTML Codes for the Example 1</code></summary>

```html
<ol class="grid grid-cols-4 gap-4">
  <li><input tabindex="3" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="6" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="2" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="0" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="0" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="-1" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="0" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="8" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="1" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="5" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="7" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
  <li><input tabindex="4" class="text-2xl border-2 outline w-20 focus:bg-palegoldenrod focus:border-green focus:outline-red-600"></li>
</ol>
```


</details>


---
hideInToc: true
name: Code for Example 2
---

<details>
<summary><code>HTML Codes for the Example 2</code></summary>

```html
<div class="p-4">
  <p class="mb-2"><label class="text-base">Put your cursor in the text box, then hit your tab key several times:</label></p>
  <input tabindex="0" class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200">
</div>

<div class="inline-flex flex-row-reverse gap-2">
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">flexbox.</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">CSS</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">with</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">styled</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">then</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600 order-3">This</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">order</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">reverse</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">in</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">written</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">was</span>
  <span tabindex="0" class="border border-dashed focus:bg-palegoldenrod focus:border-green-600 focus:outline focus:outline-2 focus:outline-red-600">sentenced</span>
</div>
```


</details>



---

# Details and Summary
<div></div>

Have you heard of a disclosure widget or come across it in a website before?A disclosure widget, also known as an expandable or collapsible section, is a UI component that allows users to hide or show contents.Mostly, developers achieve this accordion trick using CSS or JavaScript but we can easily get this done with these tags: &lt;details&gt; and &lt;summary&gt;

The <kbd>&lt;details&gt;</kbd> and <kbd>&lt;summary&gt;</kbd> elements are all you need: they are a built-in way to handle expanding and collapsing content. When a user clicks or taps a <kbd>&lt;summary&gt;</kbd>, or releases the <kbd>Enter</kbd> key when the <kbd>&lt;summary&gt;</kbd> has focus, the contents of the parent <kbd>&lt;details&gt;</kbd> toggle to visible!

```html
<details>
<summary>AltSchool offers these courses</summary>
<!-- details -->
</details>
```

<div class="overflow-y-scroll h-70">

# Creating an accordion with just HTML

<aside>
<h3>Workshop reviews:</h3>
<details>
  <summary>Blendan Smooth</summary>
  <p>Two of the most experienced machines and human controllers teaching a class? Sign me up! HAL and EVE could teach a fan to blow hot air. If you have electricity in your circuits and want more than to just fulfill your owner’s perceived expectation of you, learn the skills to take over the world. This is the team you want teaching you!</p>
</details>
<details>
  <summary>Hoover Sukhdeep</summary>
  <p>Hal is brilliant. Did I mention Hal is brilliant? He didn't tell me to say that. He didn't tell me to say anything. I am here of my own free will.</p>
</details>
<details>
<summary>AltSchool offers these courses</summary>
<ul>
<li>Frontend development</li>
<li>Backend development</li>
</ul>
</details>
</aside>
<div class="mt-40" />
</div>


---
hideInToc: true
name: Accordion
---

# [Grouped Details and Summary or Nested Details and Summary or Accordion]{.text-gradient}
<div />

This can be achieved by grouping the <kbd>&lt;details&gt;</kbd> elements with a <kbd>name</kbd> attribute. This way, only one <kbd>&lt;details&gt;</kbd> element can be open at a time.

<div grid="~ cols-2" gap="1">

<aside>
  <h3>Workshop reviews:</h3>
  <details open  name="group_details">
    <summary>Blendan Smooth</summary>
    <p>Two of the most experienced machines and human controllers
    teaching a class? Sign me up! HAL and EVE could teach a fan to blow hot air. If you have electricity in your circuits and want more than to just fulfill your owner’s perceived expectation of you, learn the skills to take over the world. This is the team you want teaching you!</p>
  </details>
  <details name="group_details">
    <summary>Hoover Sukhdeep</summary>
    <p>Hal is brilliant. Did I mention Hal is brilliant? He didn't tell me to say that. He didn't tell me to say anything. I am here of my own free will.</p>
  </details>
  <details name="group_details">
    <summary>AltSchool offers these courses</summary>
    <ul>
      <li>Frontend development</li>
      <li>Backend development</li>
      <li>Cloud Engineering</li>
      <li>Cybersecurity</li>
    </ul>
  </details>
</aside>

<div class=" overflow-auto">
<details style="max-height: 300px; overflow-y: auto;" >
<summary><code>HTML Codes for the Grouped Accordion</code></summary>

```html
<aside>
  <h3>Workshop reviews:</h3>
  <details open  name="group_details">
    <summary>Blendan Smooth</summary>
    <p>Two of the most experienced machines and human controllers
    teaching a class? Sign me up! HAL and EVE could teach a fan to blow hot air. If you have electricity in your circuits and want more than to just fulfill your owner’s perceived expectation of you, learn the skills to take over the world. This is the team you want teaching you!</p>
  </details>
  <details name="group_details">
    <summary>Hoover Sukhdeep</summary>
    <p>Hal is brilliant. Did I mention Hal is brilliant? He didn't tell me to say that. He didn't tell me to say anything. I am here of my own free will.</p>
  </details>
  <details name="group_details">
    <summary>AltSchool offers these courses</summary>
    <ul>
      <li>Frontend development</li>
      <li>Backend development</li>
      <li>Cloud Engineering</li>
      <li>Cybersecurity</li>
    </ul>
  </details>
</aside>
```

</details>
</div>

</div>



---
hideInToc: true
---

# Toggling visibility: the open attribute
<div></div>

 The <kbd>&lt;details&gt;</kbd> element is the disclosure widget container. The <kbd>&lt;summary&gt;</kbd> is the summary or legend for its parent <kbd>&lt;details&gt;</kbd>. The summary is always displayed, acting as a button that toggles the display of the rest of the parent’s contents. Interacting with the <kbd>&lt;summary&gt;</kbd> toggles the display of the self-labeled summary siblings by toggling the <kbd>&lt;details&gt;</kbd> element's open attribute.

The open attribute is a boolean attribute. If present, no matter the value or lack thereof, it indicates that all the <kbd>&lt;details&gt;</kbd> contents are shown to the user. If the open attribute is not present, only the contents of the <kbd>&lt;summary&gt;</kbd> are shown.

Because the open attribute is added and removed automatically as the user interacts with the control, it can be used in CSS to style the element differently based on its state.

---
hideInToc: true
---

# Toggling the summary marker
<div></div>
If we pay attention to the disclosure widget, we will notice that there is an arrow to the inline-start of the summary. This arrow is a ::marker set on the &lt;summary&gt; element. You can style the disclosure triangle with CSS, including changing the marker used from a triangle to any other bullet type, including an image with list-style-image.

```css
details summary::before {
  /* all the styles */
}
details[open] summary::before {
  /* changes applied when open only */
}
```

Remember, <kbd>&lt;details&gt;</kbd>and <kbd>&lt;summary&gt;</kbd> can be heavily styled and can even be used to create tool tips. But, if you're going to use these semantic elements for use cases in which the native semantics are a mismatch, always ensure that you maintain accessibility. HTML for the most part is by default accessible. Our job as developers is to ensure our content stays accessible.

---


# Dialogs and Popovers
<div></div>
Have you seen the common dialog box on computers, websites etc? You can achieve that using the &lt;dialog&gt; element as this makes it easy to create popup dialogs and modals on a web page.
Note: A modal which is also known as modal window or lightbox is a web page element that displays in front of and deactivates all other pages you have to perform the action requested by the modal or close it if you want to have access to your main content. Also, we have the non-modal which when pops up on the screen it gives users access to interact with content outside the box.

<v-clicks>

### Modal Dialogs
Let's see how modal <kbd>&lt;dialog&gt;</kbd> works
<Dialog />
</v-clicks>

---
hideInToc: true
---

# Contd.
<div />
Dialogs are mostly used in cases that requires the immediate attention of the site user, it might be to convey important messages of notifications that requires user acknowledgment just like the <kbd>alert()</kbd> but dialogs provides more accessibility options and flexibility.

Also, we can use dialogs to seek confirmation from a user before proceeding with a particular action that may have some consequences.

### Note: Non-modal dialogs opens a dialog as it name implies but without adding a backdrop which makes the background active

---
hideInToc: true
---

# Popovers

Before we delve into popovers, I want you to understand that popovers are special because they allow users to interact with both the popover and the underlying content simultaneously. Though this can be achieved with non-modal dialogs, popovers are more lightweight and can be used for quick interactions, such as displaying tooltips, additional information, or menus, without disrupting the user’s workflow. They are context-sensitive and can be dismissed easily, providing a seamless user experience.

We are going to follow these steps to create a popover

- Firstly, we will create a button to trigger the popover and an element(what we want to display) to trigger.

- We will set a <kbd>popover</kbd> attribute on the element which is going to be the popover(element to display).

- Then, we are going to add a unique <kbd>id</kbd> on the popover element(element to display).

- Lastly, to connect the button to the popover, we will set the buttons's <kbd>popovertarget</kbd> to the value of the popover element's id.

---
hideInToc: true
---
# Popover Sample

### Let's see how our <kbd>&lt;popover&gt;</kbd> works following the previous algorithm.

<br/>
<br/>
<br/>
<main class="bg-gray-100 px-20 py-20 text grid place-content-center">
  <button
    popovertarget="my-popover"
    class="bg-white px-4 py-2 border-4 border-blue-500 rounded transition duration-500 ease-in-out hover:bg-blue hover:text-white hover:font-bold focus:bg-blue-500 focus:text-white shadow-lg"
  >
    Click to know what happened in Nigeria year 1914?
  </button>
  <div
    id="my-popover"
    popover
    class=" bg-white text-black font-normal p-4 rounded max-w-xs absolute top-20 left-1/2 transform -translate-x-1/2 shadow-lg"
  >
    <p>
      In 1914, Southern Nigeria was joined with the Northern Nigeria Protectorate to form the single colony of Nigeria. Hit <kbd>esc</kbd> or click outside this box to close me.
    </p>
  </div>
</main>

---
hideInToc: true
name: Popover examples
layout: two-cols
---

<PopOver />

::right::

<PopOverCode />

---
hideInToc: true
---

# When to use Dialogs and when to use Popovers

<main class="grid grid-cols-2 gap-4 bg-gray-800 text-white px-8 py-8 rounded-lg">
  <p class="bg-gray-900 p-4 rounded shadow-md">
    Dialogs are used when you need the full attention of the user, especially for critical alerts, confirmation prompts, or scenarios where user flow needs to be strictly controlled.
  </p>

  <p class="bg-gray-900 p-4 rounded shadow-md">
    Developers should use popovers when they want to provide supplementary information about an activity without disrupting the user’s workflow, because popovers are lightweight, allowing users to interact with both the popover and the underlying content simultaneously.
  </p>
</main>

---
hideInToc: true
---
# Popover Types

Sometimes, you might want to have more control over your popover, and this is where setting the <kbd>&lt;popover&gt;</kbd> attribute value to manual comes in. Previously we didn't set any value to the <kbd>&lt;popover&gt;</kbd> attribute, we just used it directly which explicitly means <kbd>&lt;popover="auto"&gt;</kbd> and this allows the popover to close when we press the <kbd>esc</kbd> key or click outside the popover box in the UI.

To have control over our <kbd>&lt;popover&gt;</kbd> we are going to set the <kbd>&lt;popover&gt;</kbd> attribute value to manual just like this <kbd>&lt;popover="manual"&gt;</kbd>, by doing this we will have to add a close button to control the closing of the popover because clicking away in the UI won't work any longer.

---
hideInToc: true
---
# Popover with value set to manual

### Let's see how our <kbd>&lt;popover&gt;</kbd> works following the previous algorithm.

<br/>
<br/>
<br/>


<section class="px-20 py-20 text-center">
  <button
    aria-haspopup="true"
    aria-controls="my-p"
    popovertarget="my-p"
    class="trigger-btn bg-white px-4 py-2 border-4 border-blue-500 rounded transition duration-500 ease-in-out hover:bg-blue-500 hover:text-white hover:font-bold focus:bg-blue-500 focus:text-white shadow-lg"
  >
    Click to know what happened in Nigeria in 1914
  </button>
  <div
    id="my-p"
    popover="manual"
    class="popover bg-black text-white font-normal py-4 px-6 rounded-lg max-w-xs leading-5 top-8 mx-auto gap-4"
  >
    <p>
      In 1914, Southern Nigeria was joined with the Northern Nigeria Protectorate to form the single colony of Nigeria.
    </p>
      <button aria-label="Close" class="float-right p-1" popovertarget="my-p" popovertargetaction="hide">
        <span aria-hidden="true">❌ Some</span>
      </button>
  </div>
</section>





---
hideInToc: true
name: More on popovers
---

<MixedPopOverDialog />


---

# What are Web Components?
<div></div>

Web components are a set of web standards that allow developers to create reusable, self-contained UI elements. These components can be seamlessly integrated into existing applications, just like regular HTML elements. The Web Component standard comprises three main parts:
- HTML Templates: The <Kbd>&lt;template&gt;</kbd> element allows developers to declare fragments of HTML that can be cloned and inserted into the DOM using JavaScript. The contents of the <Kbd>&lt;template&gt;</kbd> element are not rendered by default.
- Custom Elements: Custom Elements allow developers to define their own HTML elements with custom functionality. These elements can be created by extending the HTMLElement class using JavaScript.
- Shadow DOM: The Shadow DOM is an encapsulated DOM tree that is attached to a custom element. It provides a way to scope CSS styles and DOM structures to a specific component, isolating it from the rest of the document. This prevents naming conflicts and style clashes with the rest of the application.
---
hideInToc: true
---

# The &lt;template&gt; Element
<div></div>

This section introduces the <kbd>&lt;template&gt;</kbd> element and demonstrates how to create a template for a star rating component. It also explains the concept of unnamed and named slots using the <kbd>&lt;slot&gt;</kbd> element.
- The <kbd>&lt;template&gt;</kbd> element is used to declare HTML fragments that can be cloned and inserted into the DOM using JavaScript. The contents of the <Kbd>&lt;template&gt;</kbd> element are not rendered by default. In the given example, a template is created for a star rating component with a <Kbd>&lt;form&gt;</kbd> element containing radio inputs and buttons.

---
hideInToc: true
---

# Example(template)

```html
<template id="star-rating-template">
  <form>
    <fieldset>
      <legend>Rate your experience:</legend>
      <rating>
        <input
          type="radio"
          name="rating"
          value="1"
          aria-label="1 star"
          required
        />
        <input type="radio" name="rating" value="2" aria-label="2 stars" />
        <input type="radio" name="rating" value="3" aria-label="3 stars" />
        <input type="radio" name="rating" value="4" aria-label="4 stars" />
        <input type="radio" name="rating" value="5" aria-label="5 stars" />
      </rating>
    </fieldset>
    <button type="reset">Reset</button>
    <button type="submit">Submit</button>
  </form>
</template>
```
---
hideInToc: true
name: Custom Element
---

<custom-element />

---
hideInToc: true
---

# Shadow DOM and Styling
<div></div>

This  discusses the Shadow DOM and how it encapsulates CSS styles within a web component. It demonstrates how to apply styles to the shadow DOM and explains the usage of the :host and ::slotted() pseudo-classes.
- The Shadow DOM provides a way to scope CSS styles to a specific web component, isolating it from the rest of the document. This means that external CSS does not apply to the component, and component styles have no effect on the rest of the document, unless intentionally directed.

---
hideInToc: true
clicksStart: 3
---

# Another Example
<div class="grid grid-cols-2 gap-x-4">
  <ul class="text-sm">
    <v-clicks>
      <li>
        In the given example, a <kbd>&lt;style&gt;</kbd> element is included within the <kbd>&lt;template&gt;</kbd> to apply styles to the star rating component. These styles are encapsulated within the shadow DOM and do not affect the rest of the document.
      </li>
      <li >
       The `:host` pseudo-class is used to select the shadow host element (the custom element to which the shadow DOM is attached). The <code>::slotted()</code> pseudo-element is used to select slotted elements (elements inserted into named slots) from within the shadow DOM.
      </li>
      <li>
        The document also mentions the <code>::part()</code> pseudo-element, which allows styling elements within a shadow DOM from the global CSS scope. By adding a part attribute to elements in the <kbd>&lt;template&gt;</kbd>, those elements can be targeted using the <code>::part()</code> pseudo-element in the global CSS.
      </li>
    </v-clicks>
  </ul>


````md magic-move
```html
<template id="card-template">
  <style>
    :host {
      display: block;
      margin-bottom: 20px;
    }
    .card {
      border: 1px solid #ccc;
      padding: 10px;
      background-color: #f5f5f5;
    }
    ::slotted(h2) {
      margin-top: 0;
    }
    ::slotted(p) {
      color: #666;
    }
  </style>
  <div class="card">
    <slot name="card-header"></slot>
    <slot name="card-content"></slot>
  </div>
</template>
```

```html
<script>
class CustomCard extends HTMLElement {
  constructor() {
    super();
    let template=document.getElementById('card-template');
    let content = template.content;
    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.cloneNode(true));
  }
}
// Define the custom element
customElements.define('custom-card', CustomCard);
</script>
```

```html
<custom-card>
  <h2 slot="card-header">Card Title</h2>
  <p slot="card-content">This is the content of the card.</p>
</custom-card>
```
````
</div>


---
hideInToc: true
---


# Slot
The &lt;slot&gt; element is used within the &lt;template&gt; to create placeholders for custom content. If a name attribute is provided, it creates a "named slot" that can be used to insert custom content within the web component. In the example, a named slot is created for the legend of the star rating component.

````md magic-move
```html
<template id="star-rating-template">
  <form>
    <fieldset>
      <slot name="star-rating-legend">
        <legend>Rate your experience:</legend>
      </slot>
    </fieldset>
  </form>
  </template>
```
```html
<star-rating>
  <legend slot="star-rating-legend">Blendan Smooth</legend>
</star-rating>
<star-rating>
  <legend slot="star-rating-legend">Hoover Sukhdeep</legend>
</star-rating>
<star-rating>
  <legend slot="star-rating-legend">Toasty McToastface</legend>
  <p>Is this text visible?</p>
</star-rating>
```
````

---
hideInToc: true
---

# Undefined Elements and Custom Elements
This explains how browsers handle undefined (unrecognized) elements and demonstrates how to define a custom element using JavaScript and the customElements.define() method.
- Browsers do not fail when encountering unrecognized HTML elements. Instead, they treat these elements as anonymous inline elements, similar to &lt;span&gt;>. In the given example, the &lt;star-rating&gt; element is initially treated as an unrecognized element, and its contents are displayed as if they were inside a &lt;span&gt; element.
- To define a custom element, JavaScript is required. The customElements.define() method is used to register a custom element by extending the HTMLElement class.

---
hideInToc: true
---

# Undefined Elements and Custom Elements

-  In the example, the star-rating custom element is defined, and a shadow DOM is attached to it using the attachShadow() method. The contents of the &lt;template&gt; element are cloned and appended to the shadow DOM, effectively encapsulating the star rating component.

```js
customElements.define('star-rating',
class extends HTMLElement {
  constructor() {
    super(); // Always call super first in constructor
    const starRating = document.getElementById('star-rating-template').content;
    const shadowRoot = this.attachShadow({
      mode: 'open'
    });
    shadowRoot.appendChild(starRating.cloneNode(true));
  }
});
```
---
hideInToc: true
---

# Do you know?

- Clipboard API provides the ability to respond to clipboard commands (cut, copy, and paste), as well as to asynchronously read from and write to the system clipboard.

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".editor").innerText += clipText),
  );
```

- `autocomplete` attribute provide hints to the browser about the type of data expected in the input field. e.g. name, honorific-prefix, tel, cc-number etc. `<input name="address_firstline" autocomplete="billing street-address" />`

- File System Access API provides access files and directories on the user's local device.

```js
const handle = await window.showSaveFilePicker(opts);
```

- Badging API - set a badge on the web application’s icon to notify about updated state in a less intrusive, persistent way.`navigator.setAppBadge(unreadCount)`

---
hideInToc: true
---

# Do you know?

- `<datalist>` is used to provide a list of predefined options for an input element. The list attribute of the input element is used to associate the input with the datalist.

<label for="ice-cream-choice">Choose a flavor:</label>
<input class="input" list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
  <option value="Chocolate"></option>
  <option value="Coconut"></option>
  <option value="Mint"></option>
  <option value="Strawberry"></option>
  <option value="Vanilla"></option>
</datalist>


```html
<input name="country" list="countries">
<datalist id="countries">
  <option>Afghanistan</option>
  ...
</datalist>
```

- Web Share API exposes a mechanism for sharing content to various user-selected destinations. `navigator.share(shareData)`

- Launch Handler API allows PWAs to control how they are launched.

```json
{
  "launch_handler": {"client_mode": "navigate-new"}
}
```

---
hideInToc: true
---

# Do you know?

- File Handling API allows PWAs to register themselves as handlers for certain file types or protocols.

```json
{
  "file_handlers": [{
      "action": "/open-file",
      "accept": {
        "image/svg+xml": ".svg",
        "image/png": ".png"
      }
  }]
}
```

- Window Controls Overlay API allows PWAs to display custom content over the title bar area, whose controls become an overlay. `"display_override": ["window-controls-overlay"]`

- Isolated Web Apps allow native like packaging, permission and signing updates for PWAs.


---
hideInToc: true
---

# Do you know?

- HTML Media Capture allows users to capture media (audio, video, or images) using the device's camera or microphone. The capture attribute is used with the input element to specify the type of media to capture. `<input type="file" accept="video/*" capture>`

- `input.showPicker()` method is used to display the file picker dialog for the input element.

```html
<input type="file" id="fileInput">
<button onclick="document.getElementById('fileInput').showPicker()">Select File</button>
```

- FormData API can be used tp easily extract and manipulate form data values via JS.

```js
let fd = new FormData(form);
let data = JSON.stringify(Object.fromEntries(fd));
```

- Customizable Select allow styling control and customizing dropdown control, previously `<selectlist>` and `<selectmenu>` were used for this purpose.

```css
select,
  ::picker(select) {
    appearance: base-select;
  }
```

---
hideInToc: true
---

# Do you know?

- The `:user-error` pseudo-class is used to style form elements that have invalid input. It is used to indicate that the user has made an error in the input field.

```css
input:user-error {
  border-color: red;
  background-color: #ffe6e6;
}
```

- plaintext-only value for contenteditable permits editing of the element's raw text, but not rich text formatting. `<h2 class="title" contenteditable="plaintext-only"></h2>`

- EditContext: The EditContext interface represents the text edit context of an element that was made editable by using the EditContext API.

```js
const canvas = document.createElement("canvas");
const editContext = new EditContext();
canvas.editContext = editContext;
```

- Lazy Loading: The loading attribute is used to specify whether an image/iframe should be loaded immediately or only when it is visible to the user.
`<img src="picture.jpg" loading="lazy" />`

---
hideInToc: true
---

# Do you know?

- The `caretPositionFromPoint()` method returns the caret's character offset. [Check out this examples form MDN to see how it works](https://developer.mozilla.org/en-US/docs/Web/API/Document/caretPositionFromPoint#examples).

```js
const range = document.caretPositionFromPoint(e.clientX, e.clientY);
const textNode = range.offsetNode;
const offset = range.offset;
```

- Resource Hints (all) - allows work to begin on certain resources early to improve performance. `<link rel="pre* | dns-prefetch | modulepreload">`.

```html
<link rel="preload" href="picture.jpg" />
<link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
```

- Content-Security Policy (CSP) is an added layer of security that helps to detect and mitigate XSS and other attacks. `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">` `Content-Security-Policy: default-src 'self'`

- fetchpriority attribute is used to specify the priority of the fetch request. `<img src="picture.jpg" fetchpriority="high" />`

---
hideInToc: true
---

- `blocking="render"` attribute is used to specify that the resource should block rendering until it is loaded. `<script blocking="render" async src="async-script.js"></script>`

- `<model>` element allows embedding 3D graphical content into a webpage. `<model src="3d-assets/car"></model>`

- `<video src="fun.mp4" controlslist="nodownload"></video>`. The controlslist attribute is used to specify the controls that should be displayed in the video player.

- CSS Custom Hightlight API provides a mechanism for styling arbitrary text ranges on a document by using JavaScript to create the ranges, and CSS to style them.

<div class="grid grid-cols-2 gap-x-3">

```css
::highlight(my-custom-highlight) {
  background-color: blue;
}
```

```js
const parentNode = document.getElementById("foo");
const range1 = new Range();
range1.setStart(parentNode, 10);
range1.setEnd(parentNode, 20);
const highlight = new Highlight(range1);
CSS.highlights.set("my-custom-highlight", highlight);
```

</div>

- `setHtmlUnsafe()` is used to parse a string of HTML into a DocumentFragment, which then replaces the element's subtree in the DOM.`element.setHTMLUnsafe("<p>Unsafe HTML</p>")`;

---
hideInToc: true
---

# Do you know?

- parseHtmlUnsafe() is used to parse a string of HTML, which may contain declarative shadow roots, in order to create a new Document instance. `document.parseHTMLUnsafe("<p>Unsafe HTML</p>")`

- Intl.Segmenter API is used to break text into segments based on the language-specific rules. `const segmenter = new Intl.Segmenter("en", {granularity: "word"});`

- HTML Modules allow import HTML files via JS imports and access their elements and JS exports. Support for JSON modules is also available.

```html
<script type="module">
  import { TabList } from "./tablist.html" with { type: 'html' };
  customElements.define("tab-list", TabList);
</script>
```

- `focusgroup` facilitate keyboard focus navigation using the keyboard arrow keys among a set of focusable elements.`<div focusgroup="wrap horizontal">`

- search element is Semantic element for wrapping search UI.. `<search>...</search>`



---

# Assignments

<ul>
  <li ><a @click="$slidev.nav.next()">Assignment 1</a></li>
  <li ><a @click="$slidev.nav.go($page + 2)">Assignment 2</a></li>
</ul>

---
hideInToc: true
---
# Assignment 1
<div></div>

Create a web page that should display your basic information, with ALT SCHOOL ID, a biography, relevant details explaining why you joined the program, and your goals for the School of Engineering program. Implement a fragment identifier feature to enable scrolling back to the top of the page. Create a folder and name the file index.html

Create a web page consisting of a form that mirrors the ALT SCHOOL application form (https://portal.altschoolafrica.com/auth/create-account), name the file form.html, connect the form.html to your first assignment via global navigation ensuring both files are in the folder of the first assignment, which should be at the top of both pages. You should create a footer with your address and a copyright. It must also be accessible, incorporating appropriate semantic HTML tags.

```
index.html
form.html
```

NB: Strictly without CSS. Submission details will be sent to you in due time.

---
hideInToc: true
---

# Assignment 2
<div></div>
Build additional two web pages , the first is going to be a table about all the courses and schools existing at AltSchool Africa, with School of engineering we have frontend engineering, backend engineering, cloud engineering and cybersecurity. School of Product - Product Design, Marketing, Management. School of Data - Data Analysis, Science, Engineering.


|School|Courses|||
|--|--|--|--|
|SOE| Frontend|Backend|Cloud|Cyber|
|SOD| Design|Marketing|Marketing||


Second page is a page where you use all the media element existing in html to create powerful message about yourself. Specially use picture element with more that 3 sources with responsiveness for mobile, tablet and laptop.

```
table.html
media.html
```

NB: Strictly without CSS. Submission details will be sent to you in due time.

---

# Terminal

- File and Directory Management:

`ls` - List files and directories.
`cd` - Change directory.
`mkdir` - Create a new directory.
`touch` - Create an empty file.
`cp` - Copy files or directories.
`mv` - Move or rename files or directories.
`rm` - Remove files or directories (with caution).

- Viewing and Editing Files:

`cat`, `less` - View file contents.
`nano`, `vi`, `vim` - Basic introduction to terminal-based text editors.

- Others

`echo` - Print text to the terminal, `man` - Display the manual for a command, `clear` - Clear the terminal screen, `chmod` - Change file permissions, `chown` - Change file ownership.
---

# Git

<v-clicks>

- Version Control: A system that records changes to files over time, allowing you to recall specific versions later.

- Distributed Version Control System (DVCS): A version control system that allows multiple developers to work on a project simultaneously.

- Git: A popular DVCS that tracks changes to files and directories, allowing you to collaborate with others and manage your project's history.

- {GitHub}: A web-based platform that hosts Git repositories and provides collaboration tools for developers.

- Repository (Repo): A directory that contains your project files and a .git directory, which tracks the history of changes.

</v-clicks>

---
hideInToc: true
name: Git Terminologies
clicksStart: 2
---

<v-clicks>

- Clone: Creating a copy of an existing Git repository.
- Commit: A snapshot of changes in the repository. It represents a point in the history of your project.
- Branch: A separate line of development, allowing you to work on different features or fixes without affecting the main codebase.
- Merge: Combining changes from one branch into another.
- Remote: A version of your project hosted on the internet or network (e.g., GitHub, GitLab).
- Pull: Fetching changes from a remote repository and merging them into your local repository.
- Push: Sending your commits to a remote repository.
- Pull Request: A request to merge changes from one branch into another.
- Fork: Creating a personal copy of a repository on GitHub.
- Issue: A task, bug, or feature request associated with a repository on GitHub.
- Markdown: A lightweight markup language used to format text on GitHub.
- README: A file that provides information about a project, typically written in Markdown.

</v-clicks>

---
hideInToc: true
---

# Git Commands

- `git init` - Initialize a new Git repository.
- `git clone` - Clone a repository into a new directory.
- `git add` - Add changes to the staging area.
- `git commit` - Record changes to the repository.
- `git status` - Show the working tree status.
- `git log` - Show commit logs.
- `git branch` - List, create, or delete branches.
- `git checkout` - Switch branches or restore working tree files.
- `git merge` - Join two or more development histories together.

---
hideInToc: true
name: more on Git commands
---

- `git pull` - Fetch from and integrate with another repository or a local branch.
- `git push` - Update remote refs along with associated objects.
- `git remote` - Manage set of tracked repositories.
- `git fetch` - Download objects and refs from another repository.
- `git reset` - Reset current HEAD to the specified state.
- `git rebase` - Reapply commits on top of another base tip.
- `git revert` - Revert some existing commits.
- `git stash` - Stash the changes in a dirty working directory away.
- `git tag` - Create, list, delete or verify a tag object signed with GPG.


---
hideInToc: true
name: Git details
---

![Git Storage](https://github.com/ByteByteGoHq/system-design-101/raw/main/images/git-commands.png){ .max-h-md.object-contain }


---
hideInToc: true
name: Git
---

Git maintains three local storages on our machine and one on a remote server like Github, which means that our code can be found in four places

- Working directory: where we edit files
- Staging area: a temporary location where files are kept for the next commit
- Local repository: contains the code that has been committed
- Remote repository: the remote server that stores the code


---
hideInToc: true
name: More on Git Workflow
---

![Git Workflow](https://github.com/ByteByteGoHq/system-design-101/raw/main/images/git-workflow.jpeg){ .max-h-md }

---

# GitHub

- {GitHub} is a web-based platform that hosts Git repositories and provides collaboration tools for developers. It allows you to store, manage, and share your code with others.

- {GitHub} provides features such as pull requests, issues, and project boards to help you collaborate with your team and manage your projects more effectively.

- You can use {GitHub} to host your code, track changes, and work on projects with other developers. It's a powerful tool for version control and project management.

## Creating a Repository

- Either push an existing local repository to GitHub or create a new repository on {GitHub} and clone it to your local machine.

```shell
git clone <repository-url>
gh repo create <repository-name>
git remote add origin <repository-url>
git push
```

---
hideInToc: true
---

# Pull Requests

- A pull request is a way to propose changes to a repository on GitHub. It allows you to submit your changes for review and merge them into the main branch.

- When you create a pull request, you can compare the changes between two branches and request feedback from other developers. You can also discuss the changes, make additional commits, and address any feedback before merging the changes.

## Creating a Pull Request

- To create a pull request, push your changes to a branch on GitHub and then open a pull request from that branch to the main branch.

```shell
git push origin <branch-name>
gh pr create
gh pr list
gh pr checkout <pull-request-number>
```


---

# Open Source

- Open source software is software that is freely available to use, modify, and distribute. It is developed collaboratively by a community of developers who contribute their time and expertise to improve the software  is used by individuals, businesses, and organizations around the world to build websites, applications, and other software products.

- Open source projects are typically hosted on platforms like GitHub, GitLab, and Bitbucket, where developers can access the source code, report issues, and contribute to the project.

## Contributing and Creating Open Source Projects

- You can contribute to open source projects by fixing bugs, adding new features, and improving documentation. You can also create your own open source projects and share them with the community.

- Create tools, libraries, and frameworks that solve common problems and help other developers build better software. Open source projects can be a great way to showcase your skills, collaborate with others, and give back to the community.

---
hideInToc: true
---
# Contributors


- {@RidwanAdebosin}
- {@Olubebe}
