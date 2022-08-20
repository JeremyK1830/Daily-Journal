import {getJournalEntries} from './entries.js'

    const journalEntry = [ 
    {
        id: 2,
        date: 8/5/2022,
        concept: "Complex Flexbox",
        entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain. I hate Steve.",
        mood: "Discouraged"
    },
    {
        id: 3,
        date: 8/8/2022,
        concept: 'CSS and Flexbox',
        entry: "Flexbox and css in general is very nitpicky and I need to practice with ",
        mood: "Neutral" 
    },
    {
        id: 4,
        date: 8/11/2022,
        concept: 'Beginning Javascript',
        entry: "Javascript is very difficult for me, but I will keep on watching the last class video and doing research.",
        mood: "Excited" 
    },
    {
        id: 5,
        date: 8/16/2022,
        concept: 'Javascript functions and For loops',
        entry: "Functions and for loops have been a bit confusing, but after the first part of the restaurant project for loops are much easier.",
        mood: "Overwhelmed"   
    }
]


let journalHTML ='';

const elem = document.createElement('div');

const jt = (array) => {
    for (const entry of array) {
        journalHTML += `
        <p class="entry">
        <span class="entryNumber">Entry #${entry.id}</span>
        <span class="date">Date: ${entry.date}</span>
        <span class="mood">Mood: ${entry.mood}</span>
        <span class="concespant">Concepts: ${entry.concept}</span>
        <span class="entryText">Entry: ${entry.entry}</span>
        </p>`
    }
}

for (const jt of journalEntry ) {
    {
        console.log(jt.entry);
    }
}

for (const jt of journalEntry ) {
    {
        console.log(jt.concept);
    }
}

for (const jt of journalEntry ) {
    if (jt.id % 3 !==0) {
        console.log(jt.entry);
    }
}

const displayEntries = () => `{
    const journalEntry = 
}`

console.log(journalEntry)
document.getElementById('newEntry').innerHTML = 'New Entry';

