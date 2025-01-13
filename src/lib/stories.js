export let stories = [
     {id:"1",message: "The greatest story ever.", img:"/wave.jpeg",choices:[{id:"2",text:"Begin"}]},
    {id:"2",message: "What will be your path?", img:"/choice.jpeg",choices:[{id:"3",text:"Left"},{id:"4",text:"Right"}]},
     {id:"3",message: "Wrong! Try again!", img:"/choice.jpeg",choices:[{id:"4",text:"Other right"},{id:"4",text:"Right"}]},
     {id:"4",message: "🤣🤣🤣🤣🤣", html: '<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="360" src="/notrick.gif" width="480"></iframe></div>',choices:[{id:"1",text:"Reset!"}]} ]
