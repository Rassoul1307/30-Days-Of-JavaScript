// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
// Regular Expressions
// Creating a pattern with RegExp Constructor
// without flag
// let pattern = 'love'
// let regEx = new RegExp(pattern)

// Declaring regular expression with global flag and case insensitive flag.
// let pattern = 'love'
// let flag = 'gi'
// let regEx = new RegExp(pattern, flag)

// Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor
// let regEx = new RegExp('love','gi')

// Creating a pattern without RegExp Constructor
// Declaring regular expression with global flag and case insensitive flag
// let regEx= /love/gi

// The above regular expression is the same as the one which we created with RegExp constructor
// let regEx= new RegExp('love','gi')



//RegExpp Object Methods
// Testing for a match
// test():Tests for a match in a string. It returns true or false.
// const str = 'I love JavaScript'
// const pattern = /love/
// const result = pattern.test(str)
// console.log(result) 

// Array containing all of the match
// const str = 'I love JavaScript'
// const pattern = /love/
// const result = str.match(pattern)
// console.log(result)

// const str = 'I love JavaScript'
// const pattern = /love/g
// const result = str.match(pattern)
// console.log(result)


// search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
// const str = 'I love JavaScript'
// const pattern = /love/g
// const result = str.search(pattern)
// console.log(result)


// Replacing a substring
// const txt = 'Python is the most beautiful language that a human begin has ever created.\
// I recommend python for a first programming language'

// matchReplaced = txt.replace(/Python|python/, 'JavaScript')
// console.log(matchReplaced)

// const txt = 'Python is the most beautiful language that a human begin has ever created.\
// I recommend python for a first programming language'

// matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
// console.log(matchReplaced)


// const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
// T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
// p%e%o%ple.\
// I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
// D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

// matches = txt.replace(/%/g, '')
// console.log(matches)  



// Square Bracket
// const pattern = '[Aa]pple' // this square bracket means either A or a
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
// const matches = txt.match(pattern)

// console.log(matches)  

// const pattern = /[Aa]pple/g // this square bracket means either A or a
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
// const matches = txt.match(pattern)

// console.log(matches)  

// const pattern = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
// const matches = txt.match(pattern)

// console.log(matches)  

// Escape character(\) in RegExp
// const pattern = /\d/g  // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt. match(pattern)

// console.log(matches)  // ["1", "2", "2", "0", "2", "0"], this is not what we want

// const pattern = /\d+/g  // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt. match(pattern)

// console.log(matches)  // ["12", "2020"], this is not what we want


// One or more times(+)
// const pattern = /\d+/g  // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt. match(pattern)
// console.log(matches)  // ["12", "2020"], this is not what we want


// Period(.)
// const pattern = /[a]./g  // this square bracket means a and . means any character except new line
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ["an", "an", "an", "a ", "ar"]

// const pattern = /[a].+/g  // . any character, + any character one or more times 
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ['and banana are fruits']


// Zero or more times(*)
// const pattern = /[a].*/g  //. any character, + any character one or more times 
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ['and banana are fruits']


// Quantifier in RegExp
// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\\b\w{4}\b/g  //  exactly four character words
// const matches = txt.match(pattern)
// console.log(matches)  //['This', 'made', '2019']

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
// const matches = txt.match(pattern)
// console.log(matches)  //['This', 'made']

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\d{4}/g  // a number and exactly four digits
// const matches = txt.match(pattern)
// console.log(matches)  // ['2019']

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\d{1,4}/g   // 1 to 4
// const matches = txt.match(pattern)
// console.log(matches)  // ['6', '2019']


// Cart ^
// Starts with
// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /^This/ // ^ means starts with
// const matches = txt.match(pattern)
// console.log(matches)  // ['This']

// Negation
// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
// const matches = txt.match(pattern)
// console.log(matches)  // ["6", "2019"]


// Exact match
// let pattern = /^[A-Z][a-z]{3,12}$/;
// let name = 'Asabeneh';
// let result = pattern.test(name)

// console.log(result) // true
