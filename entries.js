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
export const getJournalEntries = () => {
    const copyOfEntries = journalEntry.map(entry => ({...entry}))
    return copyOfEntries
  }